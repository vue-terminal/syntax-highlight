import { defineConfig } from 'vite'
import VueTermui from 'vite-plugin-vue-termui'
import { resolve } from 'path'

export default defineConfig({
  plugins: [VueTermui()],
  resolve: {
    alias: {
      '@vue-termui/syntax-highlight': resolve('../src/index.ts'),
    },
  },
})
