/*
	interface
	user interface
	10.16.2019
*/
var r = 221;
var g = 160;
var b = 221;
var num = 50;
var nameInput;

function setup() {
	createCanvas(windowWidth, 600);
	pattern();
	
	var button = createButton("change back");
	button.mouseClicked(pattern);
	
	nameInput = createInput("Name the file");
	var saveButton = createButton("Save Image");
	saveButton.mouseClicked(saveImage);
	
	createP("Change pattern");
	var numSlider = createSlider(1, 100, num);
	numSlider.input(getNum);
    
    createP("Change background color");
	var redSlider = createSlider(100, 255, r);
	//redSlider.input(updateRed);
	
}

//function updateRed() {
	//r = this.value();
	//backgroundcolor();
//}

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
        fill("blue");
        //quad(random(width), random(height), random(50), random(20), random(69), random(63),random(30), random(76));
        
	}
    }

