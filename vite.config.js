import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5174,
    strictPort: false,
    allowedHosts: [
      '5174-josephsoftw-ecommerceho-plsns77nd35.ws-us118.gitpod.io'
    ],
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  base: process.env.NODE_ENV === 'production' ? '/ecommerce-home/' : '/'
})
