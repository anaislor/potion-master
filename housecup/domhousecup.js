
 
 //score of house cup
  let slytherinPoints = Number(localStorage.getItem("slytherin"));
  let gryffindorPoints = Number(localStorage.getItem("gryffindor"));
  let ravenclawPoints = Number(localStorage.getItem("ravenclaw"));
  let hufflepuffPoints = Number(localStorage.getItem("hufflepuff"));

 let gryffindorScore = document.querySelector("#gryffindor p");
 let slytherinScore = document.querySelector("#slytherin p");
 let ravenclawScore = document.querySelector("#ravenclaw p");
 let hufflepuffScore = document.querySelector("#hufflepuff p");
 let popup = document.querySelector(".popup")

 gryffindorScore.innerHTML = `${gryffindorPoints} points`;
 slytherinScore.innerHTML = `${slytherinPoints} points`;
 ravenclawScore.innerHTML = `${ravenclawPoints} points`;
 hufflepuffScore.innerHTML = `${hufflepuffPoints} points`;

 let winnerIs = [
   {name:"slytherin", points:slytherinPoints},
   {name:"gryffindor", points:gryffindorPoints},
   {name:"ravenclaw", points:ravenclawPoints},
   {name:"hufflepuff", points:hufflepuffPoints}
  ]
  console.log(winnerIs)



 function checkWinner(){
  let winnerPoints= 0;
  let winner="";
   if(winnerIs.indexOf("null") === -1){
     winnerIs.forEach((house)=>{
      if(house.points > winner){
        winnerPoints = house.points;
        winner = house.name;
      }
      showPopupWinnerCup(winner, winnerPoints)
     });
     console.log(winner)
     console.log(winnerPoints)
   }
 };

 function showPopupWinnerCup(name, points) {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="winnerHouse">
  <h3>${name} win the House Cup with ${points} points!</h3>
  <img src="/images/cup.gif" alt="winner">
  <a class="btnAlert" href="/housecup/firstscore.html">Play Again</a>
  <a class="btnAlert" href="/html/intro.html">Menu</a>
  </div>`

}

checkWinner()


