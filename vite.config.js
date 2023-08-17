import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", 'src/components/index.jsx'),
      name: 'react-library-dropdown',
      fileName: (format) => `react-library-dropdown.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },

  plugins: [react()],
})*/
export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom'
  }
})

