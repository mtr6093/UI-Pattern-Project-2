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




let b1Content = document.getElementById("c1")
let b2Content = document.getElementById("c2")
let b3Content = document.getElementById("c3")
let b4Content = document.getElementById("c4")


let mingredients = {
    qty1:"",
    type1:""
}

let dingredients = {
    qty1: "",
    type: ""
}

let pingredients = {
    qty1: "",
    type: ""
}

let singredients = {
    qty1: "",
    type: ""
}


let url = ' https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita' 
    
    fetch(url)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
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
    
    fetch(url2)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
        dingredients.type1 = json.drinks[0].strIngredient1
        dingredients.qty1 = json.drinks[0].strMeasure1
        dingredients.type2 = json.drinks[0].strIngredient2
        dingredients.qty2 = json.drinks[0].strMeasure2
        dingredients.type3 = json.drinks[0].strIngredient3
        dingredients.qty3 = json.drinks[0].strMeasure3
        b2Content.textContent = json.drinks[0].strInstructions
        list2()
    })

    let url3 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Pi%C3%B1a%20Colada'
    // console.log("working")
    fetch(url3)
        .then(response => response.json())
        .then(json => {
            // console.log(json) 
        pingredients.type1 = json.drinks[0].strIngredient1
        pingredients.qty1 = json.drinks[0].strMeasure1
        pingredients.type2 = json.drinks[0].strIngredient2
        pingredients.qty2 = json.drinks[0].strMeasure2
        pingredients.type3 = json.drinks[0].strIngredient3
        pingredients.qty3 = json.drinks[0].strMeasure3
        b3Content.textContent = json.drinks[0].strInstructions
        list3()
    })

    let url4 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=singapore%20sling' 
  
    fetch(url4)
        .then(response => response.json())
        .then(json => {       
            // console.log(json)
        singredients.type1 = json.drinks[0].strIngredient1
        singredients.qty1 = json.drinks[0].strMeasure1
        singredients.type2 = json.drinks[0].strIngredient2
        singredients.qty2 = json.drinks[0].strMeasure2
        singredients.type3 = json.drinks[0].strIngredient3
        singredients.qty3 = json.drinks[0].strMeasure3
        singredients.type4 = json.drinks[0].strIngredient4
        singredients.qty4 = json.drinks[0].strMeasure4
        singredients.type5 = json.drinks[0].strIngredient5
        singredients.qty5 = json.drinks[0].strMeasure5
        singredients.type6 = json.drinks[0].strIngredient6
        singredients.qty6 = json.drinks[0].strMeasure6
        b4Content.textContent = json.drinks[0].strInstructions
        list4()
    })
    


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

function list3 () {
    let ul=document.createElement('ul')
    document.getElementById('c3').appendChild(ul)
    
        let li1=document.createElement('li')
        ul.appendChild(li1)
        li1.innerHTML += pingredients.qty1 + pingredients.type1
        let li2=document.createElement('li')
        ul.appendChild(li2)
        li2.innerHTML += pingredients.qty2 + pingredients.type2
        let li3=document.createElement('li')
        ul.appendChild(li3)
        li3.innerHTML += pingredients.qty3 + pingredients.type3
}
function list4 () {
    let ul=document.createElement('ul')
    document.getElementById('c4').appendChild(ul)
    
        let li1=document.createElement('li')
        ul.appendChild(li1)
        li1.innerHTML += singredients.qty1 + singredients.type1
        let li2=document.createElement('li')
        ul.appendChild(li2)
        li2.innerHTML += singredients.qty2 + singredients.type2
        let li3=document.createElement('li')
        ul.appendChild(li3)
        li3.innerHTML += singredients.qty3 + singredients.type3
        let li4=document.createElement('li')
        ul.appendChild(li4)
        li4.innerHTML += singredients.qty4 + singredients.type4
        let li5=document.createElement('li')
        ul.appendChild(li5)
        li5.innerHTML += singredients.type5
        let li6=document.createElement('li')
        ul.appendChild(li6)
        li6.innerHTML += singredients.type6
    }   

