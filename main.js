"use strict";

// general selectors
const topField = document.querySelector(".calculator__output--top");
const bottomField = document.querySelector(".calculator__output--bottom");
const calcInput = document.querySelector(".calculator__input");

// digits and operators selectors
const operators = calcInput.querySelectorAll('[data-operator]');
const digits = calcInput.querySelectorAll('[data-key]');
const output = calcInput.querySelector('[data-result]');

// initial variables
let currentResult;
let operation;


// this functions clears the top row and displays the result in the second row
function showResult(result){
  topField.innerHTML = "&nbsp;";
  bottomField.innerText = result;
}

// this calculates the values
function calculate(n1, operation, n2) {
  let result = ''
  
  if(!n1) return "";
  if(!n2) return n1;

  if (operation === '+') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operation === '-') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operation === '*') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operation === '/') {
    if(parseFloat(n2) === 0)  result = 0;
    else {result = parseFloat(n1) / parseFloat(n2);}
  } else if (operation === '%') {
    result = (parseFloat(n1) / 100) * parseFloat(n2);
  }
  return result
}

// this will update the operation variable, depending on the user input

function getOperator(action){ 
  if(action === "AC") {bottomField.innerHTML = topField.innerHTML = ""; currentResult = 0}
  else if(action === "DEL" && bottomField.innerHTML !=="") {bottomField.textContent = bottomField.textContent.slice(0,-1);}
  else {
    if(bottomField.textContent !== "") {
      operation = action;
    currentResult = bottomField.textContent
    topField.textContent = currentResult + " " + operation;
    bottomField.textContent = "";
    }
  }
}

// this will update the display with the user input
function getDigits(digit) {
  
  if(bottomField.innerText === "" && digit === ".") return;
  if(bottomField.innerText === "" && digit === "00") return;
  if(bottomField.innerText === "0" && (digit === "00" || digit === "0")) return;
  if(bottomField.innerText.includes(".") && digit === ".") return;
  bottomField.textContent += digit;
}


// this will display the result
function displayResult(){  
  if(operation !== undefined){
    showResult(calculate(currentResult, operation, bottomField.textContent));
    currentResult = 0;
  }
}


// mouse click event listeners

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    let action = e.target.dataset.operator;
    getOperator(action)
  })
})

digits.forEach((digit) => {
  digit.addEventListener('click', (e) => {
    let digit = e.target.dataset.key;
    getDigits(digit)
  })
})

output.addEventListener('click', displayResult)

//keyboard input
document.addEventListener('keydown', (e) => {
  console.log(e.key)
  if(e.key >= 0 && e.key <= 9 || e.key === "." )  getDigits(e.key);
  if(e.key === "AC" || e.key === "*" || e.key === "/" || e.key === "+" || e.key === "-" || e.key === "%") getOperator(e.key)
  if(e.key === "Escape") bottomField.innerHTML = topField.innerHTML = ""; 
  if(e.key === "Delete" || e.key === "Backspace" ) bottomField.textContent = bottomField.textContent.slice(0,-1);
  if(e.key === "Enter") displayResult();
})



