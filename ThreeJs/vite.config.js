import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: ['/Model_MP.js', './CAOILE-PIANO.html']
    }
  },
  server: {
    open: '/CAOILE-PIANO.html',
  },
})