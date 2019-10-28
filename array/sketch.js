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
	//fill('green');
	//rect(x, y - s/2, s/20, s/5); // stem
	
	fill('#CCED82 ');
	//ellipse(x, y, s, s - 25); // base
    rect(x, y, s, s);
	
	stroke("white");
	fill('#16A806');
	//triangle(x - s/4, y - s/4, x - s/3, y, x - s/5, y); // eye
	//triangle(x + s/4, y - s/4, x + s/3, y, x + s/5, y); // eye
    ellipse(x + s/4, y + s/5, 25, 25);
    ellipse(x + s/4, y + s/5, 25, 25);

	//for (let i = 0; i < 5; i++) {
		//rect(x - s/4 + i * (s/10), y + s/5, s/20, s/10);	
	//}
}








