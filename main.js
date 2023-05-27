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
  
  if (operation === '+') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operation === '-') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operation === '*') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operation === '/') {
    result = parseFloat(n1) / parseFloat(n2);
  } else if (operation === '%') {
    result = (parseFloat(n1) / 100) * parseFloat(n2);
  }
  return result
}

// this will update the operation variable, depending on the user input

function getOperator(e){
  //console.log(e.target.dataset.operator)
  // let current = bottomField.textContent;

  let action = e.target.dataset.operator;

  if(action === "AC") {bottomField.innerHTML = topField.innerHTML = ""; currentResult = 0}
  else if(action === "DEL" && bottomField.innerHTML !=="") {bottomField.textContent = bottomField.textContent.slice(0,-1); return}
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
function getDigits(e) {
  //console.log(e.target.dataset.key)
  bottomField.textContent += e.target.dataset.key;
}


// this will display the result
function displayResult(){
  console.log(operation)
  console.log(currentResult)
  console.log(bottomField.textContent)
  
  if(operation !== undefined){
    showResult(calculate(currentResult, operation, bottomField.textContent))
    //showResult(calculate("1", "-", "2"))
  }
}


// mouse click event listeners

operators.forEach((operator) => {
  operator.addEventListener('click', getOperator)
})

digits.forEach((digit) => {
  digit.addEventListener('click', getDigits)
})

output.addEventListener('click', displayResult)

//keyboard input
document.addEventListener('keydown', (e) => {
  if(e.key >= 0 )
} )

// calcInput.addEventListener("click", (e) => {
  
  
  // if(e.target.matches('button')) {//
  //   const action = e.target.dataset.operator;
  //   if(!action){
      
  //     //console.log(e.target.dataset.key)
  //     bottomField.innerText += e.target.dataset.key;
  //   }

  //   if(action) {
  //     //console.log(action)


  //     if(action === "DEL" && bottomField.innerHTML !=="&nbsp;") bottomField.innerText = bottomField.innerText.slice(0,-1) 
  //     if(action === "AC") bottomField.innerHTML = topField.innerHTML = "&nbsp;";
  //     if( bottomField.innerHTML !=="&nbsp;") firstNumber = bottomField.innerText;
  //     if(action === "+" || action === "-" || action === "/" || action === "*" || action === "%"){
  //       operator = action;
  //       topField.innerText = bottomField.textContent + " " + action;
  //       bottomField.innerHTML = "&nbsp;"
  //       return;
  //       // if(firstNumber < 0) {
  //       //   console.log('here')
  //       //   firstNumber = parseFloat(bottomField.innerText);
  //       //   topField.innerText = firstNumber + " " + action;
  //       //   bottomField.innerHTML = 0
  //       // } 
  //       // if(firstNumber > 0){
  //       //   console.log('not here')
  //       //   secondNumber = parseFloat(bottomField.innerText);
  //       //   console.log(firstNumber, operator, secondNumber)
  //       //   //bottomField.innerHTML = calculate(firstNumber, operator, secondNumber)
  //       //   topField.innerHTML = "&nbsp;"
  //       // }
  //     }
  //     if(action === "result"){
  //       bottomField.innerText =  calculate(topField.textContent, operator, bottomField.textContent);
  //       topField.innerHTML = "&nbsp;"
  //     }
  //   }
  // }

  //console.log(e.target.dataset.operator || e.target.dataset.key)
// })

