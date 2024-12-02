function add(val1, val2) {
  return val1 + val2;
}

function subtract(val1, val2) {
  return val1 - val2;
}

function multiply(val1, val2) {
  return val1 * val2;
}

function divide(val1, val2) {
  return val1 / val2;
}

function operate(operator) {
  return;
}

function clear() {
  updateDisplay(0);
  val1 = '';
  val2 = '';
  operator = null;
  return;
}

// function getNumber(e) {
//   // For now, to get it up and running this only messes with val1
//   // eventually we will need to work out assigning val2 and whatever operator is selected

//   if (e.target.textContent === 'C') {
//     clear();
//     return;
//   }
//   if (e.target.className === 'button number') {
//     if (val1 === '' && operator === null) {
//       val1 = e.target.textContent;
//     } else {
//       val1 += e.target.textContent;
//     }
//     console.log(val1);
//   }

//   // NEEDS FIXING (doesnt actually slice off the end and replace it with new char)
//   if (val1.length > 10) {
//     val1 = val1.slice(0, -1);
//     val1 += e.target.textContent;
//     updateDisplay(val1);
//     return;
//   }

//   updateDisplay(val1);
//   console.log(val1);
//   return;
// }

function handleUserInput(e) {
  console.log(val1);
  console.log(val2);
  if (e.target.className === 'button number') {
    if (!operator) {
      val1 = appendDigit(val1, e.target.textContent);
    } else {
      val2 = appendDigit(val2, e.target.textContent);
    }
    updateDisplay(val1 || val2);
  }
  if (e.target.textContent === 'C') {
    clear();
  }
}

function appendDigit(currentValue, digit) {
  if (currentValue.length >= 10) {
    return currentValue.slice(0, -1) + digit;
  }
  return currentValue + digit;
}

function updateDisplay(displayText) {
  display.textContent = displayText;
}

let val1 = '';
let val2 = '';
let operator = '';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const numberButtons = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear');

numberButtons.forEach(addEventListener('click', handleUserInput));
clearButton.addEventListener('click', clear);
