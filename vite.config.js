import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/elite_3d_ai_portfolio/', // Your GitHub repo name
    build: {
        outDir: 'dist'
    }
})