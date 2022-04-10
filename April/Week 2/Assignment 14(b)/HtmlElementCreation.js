
// make HTML elements from this list of users and display on screen using javascript,
// each element should have a different class added to it
// each class will have different background colour




const names = ['Virat', 'Ronaldo', 'Messi', 'Dhoni', 'Rohit']

const classList = ['one', 'two', 'three', 'four', 'five']

for(let i = 0; i<names.length; i++){
    const X = document.createElement('p')
    X.innerText = names[i]
    X.classList.add(classList[i])
    const target = document.querySelector('h1')
    target.appendChild(X)
}