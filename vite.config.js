import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //set server.hrm.overlay to false
  server: {
    hmr: {
    overlay: false,
    },
    },
})
