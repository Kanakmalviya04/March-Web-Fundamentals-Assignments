//  settimeout will let your code run without blocking it and
//  will call the function passed to it after the delay.

console.log("Here's the ADV of LAMBORGHINI_CAR")
setTimeout(changeCar, 2000)

// document.querySelector('.image').innerText ='<img class="change-It" src="lamborghinicar2.jpg">'

function changeCar(){
    
    const c = document.getElementById("image").src="lamborghinicar2.jpg";

    // c.addEventListener('mouseover', changed)
    // function changed(){
       // c.classList = 'change-It'
    // }    
    console.log("Car Has been CHANGED>>>🚓🚗🚕")
}
console.log('code is Running On...')
