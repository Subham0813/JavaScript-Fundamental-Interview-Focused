var x =10 

function a() {
    console.log("I'm function a");
}
function b() {
    console.log("I'm function b, calling funtion a");
    a();
}
function c() {
    console.log("I'm function c, calling function b");
    b();
}
c()
console.log("I'm GEC, value of x :", x);

/*
How JS works?
At very beginning JS creates a Global execution context and allocate memory to each variables and functions (JS hoist entire funtion defination for regular functions), so in memory creation phase variable a gets value *undefined* and functions a(), b(), and c() stores entire function definations, then in execution phase JS engine assign a =10 and invoke function c() so JS engine make a function execution context for c() and push it into call stack and starts executes it, similarly for the function b() and a(), so the output will sequential like first console.log from c and calls b() then console.log from b and calls a() and finally console.log from a() and js remove EC for a() from the call stack first then for b() and lastly for c() and when program ends it remove the GEC from the stack.
*/