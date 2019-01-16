// Plants Vs. Zombies Bad Verion
//
// October 26, 2018

let rows = 5;
let cols = 9;
let grid;
let grid2;
let cellSize;

let grassWalk;
let peaPooterSeed;
let peaPooter;
let zombieMan;
let deadScreen;

let peaDeathRate = 6000;
let peaRecharge = 5000;
let zombieMoveRate = 4000;
let zombieSpawnRate = 4000;
let lastChangeR;
let lastChangeZ;
let lastChangeZ2;
let zombiePlacement;

function preload() {
  grassWalk = loadSound("assets/GrasswalkMIDI.mp3");
  grid = createLawn(cols, rows);

  peaPooterSeed = loadImage("assets/PeaPooterSeed.png");
  peaPooter = loadImage("assets/PeaPooter.png");
  zombieMan = loadImage("assets/Zombie.png");
  deadScreen = loadImage("assets/DeathScreen.png");
}

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / 1.5 / cols;
  lastChangeR = 0;
  lastChangeZ = 0;
  lastChangeZ2 = 0;

  grassWalk.loop();

}

function draw() {
  background(255);
  image(peaPooterSeed, 0, 280);
  displayLawn();
  placeZombie();
}

function placeZombie() {
  let elapsedTimeZ = millis() - lastChangeZ;
  zombiePlacement = floor(random(1, 5));
  if (elapsedTimeZ >= zombieSpawnRate) {
    if (zombiePlacement === 1) {
      grid[0][8] = 2;
      zombiePlacement = random(1, 5);
    }
    if (zombiePlacement === 2) {
      grid[1][8] = 2;
      zombiePlacement = random(1, 5);
    }
    if (zombiePlacement === 3) {
      grid[2][8] = 2;
      zombiePlacement = random(1, 5);
    }
    if (zombiePlacement === 4) {
      grid[3][8] = 2;
      zombiePlacement = random(1, 5);
    }
    if (zombiePlacement === 5) {
      grid[4][8] = 2;
      zombiePlacement = random(1, 5);
    }
    lastChangeZ = millis();
  }
}

// V V V   Planting Peas and Recharging Sprite Thingy   V V V \\

function mousePressed() {
  let x = floor(mouseX / cellSize);
  let y = floor(mouseY / cellSize);
  let elapsedTimeR = millis() - lastChangeR;
  if (elapsedTimeR >= peaRecharge) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    lastChangeR = millis();
  }
}

function displayLawn() {
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
      if (grid[y][x] === 2) {
        image(zombieMan, x*cellSize, y*cellSize, cellSize, cellSize);
        if (grid[y] === 0) {
          image(deadScreen);
        }
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
