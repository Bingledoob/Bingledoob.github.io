// Plants Vs. Zombies Array
// Dylan Yelich
// October 26, 2018

let rows = 5;
let cols = 9;
let grid;
let cellSize;
let plantID;

let peaPooterSeed;
let peaPooter;
let zombieFull;

let peaDeathRate = 6000;
let zombieMoveRate = 3000;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }

  cellSize = width / 1.5 / cols;
  grid = createLawn(cols, rows);

  peaPooterSeed = loadImage("assets/PeaPooterSeed.png");
  peaPooter = loadImage("assets/PeaPooter.png");
  zombieFull = loadImage("assets/ZombieFullHealth");

  plantID = 0;
}

function draw() {
  background(255);
  displayLawn();
  displaySeeds();
  // zombieSpawn();
}

function displaySeeds() {
  image(peaPooterSeed, 0, 280);
}

// function zombieSpawn() {
//
// }

// V V V   Planting Stuff   V V V \\

function mousePressed() {

  //plant ID 0: Nothing
  //plant ID 1: Peapooter

  if (mouseX > 0 && mouseX < 100 && mouseY > 280 && mouseY < 480) {

    if (plantID === 0) {
      plantID = 1;
    }
  }

  // if (mouseX > 0 && mouseX < 66.7 && mouseY > 0 && mouseY < 66.7 ) {
  //
  //   if (plantID === 1) {
  //     image(peaPooter, 0, 0);
  //     plantID = 0;
  //   }
  // }
}

//tiles are 66.7 X 66.7

function displayLawn() {
  grid = 1;  //<<< BIG ERROR; Try to make it so that it affects EVERY grid space
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(62, 155, 62);
        noStroke();
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }
      if (grid[y][x] === 1) {
        image(peaPooter, x*cellSize, y*cellSize, cellSize, cellSize);
      }
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
