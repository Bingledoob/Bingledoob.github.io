// Goblin Friendship Simulator
// Dylan Yelich
// September 27
//
// Make Frend With Gobbo

let state;
let gobStateDuration = 2000;
let lastEndingDuration = 4000;
let lastStateChange;

//holy bagoli look at all these image variables
let house;
let goblin1;
let goblin2;
let goblin3;
let leavingButton;
let stayingButton;

let goblinLeave;
//wowie theres more
let goblinPolice1;
let goblinPolice2;
let ending1;
let ending2;
let ending3;
let ending4;
let ending5;
let ending6;
let ending7;

let goblinHeart1;
let goblinHeart2;
let goblinHeart3;

function preload() { //oh wow these image variables are turning into images
  state = 1;
  lastStateChange = 0;
  house = loadImage("assets/House Background.png");
  goblin1 = loadImage("assets/Goblin 1D.png");
  goblin2 = loadImage("assets/Goblin 2D.png");
  goblin3 = loadImage("assets/Goblin 3D.png");
  leavingButton = loadImage("assets/Leaving Button.png");
  stayingButton = loadImage("assets/Staying Button.png");

  goblinLeave = loadImage("assets/Leaving.png");

  goblinPolice1 = loadImage("assets/Goblin 1Y.png");
  goblinPolice2 = loadImage("assets/Goblin 2Y.png");
  ending1 = loadImage("assets/Ending 1.png");
  ending2 = loadImage("assets/Ending 2.png");
  ending3 = loadImage("assets/Ending 3.png");
  ending4 = loadImage("assets/Ending 4.png");
  ending5 = loadImage("assets/Ending 5.png");
  ending6 = loadImage("assets/Ending 6.png");
  ending7 = loadImage("assets/Ending 7.png");

  goblinHeart1 = loadImage("assets/Goblin Heart 1.png");
  goblinHeart2 = loadImage("assets/Goblin Heart 2.png");
  goblinHeart3 = loadImage("assets/Goblin Heart 3.png");
}
//phew we're away from the images
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  checkState();
}
//whenever you click your mouse in the right place at the right time
function mousePressed() {
  if (state === 1) {
    state = 2;
    lastStateChange = millis();
  }
  else if (state === 4 && mouseX >= 60 && mouseX <=390 && mouseY >= 550 && mouseY <= 700) {
    state = 5; //ending state
    lastStateChange = millis();
  }
  else if (state === 4 && mouseX >= 1150 && mouseX <= 1500 && mouseY >= 550 && mouseY <= 700) {
    state = 6;
    lastStateChange = millis();
  }
  else if (state === 7 && mouseX >= 575 && mouseX <= 750 && mouseY >= 300 && mouseY <= 500) {
    state = 15;
    lastStateChange = millis();
  }
}

function hospitalMinigame() {

}

//WARNING
//this code is freakin' finger vomit
//if you want to keep your sanity, then just look at the first one
//theyre all the same except the last one, which is just the first couple of lines
//either way you WILL lose your mind looking at this shiz V V V V


function checkState() {
  if (state === 1) {
    image(house, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 2) {
    image(goblin1, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 3;
      lastStateChange = millis();
    }
  }
  else if (state === 3) {
    image(goblin2, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 4;
      lastStateChange = millis();
    }
  }
  else if (state === 4) {
    image(goblin3, 0, 0, windowWidth, windowHeight);
    image(leavingButton, 0, 0, windowWidth, windowHeight);
    image(stayingButton, 0, 0, windowWidth, windowHeight);
  } // V V button states V V
  else if (state === 5) { //ending state
    image(goblinLeave, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 6) {
    image(goblinPolice1, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 7;
      lastStateChange = millis();
    }
  }
  else if (state === 7) {
    image(goblinPolice2, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 8;
      lastStateChange = millis();
    } //these are all the ending frames, theres a lot of them
  }
  else if (state === 8) {
    image(ending1, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 9;
      lastStateChange = millis();
    }
  }
  else if (state === 9) {
    image(ending2, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 10;
      lastStateChange = millis();
    }
  }
  else if (state === 10) {
    image(ending3, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 11;
      lastStateChange = millis();
    }
  }
  else if (state === 11) {
    image(ending4, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 12;
      lastStateChange = millis();
    }
  }
  else if (state === 12) {
    image(ending5, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 13;
      lastStateChange = millis();
    }
  }
  else if (state === 13) {
    image(ending6, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= lastEndingDuration) {
      state = 14;
      lastStateChange = millis();
    }
  }
  else if (state === 14) {
    image(ending7, 0, 0, windowWidth, windowHeight);
  }
  else if (state === 15) {
    image(goblinHeart1, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 16;
      lastStateChange = millis();
    }
  }
  else if (state === 16) {
    image(goblinHeart2, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 17;
      lastStateChange = millis();
    }
  }
  else if (state === 17) {
    image(goblinHeart3, 0, 0, windowWidth, windowHeight);
    let elapsedTime = millis() - lastStateChange;
    if (elapsedTime >= gobStateDuration) {
      state = 18;
      lastStateChange = millis();
    }
  }
  else if (state === 18) {
    hospitalMinigame();
  }
}
//told ya it was finger vomit
