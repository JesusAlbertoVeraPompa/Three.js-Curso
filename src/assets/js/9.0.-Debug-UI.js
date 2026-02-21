//==============================================================================
// assets/js/9.0.-Debug-UI.js
//==============================================================================

import * as THREE from "./build/three.module.js";
import { OrbitControls } from "./controls/OrbitControls.js";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.21/+esm';


// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3))
})

window.addEventListener('dblclick', () =>
{
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
            canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }
    }
    else
    {
        if(document.exitFullscreen)
        {
            document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
    }
})

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
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: "#ff0000" }),
);
scene.add(mesh);

// Indicar que el rango de movimiento del mesh en el eje x es de -3 a 3, con un paso de 0.01
gui.add(mesh.position, "x").min(-3).max(3).step(0.01);
// Indicar que el rango de movimiento del mesh en el eje y es de -3 a 3, con un paso de 0.01
gui.add(mesh.position, "y").min(-3).max(3).step(0.01);
// Indicar que el rango de movimiento del mesh en el eje z es de -3 a 3, con un paso de 0.01
gui.add(mesh.position, "z").min(-3).max(3).step(0.01);
// Indicar que el rango de rotación del mesh en el eje x es de 0 a 2 * Math.PI, con un paso de 0.01
gui.add(mesh.rotation, "x").min(0).max(2 * Math.PI).step(0.01);
// Indicar que el rango de rotación del mesh en el eje y es de 0 a 2 * Math.PI, con un paso de 0.01
gui.add(mesh.rotation, "y").min(0).max(2 * Math.PI).step(0.01);
// Indicar que el rango de rotación del mesh en el eje z es de 0 a 2 * Math.PI, con un paso de 0.01
gui.add(mesh.rotation, "z").min(0).max(2 * Math.PI).step(0.01);
// Indicar que el rango de escala del mesh en el eje x es de 0.1 a 3, con un paso de 0.01
gui.add(mesh.scale, "x").min(0.1).max(3).step(0.01);
// Indicar que el rango de escala del mesh en el eje y es de 0.1 a 3, con un paso de 0.01
gui.add(mesh.scale, "y").min(0.1).max(3).step(0.01);
// Indicar que el rango de escala del mesh en el eje z es de 0.1 a 3, con un paso de 0.01
gui.add(mesh.scale, "z").min(0.1).max(3).step(0.01);
// Indicar que el color del mesh se puede cambiar con un selector de color
gui.addColor(mesh.material, "color");
// Indicar que el material del mesh se puede cambiar entre MeshBasicMaterial, MeshStandardMaterial y MeshPhongMaterial
gui.add(mesh.material, "wireframe").name("Wireframe");
// Indicar que el material del mesh se puede cambiar entre MeshBasicMaterial, MeshStandardMaterial y MeshPhongMaterial
gui.add(mesh.material, "transparent").name("Transparent");
// Indicar que el material del mesh se puede cambiar entre MeshBasicMaterial, MeshStandardMaterial y MeshPhongMaterial
gui.add(mesh.material, "opacity").min(0).max(1).step(0.01).name("Opacity");
// Indicar que el material del mesh se puede cambiar entre MeshBasicMaterial, MeshStandardMaterial y MeshPhongMaterial
gui.add(mesh.material, "visible").name("Visible");
gui.add(mesh.material, "depthWrite").name("Depth Write");
// Indicar que el material del mesh se puede cambiar entre MeshBasicMaterial, MeshStandardMaterial y MeshPhongMaterial
gui.add(mesh.material, "colorWrite").name("Color Write");


// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000,
);
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

// Axes Helper - Guias de Ejes x,y,z
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper);

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

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
