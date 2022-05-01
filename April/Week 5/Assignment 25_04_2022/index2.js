const homeBtn = document.querySelector("#home")
const booksBtn = document.querySelector("#books")
const kindleBtn = document.querySelector("#kindle")

const main = document.querySelector('#main')

homeBtn.addEventListener('click', displayHome)
booksBtn.addEventListener('click', displayBooks)
kindleBtn.addEventListener('click', displayKindle)

function displayHome(){
    homeBtn.classList.toggle('btn-active')
    const para = `<p>${home}</p>`
    main.innerHTML = para
    booksBtn.classList.remove('btn-active')
    kindleBtn.classList.remove('btn-active')

}

function displayBooks(){
    booksBtn.classList.toggle('btn-active')
    const para = `<p>${books}</p>`
    main.innerHTML = para
    homeBtn.classList.remove('btn-active')
    kindleBtn.classList.remove('btn-active')
}
function displayKindle(){
    kindleBtn.classList.toggle('btn-active')
    const para = `<p>${kindle}</p>`
    main.innerHTML = para
    booksBtn.classList.remove('btn-active')
    homeBtn.classList.remove('btn-active')
}





const home = `<img class="image-main" src="https://cdn5.vectorstock.com/i/1000x1000/02/94/stay-home-and-shop-online-shopping-quote-vector-13810294.jpg"`

const books = `<img class="image-main" src="https://img.freepik.com/free-vector/book-shop-bookstore-logotype-set-education-library-publisher-logo-online-bookstore-service-application-icon-with-paper-book-stack-vector-illustration-isolated-white-background_124507-9377.jpg?w=2000"`

const kindle =  `<img class="image-main" src="https://e7.pngegg.com/pngimages/607/192/png-clipart-kindle-fire-amazon-com-ipad-e-readers-kindle-store-book-now-button-electronics-logo.png"`