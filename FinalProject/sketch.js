// Goblin Friendship Simulator M.K. 2
// Dylan Yelich
// December 20, 2018

let theWidth, theHeight;
let state;
let minigameDuration = 30000;
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
let street;
let vehicle;
let car;

let showVehicle;



let startScreen;
let backgroundStart;


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

class Vehicle {
  constructor() {
    this.x = 0;
    this.y = 500;
    if (keyIsPressed && key === "w") {
      this.x = 250;
    }
    if (keyIsPressed && key === "s") {
      this.x = 750;
    }
  }
  display() {
    if (showVehicle === true) {
      image(vehicle, 0, 0, theWidth, theHeight);
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

function preload() {
  showJay = false;
  showGooblij = false;
  showChiara = false;
  showKahl = false;
  showFalia = false;
  noText = false;
  showVehicle = false;

  theWidth = windowWidth;
  theHeight = 7.8 / 16 * theWidth;
  state = 0;
  stateChange = millis();

  //backgrounds, textboxes, etc.
  textBoxNormal = loadImage("assets/textboxNormal.png");
  startScreen = loadImage("assets/startScreen.png");
  backgroundStart = loadImage("assets/backgroundStart.png");

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

  normalTextbox = new TextboxNormal();

  jay = new Jay;
  gooblij = new Gooblij;
  chiara = new Chiara;
  kahl = new Kahl;
  falia = new Falia;
  vehicle = new Vehicle;

}

function draw() {
  background(255);
  checkPeriod();

  jay.display();
  gooblij.display();
  chiara.display();
  kahl.display();
  falia.display();

  vehicle.display();

  normalTextbox.display();
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
    state = 10;
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
    textColor = "black";
    characterTalk = "You're a pizza delivery person delivering the strangest order you've ever gotten;";
  }
  else if (state === 3) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "black";
    characterTalk = "A quarter pineapple, quarter cheese, quarter candles and quarter dead mice pizza.";
  }
  else if (state === 4) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "black";
    characterTalk = "Look, it's you now.";
    showJay = true;
    jayEmotion = 1;
  }
  else if (state === 5) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "black";
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
    textColor = "black";
    characterTalk = "Those customers wouldn't want a cold pizza.";
    jayEmotion = 6;
  }
  else if (state === 9) {
    image(street, 0, 0, theWidth, theHeight);
    showJay = false;
    noText = true;
    showVehicle = true;
    let elapsedTime = millis() - stateChange;
    if (elapsedTime >= minigameDuration) {
      state = 10;
    }
  }
  else if (state === 10) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    showJay = true;
    noText = false;
    showVehicle = false;
    characterTalk = "You've made it to your destination.";
  }
}
