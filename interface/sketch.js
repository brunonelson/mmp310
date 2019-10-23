/*
	interface
	user interface
	10.16.2019
*/
var r = 255;
var g = 50;
var b = 100;
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
	var redSlider = createSlider(100, 255, red);
	redSlider.input(getRed);
    
    //createP("moveshaps");
	//var shapSlider = createSlider(10, 100, moveshaps);
	//shapSlider.input(updateEyes);
	//shapSliderSlider.position(width - 200, 50);
    
	
}

function getRed() {
	r = this.value();
	pattern();
}

function getNum() {
	num = this.value();
	pattern();
}

function saveImage() {
	save(nameInput.value() + ".png");
}

//function updateEyes() {
	//moveshaps = this.value();
	//pattern();
//}

function pattern() {
	background(r,g,b);
    
	noStroke();
	//fill('#E67E22 ');
	
	for (let i = 0; i < num; i++) {
        fill("#D98880");
		ellipse(random(width), random(height), random(50, 100));
        fill("#B03A2E ");
        rect( random(width) , random( height) , random(100) , random(100));
        fill("#641E16");
        quad(random(width), random(height), random(50), random(50), random(50), random(50),random(50), random(50));
        fill("#CB4335");
        quad(random(width), random(height), random(50), random(50), random(50), random(50),random(50), random(50));
        
	}
    }

