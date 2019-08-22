
class Game{
  constructor(){
    this.answer = [];
    this.answerImage=[]
    this.triesList = 0;
    this.try = [];
    this.players=[];
  }


  randomAnswer(){
    let proposition =["Flies", "Leeches", "Bicorn Horn", "Boomslang Skin", "Love Philter", "Knotgrass"];
    let imageProposition =["/images/flies.png", "/images/leeches.png","/images/bicorn-horn.png","/images/boomslang-skin.png","/images/elixir.png","/images/plant.png"]

    for(let i = 0; i < 4; i++){
    let random = Math.floor(Math.random() * 6);
    this.answer.push(proposition[random])
    this.answerImage.push(imageProposition[random])
    }

  }

  arrayEqual(){
    let sum = 0
    for(let i=0; i < this.answer.length; i++){
      if(this.try[i] == this.answer[i]){
        sum +=1
      }
    }
      if(sum === 4){
        return true
      }
      else{return false}
    }


  checkIf(){
    if(this.arrayEqual() === true){
      showPopupWinner()
    }
    else{
      //vérifier si l'ingrédient est présent et à la bonne place
      for(let i=0; i < this.answer.length; i++){
        let answerFilter= this.answer.filter(ingredient => ingredient === this.try[i])
        let tryFilter= this.try.filter(ingredient => ingredient === this.try[i]);
        if(this.try[i] === this.answer[i]){
          console.log(`${this.try[i]} is in the array at the good place`)
          let helpGreen= document.querySelector(".try:last-child")
          helpGreen.innerHTML += `<img class="help" src="/images/green.png">`
        }
        
        //vérifier si l'ingrédient est présent mais pas à la bonne place
        else if(tryFilter.length <= answerFilter.length && i-1 <= answerFilter.length){
          console.log(`${this.try[i]} is in the answer but not at the good place`)
          let helpRed= document.querySelector(".try:last-child")
          helpRed.innerHTML += `<img class="help" src="/images/red.png">`
        }
        //l'ingrédient n'est pas présent
        else{
          console.log(`${this.try[i]} not found in the answer`)

        }
      }
      if(Character.name === "gryffindor"){
        gryffindor.score -= 10;
        console.log(gryffindor.score)
      }
      else if(Character.name === "slytherin"){
        slytherin.score -= 10;
        console.log(slytherin.score);
      }
      else if(Character.name === "ravenclaw"){
        ravenclaw.score -= 10;
        console.log(ravenclaw.score);
      }
      else {
        hufflepuff.score -= 10;
        console.log(hufflepuff.score);
      }
    }
    this.triesList +=1
    if(this.triesList === 2){
      this.finishGame()
    }
    this.emptyArray()
  }

  arrayFull(){
    if(this.try.length === 4){
      this.checkIf()
      return true
    }
    else{
      return false
    }
  }

  emptyArray(){
    return this.try.splice(0,4)
  }

  finishGame(){
      if(this.arrayEqual() === true){
        showPopupWinner()
      }
      else{
        showPopupLooser()
      }
  }
}

let potionMaster = new Game()

class Ingredient{
  constructor(name, image){
    this.name= name;
    this.image= image;
  }

  addToTry(){
    potionMaster.try.push(this.name)
    console.log(`${this.name} add to try`)
  }
}

var flies = new Ingredient("Flies", "/images/flies.png");
var leeches = new Ingredient("Leeches","/images/leeches.png");
var bicornHorn = new Ingredient("Bicorn Horn", "/images/bicorn-horn.png");
var boomslangSkin = new Ingredient("Boomslang Skin","/images/boomslang-skin.png")
var lovePhilter = new Ingredient("Love Philter", "/images/elixir.png");
var knotgrass = new Ingredient("Knotgrass","/images/plant.png");
var popup;

window.addEventListener("DOMContentLoaded", function() {
    popup = document.getElementById("popup_1");
});


//afficher les alertes
function showPopupLooser() {
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
  <div class="popupbtn">
  <button class="btn" onclick="location.reload()">Play again !</button>
  <a class="btn" href="/html/intro.html">Menu</a>
  </div>
  </div>`

}

function showPopupWinner() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerAlert">
  <h3>Congratulation!</h3>
  <img src="/images/winner.gif" alt="winner">
  <div class="popupbtn">
  <button class="btn" onclick="location.reload()">Play again !</button>
  <a class="btn" href="/html/intro.html">Menu</a>
  </div>
  </div>`

}

class Character{
  constructor(name, image, html){
    this.name= name;
    this.image= image;
    this.score= 120;
    this.html= html
  }
}

var gryffindor = new Character("gryffindor", "/images/gryffindor.png","/html/gryffindor.html");
var slytherin = new Character("slytherin", "/images/slytherin.png","/html/slytherin.html");
var hufflepuff= new Character("hufflepuff","/images/hufflepuff.png","/html/hufflepuff.html");
var ravenclaw = new Character("ravenclaw","/images/ravenclaw.png","/html/ravenclaw.html")

// house cup

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
  <a class="btn" href="/html/score.html">Score !</a>
  </div>`

}

function showPopupWinnerCup() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerAlert">
  <h3>100 points for Gryffondor !</h3>
  <img src="/images/winner.gif" alt="winner">
  <a class="btn" href="/html/score.html">Score !</a>
  </div>`

}

