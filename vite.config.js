import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Cambia el valor de base si el nombre del repositorio en GitHub es diferente.
export default defineConfig({
    base: "/el-corte-estudio-web/",
    plugins: [react()],
});
