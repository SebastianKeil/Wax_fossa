function setup() {
  createCanvas(400, 400);
  background(200);
  var x;
  var y;
  var s;
}

s = 1;

function draw() {
  background(220);
  
  x = noise(100 + s) * width;
  y = noise(90 + s) * 400;
  s = s + 1;
  
  stroke(200, 50, 0, 40);
  fill(200, 50, 0, 20);
  circle(x, y, 20);
  
  
}