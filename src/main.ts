import {
  BoxGeometry,
  Clock,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';
import fragmentShader from './shaders/fragment.glsl';
import vertexShader from './shaders/vertex.glsl';
import './style.css';

const app = document.querySelector('#app')!;

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
  u_mouse: { value: { x: 0.0, y: 0.0 } },
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

camera.position.z = 2;

const clock = new Clock();

document.addEventListener('mousemove', (e) => {
  uniforms.u_mouse.value = { x: e.clientX, y: e.clientY };
});

const animate = () => {
  uniforms.u_time.value = clock.getElapsedTime();
  camera.lookAt(scene.position);
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
