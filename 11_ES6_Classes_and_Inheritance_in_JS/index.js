//Classes in JS is a cleaner way to create constructor functions which helps to work with prototype without conflicts and without modifying the inbuilt prototypes

class Person {
  constructor(name, age, ...params) {
    this.name = name;
    this.age = age;
    this.params = params;
  }

  greet() {
    console.log(`Hello ${this.name}, age is ${this.age}, ${this.params}`);
  }
}

const subham = new Person("subham", 40, "subham@email.in");
subham.greet();
// subham.getName(); //TypeError: subham.getName is not a function


//Inheritance of parent class
class Developer extends Person {
    constructor(name, email, desg) {
        super()
        this.name = name,
        this.email=email
        this.desg = desg
    }
    greet() { //override
        console.log(`Hello I'm ${this.name}, a ${this.desg}, contact me at ${this.email}`)
    }

    getName(){
        return this.name
    }
}

const surjo = new Developer ('Surjo', 'sur@jo.cc', "UI engineer")

surjo.greet()
console.log(surjo.getName())


//Public & Private Fields in class to maintain 

class Account {
    name = "Subham"; // public field
    age = 22;


    #balance=1000 //private field


    greet() {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
    getbalance(){
        console.log(`Your current a/c balance : ${this.#balance}`)
    }
    deposit(amount){
        if(Number(amount)){
            this.#balance += amount
        }
    }
  }
  
  const p1 = new Account();
  console.log(p1.name); 
  p1.greet(); 

  p1.name = "Sunanda"
  console.log(p1.name); 
  p1.greet();  
   
//   console.log(p1.#balance) //SyntaxError: Private field '#balance' must be declared in an enclosing class

p1.getbalance()
p1.deposit(100)
p1.getbalance()
p1.deposit(1001)
p1.getbalance()


//Instance VS Prototype VS Static method

class User {
    constructor(username, password){
        this.username= username
        this.password = User.hash(password)
    }

    static hash(password){
        return `#$${password}%^${password}%&#$*#@(&)`
    }
    
    static isValidUsername(username){
        return typeof username === 'string' && username.length>=4
    }
    
    login(inputPassword){
        if(User.hash(inputPassword) === this.password){
            console.log("Logged in successfully")
        }
    }

    getUserData(){
        return {
            username : this.username,
            password: this.password
        }
    }

}

const newUser = new User("subham", "12345")

newUser.login('12345') //Instance method
// console.log(newUser.isValidUsername("subham")) //❌ static method refers to class only  
console.log(User.isValidUsername("subham")) //✅ works

console.log(newUser.getUserData())
