//Exceptions - how developers talk to each other
//call a function that doesn't exist
let input = "Hello"
let array = [5, 4, 3];
try{
    calcArea(2, 5);
    // let char = input[10];
    // console.log(char);
}
//every try has to have a catch - catch runs when something goes wrong
catch(error){
    console.log(error);
    console.log(error.message);
    console.log(error.name);
    //error type
    if(error instanceof ReferenceError){
        console.log('This is a reference error');
    }
}
//finally - runs no matter what
finally{
    console.log(`This always runs`);
}

//lets write a function that takes an array of numbers,
// a startIndex and an endingIndex and adds up all the elements
//between
function sumArray(numbers, startIndex, endIndex){
    if(startIndex < 0 || startIndex > endIndex){
        throw new RangeError(`${startIndex} is not in the bounds of the array`)
    }
    if(endIndex < 0 || endIndex > numbers.length){
        throw new RangeError(`${endIndex} is not in the bounds of the array`)
    }
    let sum = 0;
    for(let i = startIndex; i < endIndex; i++){
        sum += numbers[i];
    }
    return sum;
}

let numArray = [1, 5, 7, 5, 8, 9, 10];
try{
    let sum = sumArray(numArray, 2, 5)
    console.log(sum);
}
catch(error){
    console.log(error.message);
}
//Exercise
//write a function that takes in a string that came from the user
//check that the string has a value
//check that it can be converted to a number
//Throw an exception if the string is empty
//Throw and exception of it cannot convert to a number
//return the value converted to a number if successful
function stringToNum(userInput){
    if(!Number(userInput)){
        throw new TypeError(`input string did not contain only a number (${userInput})`)
    }
    
    return Number(userInput);
}
let input2 = '3';
try{
    stringToNum(input2);
    console.log(input2);
}
catch(error){
    console.log(error.message);
}