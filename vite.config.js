import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// standard vite config, nothing fancy
export default defineConfig({
  plugins: [react()],
})
