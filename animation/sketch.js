/*
	array with animation
	10.23.2019
*/

var sizes = [80, 90, 70, 80, 90, 70];
var position = [0, 10, -10, 20, -20, 0];
var speed = [2, 3, 2, 3, 2, 3];
var r = [50,60,40,90,30,90];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(43, 59, 6);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		apples(40 + i * 100, position[i], sizes[i], r[i]);
		
		position[i] += speed[i];
        r[i] += 1;
	}
    
}

function apples(x, y, s, r) {
    
	fill(r, 200-r, 0);
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

