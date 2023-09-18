let x, y;
let r, g, b;

function setup() {
  createCanvas(700, 1000);
  x = width / 2;
  y = height / 2;
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);

    x = mouseX;
  y = mouseY;
  
  fill(r, g, b);
  ellipse(x, y, 25, 25);
}

function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255);
}
