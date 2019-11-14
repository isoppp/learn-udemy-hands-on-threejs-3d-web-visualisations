import * as THREE from 'three';

let scene, camera, renderer, box1, box2, box3;

function createBox() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color('skyblue') });
  return new THREE.Mesh(geometry, material);
}
function init () {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xaaaaaa);

  box1 = createBox();
  box2 = createBox();
  box2.position.x = -2.5
  box3 = createBox();
  box3.position.x = 2.5
  scene.add(box1);
  scene.add(box2);
  scene.add(box3);

  const light = new THREE.DirectionalLight();
  light.position.set(1, 1.5, 2);
  scene.add(light);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize', onResize, false);

  update();
}

function update () {
  requestAnimationFrame(update);
  box1.rotation.y += 0.015;
  box2.rotation.x += 0.015;
  box3.rotation.z += 0.015;
  renderer.render(scene, camera);
}

function onResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.document.addEventListener('DOMContentLoaded', () => {
  init()
})
