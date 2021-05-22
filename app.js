function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == "add") {
        return add(num1,num2)
    }
    else if (operator == "subtract") {
        return subtract(num1,num2);
    }
    else if (operator == "multiply") {
        return multiply(num1,num2);
    }
    else {
        return divide(num1,num2);
    }
}

//Global variables 

let currentNumber = '';
let previousNumber = '';
let operator = ''
let calculation = ''

function populateNumber() {
    
    let numbers = document.querySelectorAll(".number");
    numbers.forEach(number => {
        console.log(typeof number.innerText)
        number.addEventListener("click", () => {
            if (currentNumber.length < 16) {
                currentNumber = currentNumber + number.innerText;
                displayNumber(currentNumber);
            }
            else displayNumber(currentNumber)
        })
    });
   
}

function displayNumber() {
    let display = document.querySelector(".display");
    display.innerText = currentNumber;
}

populateNumber()




