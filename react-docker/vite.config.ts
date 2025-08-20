import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from external devices
    watch: {
      usePolling: true,
      interval: 500,
    },
  },
})
