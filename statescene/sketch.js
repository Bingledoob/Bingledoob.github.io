// Goblin Friendship Simulator
// Dylan Yelich
// September 27
//
// Make Frend With Gobbo

let state;
let lastStateChange;

//images
let door;
let houseWindow;
let goblinDoor1;
let goblinDoor2;
let house;



function preload() {
  state = 1;
  door = loadImage("assets/Door.png");
  houseWindow = loadImage("assets/Window.png");
  goblinDoor1 = loadImage("assets/Goblin 1D.png");
  goblinDoor2 = loadImage("assets/Goblin 2D.png");
  house = loadImage("assets/House Background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  checkState();
}

function checkState() {
  let elapsedTime = millis() - lastStateChange;
  if (state === 1) {
    image(house, 0, 0);
    image(door, 50, 90);
  }
}

function clickDoor() {
  if (mouseIsPressed() && mouseX >= 50 && mouseX <= 90 && mouseY >= 90 && mouseY <= 50) {
    state = 2;
  }
}
