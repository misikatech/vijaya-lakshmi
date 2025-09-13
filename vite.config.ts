import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist', // Vercel expects the build output here
  },
  server: {
    port: 3000, // Vercel uses this during dev preview
    strictPort: true,
  }
});
