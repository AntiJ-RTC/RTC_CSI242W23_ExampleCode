//A Promise in JAvaScript is an alternative to using callback functions
//This is the newer way of handling callbacks (ES6)
//A Promise has results, it is either successful (resolve)
//or unsuccessful (reject)

//The promise constructor takes a function which serves as a callback 
//for the promise, the function has two parameters, resolve and reject
//When the promise is completed either the resolve of the reject is called

//create a promise
let promise1 = new Promise(function(resolve, reject){
    //some processing happens
    //checkt the result
    //if success you call resolve
    resolve('Success');
    //check for failure;
    reject('Failed');
});
//how to call a promise
//You have to use the then() method
// console.log(promise1.then());
//call this the correct way, pass function to both resolve and reject
promise1.then(
    function(value){
        document.write(value);
    },
    function(error){
        console.log(error);
    }
);

//promise that could either fail or pass
let promise2 = new Promise(function(resolve, reject){
    //generate a random number between 0 and 10
    //simulate some processig
    let number = Math.floor(Math.random() * 11);
    //we can ask question about the processing
    if(number % 2 == 1){
        resolve(`This is an odd number ${number}`)
    }
    else{
        reject(`Error, no even numbers allowed ${number}`)
    }
});

//call with .then
promise2.then(
    (success) => {
        display(success);
    },
    (error) => {
        console.log(error);
    }
);
//You can also call a
//
promise2.then((success) => {
    display(success);
}).catch((error) => {
    console.log(error);
})

//Another way to declare a promise is to use the async keyword
async function getData(){
    //simulate a delay
    // created a promise
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data Retrieved', 2000));
    });
    // we can await 
    let response = await promise;
    return response;
}

function display(data){
    document.querySelector('p').innerHTML = data;
}