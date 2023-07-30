/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  cacheDir: '../../node_modules/.vite/host-application',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },

  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        'host-application': path.resolve(__dirname, 'index.html'),
        'simple': path.resolve(__dirname, 'index-simple.html'),
        'redux': path.resolve(__dirname, 'index-redux.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@mfe/product-list-widget': path.resolve(__dirname, '../product-list-widget/src'),
      '@mfe/shoping-card-widget': path.resolve(__dirname, '../shoping-card-widget/src'),
    },
  },
  // include reference to projects
});
