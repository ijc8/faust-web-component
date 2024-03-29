import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "faust_web_component",
            formats: ["iife"],
            fileName: () => "faust-web-component.js",
        },
    },
})
