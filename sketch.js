var x = 60; // x coordinate
var y = 440; // y coordinate
var bodyHeight = 180; //body height
var neckHeight = 40; //neck height
var radius = 45; //head radius
var easing = 0.04;

function setup() {
  createCanvas(360, 480);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {

  var neckY = -1 * (bodyHeight + neckHeight + radius);

  background(255, 0, 43); //Ruddy Red

  translate(mouseX, y); //move all to (mouseX, y)

  if (mouseIsPressed) {
    scale(1.0);
  } else {
    scale(0.6); //60% size when mouse is pressed
  }
  //Body
  noStroke(); //disable stroke
  fill(0, 0, 204); //set fill to med blue
  ellipse(0, -33, 33, 33); //antigravity orb
  fill(0, 255, 0); //set fill to electric green
   rect(-45, -bodyHeight, 90, bodyHeight - 33); //main 
  fill(0, 0, 204); //set fill to med blue
  rect(-45, -59, 90, 6); //low med blue stripe

  //Neck
  stroke(0, 0, 20); //set stroke to med blue
  line(2, -bodyHeight, 2, neckY); //left
  line(12, -bodyHeight, 12, neckY); //middle
  line(22, -bodyHeight, 22, neckY); //right

  // Hair
  push();
  translate(12, neckY);
  var angle = -PI / 30.0;
  for (var i = 0; i <= 30; i++) {
    line(80, 0, 0, 0);
    rotate(angle);
  }
  pop();

// Head
  noStroke();
  fill(0, 255, 0); //set fill to electric green
  ellipse(12, neckY, radius, radius); // head
  fill(255); //set fill to white
  ellipse(24, neckY - 6, 14, 14); //large eye
  fill(0); //set fill to black
  ellipse(24, neckY - 6, 3, 3); //pupil
  fill(0, 0, 204); //set fill to med blue
  ellipse(1, neckY - 8, 5, 5); //small eye 1
  ellipse(30, neckY - 26, 4, 4); //small eye 2
  ellipse(41, neckY + 6, 3, 3); //small eye 3
}
