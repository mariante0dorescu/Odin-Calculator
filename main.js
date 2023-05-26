"use strict";

const topField = document.querySelector(".calculator__output--top");
const bottomField = document.querySelector(".calculator__output--bottom");
const calcInput = document.querySelector(".calculator__input");

let firstNumber ;
let secondNumber;
let operator;

function showResult(result){
  topField.innerHTML = "&nbsp;";
  bottomField.innerText = result;
}

function calculate(n1, operator, n2) {
  let result = ''
  
  if (operator === '+') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === '-') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === '*') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === '/') {
    result = parseFloat(n1) / parseFloat(n2);
  } else if (operator === '%') {
    result = (parseFloat(n1) / parseFloat(n2)) * 100;
  }
  
  return result
}


//document.addEventListener('keydown', (e) => console.log(e.key) )

calcInput.addEventListener("click", (e) => {
  
  
  if(e.target.matches('button')) {//
    const action = e.target.dataset.operator;
    if(!action){
      
      //console.log(e.target.dataset.key)
      bottomField.innerText += e.target.dataset.key;
    }

    if(action) {
      //console.log(action)


      if(action === "DEL" && bottomField.innerHTML !=="&nbsp;") bottomField.innerText = bottomField.innerText.slice(0,-1) 
      if(action === "AC") bottomField.innerHTML = topField.innerHTML = "&nbsp;";
      if( bottomField.innerHTML !=="&nbsp;") firstNumber = bottomField.innerText;
      if(action === "+" || action === "-" || action === "/" || action === "*" || action === "%"){
        operator = action;
        topField.innerText = bottomField.textContent + " " + action;
        bottomField.innerHTML = "&nbsp;"
        return;
        // if(firstNumber < 0) {
        //   console.log('here')
        //   firstNumber = parseFloat(bottomField.innerText);
        //   topField.innerText = firstNumber + " " + action;
        //   bottomField.innerHTML = 0
        // } 
        // if(firstNumber > 0){
        //   console.log('not here')
        //   secondNumber = parseFloat(bottomField.innerText);
        //   console.log(firstNumber, operator, secondNumber)
        //   //bottomField.innerHTML = calculate(firstNumber, operator, secondNumber)
        //   topField.innerHTML = "&nbsp;"
        // }
      }
      if(action === "result"){
        bottomField.innerText =  calculate(topField.textContent, operator, bottomField.textContent);
        topField.innerHTML = "&nbsp;"
      }
    }
  }

  //console.log(e.target.dataset.operator || e.target.dataset.key)
})

