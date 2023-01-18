//Primitives(value)
//String
let firstName="Jerome";
console.log(typeof(firstName));

//Number
let number = 75.2341;
console.log(typeof(number));

//boolean
let isPrime = false;
console.log(typeof(isPrime));

//undefined is a data type - nothing is assigned yet
let x;
console.log(typeof(x));

//Symbol
let symbol = Symbol();
console.log(typeof(symbol));

//Reference types

//Array
let numbers = [1, 2, 3];
console.log(typeof(numbers));

//Object literal
let student = {
    firstName: "Lhoucine",
    lastName: "Zerrouki",
    id: "LZ19437"
}
console.log(typeof(student));
console.log(student);

//Map
let student2 = new Map();
//add values with a method called set
student2.set("firstName", "Will");
student2.set("lastName", "Cram");
console.log(typeof(student2));
console.log(student2);

//null - null
let y = null;
console.log(typeof(y));
console.log(y);

//Date
let today = new Date();
console.log(typeof(today));
console.log(today);
