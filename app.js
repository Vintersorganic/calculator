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
let globalOperator = ''
let calculation = ''

function populateNumber() {
    let currentNumbers = document.querySelectorAll(".number");
    currentNumbers.forEach(number => {
        number.addEventListener("click", () => {
            if (currentNumber.length < 16) { 
                    currentNumber = currentNumber + number.innerText;
                    displayCurrentNumber();
            }
            else displayCurrentNumber()
        })
    });
   
}

function displayCurrentNumber() {
    let display = document.querySelector(".display");
    display.innerText = currentNumber;
  
}


function deleteNumbers() {
    let deleteButton = document.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        currentNumber = currentNumber.slice(0, -1);
        displayCurrentNumber();
    })
    
}

function clearButton() {
    let clearButton = document.querySelector(".clear")
    clearButton.addEventListener("click", () => {
        currentNumber = '';
        previousNumber = '';
        displayCurrentNumber()
    })
}

function currentOperator () {
    let operators = document.querySelectorAll(".operator") 
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            previousNumber = currentNumber;
            currentNumber = '';
            if (operator.innerText == "+") {
                globalOperator = "add"
            }
            else if (operator.innerText == "-") {
                globalOperator = "substract"
            }
            else if (operator.innerText == "x") {
                globalOperator = "multiply"
            }
            else {
                globalOperator = "divide";
            }         
        }) 
    })
    
    displayCurrentNumber()
}

currentOperator()
clearButton()
populateNumber()
deleteNumbers()




