

// 2. Check whether the given character is a vowel or not. (Also check for capital characters). 


var c = prompt('Enter any Alphabet :')

let lowercase_vowel = (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');

let uppercase_vowel = (c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U');

if (lowercase_vowel || uppercase_vowel){
    console.log('Entered value is a Vowel : ',c)
}
else{
    console.log('Entered value is a Consonant/Number : ',c)
}
if(uppercase_vowel){
    console.log(c, ' is Capital')
}
else if(lowercase_vowel){
    console.log(c, ' is small')
}