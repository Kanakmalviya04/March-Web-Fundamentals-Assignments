

// 4. Write a program to take an input from the user (number) and check whether it is a prime number or not.

const z = prompt('Enter any Number for Prime or Not')
if(z==1 || z==2 || z==3 || z==5 || z==7){
    console.log('Entered Number is a Prime Number :',z)
}

else if(z%2 !== 0 && z%3 !== 0 && z%5 !== 0 && z%7 !== 0 ){
    console.log('Entered Number is a Prime Number :',z)
}

else {
    console.log('Entered Number is Not a Prime Number :',z)
}