

// 1. Take 3 inputs (number ) from the user and show minimum of the three.



const x = prompt('Enter 1st Number X')
const y = prompt('Enter 2nd Number Y')
const z = prompt('Enter 3rd Number Z')


if(x<y && x<z){
    console.log('x is smaller ->', x)
}
else if(y<x && y<z)
    console.log('y is smaller ->', y)

else if(z<x && z<y)
    console.log('z is smaller ->', z)