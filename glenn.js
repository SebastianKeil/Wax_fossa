
  var r = random(0, 250);
  var g = random(0, 250);
  var b = random(0, 250);

function setup(){
  createCanvas(displayWidth, displayHeight);
  background(r, g, b);
}

function draw(){
  //noStroke();
  fill(b, r, g, 80);
  ellipse(mouseX, mouseY, 30, 30);
  
}

function mousePressed(){
  
  r = random(0, 250);
  g = random(0, 250);
  b = random(0, 250);
  background(r, g, b);
}