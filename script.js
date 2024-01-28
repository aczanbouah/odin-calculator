let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue = 0;
let result = 0;

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);
const numberValue = document.querySelector(".display-value");
updateDisplay();

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", handleDecimal);

function handleDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
    updateDisplay();
  }
}

const allNumberButtons = document.querySelectorAll(".number");
allNumberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayValue += e.target.dataset.value;
    updateDisplay();
  });
});

const allOperatorButtons = document.querySelectorAll(".operator");
allOperatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator !== "") {
      firstNumber = operate(firstNumber, operator, parseInt(displayValue));
      displayValue = firstNumber;
      updateDisplay();
      operator = e.target.dataset.value;
      displayValue = secondNumber;
    } else {
      firstNumber = Number(displayValue);
      operator = e.target.dataset.value;
      updateDisplay();
      displayValue = secondNumber;
    }
  });
});

const equalsBtn = document.querySelector(".equal");
equalsBtn.addEventListener("click", () => {
  secondNumber = displayValue;
  result = operate(firstNumber, operator, secondNumber);
  displayValue = result;
  updateDisplay();
  secondNumber = 0;
  operator = "";
});

function add(num1, num2) {
  return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}

function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

function percentage(num1, num2) {
  return ((Number(num1) / Number(num2)) * 100).toFixed(2);
}

function power(num1, num2) {
  return Number(num1) ** Number(num2);
}

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return percentage(num1, num2);
    case "^":
      return power(num1, num2);
  }
}

function updateDisplay() {
  if (!Number.isInteger(Number(displayValue))) {
    numberValue.innerText = parseFloat(displayValue).toFixed(2);
  } else {
    numberValue.innerText = Number(displayValue);
  }
}

function clear() {
  firstNumber = 0;
  operator = "";
  secondNumber = 0;
  displayValue = 0;
  result = 0;
  updateDisplay();
}
