import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginModules from 'vite-plugin-modules';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginModules({
      jQuery: 'jquery',
    }),
  ],
  mode: 'development',
  optimizeDeps: {
    include: ['jquery'], // Include jQuery in the optimized dependencies
  },
});
