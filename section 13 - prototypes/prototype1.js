let food = {
    init: function (type) {
        this.type = type
    },
    recipe: function () {
        console.log(`This is a recipe for ${this.type}`);
    }
}

let donut = Object.create(food)
let orange = Object.create(food)
donut.init('Donuts')
orange.init('Oranges')


food.recipe = function () {
    console.log(`YOU ARE NOW EATING ${this.type.toUpperCase()}`);
}

donut.recipe()
orange.recipe()

console.log(food.isPrototypeOf(donut));
