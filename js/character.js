// have a random house

let image = document.querySelector(".characterRandom img");
let title = document.querySelector(".characterRandom");
let button = document.getElementById("sortingHat");
let popup = document.querySelector(".popup");

function randomCharacter() {
  let proposition = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"];
  let imageProposition = [
    "../images/gryffindor.png",
    "../images/slytherin.png",
    "../images/hufflepuff.png",
    "../images/ravenclaw.png"
  ];
  let urlproposition = [
    "../html/gryffindor.html",
    "../html/slytherin.html",
    "../html/hufflepuff.html",
    "../html/ravenclaw.html"
  ];

  let random = Math.floor(Math.random() * 4);
  showPopupCharacter(
    proposition[random],
    imageProposition[random],
    urlproposition[random]
  );
}

function showPopupCharacter(name, image, url) {
  popup.classList.add("is-active");
  popup.innerHTML = `<div class="characterSort ${name}" >
  <h3>${name} !</h3>
  <img src= ${image} alt="house">
  <a id="btnCharacterSort" class="btn" href=${url}>Now let's play !</a>
  </div>`;
}

sortingHat.onclick = function() {
  randomCharacter();
};
