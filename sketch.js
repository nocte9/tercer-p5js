var radioMayor = 40;
var x = 0;
var y = 0;
var destinoX = 400;
var destinoY = 650;
var easing = 0.06;

function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(220);

  //Cuadrado rojo
  strokeWeight(0);
  fill(150, 5, 5);
  quad(185, 440, 160, 330, 270, 300, 295, 410);

  //Cuadrado negro
  fill(0);
  rect(mouseX + 0, mouseY + 0, 170, 170);

  //
  if (mouseIsPressed) {
    fill(
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 255)
    );

    rect(mouseX + 0, mouseY + 0, 170, 170);
    rect(mouseX - 60, mouseY - 60, 170, 170);

    destinoX = mouseX;
    destinoY = mouseY;
  }

  x += (destinoX - x) * easing;
  y += (destinoY - y) * easing;

  ellipseMode(RADIUS);
  translate(x, y);
  rotate(radians(x));

  fill(0);
  ellipse(0, 0, radioMayor, radioMayor);
}
