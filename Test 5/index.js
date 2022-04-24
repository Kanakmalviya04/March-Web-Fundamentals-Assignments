const reviews = [{
    id:7,
    email:"michael.lawson@reqres.in",
    first_name:"Michael",
    last_name:"Lawson",
    avatar:"https://reqres.in/img/faces/7-image.jpg"
  },{
    id:8,
    email:"lindsay.ferguson@reqres.in",
    first_name:"Lindsay",
    last_name:"Ferguson",
    avatar:"https://reqres.in/img/faces/8-image.jpg"
  },{
    id:9,
    email:"tobias.funke@reqres.in",
    first_name:"Tobias",
    last_name:"Funke",
    avatar:"https://reqres.in/img/faces/9-image.jpg"
  },{
    id:10,
    email:"byron.fields@reqres.in",
    first_name:"Byron",
    last_name:"Fields",
    avatar:"https://reqres.in/img/faces/10-image.jpg"
  },{
    id:11,
    email:"george.edwards@reqres.in",
    first_name:"George",
    last_name:"Edwards",
    avatar:"https://reqres.in/img/faces/11-image.jpg"
  },{
    id:12,
    email:"rachel.howell@reqres.in",
    first_name:"Rachel",
    last_name:"Howell",
    avatar:"https://reqres.in/img/faces/12-image.jpg"
  }];

let indexToBeDisplayed = 0

const currentElement = reviews[indexToBeDisplayed]

const imageElement = document.querySelector("#image")
const emailElement = document.querySelector(".email")
const nameElement = document.querySelector(".name")
const name2Element = document.querySelector(".name2")

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")

nextBtn.addEventListener('click', displayNext)
prevBtn.addEventListener('click', displayPrev)

function displayNext(){
    if(indexToBeDisplayed === reviews.length-1){
        indexToBeDisplayed = 0
    }else{
        indexToBeDisplayed++
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayPrev(){
    if(indexToBeDisplayed === 0){
        indexToBeDisplayed = reviews.length-1
    }else{
        indexToBeDisplayed--
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function updateScreen(virat){
    nameElement.innerText = virat.first_name
    name2Element.innerText = virat.last_name
    emailElement.innerText = virat.email
    imageElement.src = virat.avatar
}

updateScreen(currentElement)