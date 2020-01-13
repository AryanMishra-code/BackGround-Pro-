
var r = 100;
var g = 150;
var b=255;




function setup(){
  createCanvas(1200,600);
}


function draw(){
  background(r, g, b);

  fill("yellow");
  ellipse(mouseX, mouseY, 100, 100, 100);

  r = map(mouseX, 600, 30, 25, 100);
  g = map(mouseX, 20, 200, 10, 135);
  b = map(mouseX, 600, 0, 100, 255);


  
}