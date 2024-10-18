import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Apple-Website-Demo/',
  plugins: [react(), sentryVitePlugin({
    org: "jsm-jl",
    project: "apple_website"
  })],

  build: {
    sourcemap: true
  }
})