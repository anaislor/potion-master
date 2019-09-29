// import {potionMaster} from "./game.js"
//print of the image in the tries List and the help

function printProposition(image) {
  let list = document.querySelector(".try:last-of-type");
  list.innerHTML += `<img class="proposition"src="${image}">`;
}

function printList() {
  let proposition = document.createElement("li");
  let ol = document.getElementById("triesList");
  ol.appendChild(proposition);
  proposition.classList.add("try");
}

//initialize drag and drop

function dragstartHandler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.getAttribute("alt"));
}

potionMaster.randomAnswer();
console.log(`potion answer: ${potionMaster.answer}`);

var addIngredient;

function potionOriginalColor() {
  let nextIngredietn = setTimeout(() => {
    cauldron.classList.toggle("invisible");
    blueCaldron.classList.toggle("invisible");
  }, 500);
}

function clearPotion() {
  clearInterval(addIngredient);
}

function dragoverHandler(e) {
  console.log("dragOver");
  e.preventDefault();
}

function dropHandler(ev) {
  ev.preventDefault();
  cauldron.classList.toggle("invisible");
  blueCaldron.classList.toggle("invisible");
  clearPotion();
  potionOriginalColor();
  document.querySelector("#potion audio").play();

  var data = ev.dataTransfer.getData("text");
  if (data === "Flies") {
    flies.addToTry();
    printProposition(flies.image);
  } else if (data === "Leeches") {
    leeches.addToTry();
    printProposition(leeches.image);
  } else if (data === "Boomslang Skin") {
    boomslangSkin.addToTry();
    printProposition(boomslangSkin.image);
  } else if (data === "Bicorn Horn") {
    bicornHorn.addToTry();
    printProposition(bicornHorn.image);
  } else if (data === "Love Philter") {
    lovePhilter.addToTry();
    printProposition(lovePhilter.image);
  } else if (data === "Knotgrass") {
    knotgrass.addToTry();
    printProposition(knotgrass.image);
  }
  //verifier si la propostion correspond. Si non, on rejoue
  if (potionMaster.arrayFull() === true) {
    printList();
  }
}

//drag and drop events

const cauldron = document.getElementById("cauldron");
const horn = document.getElementById("bicornHorn");
const flie = document.getElementById("flies");
const leech = document.getElementById("leeches");
const skin = document.getElementById("boomslangSkin");
const philter = document.getElementById("lovePhilter");
const grass = document.getElementById("knotgrass");
const blueCaldron = document.getElementById("blueCauldron");

horn.ondragstart = dragstartHandler;
flie.ondragstart = dragstartHandler;
leech.ondragstart = dragstartHandler;
skin.ondragstart = dragstartHandler;
philter.ondragstart = dragstartHandler;
grass.ondragstart = dragstartHandler;
cauldron.ondragover = dragoverHandler;
cauldron.ondrop = dropHandler;

//on click event for responsive

function addIngredientOnclick(ev) {
  cauldron.classList.toggle("invisible");
  blueCaldron.classList.toggle("invisible");
  clearPotion();
  potionOriginalColor();
  document.querySelector("#potion audio").play();
  var data = ev.target.getAttribute("alt");
  if (data === "Flies") {
    flies.addToTry();
    printProposition(flies.image);
  } else if (data === "Leeches") {
    leeches.addToTry();
    printProposition(leeches.image);
  } else if (data === "Boomslang Skin") {
    boomslangSkin.addToTry();
    printProposition(boomslangSkin.image);
  } else if (data === "Bicorn Horn") {
    bicornHorn.addToTry();
    printProposition(bicornHorn.image);
  } else if (data === "Love Philter") {
    lovePhilter.addToTry();
    printProposition(lovePhilter.image);
  } else if (data === "Knotgrass") {
    knotgrass.addToTry();
    printProposition(knotgrass.image);
  }
  //verifier si la propostion correspond. Si non, on rejoue
  if (potionMaster.arrayFull() === true) {
    printList();
  }
}

//on click
horn.onclick = addIngredientOnclick;
flie.onclick = addIngredientOnclick;
leech.onclick = addIngredientOnclick;
skin.onclick = addIngredientOnclick;
philter.onclick = addIngredientOnclick;
grass.onclick = addIngredientOnclick;

//ontouch
horn.ontouchstart = addIngredientOnclick;
flie.ontouchstart = addIngredientOnclick;
leech.ontouchstart = addIngredientOnclick;
skin.ontouchstart = addIngredientOnclick;
philter.ontouchstart = addIngredientOnclick;
grass.ontouchstart = addIngredientOnclick;
