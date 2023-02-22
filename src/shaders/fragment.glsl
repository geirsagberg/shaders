uniform vec2 u_resolution;
uniform float u_time;

varying vec2 vUv;

void main() {
  vec3 color = vec3(0.0);

  // Add some noise
  color += vec3(vUv.x, vUv.y, abs(sin(u_time)) * 0.5);

  // Output to screen
  gl_FragColor = vec4(color, 1.0);
}
