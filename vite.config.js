import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/Three.js-Curso/",

    build: {
        rollupOptions: {
            input: {
                // Tu página principal
                main: resolve(__dirname, "index.html"),
                // Debes agregar cada página secundaria aquí
                FirstProject: resolve(__dirname, "src/pages/3.0-First-Project.html"),
                TransformObjects: resolve(__dirname, "src/pages/4.0-Transform-Objects.html"),
                ObjectsGroup: resolve(__dirname, "src/pages/4.1-Objects-Group.html"),
                AnimationsSimple: resolve(__dirname, "src/pages/5.0.-Animations-Simple.html"),
                AnimationsCompound: resolve(__dirname, "src/pages/5.1.-Animations-Compound.html"),
                AnimationsLibrary: resolve(__dirname, "src/pages/5.2.-Animations-Library.html"),
                CameraPerspective: resolve(__dirname, "src/pages/6.1.-Camera-Perspective.html"),
                CameraOrthographic: resolve(__dirname, "src/pages/6.2.-Camera-Orthographic.html"),
                CameraPerspectiveControls: resolve(
                    __dirname,
                    "src/pages/6.3.-Camera-Perspective-Controls.html",
                ),
                CameraPerspectiveOrbitControls: resolve(
                    __dirname,
                    "src/pages/6.4.-Camera-Perspective-Orbit-Controls.html",
                ),
                FullscreenandResponsiveResign: resolve(
                    __dirname,
                    "src/pages/7.0.-Fullscreen-and-Responsive-Resign.html",
                ),
                Geometry: resolve(__dirname, "src/pages/8.0.-Geometry.html"),
                GeometryFloat32Array: resolve(
                    __dirname,
                    "src/pages/8.1.-Geometry-Float32Array.html",
                ),
                GeometryFloat32ArrayRandom: resolve(
                    __dirname,
                    "src/pages/8.2.-Geometry-Float32Array-Random.html",
                ),
                DebugUI: resolve(__dirname, "src/pages/9.0.-Debug-UI.html"),
                Textures: resolve(__dirname, "src/pages/10.0-Textures.html"),
                Materials: resolve(__dirname, "src/pages/11.0-Materials.html"),
                TresDText: resolve(__dirname, "src/pages/12.0-3DText.html"),
            },
        },
    },
});
