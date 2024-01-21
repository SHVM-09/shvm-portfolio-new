// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000, // Adjust the port as needed
  },
  optimizeDeps: {
    include: ["url", "querystring"], // Include necessary Node.js modules for your code
  },
});
