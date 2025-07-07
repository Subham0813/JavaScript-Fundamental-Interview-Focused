console.log(a); //undefined
var a = 8

console.log(a); //8

console.log(hello) // f hello(name) {console.log("hello", name)}

console.log(hii);  //undefined, Hoisted but behave like a variable not a function

hello("Subham")

// hii()       // TypeError : hii is not a function

function hello(name) {
    console.log("hello", name)
}

var hii = function () { 
    console.log("hii")
}

/* In JS there is execution centext for each program and which have two phases MEMORY CREATION phase And CODE EXECUTION phase. So in memory creation phase JS interprate the code file and allocate memory to each function and variable hence 
    variable * a * get default value * undefined * if it declared with var , let and const will hoist but JS moves it to TDZ(temporal dead zone)
similarly for the function name, in memory cration phase JS stores the function defination as a value of the function and in execution phase it run the code one by one and we get our function output.

This concept of memory allocation before execution is known as hoisting in JS which are not available in any other programming languages,

So what is the benefit of it?
 1. clean code increase readability, because of the flexible function calls, can call functions before the declaration.
 2. variables declared with var avoid referenceError
 3. Makes easiar to use global variables

*/

//Hoisting and TDZ

//  console.log(x, y); //ReferenceError: Cannot access 'x' before initialization
let x  = 6
const y = 9

/* So, let and Const decleared variable is not hoisted? No. Its also hoisted but its in the TEMPORAL DEAD ZONE, thats why JS can not access it before the declearation line is executed. Its a features of ES6, ensure safer and cleaner code


var vs let/const 

var:
Function-scoped (NOT truly global-scoped, but function-scoped).
If declared outside any function, it attaches to the window (global object in the browser).
Accessible anywhere inside its function, even before the declaration (due to hoisting with undefined).

let / const:
Block-scoped (scope is {} blocks, such as inside if, for, or {}).
Declared outside any block:
    Do NOT attach to window in the browser (live in the script scope).
    Accessible only after their declaration (due to TDZ).
    Cannot be redeclared in the same scope.

*/

// Hoisting and Function behaviours

console.log(fun); // f fun() {.....}
console.log(xyz); // undefined, anonnymous function does not hoisted before function call
console.log(abc); // undefined, same , arrow function is a new way of defining functions but it is also a anonnymous function actually

function fun() {
    console.log("function fun");
}

var xyz = function () {
    console.log("xyz")
}

var abc = () => {
    console.log("abc")
}

//we will learn more about functions later.