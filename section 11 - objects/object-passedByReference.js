// objects can be passed by reference into functions

// creating a function
function changeName (user) {
    user.fname = 'john doe'
}

//create a person
let person = {
    fname: 'wally'
}
person;

// pass object into the function
changeName(person)
person;