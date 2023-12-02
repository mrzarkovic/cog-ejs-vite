import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import { join } from "path";

export default defineConfig({
    root: "./src",
    base: "",
    plugins: [ViteEjsPlugin(), CustomHmr()],
});

function CustomHmr() {
    return {
        name: "custom-hmr",
        enforce: "post",
        // HMR
        handleHotUpdate({ file, server }) {
            if (file.endsWith(".ejs")) {
                console.log("reloading EJS file...");

                server.ws.send({
                    type: "full-reload",
                    path: "*",
                });
            }
        },
    };
}
