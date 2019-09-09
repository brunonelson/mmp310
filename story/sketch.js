/*
story
9.5.2019
nelson bruno
mmp310
*/

// character variables
//character#1
var x = 200;
var y = 200;
var faceSize = 200;
var eyeSize = 40;
var eyeOffset = 40;
var c = 'orangered'; // color
var greeting = '"Hello my dude!"';

function setup() {
	createCanvas(windowWidth, 600);
	background('black');
    
	//character#1
	fill(c);
	ellipse(x, y, faceSize); // face
	fill('orange');
	stroke('white');
	strokeWeight(4);
	ellipse(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	ellipse(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye
	
	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);
    
    //chracter#2
    fill(c);
    rect(x, y, faceSize);//face
}