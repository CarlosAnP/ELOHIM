import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // <-- Agrega esta línea

export default defineConfig({
  plugins: [react()],
  base: '/ELOHIM/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
