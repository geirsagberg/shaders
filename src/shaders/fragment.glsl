uniform vec2 u_resolution;
uniform float u_time;

void main() {
  // Draw a rectangle
  vec2 st = gl_FragCoord.xy / u_resolution;

  vec3 white = vec3(1.0);
  vec3 black = vec3(0.0);

  vec3 color = st.x > 0.25 && st.x < 0.75 && st.y > 0.25 && st.y < 0.75 ? white : black;

  gl_FragColor = vec4(color, 1.0);

}
