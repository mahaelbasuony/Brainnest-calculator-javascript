function add(firstNum, secondNum) {
  try {
    let experationVal = parseInt(firstNum, 10) + parseInt(secondNum, 10);
    if (experationVal == Infinity) return '0';
    else return experationVal;
  } catch (err) {
    return '0';
  }
}

function subtract(firstNum, secondNum) {
  try {
    let experationVal = parseInt(firstNum, 10) - parseInt(secondNum, 10);
    if (experationVal == Infinity) return '0';
    else return experationVal;
  } catch (err) {
    return '0';
  }
}
function multiply(firstNum, secondNum) {
  try {
    let experationVal = parseInt(firstNum, 10) * parseInt(secondNum, 10);
    if (experationVal == Infinity) return '0';
    else return experationVal;
  } catch (err) {
    return '0';
  }
}
function divide(firstNum, secondNum) {
  try {
    let experationVal = parseInt(firstNum, 10) / parseInt(secondNum, 10);
    if (experationVal == Infinity) return '0';
    else return experationVal;
  } catch (err) {
    return '0';
  }
}
function remainder(firstNum, secondNum) {
  try {
    let experationVal = parseInt(firstNum, 10) % parseInt(secondNum, 10);
    if (experationVal == Infinity) return '0';
    else return experationVal;
  } catch (err) {
    return '0';
  }
}

function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case '+':
      return add(firstNum, secondNum);
    case '-':
      return subtract(firstNum, secondNum);
    case '/':
      return divide(firstNum, secondNum);
    case '*':
      return multiply(firstNum, secondNum);
    case '%':
      return remainder(firstNum, secondNum);
    default:
      return '';
  }
}

let firstNum = '';
let secondnum = '';
let operator = '';
let number = '';
let operatorIndex = 0;
let oldvalue = 0;
let floatNum = 0;
let numbers = document.querySelectorAll('.numbers');
let allOperators = document.querySelectorAll('.operator');
let screen = document.getElementById('showVal');

let numOperator = 0;

for (let i = 0; i < allOperators.length; i++) {
  allOperators[i].addEventListener('click', function (event) {
    document.querySelector('.dot').disabled = false;
    floatNum = 0;
    if (screen.value === '0') {
      screen.value = '0';
    } else {
      if (['+', '-', '/', '%', '*'].includes(event.target.value)) {
        operator = event.target.value;

        screen.value = '';
      }
    }
    if (firstNum && secondnum) {
      oldvalue = operate(operator, firstNum, secondnum);
      screen.value = oldvalue;
      firstNum = oldvalue;
    }
    if (event.target.value === '=') {
      secondnum = '';
    }
  });
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function (event) {
    if (screen.value == '0') {
      screen.value = '';
    }
    if (oldvalue) {
      screen.value = '';
    }
    if (event.target.value === '.') {
      floatNum++;
      document.querySelector('.dot').disabled = true;
    }

    screen.value += event.target.value;
    if (!operator) {
      firstNum = screen.value;
      console.log(firstNum);
    } else {
      secondnum = screen.value;
    }
  });
}

function negativeOrPositive() {
  let perviousnum = firstNum;
  if (perviousnum > 0) {
    screen.value = -Math.abs(perviousnum);
    firstNum = screen.value;
  } else {
    screen.value = Math.abs(perviousnum);
    firstNum = screen.value;
  }
}
function clearValue() {
  screen.value = '0';
  firstNum = '';
  secondnum = '';
  oldvalue = '';
  operator = '';
}

function del() {
  let experation = document.getElementById('showVal').value;
  document.getElementById('showVal').value = experation.substr(
    0,
    experation.length - 1
  );
}

window.addEventListener('keydown', function (event) {
  const isNumber = /^[0-9]$/i.test(event.key);
  let operators = ['+', '-', '/', '%', '*'];
  document.querySelector('.dot').disabled = false;
  floatNum = 0;
  if (screen.value === '0') {
    screen.value = '0';
  } else {
    if (operators.includes(event.key)) {
      operator = event.key;

      screen.value = '';
    }
  }
  if (firstNum && secondnum) {
    oldvalue = operate(operator, firstNum, secondnum);
    screen.value = oldvalue;
    firstNum = oldvalue;
  }
  if (event.key === '=') {
    secondnum = '';

  }
  if (isNumber) {
    if (screen.value == '0') {
      screen.value = '';
    }
    if (oldvalue) {
      screen.value = '';
    }
    if (event.key === '.') {
      floatNum++;
      document.querySelector('.dot').disabled = true;
    }

    screen.value += event.key;
    if (!operator) {
      firstNum = screen.value;
      console.log(firstNum);
    } else {
      secondnum = screen.value;
    }

  }

});

// window.addEventListener('keydown', function (event) {
//   const isNumber = /^[0-9]$/i.test(event.key);
//   let operators = ['+', '-', '/', '%', '*'];
//   if (isNumber || operators.includes(event.key)) {
//     if (document.getElementById('showVal').value != '0')
//       document.getElementById('showVal').value += event.key;
//     else {
//       document.getElementById('showVal').value = '';
//       document.getElementById('showVal').value += event.key;
//     }
//   }
//   if (event.key === '=') {
//     calculate();
//   }
// });
