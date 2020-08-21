// first step: grabbing the elements we want to change
let title = document.getElementById('title')
let para1 = document.getElementById('first-paragraph')
let para2 = document.getElementById('second-paragraph')

// second step: define our blue() and red() functions
function blue () {
    let color = 'blue'
    title.setAttribute('style', 'color:' + color)
    para1.setAttribute('style', `color: ${color}`)
    para2.setAttribute('style', `color: ${color}`)
}

function red () {
    let color = 'red'
    title.setAttribute('style', 'color:' + color)
    para1.setAttribute('style', `color: ${color}`)
    para2.setAttribute('style', `color: ${color}`)
}