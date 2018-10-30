// Plants Vs. Zombies Array
// Dylan Yelich
// October 26, 2018

let rows = 5;
let cols = 9;
let grid;
let cellSize;
let plantID;
let zombieHealth;

let peaPooter;
let lightPetal;
let peaPoot;
let lightPet;
let zombieFull;
let zombieHalf;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }

  cellSize = width / 1.5 / cols;
  grid = createLawn(cols, rows);

  peaPooter = loadImage("assets/PeaPooterSeed.png");
  lightPetal = loadImage("assets/LightPetalSeed.png");
  peaPoot = loadImage("assets/PeaPoot.png");
  lightPet = loadImage("assets/LightPet");
  zombieFull = loadImage("assets/ZombieFullHealth");
  zombieHalf = loadImage("assets/ZombieHalfHealth");

  plantID = 0;
  zombieHealth = 10;
}

function draw() {
  background(255);
  displayLawn();
  displaySeeds();
  zombieSpawn();
}

function displaySeeds() {
  image(peaPooter, 0, 280);
  image(lightPetal, 100, 280);
}

function zombieSpawn() {

}

// V V V   Planting Stuff   V V V \\

function mousePressed() {

  //plant ID 0: Nothing
  //plant ID 1: Peapooter
  //plant ID 2: Light Petal

  if (mouseX > 0 && mouseX < 100 && mouseY > 280 && mouseY < 480) {

    if (plantID === 0) {
      plantID = 1;
    }
  }
  if (mouseX > 100 && mouseX < 200 && mouseY > 280 && mouseY < 480) {

    if (plantID === 0) {
      plantID = 2;
    }
  }

  if (mouseX > 0 && mouseX < 66.7 && mouseY > 0 && mouseY < 66.7 ) {

    if (plantID === 1) {
      image(peaPoot, 0, 0);
      plantID = 0;
    }

    if (plantID === 2) {
      image(lightPet, 0, 0);
      plantID = 0;
    }

  }
}

//tiles are 66.7 X 66.7

function displayLawn() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(62, 155, 62);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createLawn(cols, rows) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}
