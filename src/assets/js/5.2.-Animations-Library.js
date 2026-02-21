//==============================================================================
// assets/js/5.2.-Animations-Library.js
//==============================================================================

import * as THREE from "https://unpkg.com/three@latest/build/three.module.js";
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";

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

gsap.to(mesh.position,{duration: 1, delay: 1, x: 2});
gsap.to(mesh.position,{duration: 1, delay: 2, x: 0});


// Animations
const tick = () => {
    
    // Renderizado
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();
