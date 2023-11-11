// vite.config.js or vite.config.ts
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});