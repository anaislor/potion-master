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
      "../images/flies.png",
      "../images/leeches.png",
      "../images/bicorn-horn.png",
      "../images/boomslang-skin.png",
      "../images/elixir.png",
      "../images/plant.png"
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
    let answerleft = [0];
    let tryleft = [0];
    console.log(answerleft);
    console.log(answerleft);
    for (let i = 0; i < this.try.length; i++) {
      if (this.answer.includes(this.try[i])) {
        //vérifier si l'ingrédient est présent et à la bonne place
        if (this.try[i] === this.answer[i]) {
          console.log(`${this.try[i]} is in the array at the good place`);
          let helpGreen = document.querySelector(".try:last-child");
          helpGreen.innerHTML += `<img class="help" src="../images/green.png">`;
        } else {
          console.log(`${this.try[i]} is not found yet!`);
          answerleft.push(this.answer[i]);
          tryleft.push(this.try[i]);
        }
      }
      //ingrédient n'existe pas
      else {
        answerleft.push(this.answer[i]);
        console.log(`${this.try[i]} not found in the answer`);
      }
    }
    console.log(`answer left ${answerleft}`);
    console.log(`try left ${tryleft}`);
    //vérifier si l'ingrédient est présent mais pas à la bonne place
    let sumanswer;
    for (let j = 1; j < tryleft.length; j++) {
      let filtertry = tryleft.filter(word => word === tryleft[j]).length - j;
      let filteranswer = answerleft.filter(word => word === tryleft[j]).length;
      console.log(`filter answer ${filteranswer}`);
      console.log(`filter try ${filtertry}`);
      if (filtertry <= filteranswer && filteranswer > 0) {
        console.log(`${tryleft[j]} is in the answer but not at the good place`);
        answerleft.splice(answerleft.indexOf(tryleft[j]), 1);
        let helpRed = document.querySelector(".try:last-child");
        helpRed.innerHTML += `<img class="help" src="../images/red.png">`;
      } else {
        console.log(`${tryleft[j]} not found in the answer`);
      }
    }

    if (this.arrayEqual() === true) {
      showPopupWinner(this.score, this.player[0]);
      tryleft.splice(1, 4);
      answerleft.splice(1, 4);
    }
    tryleft.splice(1, 4);
    answerleft.splice(1, 4);
    this.triesList += 1;
    this.scorecalculation();
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
    this.try.splice(0, 4);
  }

  finishGame() {
    if (this.arrayEqual() === true) {
      showPopupWinner(this.score, this.player[0]);
    } else {
      showPopupLooser();
    }
  }
}

let potionMaster = new Game();

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

var flies = new Ingredient("Flies", "../images/flies.png");
var leeches = new Ingredient("Leeches", "../images/leeches.png");
var bicornHorn = new Ingredient("Bicorn Horn", "../images/bicorn-horn.png");
var boomslangSkin = new Ingredient(
  "Boomslang Skin",
  "../images/boomslang-skin.png"
);
var lovePhilter = new Ingredient("Love Philter", "../images/elixir.png");
var knotgrass = new Ingredient("Knotgrass", "../images/plant.png");
var popup;

window.addEventListener("DOMContentLoaded", function() {
  popup = document.getElementById("popup_1");
  let title = document.title;
  potionMaster.player.push(title);
});

//afficher les alertes
function showPopupLooser() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="looserAlert">
  <h3>Looser...</h3>
  <img src="../images/looser.gif" alt="looser">
  <div id="answer">
  <p>The good recipe</p>
  <img class="answer" src="${potionMaster.answerImage[0]}">
  <img class="answer" src="${potionMaster.answerImage[1]}">
  <img class="answer" src="${potionMaster.answerImage[2]}">
  <img class="answer" src="${potionMaster.answerImage[3]}">
  </div>
  <div class="popupbtn">
  <button class="btn" onclick="location.reload()">Play again !</button>
  <a class="btn" href="../index.html">Menu</a>
  </div>
  </div>`;
  potionMaster.player.push(title);
  console.log(potionMaster.player[0]);
}

function showPopupWinner(score, name) {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerAlert">
  <h3>${score} points for <span>${name}<span> !</h3>
  <img src="../images/winner.gif" alt="winner">
  <div class="popupbtn">
  <button class="btn" onclick="location.reload()">Play again !</button>
  <a class="btn" href="../index.html">Menu</a>
  </div>
  </div>`;
}

class Character {
  constructor(name, image, html) {
    this.name = name;
    this.image = image;
    this.score = 120;
    this.html = html;
  }
}

var gryffindor = new Character(
  "gryffindor",
  "../images/gryffindor.png",
  "../html/gryffindor.html"
);
var slytherin = new Character(
  "slytherin",
  "../images/slytherin.png",
  "../html/slytherin.html"
);
var hufflepuff = new Character(
  "hufflepuff",
  "../images/hufflepuff.png",
  "../html/hufflepuff.html"
);
var ravenclaw = new Character(
  "ravenclaw",
  "../images/ravenclaw.png",
  "../html/ravenclaw.html"
);
