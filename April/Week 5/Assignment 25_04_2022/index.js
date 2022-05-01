const homeBtn = document.querySelector("#home")
const booksBtn = document.querySelector("#books")
const kindleBtn = document.querySelector("#kindle")

const homePara = document.querySelector("#home-p")
const booksPara = document.querySelector("#books-p")
const kindlePara = document.querySelector("#kindle-p")

homeBtn.addEventListener('click', displayHome)

function displayHome(){
    homeBtn.classList.toggle('btn-active')
    homePara.classList.toggle('inactive')
    booksPara.classList.add('inactive')
    booksBtn.classList.remove('btn-active')
    kindlePara.classList.add('inactive')
    kindleBtn.classList.remove('btn-active')
}

booksBtn.addEventListener('click', displayBooks)

function displayBooks(){
    booksBtn.classList.toggle('btn-active')
    booksPara.classList.toggle('inactive')
    homePara.classList.add('inactive')
    homeBtn.classList.remove('btn-active')
    kindlePara.classList.add('inactive')
    kindleBtn.classList.remove('btn-active')
}

kindleBtn.addEventListener('click', displayKindle)

function displayKindle(){
    kindleBtn.classList.toggle('btn-active')
    kindlePara.classList.toggle('inactive')
    homePara.classList.add('inactive')
    homeBtn.classList.remove('btn-active')
    booksPara.classList.add('inactive')
    booksBtn.classList.remove('btn-active')
}


