import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig(({ command }) => ({
  root: resolve(__dirname, 'portfolio'),
  publicDir: resolve(__dirname, 'portfolio', 'public'),
  base: command === 'build' ? '/meu_portfolio-/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
