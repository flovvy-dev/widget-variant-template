import { defineConfig } from 'vite';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
    base: './',
    server: {
        port: 5174,
        open: true
    },
    plugins: [
        sentryVitePlugin({
            project: process.env.SENTRY_PROJECT,
            authToken: process.env.SENTRY_AUTH_TOKEN,
        })
    ],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        manifest: true,
        sourcemap: true,
    }
});
