//Single Line comment
/*
    This is a multi line comment
*/

console.log("Hello World");
//log a number
console.log(7);
//make a variahle in js - use the let
let input = "Jerome";
console.log(input);
//in javascript, variables can change datatypes
input = 5;
console.log(input);
//log boolean values
console.log(5 < 2);
console.log(10 == 10);
//create and log an array
let array = [1, 2, 3, 4];
//we can directly log an array to console
console.log(array);
//In JS, you can have different types in the same array
array[0] = "Hello";
console.log(array);
//check the data type of a variable
console.log(typeof(input));
console.log(typeof(array));
//Call a method (function) that does not exist
//fakeFunction();

//call the function
myFunction();
//making a function
function myFunction(){
    alert("Hello from myFunction");
}
