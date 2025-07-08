/*
*function statement aka function declaration
*
*A function declaration or function defination, basically how we write a normal , regular function is function statement or declaration
*/

function hi ( parameter ) {
    console.log("hii")
    console.log(parameter)

    //parameters are only available intio the function's local scope , we can not access it outside.
}

hi ( "argument" )


// function expressions
/*
 * when a function is assigned to a variable is called function expression. Assigned function can be of any type may be its an regular function or its an arrow fuction or its an annonymous function etc.
 */

var a = function () {
    console.log("function a")
}
let b = function () {
    console.log("function b")
}
const c = function () {
    console.log("function c")
}

//Annonymous Function

//A function without a name is called annonymous function, but annonymous function should always be declared with function expression and if we declared as the regular function statement then it will give error saying function should have a name (SyntaxError)

/**
 * function () {}  **SyntaxError
 */

const fun = function () {} // valid JS code

//First-order Function

//A function is called first order function if it is not taking another function as its parameter or its not returning a function as its return value.

function hello () {
    //a first order function
}


//First-Class function
//In JS functions are treated as Data, so we can pass it into another function or can return it from a function like other data types. also we can assign a function to a variable this concept of function known as first class function, and this is why Functions in JS is Fist class citizen.


//Higher-order Function
//Higher-order functions are those functions which takes a function as an argument and/or returnning a function as return value.

function greet(name){
    console.log("Konnichiwa", name+"-san")
}

function processMessage(callbackFunction){
    console.log("Processing message...")

    const name = "Subham"
    callbackFunction(name)
}

processMessage(greet)


function sum(a) {
    return function (b) {
        console.log(a + b)
    }
}

sum(2)(3); //This also an example of closure



//IIFE immediately invoked function exprssion
//An IIFE is a function that executes immmidiate after it defines
(function () {
    console.log("IIFE executed")
})()

//Callback function
//calbacks are those functions which are passed into a function as an argument and it execute later synchronously or asynchrously according to the code.

setTimeout(function callback () {
    console.log("SetTimeout Executed!!")
}, 2000);

//callbacks helps to write Async code in JS. 
