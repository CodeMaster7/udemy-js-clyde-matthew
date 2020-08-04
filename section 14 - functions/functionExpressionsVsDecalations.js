// function declaration
function dog () {
    let sound = 'woof'
    console.log(sound);
}

dog()

// function expression
let cat = function () {
    let sound = 'meeeeow'
    console.log(sound);
}

cat()

// *** TIMING is the main difference

// function declaration can be used in its entire scope - here global scope
sayHi('Tom') // this works

function sayHi (name) {
    console.log(`Hi ${name}`);
}

// function expressions are only accessible and usable when it is defined
// function expressions are only accessible and usable when it is defined
// allow you to limit where the function is available.
// it also keeps your global scope clean
// keeps your code tidy.
sayBye('Tom') // this does not work

let sayBye = function (name) {
    console.log(`Bye ${name}`);
}
