uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 center = u_resolution / 2.0;

  float distanceFromCenter = mod(distance(gl_FragCoord.xy, center), u_time);

  float color = distanceFromCenter > 1. ? 1.0 : 0.0;

  gl_FragColor = vec4(1. - color, color - 1., mod(pow(color, 2.), 1.0), 1.0);
}
