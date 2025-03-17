import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import getInputs from "./src/config/getInputModule";

export default defineConfig({
  root: "src",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: getInputs(),
    },
    outDir: "../../dist",
  },
  server: {
    host: "0.0.0.0",
    port: 17481,
    open: "/sharedApps/entry/",
  },
});
