import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: './' faz o build funcionar dentro da pasta do portfólio
export default defineConfig({
  base: './',
  plugins: [react()],
})
