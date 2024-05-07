import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://663a1b561ae792804bee15db.mockapi.io",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
