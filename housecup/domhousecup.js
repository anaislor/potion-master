//score of house cup
let slytherinPoints = localStorage.getItem("slytherin");
let gryffindorPoints = localStorage.getItem("gryffindor");
let ravenclawPoints = localStorage.getItem("ravenclaw");
let hufflepuffPoints = localStorage.getItem("hufflepuff");

let gryffindorScore = document.querySelector("#gryffindor p");
let slytherinScore = document.querySelector("#slytherin p");
let ravenclawScore = document.querySelector("#ravenclaw p");
let hufflepuffScore = document.querySelector("#hufflepuff p");
let popup = document.querySelector(".popup");

gryffindorScore.innerHTML = `${Number(gryffindorPoints)} points`;
slytherinScore.innerHTML = `${Number(slytherinPoints)} points`;
ravenclawScore.innerHTML = `${Number(ravenclawPoints)} points`;
hufflepuffScore.innerHTML = `${Number(hufflepuffPoints)} points`;

let winnerIs = [
  { name: "slytherin", points: slytherinPoints },
  { name: "gryffindor", points: gryffindorPoints },
  { name: "ravenclaw", points: ravenclawPoints },
  { name: "hufflepuff", points: hufflepuffPoints }
];
console.log(winnerIs);

function checkWinner() {
  if (localStorage.length === 4) {
    let winnerPoints = 0;
    let winner;
    winnerIs.forEach(house => {
      if (house.points > winnerPoints) {
        winnerPoints = Number(house.points);
        winner = house.name;
      }
    });
    isEqual(winner, winnerPoints);
  }
}

//check if equality
function isEqual(winner, winnerPoints) {
  let equal = [];
  winnerIs.forEach(house => {
    if (Number(house.points) === winnerPoints) {
      equal.push(house.name);
    }
    return equal;
  });
  if (equal.length >= 2) {
    showPopupEqual();
  } else {
    showPopupWinnerCup(winner, winnerPoints);
  }
}

function showPopupWinnerCup(name, points) {
  popup.classList.add("is-active");
  popup.innerHTML = `<div class="winnerHouse ${name}">
  <h3>${name} win the House Cup with ${points} points!</h3>
  <img src="../images/cup.gif" alt="winner">
  <div class="popupbtn">
  <a class="btn" href="../housecup/firstscore.html">Play Again</a>
  <a class="btn" href="../index.html">Menu</a>
  </div>
  </div>`;
}

function showPopupEqual() {
  popup.classList.add("is-active");
  popup.innerHTML = `<div id="equality">
  <h3>Equality...</h3>
  <img src="../images/equality.gif" alt="winner">
  <div class="popupbtn">
  <a class="btn" href="../housecup/firstscore.html">Play Again</a>
  <a class="btn" href="../index.html">Menu</a>
  </div>
  </div>`;
}

checkWinner();
