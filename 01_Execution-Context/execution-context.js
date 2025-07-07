/*
JavaScript is Synchronous Single-Threaded interpreted language.
Browser can not understand JS code without JS engine. So every Browser has its own JS engines, Google Chrome has V* engine, Mozilla FireFox has SpiderMonkey and so on.
As the JS is single-threaded interpreted language so it firstly perse the entire code file once and then execute line by line.

Now What is Execution Context?
Execution context is an environment or a scope where JavaScript code executed and evaluated.

EC is an environment that handle the high-level code to transform it to machine-understandable code and JS allocate memory to each variables and functions which later be executed in execution phase.

How JS code works?
Before the JS code working wee need know about types and Phases of execution context, so there is two types of EC , Global Execution Context and Function Execution Context, When JS engine perse the code it automatically create a global Execution Context , basically each JS code file has a default Global EC and when a function call happen , js engine creates a Function EC.

Now there is two phases for JS code runs, Memory creation of Hoisting Phase and Execution Phase,
JS engine perse code line by line and allocate default values for each variables and functions, this is memory creation or Hoisting generally.
And after memory creation JS engine executes code line by line and assign values to each variables and functions, and evaluated the code, this is execution phase.

in Memory creation phase JS engine stores variables and functions in Key-Value pair and in execution phase it assigns each values to the functions and variables.

As the JS is a Single Threaded is has only a call stack where all the execution happens one by one.
so when the code runs in JS make a GEC and push it into the call stack and if code contains any function calls then JavaScript creates a Funtion EC an push it to the call stack on top of the GEC. 

What is Call Stack?
JS call Stack is data-Structure which manages the execution of the each contexts, call Stack also known as EC stack, Runtime Stack, Machine Stack.

Call Stack always executes Top to bottom manner, and follows LIFO last in first out principle.
*/

var a = 10;
function fun() {
    console.log("HIII");
    var b = 20;
    console.log(b);
}

console.log(a);
fun();