import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { execSync } from 'child_process';

function getAppVersion() {
  try {
    return execSync('git describe --tags --always', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return 'dev';
  }
}

const appVersion = getAppVersion();

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(appVersion)
  },
  build: {
    sourcemap: true
  }
})
