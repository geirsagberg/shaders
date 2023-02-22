uniform vec2 u_resolution;
uniform float u_time;

void main() {
  // Draw a rectangle
  vec2 center = u_resolution / 2.0;

  vec3 white = vec3(1.0);
  vec3 black = vec3(0.0);

  float distanceFromCenter = distance(gl_FragCoord.xy, center);

  vec3 color = distanceFromCenter < 100.0 ? white : black;

  gl_FragColor = vec4(color, 1.0);

}
