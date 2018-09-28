// Goblin Friendship Simulator
// Dylan Yelich
// September 27
//
// Make Frend With Gobbo

let door;
let houseWindow;
let goblinDoor1;
let goblinDoor2;
let house;
let state;


function preload() {
  state = 1
  door = loadImage("assets/Door.png");
  houseWindow = loadImage("assets/Window.png");
  goblinDoor1 = loadImage("assets/Goblin 1D.png");
  goblinDoor2 = loadImage("assets/Goblin 2D.png");
  house = loadImage("assets/House Background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  checkState();
}

function checkState() {
  if (state === 1) {
    house(0, 0);
  }
}
