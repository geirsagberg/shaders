uniform vec2 u_resolution;
uniform float u_time;

varying vec3 vNormal;
varying vec2 vUv;

void main() {

  vec3 pos = position;
  // Move vertex randomly
  pos.x += sin(u_time + pos.y) * 1.;
  pos.y += cos(u_time + pos.x) * 1.;
  pos.z += sin(u_time + pos.x + pos.y) * 0.1;

  // Transform vertex position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  // Pass uv and normal to fragment shader
  vUv = uv;
  vNormal = normal;
}
