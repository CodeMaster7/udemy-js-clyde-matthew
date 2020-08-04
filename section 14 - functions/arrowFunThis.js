// with a constructor function the value of this is bound to the newly created object being created
function Person() {
    this.name = 'wally'
}

let user = new Person()
user // Person { name: 'wally }

// set a timer using setInterval
function Person1() {
    this.firstName = 'wally'
    this.display = setInterval(() => { // we are console logging the newly created person object with the arrow key
        console.log(`Hi ${this.firstName}`); // with a normal function the this key word points to the global object
    }, 1000)
}

let user1 = new Person1()