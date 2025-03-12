import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import getInputs from "./src/config/getInputModule";

export default defineConfig({
  root: "src/subapps",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: getInputs(),
    },
    outDir: "../../dist",
  },
  server: {
    port: 17481,
  },
});
