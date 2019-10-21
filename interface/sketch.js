/*
	interface
	user interface
	10.16.2019
*/

var num = 50;
var nameInput;

function setup() {
	createCanvas(windowWidth, 600);
	pattern();
	
	var button = createButton("Generate Pattern");
	button.mouseClicked(pattern);
	
	nameInput = createInput("Name the file");
	var saveButton = createButton("Save Image");
	saveButton.mouseClicked(saveImage);
	
	createP("Change pattern");
	var numSlider = createSlider(2, 100, num);
	numSlider.input(getNum);
	
}

function getNum() {
	num = this.value();
	pattern();
}

function saveImage() {
	save(nameInput.value() + ".png");
}


function pattern() {
	background('#FAD7A0');
	noStroke();
	//fill('#E67E22 ');
	
	for (let i = 0; i < num; i++) {
        fill('#E67E22 ');
		ellipse(random(width), random(height), random(50, 100));
        fill("red");
        rect( random(width) , random( height) , random(100) , random(50));
	}
    }

