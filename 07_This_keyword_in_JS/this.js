
//JS * This * keyword value depends on how it is being called not where it is called.

// "use strict";
console.log(this); //Window object in browser environment in strict or non strict mode and an empty object in Node.js environment

function fun () {
    console.log(this)
    //in Strict mode this -> undefined
    //in non strict mode this -> window object in browser and {} in node

}
fun()  //function calling

const obj = {
    name : "subham",
    func : function () {
        console.log(this)
        //in object this -> object itself

    }
}
obj.func()

var a = 22 

const obj2 = {
    name: "suman",
    func : function () { // function or method
        var a = 25
        console.log(this.name) //suman
        
        //inside method this --> object context

        function fun2() { //function
            console.log(this) //window or {}
            //inside function this --> global context

            // console.log(this.a) //22

            console.log(a) //25  
            //func2 makes closure with this.func 
        }
        fun2()
    }
}

obj2.func() // calling

const arrowFun = () => {
    console.log(this)
}
arrowFun()

const obj3 = {
    name : "Suppper",
    arrowFun: () => {
        console.log(this) //window or {}

        // Arrow functions do not have their own this.They lexically inherit this from their parent scope.
    },

    parent : function () {

        const age = 33
        const arrowChild = () => {
            console.log(this) //{name: 'Suppper', arrowFun: ƒ, parent: ƒ}

            // ##lexically inherit this from parent scope.

            console.log(age) //33 (from function's scope)
            console.log(this.age) //no age in parent scope so return undefined
            console.log(this.name) //"Suppper" (from parent scope)

        }
        arrowChild()
    }
}

obj3.arrowFun()
obj3.parent() 



function getMessage(name) {
    this.message = `Hello ${name}, keep learning..`
    this.age = 22
    console.log(this) //{message: 'Hello Subham, keep learning..', age: 22}
}

//new with function is a constructor function

const msg = new getMessage('Subham') 
console.log(msg) //{message: 'Hello Subham, keep learning..', age: 22}



function goofy(message){
    console.log(this) //{}
    this.msg = message //constructor method

    console.log(this.msg) //message parameter value
    console.log(this) //{msg : message parameter value}
}

const g1 = new goofy("hello")


// new making a function a constructor function ,How?? 
//Every time new keyword declared, JS engine makes a new instance of that object or function and bind 'This' to that object or function.

//In JS every constructor function has its own call aply bind which can be usefull for function borrowing between objects, helps to reuse code with one time declaration

