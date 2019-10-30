/*
	array example
	10.23.2019
*/

var sizes = [80, 90, 70, 80, 90, 70];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(43, 59, 6);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		apples(40 + i * 100, 130, sizes[i]);
	}
}

function apples(x, y, s) {
    
	fill('#CCED82 ');
    rect(x, y, s, s);
	stroke("black");
    fill('white')
    ellipse(x + s/2, y + s/5, 25, 25);
    fill('#16A806')
    ellipse(x + s/2, y + s/5, 15, 15);
    fill("black")
    ellipse(x + s/2, y + s/5, 10, 10);
    fill("white")
    ellipse(x + s/2, y + s/5, 4, 4);
    

	
}








