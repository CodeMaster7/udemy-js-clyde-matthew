// **** 1. MUTATE METHODS
let numbers = [5, 10, 15];
console.log(numbers.push(20));
numbers;

let original = ['blue', 'green']
let amended = original.push('red')

original;

// **** 2. ACCESSOR METHODS
let names = ['john', 'wally', 'cindy']
let copy = names.slice(1, 3)
copy;
names;

// **** 3. ITERATOR METHODS
let animals = ['dog', 'cat']
const animalIterator = animals.map((animalType) => {
    console.log(`we are dealing with a ${animalType}`);
})