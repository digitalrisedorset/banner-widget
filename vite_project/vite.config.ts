import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {},
  },
  build: {
    outDir: "../www",
    emptyOutDir: false,
    lib: {
      entry: "src/widget.ts",
      name: "WidgetUsp",
      fileName: "widget-usp",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "widget-usp.[ext]",
      },
    }
  }
});
