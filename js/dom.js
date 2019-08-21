// import {potionMaster} from "./game.js"
  //print of the image in the tries List and the help

  function printProposition(image){
    let list= document.querySelector(".try:last-of-type")
    list.innerHTML += `<img class="proposition"src="${image}">`
  }

  function printList(){
    let proposition= document.createElement("li")
    let ol = document.getElementById("triesList")
    ol.appendChild(proposition);
    proposition.classList.add("try");
  }

  //initialize drag and drop

  function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute("alt"));  
  }


  potionMaster.randomAnswer()
  console.log(`potion answer: ${potionMaster.answer}`)

   var addIngredient;

   function potionOriginalColor(){
   let nextIngredietn = setTimeout(()=>{
    cauldron.classList.toggle("invisible");
    blueCaldron.classList.toggle("invisible");
    },500);
  }

  function clearPotion(){
    clearInterval(addIngredient)
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
    potionOriginalColor()
    document.querySelector("#potion audio").play()

    var data = ev.dataTransfer.getData("text");
      if(data === "Flies"){
        flies.addToTry();
        printProposition(flies.image)
      }
      else if(data === "Leeches"){
        leeches.addToTry();
        printProposition(leeches.image)
      }
      else if(data === "Boomslang Skin"){
        boomslangSkin.addToTry()
        printProposition(boomslangSkin.image) 
      }
      else if(data === "Bicorn Horn"){
        bicornHorn.addToTry(bicornHorn);
        printProposition(bicornHorn.image)
          }
    //verifier si la propostion correspond. Si non, on rejoue
    if(potionMaster.arrayFull()===true){
      printList()
    }
    
   }

    //drag and drop events

   const cauldron = document.getElementById("cauldron");
   const horn = document.getElementById("bicornHorn");
   const flie = document.getElementById("flies");
   const leech = document.getElementById("leeches");
   const skin = document.getElementById("boomslangSkin");
   const blueCaldron = document.getElementById("blueCauldron");
   console.log(cauldron)
   horn.ondragstart = dragstartHandler;
   flie.ondragstart = dragstartHandler;
   leech.ondragstart = dragstartHandler;
   skin.ondragstart = dragstartHandler;
   cauldron.ondragover = dragoverHandler;
   cauldron.ondrop = dropHandler;
   

    //     ingredient.onclick = function(e){
    //       console.log("ingredient click")

   // document.querySelectorAll(".ingredient img").forEach((ingredient)=>{
//     ingredient.onclick = function(e){
//       console.log("ingredient click")
//     let ingredientItem = e.target;

//     //ajout des propositions
//     if(ingredientItem.getAttribute("alt") === "Flies"){
//     flies.addToTry();
//     printProposition(flies.image)
//     console.log(potionMaster.try)
//     }
//     else if(ingredientItem.getAttribute("alt") === "Leeches"){
//     leeches.addToTry();
//     printProposition(leeches.image)
//     console.log(potionMaster.try)
//     }
//     else if(ingredientItem.getAttribute("alt") === "Boomslang Skin"){
//       boomslangSkin.addToTry()
//       printProposition(boomslangSkin.image)
//       console.log(potionMaster.try)
//     }
//     else if(ingredientItem.getAttribute("alt") === "Bicorn Horn"){
//       bicornHorn.addToTry(bicornHorn);
//       printProposition(bicornHorn.image)
//       console.log(potionMaster.try)
//     }
    
//     //verifier si la propostion correspond. Si non, on rejoue
//     if(potionMaster.arrayFull()===true){
//       console.log("vrai")
//       printList()
//       // printHelp()
//     }
//   }
//   });
