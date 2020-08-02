// CLASSES

// 1. constructor function
function Person (name) {
    this.name = name
}

Person.prototype.greeting = function () {
    console.log(this.name);
}

let user = new Person('wally')
user.greeting()

// 2. class syntax
class Person {
    constructor(name) {
        this.name = name
    }
    greeting() {
        console.log(this.name);
    }
}

let user1 = new Person('wally1')
user1.greeting()

// in Javascript, a class is a kind of function, and it puts the methods we create here into the prototype property
console.log(Person);
console.log(Person === Person.prototype.constructor);
// methods
console.log(Object.getOwnPropertyNames(Person.prototype));
