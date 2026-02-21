//==============================================================================
// assets/js/5.1.-Animations-Compound.js
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

// Clock
const clock = new THREE.Clock();

// Animations
const tick = () => {
    
    // Clock
    const elapsedTime = clock.getElapsedTime();
    
    // Update objects
    //mesh.rotation.y = elapsedTime;
    mesh.position.x = Math.sin(elapsedTime);
    mesh.position.y = Math.cos(elapsedTime);
    //camera.lookAt(mesh.position);

    // Renderizado
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
};

tick();
