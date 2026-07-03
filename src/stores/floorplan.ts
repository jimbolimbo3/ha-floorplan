import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { FloorplanConfig, EntityConfig, EntityState, SensorDeviceClass } from '../types/floorplan';
import { v4 as uuidv4 } from 'uuid';
import defaultConfig from '../default_config';

export const useFloorplanStore = defineStore('floorplan', () => {
    // Initial state from default config
    const config = ref<FloorplanConfig>({
        ...defaultConfig,
        id: defaultConfig.id || uuidv4(),
        entities: defaultConfig.entities || []
    } as FloorplanConfig);

    const selectedEntityId = ref<string | null>(null);

    // Simulation state for experimentation (entity_id -> state)
    const entityStates = ref<Record<string, EntityState>>({});

    const entities = computed(() => config.value.entities);
    const selectedEntity = computed(() =>
        config.value.entities.find(e => e.id === selectedEntityId.value)
    );

    function setBaseImage(base64: string) {
        config.value.imageBase64 = base64;
    }

    function getSensorDefaults(sensorDeviceClass: SensorDeviceClass = 'temperature'): EntityState {
        const defaults: Record<SensorDeviceClass, EntityState> = {
            temperature: { state: '21.0', unit: '°C', deviceClass: 'temperature', displayValue: '21.0 °C' },
            humidity: { state: '45', unit: '%', deviceClass: 'humidity', displayValue: '45 %' },
            pressure: { state: '1013', unit: 'hPa', deviceClass: 'pressure', displayValue: '1013 hPa' },
            carbon_dioxide: { state: '650', unit: 'ppm', deviceClass: 'carbon_dioxide', displayValue: '650 ppm' },
            sound_pressure: { state: '42', unit: 'dB', deviceClass: 'sound_pressure', displayValue: '42 dB' },
            data_rate: { state: '940', unit: 'Mbps', deviceClass: 'data_rate', displayValue: '940 Mbps' },
            data_size: { state: '64', unit: 'GB', deviceClass: 'data_size', displayValue: '64 GB' },
            signal_strength: { state: '-58', unit: 'dBm', deviceClass: 'signal_strength', displayValue: '-58 dBm' },
            connectivity: { state: 'online', deviceClass: 'connectivity', displayValue: 'Online' },
            battery: { state: '86', unit: '%', deviceClass: 'battery', displayValue: '86 %' },
            power: { state: '420', unit: 'W', deviceClass: 'power', displayValue: '420 W' },
            energy: { state: '4.8', unit: 'kWh', deviceClass: 'energy', displayValue: '4.8 kWh' },
            illuminance: { state: '360', unit: 'lx', deviceClass: 'illuminance', displayValue: '360 lx' },
            pm25: { state: '8', unit: 'µg/m³', deviceClass: 'pm25', displayValue: '8 µg/m³' },
            volatile_organic_compounds: { state: '180', unit: 'µg/m³', deviceClass: 'volatile_organic_compounds', displayValue: '180 µg/m³' },
            voltage: { state: '230', unit: 'V', deviceClass: 'voltage', displayValue: '230 V' },
            current: { state: '2.1', unit: 'A', deviceClass: 'current', displayValue: '2.1 A' }
        };
        return defaults[sensorDeviceClass];
    }

    function addEntity(type: EntityConfig['type'] = 'light', x = 50, y = 50) {
        const id = uuidv4();
        const entityDomain = type === 'sensor' ? 'sensor' : type;
        const sensorDeviceClass = type === 'sensor' ? 'temperature' : undefined;
        const newEntity: EntityConfig = {
            id,
            entityId: `${entityDomain}.${id.substring(0, 4)}`,
            label: 'New Entity',
            type,
            sensorDeviceClass,
            x,
            y,
            points: [],
            shape: 'circle',
            style: {
                width: type === 'sensor' ? 0 : 5, // % relative to container width
                height: type === 'sensor' ? 0 : 5,
                colors: type === 'camera'
                    ? {
                        idleColor: '#6b7280',
                        recordingColor: '#ef4444',
                        streamingColor: '#3b82f6'
                    }
                    : {
                        onColor: type === 'sensor' ? '#38bdf8' : '#facc15', // sky-400 / yellow-400
                        offColor: '#94a3b8', // slate-400
                    },
                onOpacity: 0.8,
                offOpacity: 0.3,
                gradientRadius: type === 'sensor' ? 0 : 30,
                rotation: 0,
            },
            labelConfig: {
                show: true,
                offsetX: 0,
                offsetY: 10, // px or %? Let's assume px for offset relative to center or bottom
                color: '#ffffff',
            }
        };
        config.value.entities.push(newEntity);
        selectedEntityId.value = id;
        entityStates.value[newEntity.entityId] = type === 'sensor'
            ? getSensorDefaults(newEntity.sensorDeviceClass)
            : { state: 'off', brightness: 255 };
    }

    function removeEntity(id: string) {
        const index = config.value.entities.findIndex(e => e.id === id);
        if (index !== -1) {
            config.value.entities.splice(index, 1);
            if (selectedEntityId.value === id) {
                selectedEntityId.value = null;
            }
        }
    }

    function updateEntity(id: string, updates: Partial<EntityConfig>) {
        const entity = config.value.entities.find(e => e.id === id);
        if (entity) {
            Object.assign(entity, updates);
        }
    }

    function setEntitySensorDeviceClass(id: string, sensorDeviceClass: SensorDeviceClass) {
        const entity = config.value.entities.find(e => e.id === id);
        if (!entity) return;

        entity.sensorDeviceClass = sensorDeviceClass;
        entityStates.value[entity.entityId] = getSensorDefaults(sensorDeviceClass);
    }

    function toggleEntityState(entityId: string, entityType: string) {
        const current = entityStates.value[entityId] || { state: 'off', brightness: 255 };
        let newState = current;
        if (entityType === 'camera') {
            if (current.state === 'idle') {
                newState = { ...current, state: 'streaming' };
            } else if (current.state === 'streaming') {
                newState = { ...current, state: 'recording' };
            } else {
                newState = { ...current, state: 'idle' };
            }
            newState.shouldLightUp = ['streaming', 'recording'].includes(newState.state);
        } else if (entityType === 'sensor') {
            const nextValue = current.state === '21.0' ? '22.5' : '21.0';
            const unit = current.unit || '°C';
            newState = { ...current, state: nextValue, unit, displayValue: `${nextValue} ${unit}` };
        } else {
            newState = { ...current, state: current.state === 'off' ? 'on' : 'off' };
            newState.shouldLightUp = newState.state === 'on';
        }
        entityStates.value[entityId] = newState;
    }

    function setEntityState(entityId: string, state: string) {
        const current = entityStates.value[entityId] || { state: 'off', brightness: 255 };
        entityStates.value[entityId] = { ...current, state: state };
    }

    function loadConfig(newConfig: FloorplanConfig) {
        config.value = newConfig;
        // Reset states
        entityStates.value = {};
        newConfig.entities.forEach(e => {
            entityStates.value[e.entityId] = e.type === 'sensor'
                ? getSensorDefaults(e.sensorDeviceClass)
                : { state: 'off', brightness: 255 };
        });
    }

    function clearConfig() {
        config.value = {
            id: uuidv4(),
            name: 'New Floorplan',
            imageBase64: '',
            entities: []
        };
        selectedEntityId.value = null;
        entityStates.value = {};
    }

    return {
        config,
        entities,
        selectedEntityId,
        selectedEntity,
        entityStates,
        setBaseImage,
        addEntity,
        removeEntity,
        updateEntity,
        setEntitySensorDeviceClass,
        toggleEntityState,
        setEntityState,
        loadConfig,
        clearConfig
    };
});
