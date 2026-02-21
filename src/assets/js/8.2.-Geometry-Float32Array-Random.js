//==============================================================================
// assets/js/8.2.-Geometry-Float32Array-Random.js
//==============================================================================

import * as THREE from "./build/three.module.js";
import { OrbitControls } from "./controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
    width: 800,
    height: 492,
};

// Cursor
const cursor = {
    x: 0,
    y: 0,
};
window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = -(event.clientY / sizes.height - 0.5);
});

// Scene
const scene = new THREE.Scene();

// Object

// 1. Crear la geometría
const geometry = new THREE.BufferGeometry();
const count = 200;
const positionsArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4; // Random entre -1 y 1
}
const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
geometry.setAttribute("position", positionsAttribute);

// 2. Crear el material sólido (el color de fondo)
const material = new THREE.MeshBasicMaterial({ color: "#ff0000", wireframe: true });
const cube = new THREE.Mesh(geometry, material);

// 3. Crear las líneas (el wireframe)
//const wireframeGeom = new THREE.WireframeGeometry(geometry);
//const lineMaterial = new THREE.LineBasicMaterial({
//    color: 0xffffff,
//    transparent: true,
//   opacity: 0.8,
//});
//const wireframe = new THREE.LineSegments(wireframeGeom, lineMaterial);

// 4. Añadir el wireframe como hijo del cubo para que se muevan juntos
cube.add(cube);

// 5. Añadir a la escena
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
camera.position.z = 5;
camera.lookAt(cube.position);
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
function animate() {
    requestAnimationFrame(animate);

    // Hacemos girar el cono (y el wireframe girará con él porque es su hijo)
    //cube.rotation.x += 0.005;
    //cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();
