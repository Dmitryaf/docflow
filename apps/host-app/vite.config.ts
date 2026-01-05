import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@shared/ui': fileURLToPath(new URL('../../packages/shared-ui/src', import.meta.url)),
            '@shared/types': fileURLToPath(new URL('../../packages/shared-types/src', import.meta.url)),
        },
    },
})