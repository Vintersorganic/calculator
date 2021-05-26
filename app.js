function operate(operator, num1, num2) {
    if (operator == '') {
        currentNumber = '';
    }
    else {
        if (operator == "add") {
            return num1 + num2;
        }
        else if (operator == "substract") {
            return num1 - num2;
        }
        else if (operator == "multiply") {
            return num1 * num2;
        }
        else {
            return num1 / num2;
        }
    }
}

//Global variables 

let currentNumber = '';
let previousNumber = '';
let globalOperator = ''


function populateNumber() {
    let currentNumbers = document.querySelectorAll(".number");
    currentNumbers.forEach(number => {
        number.addEventListener("click", () => {
            if (currentNumber.length < 16) { 
                    currentNumber = currentNumber + number.innerText;
                    displayCurrentNumber();
                    displayPreviousNumber();
            }
            else displayCurrentNumber();
            displayPreviousNumber();
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
        displayPreviousNumber()
    })
    
}

function clearButton() {
    let clearButton = document.querySelector(".clear")
    clearButton.addEventListener("click", () => {
        currentNumber = '';
        previousNumber = '';
        displayCurrentNumber()
        displayPreviousNumber()
    })
}

function currentOperator () {
    let operators = document.querySelectorAll(".operator") 
    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            if (globalOperator == '') {
                previousNumber = currentNumber;
                currentNumber = '';
            }
            
            if (operator.innerText == "+") {
                globalOperator = "add"
                calculationFunction()
                
            }
            else if (operator.innerText == "-") {
                globalOperator = "substract";
                calculationFunction();
                globalOperator = "substract"
            }
            else if (operator.innerText == "x") {
                globalOperator = "multiply";
                calculationFunction();
                globalOperator = "multiply"
            }
            else if (operator.innerText == "/"){
                globalOperator = "divide";
                calculationFunction();
                globalOperator = "divide"
            }         
        }) 
    })
}

function calculation() {
 let equal = document.getElementById("button-equal");
    equal.addEventListener("click", () => {
        calculationFunction();  
    }) 
}

function calculationFunction() {
    if (previousNumber != '' && currentNumber != '' && globalOperator != '') {
        previousNumber = Number(previousNumber);
        currentNumber = Number(currentNumber);
        let result = operate(globalOperator, previousNumber, currentNumber);
        currentNumber = result.toString()
        displayCurrentNumber();
        displayPreviousNumber()
        previousNumber = '';
        globalOperator = ''; 
}
}

function displayPreviousNumber() {
    let display = document.querySelector(".display-previous");
    display.innerText = previousNumber;
}

populateNumber()
currentOperator()
clearButton()
deleteNumbers()
calculation()   




