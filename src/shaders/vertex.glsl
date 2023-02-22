uniform vec2 u_resolution;
uniform float u_time;

void main() {

  vec3 pos = position;
  // Move vertex randomly
  pos.x += sin(u_time + pos.y) * 0.1;
  pos.y += cos(u_time + pos.x) * 0.1;
  pos.z += sin(u_time + pos.x + pos.y) * 0.1;

  // Transform vertex position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
