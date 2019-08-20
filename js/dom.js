

document.querySelectorAll(".ingredient img").forEach((ingredient)=>{
    ingredient.onclick = function(e){
      console.log("ingredient click")
    let ingredientItem = e.target;

    //ajout des propositions
    if(ingredientItem.getAttribute("alt") === "Flies"){
    flies.addToTry();
    printProposition(flies.image)
    console.log(potionMaster.try)
    }
    else if(ingredientItem.getAttribute("alt") === "Leeches"){
    leeches.addToTry();
    printProposition(leeches.image)
    console.log(potionMaster.try)
    }
    else if(ingredientItem.getAttribute("alt") === "Boomslang Skin"){
      boomslangSkin.addToTry()
      printProposition(boomslangSkin.image)
      console.log(potionMaster.try)
    }
    else if(ingredientItem.getAttribute("alt") === "Bicorn Horn"){
      bicornHorn.addToTry(bicornHorn);
      printProposition(bicornHorn.image)
      console.log(potionMaster.try)
    }
    
    //verifier si la propostion correspond. Si non, on rejoue
    if(potionMaster.arrayFull()===true){
      console.log("vrai")
      printList()
      // printHelp()
    }
  }
  });


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

  // function printHelp(){
  //   let black= document.createElement("li")
  //   let listBlack= document.getElementById("helpBlack")
  //   listBlack.appendChild(black);
  //   black.classList.add("black");
  //   let red= document.createElement("li")
  //   let listRed= document.getElementById("helpRed")
  //   listRed.appendChild(red);
  //   red.classList.add("red");
  // }

  potionMaster.randomAnswer()
  console.log(`potion answer: ${potionMaster.answer}`)
 