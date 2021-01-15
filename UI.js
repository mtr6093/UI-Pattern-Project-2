//console.log("Working")

let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");




accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    let accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
        
  });
});


// let b1 =document.getElementById("b1")

// b1.addEventListener('click', clicked1)

// let image = document.getElementsByClassName("randomImage")[0]
// console.log(image)

let b1Content = document.getElementById("c1")
console.log(b1Content)

let mingredients = {
    qty1:"",
    type1:"",
}

let url = ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' 
    console.log("working")
    fetch(url)
    .then(response => response.json())
    .then(json => {
    console.log(json.drinks[0])
    // console.log(json.drinks[0].strDrinkThumb)
    // console.log(image)    
    mingredients.type1 = json.drinks[0].strIngredient1
    mingredients.qty1 = json.drinks[0].strMeasure1
    mingredients.type2 = json.drinks[0].strIngredient2
    mingredients.qty2 = json.drinks[0].strMeasure2
    mingredients.type3 = json.drinks[0].strIngredient3
    mingredients.qty3 = json.drinks[0].strMeasure3
    mingredients.type4 = json.drinks[0].strIngredient4
    mingredients.qty4 = json.drinks[0].strMeasure4
    b1Content.textContent = json.drinks[0].strInstructions
    // console.log(b1Content)
    })

console.log(mingredients)












    // function clicked1 (event) {
//     event.preventDefault()
//     let url = ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' 
//     console.log("working")
//     fetch(url)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json.drinks[0].strMeasure1)
//     // console.log(json.drinks[0].strDrinkThumb)
//     // console.log(image)
//     b1Content.textContent = json.drinks[0].strMeasure1
//     console.log(b1Content)
    
//   }  
//   )
// }