import { defineConfig } from "vite";
import getInputs from "./src/config/getInputModule";

export default defineConfig({
  root: "src/subapps",
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
