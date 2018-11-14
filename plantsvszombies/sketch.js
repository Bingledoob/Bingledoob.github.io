// Plants Vs. Zombies Array Assignment
// Dylan Yelich
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

// let time;
// let zombieTime;

function preload() {
  grassWalk = loadSound("assets/GrasswalkMIDI.mp3");
  grid = createLawn(cols, rows);

  //grid2 = createTimeLawn();

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
  
  // time = 0;

  grassWalk.loop();

}

function draw() {
  background(255);
  image(peaPooterSeed, 0, 280);
  displayLawn();
  placeZombie();

  // timeLawn();

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

//tiles are 66.7 X 66.7

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
        // zombieTime = millis();
        // if (zombieTime === millis() - zombieMoveRate) {
        //   grid[y][x] = 0;
        //   grid[y][x-1] = 2;
        //   zombieTime = 0;
        // }

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

//storing zombie's movement milliseconds//



// let elapsedTimeZ2 = millis() - lastChangeZ2;
// if (elapsedTimeZ2 >= zombieMoveRate) {
//   grid[y][x] = 0;
//   grid[y][x-1] = 2;
//   lastChangeZ2 = millis();
// }



// function createTimeLawn(cols, rows) {
//   let grid2 = [];
//   for (let y = 0; y < rows; y++) {
//     grid2.push([]);
//     for (let x = 0; x < cols; x++) {
//       grid2[y].push(0);
//     }
//   }
//   return grid2;
// }
//
// function timeLawn() {
//   let elapsedTimeZ2 = millis() - lastChangeZ2;
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       if (grid[y][x] === 0) {
//         time = 0;
//       }
//       if (grid[y][x] === 2) {
//         time = zombieTime;
//         if (elapsedTimeZ2 >= zombieMoveRate) {
//           zombieTime - 4000;
//         }
//       }
//     }
//   }
// }
