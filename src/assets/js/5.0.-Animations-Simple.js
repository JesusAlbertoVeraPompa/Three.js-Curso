//==============================================================================
// assets/js/5.0.-Animations-Simple.js
//==============================================================================

import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 492,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animations
const tick = () => {
    // Update objects
    mesh.rotation.y += 0.01;

    // Renderizado
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();
