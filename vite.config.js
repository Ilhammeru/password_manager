import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import fs from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
        tailwindcss(),
        Components({
            resolvers: [
                PrimeVueResolver()
            ]
        })
    ],
    server: {
        host: '0.0.0.0',
        port: 5174,
        hmr: {
            host: "pwm.orca.test",
            protocol: 'wss',
            port: 5175
        },
        https: {
            key: fs.readFileSync(path.resolve(__dirname, './ssl/orca.test.key')),
            cert: fs.readFileSync(path.resolve(__dirname, './ssl/orca.test.crt')),
        },
        watch: {
            usePolling: true
        }
    }
});
