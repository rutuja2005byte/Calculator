let firstNumber = "";
let secondNumber = "";
let operator = "";

function getScreen() {
    return document.getElementById("screenText");
}

function getValue(button) {
    let screen = getScreen();

    if (operator === "") {
        firstNumber = firstNumber + button.value;
        screen.value = firstNumber;
    } else {
        secondNumber = secondNumber + button.value;
        screen.value = firstNumber + operator + secondNumber;
    }
}

function setOperator(button) {
    let screen = getScreen();

    if (firstNumber === "") {
        return;
    }

    operator = button.innerText;
    screen.value = firstNumber + operator;
}

function clearScreen() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    getScreen().value = "";
}

function calculate() {
    let screen = getScreen();
    let result = "";

    if (operator === "+") {
        result = Number(firstNumber) + Number(secondNumber);
    }

    if (operator === "-") {
        result = Number(firstNumber) - Number(secondNumber);
    }

    if (operator === "") {
        result = Number(firstNumber) * Number(secondNumber);
    }

    if (operator === "/") {
        result = Number(firstNumber) / Number(secondNumber);
    }

    screen.value = result;
    firstNumber = String(result);
    secondNumber = "";
    operator = "";
}