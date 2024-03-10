import { defineConfig } from "vite";
import tsConfigPath from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPath()],
});
