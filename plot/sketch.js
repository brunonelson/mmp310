/*
plot
9.23.19
nelson bruno
mmp310
*/


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

        nelson(200, 400, 200, 'orange', '"hello my dude"');
        keysha(700, 300, 200, 'pink', '"lets play"');
        narration("Once upon a time, Nelson and Keysha met in the desert to play .");




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

        nelson(100, 200, 200, 'orange', '"wow this place is pretty cool"');
        keysha(400, 200, 200, 'pink', '"yeah your right nelson"');
        narration("after the artic they decided to move on.");





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
        nelson(600, 100, 200, 'orange', '"hey how did we end up here."');
        keysha(700, 100, 200, 'pink', '"i have no idea"');
        narration("Some how Nelson and Keysha ended up in space");

    }



    /* instructions */
    textSize(20);
    text("Click to go to the next scene", width - 100, 10, 100, 100);
}

function narration(story) {
    textAlign(CENTER);
    text(story, width / 2, height - 50);
}

function nelson(x, y, size, col, greeting) {
    var eyeSize = size / 4;
    var eyeOffset = size / 5;
    fill('orangered');
    ellipse(x, y, size); // face
    fill('orange');
    stroke('white');
    strokeWeight(4);
    ellipse(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
    ellipse(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye

    textSize(40);
    fill('white');
    noStroke();
    text(greeting, x + 250, y - 50);
}

function keysha(x, y, size, col, greeting) {
    var keyshaX = 700;
    var keyshaY = 200;
    var keyshaSize = 200;
    var keyshaeyeSize = 20;
    var keyshaeyeOffset = 50;
    var keyshaGreeting = '"Lets Play."';
    fill('pink')
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
    text(keyshaGreeting, keyshaX - 150, keyshaY + 50);

}