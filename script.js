function add(firstNum,secondNum){
  return firstNum+secondNum;
}

function subtract(firstNum,secondNum){
  return firstNum-secondNum;
}
function operate(operator,firstNum,secondNum){
  switch(operator){
    case '+':
      return add(firstNum,secondNum);
    case '-':
      return subtract(firstNum,secondNum);
    default:
      return ''
  }
}

function clear(){

}

