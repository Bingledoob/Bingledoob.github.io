// Goblin Friendship Simulator M.K. 2
// Dylan Yelich
// December 20, 2018

let theWidth, theHeight;

let state;

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

let showFalmer;
let falmer;


//jay emotion variables
let jayEmotion;
let jayNeutral;
let jayDisgruntled;
let jayConfusedOpen;

//gooblij emotion variables


//chiara emotion variables


//kahl emotion variables


//falmer emotion variables


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
        image(jayDisgruntled, 0, 0, theWidth, theHeight);
      }
      else if (jayEmotion === 3) {
        image(jayConfusedOpen, 0, 0, theWidth, theHeight);
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
    // if (showGooblij === true) {
    // }
  }
}

class Chiara {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    // if (showChiara === true) {
    // }
  }
}

class Kahl {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    // if (showKahl === true) {
    // }
  }
}

class Falmer {
  constructor (){
    this.x = 0;
    this.y = 0;
  }
  display() {
    // if (showFalmer === true) {
    // }
  }
}

function preload() {
  showJay = false;
  noText = false;
  theWidth = windowWidth;
  theHeight = 7.8 / 16 * theWidth;
  state = 0;

  //backgrounds, textboxes, etc.
  textBoxNormal = loadImage("assets/textboxNormal.png");
  startScreen = loadImage("assets/startScreen.png");
  backgroundStart = loadImage("assets/backgroundStart.png");

  //jay's emotions
  jayNeutral = loadImage("assets/Jay Neutral.png");
  jayDisgruntled = loadImage("assets/Jay Disgruntled.png");
  jayConfusedOpen = loadImage("assets/Jay Confused (Mouth).png");

  //gooblij's emotions


  //kahl's emotions


  //chiara's emotions


  //the falmer's emotions


}

function setup() {
  createCanvas(theWidth, theHeight);

  normalTextbox = new TextboxNormal();

  jay = new Jay;
  gooblij = new Gooblij;
  chiara = new Chiara;
  kahl = new Kahl;
  falmer = new Falmer;

}

function draw() {
  background(255);
  checkPeriod();
  jay.display();
  gooblij = new Gooblij;
  chiara = new Chiara;
  kahl = new Kahl;
  falmer = new Falmer;

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
  // else if (state === 6) {
  //   state = 7;
  // }
  // else if (state === 7) {
  //   state = 8;
  // }


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
    jayEmotion = 2;
  }
  else if (state === 6) {
    image(backgroundStart, 0, 0, theWidth, theHeight);
    textColor = "white";
    characterTalk = "H-hey! I prefer 'tolerable'...";
    jayEmotion = 2; //make a speaking option
  }
}
