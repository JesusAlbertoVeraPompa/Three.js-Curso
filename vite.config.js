import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Three.js-Curso/',

  build: {
    rollupOptions: {
      input: {
        // Tu página principal
        main: resolve(__dirname, 'index.html'),
        // Debes agregar cada página secundaria aquí
        textures: resolve(__dirname, 'src/pages/10.0-Textures.html'),
        // Agrega las demás páginas que tengas siguiendo el mismo formato
      }
    }
  }
})