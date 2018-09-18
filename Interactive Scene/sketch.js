// Interactive Scene
// Dylan Yelich
// Sept 12
//
//CONTROLS: 1 = Black, 2 = White, 3 = Red, 4 = Green, 5 = Blue, 6 = Brown, 7 = Purple, 8 = Yellow, 9 = Pink, 0 = Grey
//CONTROLS: A = Pen size Small, S = Pen Size Average, D = Pen Size Large, F = Pen Size Thick
//CONTROLS: W = Resets Drawing and Changes background to White, B = Resets Drawing and Change background to Black
//CONTROLS: G = Save and Download Drawn Picture to your Computer (Virus Free!)

function setup() {
  createCanvas(windowWidth, windowHeight);
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
      stroke(0,0,0);  //Black
		}
    if (key === '2') {
      stroke(255,255,255);  //White
    }
    if (key === '3') {
      stroke(255,0,0);  //Red
    }
    if (key === '4') {
      stroke(0,155,0);  //Green
    }
    if (key === '5') {
      stroke(0,0,255);  //Blue
    }
    if (key === '6') {
      stroke(75, 50, 15);  //Brown
    }
    if (key === '7') {
      stroke(175, 0, 255);  //Purple
    }
    if (key === '8') {
      stroke(255, 210, 60);  //Yellow
    }
    if (key === '9') {
      stroke(255, 200, 200);  //Pink
    }
    if (key === '0') {
      stroke(135, 135, 135);  //Grey
    }
		if (key === 'a') {
      strokeWeight(2)
		}
    if (key === 's') {
      strokeWeight(4)
    }
    if (key === 'd') {
      strokeWeight(7)
    }
    if (key === 'f') {
      strokeWeight(10)
    }
    if (key === 'g') {
      saveCanvas('png');
    }
  }
}
