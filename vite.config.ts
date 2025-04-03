import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

  const base = command === "build" && repoName ? `/${repoName}/` : "/";

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      fs: {
        allow: [".."],
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
  };
});
