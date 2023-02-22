uniform vec2 u_resolution;
uniform float u_time;

void main() {

  // Transform vertex position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
