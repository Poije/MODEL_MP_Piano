import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        app: './CAOILE-PIANO.html',
      },
    },
  },
  server: {
    open: '/CAOILE-PIANO.html',
  },
})