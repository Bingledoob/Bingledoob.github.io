// Goblin Friendship Simulator M.K. 2
// Dylan Yelich
// December 20, 2018

let theWidth, theHeight;
let state;
let stateChange;

let textBoxNormal;
let normalTextbox;
let noText;
let textColor;
let characterTalk;

//character variables
let showJay;
let jay;

let showGooblij;
let gooblij;

let showChiara;
let chiara;

let showKahl;
let kahl;

let showFalia;
let falia;


//jay emotion variables
let jayEmotion;
let jayNeutral;
let jayNeutralMouth;
let jayDisgruntled;
let jayDisgruntledMouth;
let jayConfusedMouth;
let jayDetermined;
let jayDeterminedMouth;

//gooblij emotion variables
let gooblijEmotion;
let gooblijSmile;

//chiara emotion variables
let chiaraEmotion;
let chiaraSmile;

//kahl emotion variables
let kahlEmotion;
let kahlNeutral;

//falia emotion variables
let faliaEmotion;
let faliaNeutral;

//minigame assets
let scooter;
let street;
let vehicle;
let enemyCar;
let car;

let showVehicle;
let streetSide;

let minigameDuration = 45000;

//spawning the car variables
let carSpawnRate = 5000;
let lastChange;

let startScreen;
let backgroundStart;
let outsideHouse;
let handKnob;
let gnomeIntroduce;
let goblinIntroduce;

let gnomeGrunt;


class TextboxNormal {
  constructor(){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (noText === false) {
      let text = canvas.getContext("2d");
      text.font="25px Arial";
      text.fillStyle = textColor;
      text.textAlign = "center";
      image(textBoxNormal, 0, 0, theWidth, theHeight);
      text.fillText(characterTalk, canvas.width/2, canvas.height-150);
    }
  }
}

class Jay {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (showJay === true) {
      if (jayEmotion === 1) {
        image(jayNeutral, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 2) {
        image(jayNeutralMouth, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 3) {
        image(jayConfusedMouth, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 4) {
        image(jayDisgruntled, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 5) {
        image(jayDisgruntledMouth, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 6) {
        image(jayDetermined, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 7) {
        image(jayDeterminedMouth, 0, 0, theWidth, theHeight);
      }
    }
  }
}

class Gooblij {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (showGooblij === true) {
      if (gooblijEmotion === 1) {
        image(gooblijSmile, 0, 0, theWidth, theHeight);
      }
    }
  }
}

class Chiara {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (showChiara === true) {
      if (chiaraEmotion === 1) {
        image(chiaraSmile, 0, 0, theWidth, theHeight);
      }
    }
  }
}

class Kahl {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (showKahl === true) {
      if (kahlEmotion === 1) {
        image(kahlNeutral, 0, 0, theWidth, theHeight);
      }
    }
  }
}

class Falia {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    if (showFalia === true) {
      if (faliaEmotion === 1) {
        image(faliaNeutral, 0, 0, theWidth, theHeight);
      }
    }
  }
}

class Vehicle {
  constructor() {
    this.x = 100;
    this.y = 100;
  }
  display() {
    if (showVehicle === true) {
      image(vehicle, this.x, this.y);
      if (this.y <= 80) {
        this.y = 79;
      }
      if (this.y >= 400) {
        this.y = 399;
      }
      if (this.x <= 80) {
        this.x = 79;
      }
      if (this.x >= 500) {
        this.x = 499;
      }
    }
  }
}

class CarEnemy {
  constructor() {
    this.x = 1400;
    this.y = 0;
    this.speedX = 1;
  }
  display() {
    if (showVehicle === true) {
      image(car, this.x, this.y);
    }
  }
  update() {
    this.x -= this.speedX;
  }
}

function preload() {
  showJay = false;
  showGooblij = false;
  showChiara = false;
  showKahl = false;
  showFalia = false;
  noText = false;
  showVehicle = false;

  theWidth = 1600;
  theHeight = 790;
  state = 0;
  stateChange = millis();

  //backgrounds, textboxes, etc.
  gnomeGrunt = loadSound("asset/gnomegrunt.mp3");
  textBoxNormal = loadImage("assets/textboxNormal.png");
  startScreen = loadImage("assets/startScreen.png");
  backgroundStart = loadImage("assets/backgroundStart.png");
  outsideHouse = loadImage("assets/Outside House.png");
  handKnob = loadImage("assets/Hand Knob.png");
  gnomeIntroduce = loadImage("assets/Goblin Opening (Gnome).png");
  goblinIntroduce = loadImage("assets/Goblin Opening.png");

  //jay's emotions
  jayNeutral = loadImage("assets/Jay Neutral.png");
  jayNeutralMouth = loadImage("assets/Jay Neutral (Mouth).png");
  jayDisgruntled = loadImage("assets/Jay Disgruntled.png");
  jayDisgruntledMouth = loadImage("assets/Jay Disgruntled (Mouth).png");
  jayConfusedMouth = loadImage("assets/Jay Confused (Mouth).png");
  jayDetermined = loadImage("assets/Jay Determined.png");
  jayDeterminedMouth = loadImage("assets/Jay Determined (Mouth).png");

  //gooblij's emotions
  gooblijSmile = loadImage("assets/Gooblij Smile.png");

  //kahl's emotions
  kahlNeutral = loadImage("assets/Kahl Neutral.png");

  //chiara's emotions
  chiaraSmile = loadImage("assets/Chiara Smile.png");

  //falia's emotions
  faliaNeutral = loadImage("assets/Falia Neutral.png");

  //minigame assets
  street = loadImage("assets/street.png");
  vehicle = loadImage("assets/vehicle.png");
  car = loadImage("assets/car.png");

}

function setup() {
  createCanvas(theWidth, theHeight);

  jay = new Jay;
  gooblij = new Gooblij;
  chiara = new Chiara;
  kahl = new Kahl;
  falia = new Falia;

  scooter = new Vehicle;

  normalTextbox = new TextboxNormal();
}

function draw() {
  background(255);
  checkPeriod();

  jay.display();
  gooblij.display();
  chiara.display();
  kahl.display();
  falia.display();

  scooter.display();

  normalTextbox.display();
  if (state === 9) {

    let elapsedTime = millis() - lastChange;

    if (elapsedTime >= carSpawnRate) {
      spawnVehicle();
      lastChange = millis();
    }
  }
}

function spawnVehicle() {
  enemyCar = new CarEnemy;
  streetSide = floor(random(0,1));
  if (streetSide === 0) {
    enemyCar.y = 150;
  }
  else if (streetSide === 1) {
    enemyCar.y = 400;
  }
  enemyCar.display();
  enemyCar.update();
}

//Mouse State Changes
function mousePressed() {
  if (state === 0) {
    state = 1;
  }
  else if (state === 1) {
    state = 2;
  }
  else if (state === 2) {
    state = 3;
  }
  else if (state === 3) {
    state = 4;
  }
  else if (state === 4) {
    state = 5;
  }
  else if (state === 5) {
    state = 6;
  }
  else if (state === 6) {
    state = 7;
  }
  else if (state === 7) {
    state = 8;
  }
  else if (state === 8) {
    state = 9;
  }
  else if (state === 10) {
    state = 11;
  }
  else if (state === 11) {
    state = 12;
  }
  else if (state === 12) {
    state = 13;
  }
  else if (state === 13) {
    state = 14;
  }





}

//Dialouge
function checkPeriod(){
  if (state === 0) {
    image(startScreen, 0, 0, theWidth, theHeight);
    noText = true;
  }
  else if (state === 1) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    noText = false;
    textColor = "black";
    characterTalk = "Your name is Jay.";
  }
  else if (state === 2) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    characterTalk = "You're a pizza delivery person delivering the strangest order you've ever gotten;";
  }
  else if (state === 3) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    characterTalk = "A quarter pineapple, quarter cheese, quarter candles and quarter dead mice pizza.";
  }
  else if (state === 4) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    characterTalk = "Look, it's you now.";
    showJay = true;
    jayEmotion = 1;
  }
  else if (state === 5) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    characterTalk = "Aren't you cute.";
    jayEmotion = 4;
  }
  else if (state === 6) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "white";
    characterTalk = "H-hey! I prefer 'tolerable'...";
    jayEmotion = 5;
  }
  else if (state === 7) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "black";
    characterTalk = "Well, you better get going Jay.";
    jayEmotion = 1;
  }
  else if (state === 8) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    characterTalk = "Those customers wouldn't want a cold pizza.";
    jayEmotion = 6;
  }
  else if (state === 9) {
    image(street, 0, 0, theWidth, theHeight);
    showJay = false;
    noText = true;
    showVehicle = true;


    // movement
    if (keyIsPressed && key === "w") {
      scooter.y -= 20;
    }
    else if (keyIsPressed && key === "s") {
      scooter.y += 20;
    }
    else if (keyIsPressed && key === "d") {
      scooter.x += 20;
    }
    else if (keyIsPressed && key === "a") {
      scooter.x -= 20;
    }

    let elapsedTime2 = millis();
    if (elapsedTime2 >= minigameDuration) {
      state = 10;
    }

  }
  else if (state === 10) {
    image(outsideHouse, 0, 0, theWidth, theHeight);
    noText = false;
    showVehicle = false;
    characterTalk = "You've made it to your destination.";
  }
  else if (state === 11) {
    image(outsideHouse, 0, 0, theWidth, theHeight);
    characterTalk = "The customer seems to be in the monster side of town, too.";
  }
  else if (state === 12) {
    image(outsideHouse, 0, 0, theWidth, theHeight);
    characterTalk = "Best to stay safe.";
  }
  else if (state === 13) {
    image(outsideHouse, 0, 0, theWidth, theHeight);
    characterTalk = "Who knows what lies behind this door--";
    let bleh = millis() - millis();
    if (bleh === 2000) {
      state = 14;
    }
  }
  else if (state === 14) {
    image(gnomeIntroduce, 0, 0, theWidth, theHeight);
    noText = true;
    gnomeGrunt.play();
  }
}
