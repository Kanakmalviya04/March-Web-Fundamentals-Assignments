const grocery = []
const form = document.querySelector('form')
const gList = document.querySelector('.gList')
const input = document.querySelector('input')
const items = document.querySelector('.items')

form.addEventListener('submit', addItems)

function addItems(event){
    event.preventDefault()

    const item = {
        id : Date.now(),
        task : input.value
    }
    grocery.push(item)
    console.log(grocery)

    displayList()
    input.value = ''
}

function displayList(){
    items.innerHTML = []
    for (let i = 0; i < grocery.length; i++) {
        const element = grocery[i];
        const itemView = `
            <div class="item">${element.task}
            <button id="delete" onclick="deleteItem(${element.id})">🗑</button>
            </div><br>`
            items.innerHTML = items.innerHTML + itemView
            gList.append(items)
    }

}

function deleteItem(id){
    console.log('Button ki ID', id)

    let itemindex = -1
    for (let i = 0; i < grocery.length; i++) {
        const element = grocery[i];
        if(element.id === id){
            itemindex = i
        }
    }

    grocery.splice(itemindex, 1)
    console.log("Updated Grocery List", grocery)

    displayList()
}
function clearAll(){
    location.reload();
}