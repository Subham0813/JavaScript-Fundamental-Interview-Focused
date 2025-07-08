//what is closure?? A closure is formed when a function get accessed to its outer functions variables, even if the outer function finished its execution. Javascript function remembers its scope so if the outer functions execution get finished , inner function able to remember the variable values and can able to modify later if wants.

// A closure is formed when combination functions bundled together with the references of its surrounding state or lexical environment.

//This ability to remember and access the outer scope is called a closure.

// Closures: Enable data encapsulation and power patterns like private variables, currying, and function factories.


// A closure is the combination of a function bundled together or enclosed together with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.


function outer () {

    let counter = 1;
    function inner() {
        counter++;
        return counter
    }

    return inner;
}

const a = outer();
console.log(a()); //1
console.log(a()); //2
console.log(a()); //3

// Disadvantage: 
// Every function instance manages its own scope and closure. Therefore, it is unwise to unnecessarily create functions within other functions if closures are not needed for a particular task, as it will negatively affect script performance both in terms of processing speed and memory consumption.

const b = outer();
console.log(b()); //1
console.log(b()); //2

//Because Each function instances manages their own closures
