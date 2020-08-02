// constructor vs literal

// **** 1. constructor function
function Person() {
	this.membershipStatus = false;
	this.name = 'wally';
	this.talk = function() {
		console.log(`The membership status of ${this.name} is ${this.membershipStatus}`);
	};
};

// you need to instantiate the object before you can use it
let person1 = new Person();
person1;
// person1.talk()

let person2 = new Person();
person2;
person2.name = 'john';
person2.membershipStatus = true;

// each person will be UNIQUE
person1.talk();
person2.talk();




// **** 2. Literal syntax approach (its always working with the same object)
let person = {
    membershipStatus: false,
    name: 'wally',
    talk: function () {
        console.log(`The membership status of ${this.name} is ${this.membershipStatus}`);
    }
}

person.talk()

let tom = person;
tom.name = 'tom';

let cindy = person;
cindy.name = 'cindy';

cindy.talk()
tom.talk()

// **** with the literal notation, you are always dealing with the same object (singleton)
let original = {
    name: 'original'
}

let clone = original;
clone.name = 'clone'

original;