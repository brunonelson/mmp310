/*
	class example
	asteroids
	10.30.2019
*/

var asteroids = []; // empty array 

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for (let i = 0; i < 100; i++) {
		asteroids.push( new Asteroid() );
	}
}

function draw() {
	background('black');
	
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].display();
		asteroids[i].update();
	}
}


function mousePressed() {
	asteroids.push( new Asteroid(mouseX, mouseY) );
}


