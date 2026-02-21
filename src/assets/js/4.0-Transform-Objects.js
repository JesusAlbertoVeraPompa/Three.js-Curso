//==============================================================================
// assets/js/4.0-Transform-Objects.js
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

//==============================================================================
// Position
//==============================================================================
// Primera forma de Cambiar de posicion
mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;
// Segunda forma de Cambiar de posicion
mesh.position.set(0.7, -0.6, 1)

//==============================================================================
// Scale
//==============================================================================
// Primera forma de Escalar
mesh.scale.x=2
mesh.scale.y=0.5
mesh.scale.z=0.5
// Segunda forma de Escalar
mesh.scale.set(2, 0.5, 0.5)

//==============================================================================
// Rotation
//==============================================================================
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

scene.add(mesh);

// Axes Helper - Guias de Ejes x,y,z
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper);

// Saber la posicion del Object
console.log(mesh.position.length())

// Sizes
const sizes = {
    width: 800,
    height: 492,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 0.5;
camera.position.x = 0.5;
scene.add(camera)

camera.lookAt(mesh.position)

// Saber la posicion entre la camara y el Object
console.log(mesh.position.distanceTo(camera.position))

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Renderizado
renderer.render(scene, camera);
