let fruit = {
    bananas: 12,
    carrots: 2,
    mangos: 7
}

fruit;

// method 1: Object.keys
let fruitKeys = Object.keys(fruit)
fruitKeys;

// method 2: Object.values
let fruitValues = Object.values(fruit)
fruitValues;

// method 3: Object.entries
let fruitEntries = Object.entries(fruit)
fruitEntries;

// if you use Object.entries, you probably want to extract the kay value pairs
for (const fruit of fruitEntries) {
    console.log(fruit);
}

for (const [fruitKey, fruitValue] of fruitEntries) {
    console.log(`You need to buy ${fruitValue} ${fruitKey}`);
}