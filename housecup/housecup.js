class Character {
  constructor(name, image, html, nb) {
    this.name = name;
    this.image = image;
    this.totalscore = 0;
  }
}

var gryffindor = new Character("gryffindor", "/images/gryffindor.png");
var slytherin = new Character("slytherin", "/images/slytherin.png");
var hufflepuff = new Character("hufflepuff", "/images/hufflepuff.png");
var ravenclaw = new Character("ravenclaw", "/images/ravenclaw.png");

class Game {
  constructor() {
    this.answer = [];
    this.answerImage = [];
    this.triesList = 0;
    this.try = [];
    this.player = [];
    this.score = 120;
  }

  randomAnswer() {
    let proposition = [
      "Flies",
      "Leeches",
      "Bicorn Horn",
      "Boomslang Skin",
      "Love Philter",
      "Knotgrass"
    ];
    let imageProposition = [
      "/images/flies.png",
      "/images/leeches.png",
      "/images/bicorn-horn.png",
      "/images/boomslang-skin.png",
      "/images/elixir.png",
      "/images/plant.png"
    ];

    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * 6);
      this.answer.push(proposition[random]);
      this.answerImage.push(imageProposition[random]);
    }
  }

  arrayEqual() {
    let sum = 0;
    for (let i = 0; i < this.answer.length; i++) {
      if (this.try[i] == this.answer[i]) {
        sum += 1;
      }
    }
    if (sum === 4) {
      return true;
    } else {
      return false;
    }
  }

  checkIf() {
    for (let i = 0; i < this.try.length; i++) {
      if (this.answer.includes(this.try[i])) {
        //vérifier si l'ingrédient est présent et à la bonne place
        if (this.try[i] === this.answer[i]) {
          console.log(`${this.try[i]} is in the array at the good place`);
          let helpGreen = document.querySelector(".try:last-child");
          helpGreen.innerHTML += `<img class="help" src="/images/green.png">`;
        }
        //vérifier si l'ingrédient est présent mais pas à la bonne place
        else {
          console.log(
            `${this.try[i]} is in the answer but not at the good place`
          );
          let helpRed = document.querySelector(".try:last-child");
          helpRed.innerHTML += `<img class="help" src="/images/red.png">`;
        }
      }
      //ingrédient n'existe pas
      else {
        console.log(`${this.try[i]} not found in the answer`);
      }
    }
    if (this.arrayEqual() === true) {
      this.scoreAdded();
      showPopupWinnerCup();
    }
    this.scorecalculation();
    this.triesList += 1;
    if (this.triesList === 12) {
      this.finishGame();
    }
    this.emptyArray();
  }

  arrayFull() {
    if (this.try.length === 4) {
      this.checkIf();
      return true;
    } else {
      return false;
    }
  }

  scorecalculation() {
    this.score -= 10;
    console.log(this.score);
  }

  emptyArray() {
    return this.try.splice(0, 4);
  }

  scoreAdded() {
    if (this.player.indexOf("gryffindor") === 0) {
      gryffindor.totalscore = this.score;
      localStorage.setItem("gryffindor", this.score);
    } else if (this.player.indexOf("slytherin") === 0) {
      slytherin.totalscore = this.score;
      localStorage.setItem("slytherin", this.score);
    } else if (this.player.indexOf("ravenclaw") === 0) {
      ravenclaw.totalscore = this.score;
      localStorage.setItem("ravenclaw", this.score);
    } else if (this.player.indexOf("hufflepuff") === 0) {
      hufflepuff.totalscore = this.score;
      localStorage.setItem("hufflepuff", this.score);
    }
  }

  finishGame() {
    if (this.arrayEqual() === true) {
      this.scoreAdded();
      showPopupWinnerCup();
    } else {
      this.scoreAdded();
      showPopupLooserCup();
    }
  }
}

let potionMaster = new Game();

console.log(potionMaster.player);

let popup;

window.addEventListener("DOMContentLoaded", function() {
  popup = document.querySelector(".popup");
  let title = document.title;
  potionMaster.player.push(title);
});

class Ingredient {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }

  addToTry() {
    potionMaster.try.push(this.name);
    console.log(`${this.name} add to try`);
  }
}

var flies = new Ingredient("Flies", "/images/flies.png");
var leeches = new Ingredient("Leeches", "/images/leeches.png");
var bicornHorn = new Ingredient("Bicorn Horn", "/images/bicorn-horn.png");
var boomslangSkin = new Ingredient(
  "Boomslang Skin",
  "/images/boomslang-skin.png"
);
var lovePhilter = new Ingredient("Love Philter", "/images/elixir.png");
var knotgrass = new Ingredient("Knotgrass", "/images/plant.png");

//afficher les alertes
function showPopupLooserCup() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="looserAlert">
  <h3>Looser...</h3>
  <img src="/images/looser.gif" alt="looser">
  <div id="answer">
  <p>The good recipe</p>
  <img class="answer" src="${potionMaster.answerImage[0]}">
  <img class="answer" src="${potionMaster.answerImage[1]}">
  <img class="answer" src="${potionMaster.answerImage[2]}">
  <img class="answer" src="${potionMaster.answerImage[3]}">
  </div>
  <a class="btn" href="/housecup/score.html">Score</a>
  </div>`;
}

function showPopupWinnerCup() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerAlert">
  <h3>Congratulation!</h3>
  <img src="/images/winner.gif" alt="winner">
  <a class="btn" href="/housecup/score.html">Score</a>
  </div>`;
}
