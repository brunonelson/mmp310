/*
setting
9.11.19
nelson bruno
mmp310
*/

// character variables -- nelson
var x = 200;
var y = 200;
var faceSize = 200;
var eyeSize = 40;
var eyeOffset = 40;
var c = 'orangered'; // color
var greeting = '"Hello my dude!"';

// second character -- keysha
var keyshaX = 700;
var keyshaY = 200;
var keyshaSize = 200;
var keyshaeyeSize = 20;
var keyshaeyeOffset= 50;
var keyshaColor = 'pink';
var keyshaGreeting = '"Lets Play."';

var story1 = "Once upon a time Keysha and Nelson were playing in the abyss";

//three scenes: desert, artic, space

var scene = "desert"


function setup() {
	createCanvas(windowWidth, 600);
    // scene = random(["desert", "artic", "space"
}

function mousePressed() {
    if (scene =="desert") {
        scene = "artic";
        } else if(scene == "artic") {
            scene = "space";
        } else if (scene == "space") {
            scene = "desert";
        }
}

function draw() {
    // set the setting
    if (scene == "desert") {
        backgorund('brown');
        
        // desert scene
        
        
    } else if (scene =="artic") {
        backgound("blue");
        
        // artic scene
        
    } else if (sence == "space") {
        backgorund("black");
    
	
    
	// nelson character
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
    
    // keysha chracter
    fill(keyshaColor)
    stroke('white')
    // face
    rect(keyshaX, keyshaY, keyshaSize, keyshaSize);
    // left eye
    rect(keyshaX - keyshaeyeOffset, keyshaY - keyshaeyeOffset, keyshaeyeSize, keyshaeyeSize);
    // right eye
    rect(keyshaX + keyshaeyeOffset, keyshaY - keyshaeyeOffset, keyshaeyeSize, keyshaeyeSize);
    
    textSize(40);
    fill('white');
    noStroke();
    text(keyshaGreeting, keyshaX - 250, keyshaY + 50);
    
    textAlign(CENTER);
	text(story1, width/2, height - 50);
        
        
    // instruction
        textSize(20);
        text("Click to go to the next scene" - 100, 10, 100, 100);
    
    }