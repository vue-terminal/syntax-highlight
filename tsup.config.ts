import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'node14',
  format: ['esm', 'cjs'],
  dts: true,
  esbuildOptions(options) {
    if (options.format === 'esm') options.outExtension = { '.js': '.mjs' }
  },
  entry: ['src/index.ts'],
  external: ['vue-termui', '@vue/runtime-core'],
})
