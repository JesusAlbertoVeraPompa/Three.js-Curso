//==============================================================================
// assets/js/12.0-3DText.js
//==============================================================================

import * as THREE from "./build/three.module.js";
import { OrbitControls } from "./controls/OrbitControls.js";
import { FontLoader } from "./three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "./three/examples/jsm/geometries/TextGeometry.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
});

// Scene
const scene = new THREE.Scene();

// Textures
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("../../textures/matcaps/12.jpg");

// 👉 Declarar fuera para usarlo en tick()
let text = null;

// Fonts-Object
const fontLoader = new FontLoader();
fontLoader.load("../../fonts/AvantGarde_Md_BT_Medium.json", (font) => {
    const textGeometry = new TextGeometry("Hello Three.js", {
        font: font,
        size: 0.5,
        depth: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    });

    textGeometry.center();

    const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });

    text = new THREE.Mesh(textGeometry, textMaterial); // 👈 asignación
    scene.add(text);
});

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update Objects (solo si ya cargó la fuente)
    if (text) {
        text.rotation.y = Math.sin(elapsedTime) * 0.4;
        text.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;
    }

    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
};

tick();
