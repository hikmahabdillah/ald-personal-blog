// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server", // enable ssr
  adapter: node({ mode: "standalone" }),
  integrations: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
