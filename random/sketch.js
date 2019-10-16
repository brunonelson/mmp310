/*
	random + loop sketch 
	10.7.2019
*/

function setup() {
	createCanvas(640, 360);
	drawCharacters();
}

function mouseClicked() {
	drawCharacters();
}

function drawCharacters() {
	background('black');
	
	for (let x = 0; x < width; x += 100) {
		
		var r = random(255);
		var g = random(80);
		var b = random(0);
		
		var s = random(50, 50); // size 
		var y = random(height/10, height * 2/3);
		
		fill(r, g, b);
		rect(x, y, 70,70); // face
		
		rect(x + s/1, y - 20, s, s/1); // right eye
		rect(x - s/1, y - 20, s, s/1); // left eye
	}
}







