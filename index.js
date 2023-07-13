const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals')
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.times'); 
const div = document.querySelector('.div');
const decimal = document.querySelector('.decimal');

const nums = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.operator');

const add = (x, y) => {
    return +x + +y;
}
const subtract = (x, y) => {
    return x - y;
}
const multiply = (x, y) => {
    return x * y;
}
const divide = (x, y) => {
    return x / y;
}

const allClear = (e) => {
    display.innerHTML = 0
    console.log('clicked')
};

const displayNum = (e) => {
if (!operator) {
    firstNum += e.target.innerText;
    display.innerText = firstNum;
    console.log('FIRST NUM', firstNum);
} else if (operator) {
    secondNum += e.target.innerText;
    display.innerText = secondNum;
    console.log('SECOND NUM', secondNum);
} 
};

const displayOperator = (e) => {
    if (!operator && firstNum) {
        operator += e.target.innerText;
        console.log('OPERATOR', operator);
    } 
}

let firstNum = '';
let secondNum = '';
let operator = '';
let outcome = 0;

const operate = (e) => {
    if (firstNum && secondNum && operator) {
           if (e.target.classList.contains('equals')) {
            if(operator === '+') {
            outcome = add(firstNum, secondNum)
             } else if (operator === '-') {
            outcome = subtract(firstNum, secondNum)
             } else if (operator === 'x') {
            outcome = multiply(firstNum, secondNum)
                } else if (operator === '\u00F7') {
            outcome = divide(firstNum, secondNum)
             }
            display.innerText = outcome
            console.log('OUTCOME', outcome);
            firstNum = '';
            secondNum = '';
            operator = '';
        } else if (e.target.classList.contains('operator')) {
            if(operator === '+') {
                outcome = add(firstNum, secondNum)
                 } else if (operator === '-') {
                outcome = subtract(firstNum, secondNum)
                 } else if (operator === 'x') {
                outcome = multiply(firstNum, secondNum)
                    } else if (operator === '\u00F7') {
                outcome = divide(firstNum, secondNum)
                 }
                display.innerText = outcome
                console.log('OUTCOME', outcome);
                firstNum = outcome;
                secondNum = '';
                operator = '';
        }
    }
}


plus.addEventListener('click', operate) 
minus.addEventListener('click', operate) 
times.addEventListener('click', operate) 
div.addEventListener('click', operate) 
equals.addEventListener('click', operate)
clear.addEventListener('click', allClear)

nums.forEach(num => num.addEventListener('click', displayNum))
operators.forEach(operator => operator.addEventListener('click', displayOperator))



