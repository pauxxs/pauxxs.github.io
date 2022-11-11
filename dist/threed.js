import * as THREE from "../_snowpack/pkg/three.js";
const images = ["dickson.jpg", "dude.jpg", "icedweller.png"];
export default function threeDInit() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
  const directionalLight = new THREE.DirectionalLight(16777215, 1);
  directionalLight.position.set(0, 0, 0);
  directionalLight.target.position.set(1, 0, -1.5);
  scene.add(directionalLight);
  scene.add(directionalLight.target);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const geometry = new THREE.SphereGeometry(0.5, 100, 100);
  const image = "./res/" + images[Math.floor(Math.random()*images.length)];
  console.log(image);
  const texture = new THREE.TextureLoader().load(image);
  const material = new THREE.MeshPhongMaterial({map: texture});
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  camera.position.set(0, 0.1, 1);
  window.addEventListener("mousemove", (e) => {
    sphere.rotation.x = e.y * 0.01;
    sphere.rotation.y = e.x * 0.01;
  });
  var tanFOV = Math.tan(Math.PI / 180 * camera.fov / 2);
  var windowHeight = window.innerHeight;
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.fov = 360 / Math.PI * Math.atan(tanFOV * (window.innerHeight / windowHeight));
    camera.updateProjectionMatrix();
    camera.lookAt(scene.position);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }, false);
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  ;
  animate();
}
