import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "/autoscout",
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
      app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        assets: resolve(__dirname, "src", "assets"),
      },
    },
  };
});
