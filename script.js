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
    if (num2 === 0) {
        return "You cannot divide by 0!"
    } else {
        return num1 / num2
    }
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
        let num_text = button.textContent
        if (operator === '') {
            num1 += num_text
            screen.textContent = num1
        } else {
            num2 = num_text
            screen.textContent = num2
        }
    })
})


const operator_btn = document.querySelectorAll(".operator")

operator_btn.forEach((button) => {
    button.addEventListener("click", () => {
        let operator_text = button.textContent

        if (num1 !== '' && num2 !== '') {
            let result = operate(num1 * 1, operator, num2 * 1)
            num1 = result
            screen.textContent = num1
            num2 = ''
        } 
        
        operator = operator_text
        screen.textContent = operator
    })
})


const equal_btn = document.querySelector(".equals")

equal_btn.addEventListener("click", () => {
    screen.textContent = operate(num1 * 1, operator, num2 * 1)
})