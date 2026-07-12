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
    let result = ''
    
    if (operator === '+') {
        result = add(num1, num2)
    } else if (operator === '-') {
        result = subtract(num1, num2)
    } else if (operator === '*') {
        result = multiply(num1, num2)
    } else if (operator === '/') {
        result = divide(num1, num2)
    } else return "ERROR"


    if (result === "You cannot divide by 0!") {
        return result
    }

    return Math.round(result * 10000) / 10000
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
            let operation_result = operate(num1 * 1, operator, num2 * 1)
            num1 = operation_result
            screen.textContent = num1
            num2 = ''
        } 
        
        operator = operator_text
        screen.textContent = operator
    })
})


const equal_btn = document.querySelector(".equals")

equal_btn.addEventListener("click", () => {

    if (operator === '' || num2 === '') {
        return
    }
    screen.textContent = operate(num1 * 1, operator, num2 * 1)
})


const clear = document.querySelector(".clear")

clear.addEventListener("click", () => {
    num1 = ''
    num2 = ''
    operator = ''
    screen.textContent = ''
})