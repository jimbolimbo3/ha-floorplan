<script setup lang="ts">
import type { FloorplanConfig, EntityState, CameraColors, BinaryColors } from '../../types/floorplan';
import { computed, ref } from 'vue';

const props = defineProps<{
    config: FloorplanConfig,
    entityStates: Record<string, EntityState>,
}>();

const emit = defineEmits<{
    (e: 'entity-click', entityId: string, type: string): void
    (e: 'entity-long-press', entityId: string): void
}>();

const hasImage = computed(() => !!props.config.imageBase64);

// Long Press Logic
const longPressTimer = ref<number | null>(null);
const isLongPress = ref(false);
const pointerStart = ref({ x: 0, y: 0 });

function handlePointerDown(event: PointerEvent, entity: any) {
    if (event.button !== 0) return; // Only left click
    isLongPress.value = false;
    pointerStart.value = { x: event.clientX, y: event.clientY };

    longPressTimer.value = window.setTimeout(() => {
        isLongPress.value = true;
        emit('entity-long-press', entity.entityId);
    }, 500); // 500ms threshold
}

function handlePointerUp(event: PointerEvent, entity: any) {
    if (longPressTimer.value) {
        clearTimeout(longPressTimer.value);
        longPressTimer.value = null;
    }

    if (!isLongPress.value) {
        // Check if moved significantly (drag check)
        const dx = Math.abs(event.clientX - pointerStart.value.x);
        const dy = Math.abs(event.clientY - pointerStart.value.y);
        if (dx < 10 && dy < 10) {
            emit('entity-click', entity.entityId, entity.type);
        }
    }
    isLongPress.value = false;
}

function handlePointerLeave() {
    if (longPressTimer.value) {
        clearTimeout(longPressTimer.value);
        longPressTimer.value = null;
    }
}

function getEntityValues(entity: any) {
    const state = props.entityStates[entity.entityId] || { state: 'off' };
    const { style } = entity;

    if (entity.type === 'sensor') {
        return {
            color: getSensorTextColor(state.state, getSensorDeviceClass(entity, state)),
            opacity: 1
        };
    }

    // Handle camera entities with state-specific colors
    if (entity.type === 'camera') {
        let color: string;
        const colors = style.colors as CameraColors;
        const defaultIdleColor = '#6b7280'; // Gray
        const defaultRecordingColor = '#ef4444'; // Red
        const defaultStreamingColor = '#3b82f6'; // Blue

        if (state.state === 'recording') {
            color = colors.recordingColor || defaultRecordingColor;
        } else if (state.state === 'streaming') {
            color = colors.streamingColor || defaultStreamingColor;
        } else {
            color = colors.idleColor || defaultIdleColor;
        }

        return {
            color,
            opacity: style.onOpacity
        };
    }

    // Handle other entity types
    const colors = style.colors as BinaryColors;
    if (state.state == 'off') {
        return {
            color: colors.offColor,
            opacity: style.offOpacity
        };
    }

    let color = state.color || colors.onColor;
    let opacity = style.onOpacity;

    if (state.brightness !== undefined) {
        // Map brightness 0-255 to 0-1, multiplied by the configured max opacity
        opacity = (state.brightness / 255) * style.onOpacity;
    }

    return { color, opacity };
}

function getEntityPositionStyle(entity: any) {
    const { style, x, y } = entity;
    return {
        left: `${x}%`,
        top: `${y}%`,
        width: `${style.width}%`,
        height: `${style.height}%`,
        transform: `translate(-50%, -50%) rotate(${style.rotation}deg)`,
        position: 'absolute' as const,
        zIndex: 1
    };
}

function getEntityVisualStyle(entity: any) {
    const { color, opacity } = getEntityValues(entity);
    const { shape } = entity;
    const state = props.entityStates[entity.entityId] || { state: 'off' };

    if (entity.type === 'sensor') {
        return {
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            opacity: 0,
            borderRadius: '0',
            cursor: 'pointer',
            boxShadow: 'none',
            transition: 'none'
        };
    }

    // Ensure minimum visibility for low brightness if ON
    // If Opacity is 0.8, and brightness is 1/255, we want at least say 0.1 or 0.2
    let effectiveOpacity = opacity;
    if (state.state == 'on' && state.brightness !== undefined) {
        // Map 0-255 brightness to range [0.3, style.onOpacity]
        const minOpacity = 0.3;
        const maxOpacity = entity.style.onOpacity;
        const brightnessFactor = state.brightness / 255;
        effectiveOpacity = minOpacity + (brightnessFactor * (maxOpacity - minOpacity));
    }

    return {
        width: '100%',
        height: '100%',
        backgroundColor: color,
        opacity: effectiveOpacity,
        borderRadius: shape === 'circle' ? '50%' : '4px',
        cursor: 'pointer',
        boxShadow: state.state == 'on' ? `0 0 15px ${color}` : 'none',
        transition: 'all 0.3s ease'
    };
}

function getLabelStyle(entity: any) {
    const { offsetX, offsetY, color } = entity.labelConfig || {};
    const state = props.entityStates[entity.entityId];
    const labelOffsetX = entity.type === 'sensor' ? 0 : offsetX || 0;
    const labelOffsetY = entity.type === 'sensor' ? 0 : offsetY || 0;
    return {
        transform: `translate(-50%, -50%) translate(${labelOffsetX}%, ${labelOffsetY}%)`,
        color: entity.type === 'sensor' ? getSensorTextColor(state?.state, getSensorDeviceClass(entity, state)) : color || '#ffffff',
        pointerEvents: 'auto' as const,
        cursor: 'pointer' as const
    };
}

function getSensorDeviceClass(entity: any, state?: EntityState) {
    if (state?.deviceClass) return state.deviceClass;
    if (entity.sensorDeviceClass) return entity.sensorDeviceClass;
    if (state?.unit === 'dB') return 'sound_pressure';
    if (state?.unit === 'ppm') return 'carbon_dioxide';
    if (['Mbps', 'Mbit/s', 'MB/s', 'kB/s'].includes(state?.unit || '')) return 'data_rate';
    if (['GB', 'MB', 'kWh'].includes(state?.unit || '')) return state?.unit === 'kWh' ? 'energy' : 'data_size';
    if (state?.unit === 'dBm') return 'signal_strength';
    if (state?.unit === '%') return 'humidity';
    if (state?.unit === 'W') return 'power';
    if (state?.unit === 'lx') return 'illuminance';
    if (state?.unit === 'µg/m³') return 'pm25';
    if (state?.unit === 'V') return 'voltage';
    if (state?.unit === 'A') return 'current';
    return 'temperature';
}

function getSensorTextColor(value?: string, deviceClass = 'temperature') {
    if (deviceClass === 'connectivity') {
        const normalizedValue = String(value || '').toLowerCase();
        if (['on', 'online', 'connected', 'up', 'true'].includes(normalizedValue)) return '#22c55e';
        if (['off', 'offline', 'disconnected', 'down', 'false', 'unavailable', 'unknown'].includes(normalizedValue)) return '#ef4444';
        return '#f59e0b';
    }

    const numberValue = Number.parseFloat(String(value || '').replace(',', '.'));
    if (!Number.isFinite(numberValue)) return '#ffffff';

    if (deviceClass === 'humidity') {
        if (numberValue < 30) return '#f59e0b';
        if (numberValue <= 60) return '#22c55e';
        if (numberValue <= 70) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'pressure') {
        if (numberValue < 1000) return '#38bdf8';
        if (numberValue <= 1025) return '#22c55e';
        return '#f59e0b';
    }

    if (deviceClass === 'carbon_dioxide') {
        if (numberValue < 800) return '#22c55e';
        if (numberValue < 1200) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'sound_pressure') {
        if (numberValue < 50) return '#22c55e';
        if (numberValue < 65) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'data_rate') {
        if (numberValue < 10) return '#ef4444';
        if (numberValue < 100) return '#f59e0b';
        return '#22c55e';
    }

    if (deviceClass === 'data_size') {
        if (numberValue < 80) return '#22c55e';
        if (numberValue < 120) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'signal_strength') {
        if (numberValue <= -80) return '#ef4444';
        if (numberValue <= -65) return '#f59e0b';
        return '#22c55e';
    }

    if (deviceClass === 'battery') {
        if (numberValue < 20) return '#ef4444';
        if (numberValue < 50) return '#f59e0b';
        return '#22c55e';
    }

    if (deviceClass === 'power') {
        if (numberValue < 500) return '#22c55e';
        if (numberValue < 1500) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'energy') {
        if (numberValue < 5) return '#22c55e';
        if (numberValue < 15) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'illuminance') {
        if (numberValue < 100) return '#38bdf8';
        if (numberValue < 800) return '#22c55e';
        return '#f59e0b';
    }

    if (deviceClass === 'pm25') {
        if (numberValue < 15) return '#22c55e';
        if (numberValue < 35) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'volatile_organic_compounds') {
        if (numberValue < 300) return '#22c55e';
        if (numberValue < 1000) return '#f59e0b';
        return '#ef4444';
    }

    if (deviceClass === 'voltage') {
        if (numberValue < 210 || numberValue > 245) return '#ef4444';
        if (numberValue < 220 || numberValue > 240) return '#f59e0b';
        return '#22c55e';
    }

    if (deviceClass === 'current') {
        if (numberValue < 5) return '#22c55e';
        if (numberValue < 12) return '#f59e0b';
        return '#ef4444';
    }

    if (numberValue < 18) return '#38bdf8';
    if (numberValue < 24) return '#22c55e';
    if (numberValue < 28) return '#f59e0b';
    return '#ef4444';
}

function getEntityLabel(entity: any) {
    const state = props.entityStates[entity.entityId];
    if (entity.type === 'sensor' && state?.displayValue) {
        return state.displayValue;
    }
    if (entity.type === 'sensor' && state?.state) {
        return state.state;
    }
    return entity.label;
}

function getPointsString(points?: { x: number, y: number }[]) {
    if (!points) return '';
    return points.map(p => `${p.x} ${p.y}`).join(',');
}

function hasLightZone(entity: any) {
    return ['light', 'media_player', 'camera'].includes(entity.type);
}

function isRecording(entity: any) {
    const state = props.entityStates[entity.entityId];
    return entity.type === 'camera' && state?.state === 'recording';
}

</script>

<template>
    <div class="viewer-area">
        <div v-if="!hasImage" class="empty-state">
            <p>No floorplan loaded. Go to Editor to set up.</p>
        </div>

        <div v-else class="canvas-container">
            <div class="image-wrapper">
                <img :src="props.config.imageBase64" alt="Floorplan Base" draggable="false" />

                <svg class="overlay-layer" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <radialGradient v-for="entity in props.config.entities.filter(hasLightZone)" :key="'grad-' + entity.id"
                            :id="'grad-' + entity.id" gradientUnits="userSpaceOnUse" :cx="entity.x" :cy="entity.y"
                            :r="entity.style.gradientRadius">
                            <stop offset="0%" :stop-color="getEntityValues(entity).color"
                                :stop-opacity="Math.max(0.3, getEntityValues(entity).opacity)" />
                            <stop offset="100%" :stop-color="getEntityValues(entity).color" stop-opacity="0" />
                        </radialGradient>
                    </defs>
                    <polygon v-for="entity in props.config.entities.filter(hasLightZone)" :key="'poly-' + entity.id"
                        :points="getPointsString(entity.points)"
                        :fill="props.entityStates[entity.entityId]?.shouldLightUp ? `url(#grad-${entity.id})` : 'transparent'"
                        stroke="none" style="pointer-events: none; transition: fill-opacity 0.3s ease;" />
                </svg>

                <div v-for="entity in props.config.entities" :key="entity.id" class="interactive-entity"
                    :style="getEntityPositionStyle(entity)" @pointerdown="handlePointerDown($event, entity)"
                    @pointerup="handlePointerUp($event, entity)" @pointerleave="handlePointerLeave()"
                    :title="entity.label">
                    <div class="entity-shape" :class="{ 'camera-recording': isRecording(entity) }"
                        :style="getEntityVisualStyle(entity)"></div>
                    <div v-if="entity.labelConfig.show" class="entity-label" :style="getLabelStyle(entity)"
                        @pointerdown.stop="handlePointerDown($event, entity)"
                        @pointerup.stop="handlePointerUp($event, entity)" @pointerleave.stop="handlePointerLeave()">
                        {{ getEntityLabel(entity) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Styles moved to parent component to ensure Shadow DOM injection in CE mode */
</style>
