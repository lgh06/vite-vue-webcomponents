import { defineConfig } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build:{
    polyfillModulePreload: false,
    rollupOptions: {
      input: {
        'card-component': resolve(__dirname, 'src/card-component/index.js'),
        'title-component': resolve(__dirname, 'src/title-component/index.js'),
        'index': resolve(__dirname, 'index.html'),
      },
      output:{
        manualChunks:{
          vue_vendors: ['vue','plugin-vue:export-helper']
        },
        // https://rollupjs.org/guide/en/#outputentryfilenames
        // entryFileNames only affect no index.html js files
        entryFileNames:  "[name].js",
        // entryFileNames:  "lgh-[name].js"
      }
    },
  },
})
