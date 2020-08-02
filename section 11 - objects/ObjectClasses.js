// waste of memory space
// you dont want to duplicate getName method for example

function Person (fname, lname) {
    this.fname = fname
    this.lname = lname
    this.getName = function () {
        console.log(`${this.fname} ${this.lname}`);
    }
}

let user1 = new Person('John', 'Doe')
user1.getName()

let user2 = new Person('Wally', 'war')
user2.getName()

// you want to add it to the prototype of that object
function Person1 (fname, lname) {
    this.fname = fname
    this.lname = lname
    this.getName = function () {
        console.log(`${this.fname} ${this.lname}`);
    }
}

let user3 = new Person('John', 'Doe')
user1.getName()

Person1.prototype.age = 35
// if you check in the console under __prototype__ it will have age
user3