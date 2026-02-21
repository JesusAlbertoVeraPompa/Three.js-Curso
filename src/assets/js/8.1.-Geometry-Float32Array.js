//==============================================================================
// assets/js/8.1.-Geometry-Float32Array.js
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

const positionsArray = new Float32Array([
  0, 0, 0, // Vértice 1
  1, 0, 0, // Vértice 2
  0, 1, 0, // Vértice 3
]);

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

// 1. Crear la geometría
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionsAttribute);

// 2. Crear el material sólido (el color de fondo)
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" });
const cube = new THREE.Mesh(geometry, material);

// 3. Crear las líneas (el wireframe)
const wireframeGeom = new THREE.WireframeGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
const wireframe = new THREE.LineSegments(wireframeGeom, lineMaterial);

// 4. Añadir el wireframe como hijo del cubo para que se muevan juntos
cube.add(wireframe);

// 5. Añadir a la escena
scene.add(cube);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000,
);
camera.position.z = 2;
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
