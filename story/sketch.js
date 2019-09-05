/*
story
9.5.2019
nelson bruno
mmp310
*/

// character variables
var x = 200;
var y = 100;
var faceSize = 200;
var eyeSize = 20;
var eyeOffset = 50;
var c = 'purple'; // color
var greeting = '"Hi!"';

function setup() {
	createCanvas(windowWidth, 600);
	background('black');
	
	fill(c);
	ellipse(x, y, faceSize); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye
	
	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);
}