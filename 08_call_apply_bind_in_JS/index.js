//this keyword behavious depends on how the function is call not where it is declared, sometimes we need to control this 'this' behaviour , in that situation call, apply bind methods are useful, it allows us to manually handle 'this' during function invocation.

const fun = (hobby) => {
    console.log(this)
    console.log(`Hello ${this.name}, your hobby is ${hobby}`)  //arrow function doesnot have their own this so it inherits this from its parent's scope , and doesn't care about call apply bind methods
}

function  fun2 (hobby) {
    console.log(this)
    console.log(`Hello ${this.name}, your hobby is ${hobby}`)
}

const obj = {
    id : 4,
    name : "subham"
};

fun.call(obj, "Exploration")
fun2.call(obj, "Exploration")


//Difference B/w call apply bind

//CALL ==> sets function's this to object's this, immedialty invoked function expression, takes arguments as single variables

//APPLY ==> same as CALL but difference is it takes arguments as an array or an array-like object, immediately invoke function

//BIND ==> same as CALL but difference is it return a function which can be later invoked as need.

const User = {
    id: 4,
    name : "Bapan",
    email : "bapan@ex.mail.in",

    getUser : function () {
        console.log(this)
    }
}

const User2 = {
    id: 3,
    name :"Bhola",
    email:"Bumbum@ex.mail.in"
}


User.getUser()
//Function borrowing
User.getUser.call(User2)
User.getUser.apply(User2)

User.getUser.bind(User2)() // curring

//P.S. => Arrow functions does not have their own "THIS" binding so THIS will be inherited from the Parent, so call, apply and bind does not change "THIS" behaviour.
//