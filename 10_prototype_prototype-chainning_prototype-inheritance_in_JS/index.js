const arr = []

function fun() {
    console.log("name")
}


// "Everything is a Object in JS" - Why?
//Because of Prototype feature of JS. prototypes are the mechanism by which JS objects inherits methods and properties from other objects.

//Now if we console any mentioned function or object or array follwing with a dot operator, we'll get a bunch of properties or method which we've not declared, so what is this come from? It is because of [[prototype]] property in JS.

//Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

//we can access [[prototype]] by __proto__ attaching whith .[dot] operator but its not recommended. The standard way to access an object's prototype is the Object.getPrototypeOf() method, that getPrototypeOf() method takes object as parameter and return object's prototype info.

const obj = {
    name: "subham"
}

//Lets understand the flow..

//Lets take our obj object, now if we try to access a property of our object,if the property  be found in our object then it will be returned but if its not in our object JS engine further search it inside our object's prototype, if the property still not fount, then js engine search it inside the prototype's prototype and so on utill the property found or the prototype is null which is the end of prototype chain, in that case JS return undefined.

//This behaviour is also known as protoype channing or prototypal inheritance

// console.log(obj.getName()) //undefined

// So when we call obj.getName():  JS engine looks for getName in obj can't find it there, so looks in the prototype object of obj for getName() can't find it , finds further and hits Null as prototype hence return error as getName() is not a function.

console.log(obj.toString()) //[object object]

// similarly when we call obj.toString():  JS engine looks for toString in obj can't find it there, so looks in the prototype object of obj for toString() and find it and call the method.

Object.prototype.toString = function(){
    return "subham"
} //demonstration purpose only

console.log(obj.toString()) //Not recommended ,Highly dengerous ,can lead to conflicts , bugs etc.

