import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    // For GitHub Pages: set base to '/DrAEJaspan/' for project pages
    // Remove or set to '/' if using a custom domain or user pages (username.github.io)
    base: process.env.GITHUB_ACTIONS ? "/DrAEJaspan/" : "/",
    server: {
        host: "::",
        port: 8080,
        hmr: {
            overlay: false,
        },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(
        Boolean,
    ),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
