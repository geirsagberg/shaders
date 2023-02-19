import "./style.css";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  ShaderMaterial,
  Mesh,
  Clock,
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

const WIDTH = window.innerWidth / 1.5;
const HEIGHT = window.innerHeight / 1.5;

const renderer = new WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
app.appendChild(renderer.domElement);

const uniforms = {
  u_resolution: { value: { x: WIDTH, y: HEIGHT } },
  u_time: { value: 0.0 },
};

const geometry = new BoxGeometry(1, 1, 1);
const material = new ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms,
});

const cube = new Mesh(geometry, material);
cube.rotation.x = 0.5;
cube.rotation.y = 0.5;
scene.add(cube);

camera.position.z = 5;

const clock = new Clock();

const animate = () => {
  uniforms.u_time.value = clock.getElapsedTime();

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
