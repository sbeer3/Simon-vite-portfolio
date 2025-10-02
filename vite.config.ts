
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for large libraries
          'gsap': ['gsap'],
          'three': ['three', '@react-three/fiber', '@react-three/postprocessing', 'postprocessing'],
          'radix': [
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog', 
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
            '@radix-ui/react-tooltip'
          ],
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['lucide-react', 'react-icons', 'embla-carousel-react'],
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority', 'next-themes', 'sonner']
        }
      }
    },
    chunkSizeWarningLimit: 1000 // Increase limit to 1MB to reduce warnings
  }
})
