let hi = function (name) {
    return `Welcome ${name}`
}

// next, lets define our members
let memberlist = ['Tom', 'Jerry']

// lets say we get new users, John and wally
memberlist.push('John')
memberlist.push('Wally')
memberlist;

// greet all members
// traditional old-school for loop
for (let i = 0; i < memberlist.length; i++) {
    let greeting = hi(memberlist[i])
    console.log(greeting);
}

// old school way - for in loop
//normally includes an if statement
for (const name in memberlist) {
    if (memberlist.hasOwnProperty(name)) {
        let greeting = hi(memberlist[name])
        console.log(greeting);
    }
}

// this is awesome - for of loop
for (const name of memberlist) {
    let greeting = hi(name)
    console.log(greeting);
}