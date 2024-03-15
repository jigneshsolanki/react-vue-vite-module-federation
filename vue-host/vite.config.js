import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host-app',
      remotes: {
          remoteApp: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom', 'zustand']
  })
  ],
})
