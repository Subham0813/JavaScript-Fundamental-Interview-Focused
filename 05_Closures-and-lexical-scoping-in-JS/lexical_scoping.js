var a  =10 // Global variable

function x() { 
    var b = 20 //local scope variable, can't access globally
    console.log(a) //global variable 
    console.log(b)

    return function y() { 

        console.log(a) //global variable 
        console.log(b) //parent variable accessed by child 
        // console.log(c) //c is not in y's local or global scope but in child's local scope, ReferenceError : c is not defined

        return function z() { 

            var c = 30 //local scope variable can't access by parent
            console.log(a) //global variable 
            console.log(b) //parent variable accessed by child
            console.log(c)
        }
        
    }
    
}

console.log(a)
let xx = x()
let yy = xx()
yy()

//calling function x and console logging a , which is not in function x's local scope so js find it into its parent's scope which is global scope and make closure with global and logs a, 

// similarly for function y, a is not present in its local scope so js find it in its parent's localscope if finds succesfully then makes a closure with function x and log that variable if not find , then moves outer parent and finds for that variable and this phenomenon continues till global and makes closure.

//why console logging getting error? because its declared inside function y's child so c is not hoisted yet and will not hoist untill make call to function z, hence we'll get error as not define.


//so what is lexical scopping? It is a concept of scopping , JS find variables not only declare inside local scope but also find it till the global scope hits. 
// its like find in function , if not found go to its parent's scope find, not found got outer scope , not found go to more outer scope till global. 

//lexical scopping help JS to reduce error in finding variables.


//here also one terms comes is Shadowing
//shadowing is a concept where same named variable's shadowed, let see example

var num = 90

function sum() {
    console.log(num + 10) //find num in lexical scope
}

function print() {
    num =30
    console.log(num) //find in lexical scope but got in local scope , hence shoadowed the value of num and print 30
}

//Scoping and Let & Const
//Traditionally (before ES6), JavaScript variables only had two kinds of scopes: function scope and global scope. Variables declared with var are either function-scoped or global-scoped, depending on whether they are declared within a function or outside a function. This can be tricky, because blocks with curly braces do not create scopes.

    //before ES6
    // {
    //     not a Scope
    // }

//After Es6, JS introduce Let and Const keyword which create blocked scopes for variable and hoisted but can not accessible before execution becasue JS hoisted Let and Const variables in Temporal Dead Zone, and curly braces is considered as block scope.
