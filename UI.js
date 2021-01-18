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
let b2Content = document.getElementById("c2")
// console.log(b1Content)


let mingredients = {
    qty1:"",
    type1:""
}

let dingredients = {
    qty1: "",
    type: ""
}

let url = ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' 
    // console.log("working")
    fetch(url)
    .then(response => response.json())
    .then(json => {
    // console.log(json.drinks[0])
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
    list1()
    })

    let url2 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=dragonfly'
    console.log("working")
    fetch(url2)
    .then(response => response.json())
    .then(json => {
    console.log(json.drinks[0])
    // console.log(json.drinks[0].strDrinkThumb)
    // console.log(image)    
    dingredients.type1 = json.drinks[0].strIngredient1
    dingredients.qty1 = json.drinks[0].strMeasure1
    dingredients.type2 = json.drinks[0].strIngredient2
    dingredients.qty2 = json.drinks[0].strMeasure2
    dingredients.type3 = json.drinks[0].strIngredient3
    dingredients.qty3 = json.drinks[0].strMeasure3
    b2Content.textContent = json.drinks[0].strInstructions
    list2()
    })
// console.log(mingredients)

function list1 () {
    let ul=document.createElement('ul')
    document.getElementById('c1').appendChild(ul)
    
        let li1=document.createElement('li')
        ul.appendChild(li1)
        li1.innerHTML += mingredients.qty1 + mingredients.type1
        let li2=document.createElement('li')
        ul.appendChild(li2)
        li2.innerHTML += mingredients.qty2 + mingredients.type2
        let li3=document.createElement('li')
        ul.appendChild(li3)
        li3.innerHTML += mingredients.qty3 + mingredients.type3
        let li4=document.createElement('li')
        ul.appendChild(li4)
        li4.innerHTML += mingredients.type4
}

function list2 () {
    let ul=document.createElement('ul')
    document.getElementById('c2').appendChild(ul)
    
        let li1=document.createElement('li')
        ul.appendChild(li1)
        li1.innerHTML += dingredients.qty1 + dingredients.type1
        let li2=document.createElement('li')
        ul.appendChild(li2)
        li2.innerHTML += dingredients.qty2 + dingredients.type2
        let li3=document.createElement('li')
        ul.appendChild(li3)
        li3.innerHTML += dingredients.qty3 + dingredients.type3
        
        
  
}












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