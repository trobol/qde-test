//set default precision
precision mediump float;
uniform vec2 u_resolution;

void main() {
	vec4 color = vec4(1, 1, 1, 1);
	if(mod(gl_FragCoord.x, 20.) > 18. || mod(gl_FragCoord.y, 20.) > 18.) {
		color = vec4(0, 0, 0, 1);
	}
	gl_FragColor = vec4(0.5, 0.5, 0.5, 1);
}