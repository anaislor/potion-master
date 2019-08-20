
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

  potionMaster.randomAnswer()
  console.log(`potion answer: ${potionMaster.answer}`)

  function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute("alt"));  
  }

  function dragoverHandler(ev) {
    console.log("dragOver");
    ev.preventDefault();
   }

   function dropHandler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
      if(data === "Flies"){
      flies.addToTry();
      printProposition(flies.image)
      console.log(potionMaster.try)
      }
      else if(data === "Leeches"){
      leeches.addToTry();
      printProposition(leeches.image)
      console.log(potionMaster.try)
      }
      else if(data === "Boomslang Skin"){
        boomslangSkin.addToTry()
        printProposition(boomslangSkin.image)
        console.log(potionMaster.try)
      }
      else if(data === "Bicorn Horn"){
        bicornHorn.addToTry(bicornHorn);
        printProposition(bicornHorn.image)
        console.log(potionMaster.try)
          }

    //verifier si la propostion correspond. Si non, on rejoue
    if(potionMaster.arrayFull()===true){
      console.log("vrai")
      printList()
    }
    
   }

   const cauldron = document.getElementById("cauldron");
   const horn = document.getElementById("bicornHorn");
   const flie = document.getElementById("flies");
   const leech = document.getElementById("leeches");
   const skin = document.getElementById("boomslangSkin");


   horn.ondragstart = dragstartHandler;
   flie.ondragstart = dragstartHandler;
   leech.ondragstart = dragstartHandler;
   skin.ondragstart = dragstartHandler;
   cauldron.ondragover = dragoverHandler;
   cauldron.ondrop = dropHandler;


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
