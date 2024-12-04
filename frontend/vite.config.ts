import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 80,
    strictPort: true, 
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API calls to the backend
    },
  },
});
