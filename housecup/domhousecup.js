
 
 //score of house cup
  let slytherinPoints = localStorage.getItem("slytherin");
  let gryffindorPoints = localStorage.getItem("gryffindor");
  let ravenclawPoints = localStorage.getItem("ravenclaw");
  let hufflepuffPoints = localStorage.getItem("hufflepuff");

 let gryffindorScore = document.querySelector("#gryffindor p");
 let slytherinScore = document.querySelector("#slytherin p");
 let ravenclawScore = document.querySelector("#ravenclaw p");
 let hufflepuffScore = document.querySelector("#hufflepuff p");
 let popup = document.querySelector(".popup")

 gryffindorScore.innerHTML = `${Number(gryffindorPoints)} points`;
 slytherinScore.innerHTML = `${Number(slytherinPoints)} points`;
 ravenclawScore.innerHTML = `${Number(ravenclawPoints)} points`;
 hufflepuffScore.innerHTML = `${Number(hufflepuffPoints)} points`;

 let winnerIs = [
   {name:"slytherin", points: slytherinPoints},
   {name:"gryffindor", points: gryffindorPoints},
   {name:"ravenclaw", points: ravenclawPoints},
   {name:"hufflepuff", points: hufflepuffPoints},
  ]
  console.log(winnerIs)



 function checkWinner(){
   if(localStorage.length === 4){
    let winnerPoints= 0;
    let winner;
    winnerIs.forEach((house)=>{
      if(house.points > winnerPoints){
        winnerPoints = Number(house.points);
        winner = house.name;
      }
     });
     isEqual(winner,winnerPoints)
   }
 };

 function isEqual(winner, winnerPoints){
  winnerIs.forEach((house)=>{
    if((house.points === winnerPoints) && !(house.name === winner)){
      showPopupEqual()
    }
   else{
  showPopupWinnerCup(winner, winnerPoints)
   }
 });
}



 function showPopupWinnerCup(name, points) {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerHouse">
  <h3>${name} win the House Cup with ${points} points!</h3>
  <img src="/images/cup.gif" alt="winner">
  <a class="btnAlert" href="/housecup/firstscore.html">Play Again</a>
  <a class="btnAlert" href="/html/intro.html">Menu</a>
  </div>`
}

function showPopupEqual() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="equality">
  <h3>Equality...</h3>
  <img src="/images/equality.gif" alt="winner">
  <a class="btnAlert" href="/housecup/firstscore.html">Play Again</a>
  <a class="btnAlert" href="/html/intro.html">Menu</a>
  </div>`

}

checkWinner()


