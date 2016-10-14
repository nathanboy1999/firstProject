function setup() {
  createCanvas( windowWidth , windowHeight );
  background( 255, 0 , 0 )
}

function draw() {
  ellipse( mouseX , mouseY , 110 , 110 );
  fill(15,75,15)
  var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
}
