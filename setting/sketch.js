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
var keyshaeyeOffset = 50;
var keyshaColor = 'pink';
var keyshaGreeting = '"Lets Play."';

var story1 = "Once upon a time Keysha and Nelson were playing in the abyss";

//three scenes: desert, artic, space

var scene = "desert";


function setup() {
    createCanvas(windowWidth, 600);
    // scene = random(["desert", "artic", "space"
}

function mousePressed() {
    if (scene == "desert") {
        scene = "artic";
    } else if (scene == "artic") {
        scene = "space";
    } else if (scene == "space") {
        scene = "desert";
    }
}

function draw() {
    // set the setting
    if (scene == "desert") {
        background('WHEAT');

        // desert scene
        fill('PERU');
        noStroke();

        for (let x = 0; x < width; x += 300) {
            triangle(
                x, 20 + random(20),
                x + 100, 600,
                x - 100, 600,
            );
        }



    } else if (scene == "artic") {
        background("LIGHTSTEELBLUE");

        // artic scene
        fill('white');
        noStroke();
        //        for (let x = 0; x < width; x += 200) {
        //            rect(x, 100 + random(100), 90, height - 100);
        //        }
        noStroke();
        fill('white');
        triangle(-100, height, 100, 100, 200, height);
        fill('lightgray');
        triangle(-100, height, 200, 200, 300, height);
        fill('white');
        triangle(-100, height, 200, 290, 300, height);
        fill('lightgray');
        triangle(-100, height, 400, 200, 300, height);
        fill('white');
        triangle(-100, height, 600, 200, 400, height);
        fill('lightgray');
        triangle(-100, height, 900, 200, 800, height);
        fill('white');
        triangle(-100, height, 950, 200, 900, height);
        fill('lightgray');
        triangle(-100, height, 1300, 200, 1200, height);
        fill('white');
        triangle(-100, height, 1400, 200, 1200, height);
        fill('lightgray');
        triangle(-100, height, 1500, 290, 300, height);




    } else if (scene == "space") {
        background("black");
        noStroke();
        fill('green');
        ellipse(100, 50, 100, 100);
        fill('red');
        ellipse(500, 100, 100, 100);
        fill('orange');
        ellipse(700, 200, 100, 100);
        fill('green');
        ellipse(350, 450, 100, 100);
        fill('red');
        ellipse(600, 400, 100, 100);
        fill('orange');
        ellipse(950, 350, 100, 100);
        fill('green');
        ellipse(900, 50, 100, 100);

    }


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
    text(story1, width / 2, height - 50);


    /* instructions */
    textSize(20);
    text("Click to go to the next scene", width - 100, 10, 100, 100);
}