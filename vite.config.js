import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import bloom from 'pixelblm'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/@walletconnect')) {
            return 'walletconnect-vendor'
          }

          if (id.includes('node_modules/@reown') || id.includes('node_modules/@web3modal')) {
            return 'reown-vendor'
          }

          if (id.includes('node_modules/@metamask')) {
            return 'metamask-vendor'
          }

          if (id.includes('node_modules/@rainbow-me')) {
            return 'rainbowkit-vendor'
          }

          if (id.includes('node_modules/wagmi')) {
            return 'wagmi-vendor'
          }

          if (id.includes('node_modules/viem')) {
            return 'viem-vendor'
          }

          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'query-vendor'
          }

          if (id.includes('node_modules/react-router-dom')) {
            return 'router-vendor'
          }

          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  define: {
    // Define environment variables for client-side
    'process.env.NEXT_PUBLIC_ENABLE_TESTNETS': JSON.stringify(process.env.NEXT_PUBLIC_ENABLE_TESTNETS || 'false'),
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true,
  },
})