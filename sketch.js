
let xPos = 40;
let xSpeed
function setup() {
  createCanvas(400, 400);
  xSpeed = 2
}

function draw() {
  background(220);
  circle(xPos, 200, 100)
  xPos += xSpeed
  if(400 < xPos ){xSpeed = -xSpeed;}
  if(0 > xPos ){xSpeed = -xSpeed;}
}

