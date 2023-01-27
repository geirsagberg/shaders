import "./style.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  ShaderMaterial,
  Mesh,
} from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

const app = document.querySelector("#app")!;

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
app.appendChild(renderer.domElement);

const geometry = new BoxGeometry(1, 1, 1);
const material = new ShaderMaterial({ vertexShader, fragmentShader });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
};

animate();
