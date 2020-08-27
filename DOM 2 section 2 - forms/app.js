// grab our output <p> element </p>
let output = document.getElementById('output')

// grab our input textbox
let nameText = document.querySelector('input[type="text"]')

document.querySelector('form').addEventListener('submit', (e) => {
    output.textContent = `A submit event has been fired at ${e.timeStamp}`
    e.preventDefault()
})

// lets play around with different event types
nameText.addEventListener('input', () => {
    output.textContent = `The value entered is ${nameText.value}`
})

// focus event
nameText.addEventListener('focus', (e) => {
    e.target.style.background = 'lightblue'
    e.target.style.color = 'black'
})

// copy
nameText.addEventListener('copy', () => {
    alert('you have copied text')
})

// paste
nameText.addEventListener('paste', () => {
    alert('you have pasted text')
})