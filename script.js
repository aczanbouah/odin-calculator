let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let displayValue = 0;

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clear);
const numberValue = document.querySelector(".display-value");
updateDisplay();

const allNumberButtons = document.querySelectorAll(".number");
allNumberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayValue += e.target.dataset.value;
    updateDisplay();
  });
});

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function percentage(num1, num2) {
  return ((parseInt(num1) / parseInt(num2)) * 100).toFixed(2);
}

function power(num1, num2) {
  return parseInt(num1) ^ parseInt(num2);
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
  numberValue.innerText = parseInt(displayValue);
}

function clear() {
  firstNumber = 0;
  operator = "";
  secondNumber = 0;
  displayValue = 0;
  updateDisplay();
}
