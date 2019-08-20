class Game{
  constructor(){
    this.answer = [];
    this.triesList = 0;
    this.try = [];
  }


  randomAnswer(){
    let proposition =["Flies", "Leeches", "Bicorn Horn", "Boomslang Skin"]

    for(let i = 0; i < 4; i++){
    let random = Math.floor(Math.random() * 4);
    this.answer.push(proposition[random])
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
      window.alert("You finish the game!")
      location.reload()
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
    }
    this.triesList +=1
    console.log(this.triesList)
    this.emptyArray()
    this.finishGame()
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
    if(this.triesList === 12){
      window.alert(`Oops you lose ! This was the combination: ${this.answer}`)
      location.reload()
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