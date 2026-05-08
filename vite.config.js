import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve(__dirname, 'portfolio'),
  publicDir: resolve(__dirname, 'portfolio', 'public'),
  base: '/Jamilesales12/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
