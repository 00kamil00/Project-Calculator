function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2 
}

function divide (num1, num2) {
    return num1 / num2
}

let num1 = ''
let num2 = ''
let operator = ''

function operate (num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    } else return "ERROR"
}


const num_btn = document.querySelectorAll(".number")
const screen = document.querySelector(".screen")

num_btn.forEach((button) => {
    button.addEventListener("click", () => {
        let clicked_num = button.textContent
        num1 += clicked_num
        screen.textContent = num1
    })
})



