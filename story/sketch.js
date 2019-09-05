var x = 100;
var y = 200;
var s = 300;

var greeting = '"hello!"';

function setup() {
  createCanvas(windowWidth,600);
  background('black');
    
    ellipse( x, y, s);
    
    textsize(40);
    text(greeting, x, y);
}