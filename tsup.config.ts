import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: {
    index: "src/index.ts",
    react: "src/react/index.ts",
    "themes/radix-colors": "src/themes/radix-colors.ts",
  },
});
