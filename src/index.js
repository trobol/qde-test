
import {gl, ge} from 'qdengine';
import {texture} from 'qdengine/graphics'
import {vec2} from 'qdengine';
import vS from './default.vert';
import fS from './default.frag';
var ctx, e, s, lastFrame = 0, frameTime = 0, fps, frames = 0, balls = [], delta = 0, program, programD, textureLocation, offset = 0, offsetLocation, programT;
function main() {
	
	fps = document.getElementById('fps');
	
	program = gl.buildProgram(vS, fS);
	gl.useProgram(program);
	for(let i = 0; i < 1000; i++) {
		balls[i] = new ge({shader:program, velocity:vec2((Math.random()*2 - 1)/5,(Math.random()*2 - 1)/5), scale:vec2(0.02, 0.02), position:vec2(0, 0)});
	}
	
	var positionLocation = gl.getAttribLocation(program, "a_position");
	console.log(gl.positionBuffer);
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.positionBuffer);
	gl.enableVertexAttribArray(positionLocation);
	var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        positionLocation, size, type, normalize, stride, offset);

	offsetLocation = gl.getUniformLocation(program, "offset");

	document.querySelector('button').addEventListener('click', pauseRender);
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.positionBuffer);
	requestAnimationFrame(draw);
}

let paused = false;
function pauseRender() {
	paused = !paused;
	if(!paused) {
		requestAnimationFrame(draw);
	}
}

function draw(t) {
	
	computeFps(t);
	var offset = wasmInstance.exports.getData();
	for(let b of balls) {
		b.draw();
		computeMove(b);
	}

	
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.positionBuffer);
	
	
    // Clear the canvas AND the depth buffer.
	gl.clearColor(1, 1, 1, 1);   // clear to white
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(gl.vertexBuffer), gl.STATIC_DRAW)
	gl.drawArrays(gl.TRIANGLES, 0, gl.vertexBuffer.length/2);

	gl.vertexBuffer = [];
	if(!paused) {
		requestAnimationFrame(draw);
	}
	
}
function computeMove(ball) {
	ball.position = ball.position.add(ball.velocity.mul(delta/100));
	
	if(ball.position.x + ball.scale.x/2 > 1 || ball.position.x - ball.scale.x/2 < -1) {
		//point score
		ball.velocity.x = ball.velocity.x * -1;
	}
	if(ball.position.y + ball.scale.y/2 > 1 || ball.position.y - ball.scale.y/2 < -1) {
		ball.velocity.y = ball.velocity.y * -1;
	}	
}
function computeFps(t) {
	if(frames === 5) {
		fps.innerHTML = Math.round(1/((frameTime/5)/1000));
		frameTime = 0;
		frames = 0;
	}
	delta = t - lastFrame;
	frameTime += delta;
	lastFrame = t;
	frames++;
}
window.onload = main;


