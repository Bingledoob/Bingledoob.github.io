// Interactive Scene
// Dylan Yelich
// Sept 12
//
// Extra for Experts:
// -Not Expert Yet

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(4);
}

function draw() {
	if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  if (key === 'w') {
    background(255);
  }
  else if (key === 'b') {
    background(0);
  }
  if (keyIsPressed) {
    if (key === '1') {
      stroke(0,0,0);
		}
    if (key === '2') {
      stroke(255,255,255);
    }
    if (key === '3') {
      stroke(255,0,0);
    }
    if (key === '4') {
      stroke(0,155,0);
    }
    if (key === '5') {
      stroke(0,0,255);
    }
    if (key === '6') {
      stroke(75, 50, 15);
    }
    if (key === '7') {
      stroke(175, 0, 255);
    }
    if (key === '8') {
      stroke(255, 210, 60);
    }
    if (key === '9') {
      stroke(255, 200, 200);
    }
    if (key === '0') {
      stroke(135, 135, 135);
    }
		if (key === 'a') {

		}
  }
}
