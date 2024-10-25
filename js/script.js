let num1 = [];
let num2 = [];
let isNum2Storing = false;
let operator = '';
let display = document.querySelector('#display');
const buttons = document.querySelector('#buttons')

buttons.addEventListener('click', (e) => {
        if (e.target.id == 'clear') {
            num1 = [];
            num2 = [];
            isNum2Storing = false;
            operator = '';
            display.textContent = '';
        } else if (typeof parseInt(e.target.textContent) == 'number' 
        && e.target.className == 'number') {
            numPush(e);
    } else if (e.target.parentElement.className == 'operators') {
        if (isNum2Storing = false) {
            getOperatorNum1(e);
            isNum2Storing = true; 
        } else {
            getOperatorNum2(e);
        };
        }
    }
)

function numPush(e) {
    if (isNum2Storing === false) {
        num1.push(e.target.textContent);
        display.textContent = num1.join('');
    } else {
        num2.push(e.target.textContent);
        display.textContent = num2.join('');
    }
}

function getOperatorNum1(e) {
    switch(e.target.id) {
        case ('plus'):
            operator = '+';
            break;
        case ('minus'):
            operator = '-';
            break;
        case ('mult'):
            operator = '*'
            break;
        case ('division'):
            operator = '/';
            break;
        case ('equal'):
            return;
    }
}

function getOperatorNum2(e) {
    switch(e.target.id) {
        case ('plus'):
            operate(num1.join(''), num2.join(''), operator)
            operator = '+';
            break;
        case ('minus'):
            operate(num1.join(''), num2.join(''), operator)
            operator = '-';
            break;
        case ('mult'):
            operate(num1.join(''), num2.join(''), operator)
            operator = '*'
            break;
        case ('division'):
            operate(num1.join(''), num2.join(''), operator)
            operator = '/';
            break;
        case ('equal'):
            operate(num1.join(''), num2.join(''), operator);
    }
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function substract(a, b) {
    return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
    return parseInt(a) * parseInt(b);
}

function divide(a, b) {
    if (b === 0) {return 'ERROR'};
    return parseInt(a) / parseInt(b);
}

function operate(n1, n2, opr) {
    switch(opr) {
        case ('+'):
            num1 = add(n1, n2).toString().split('');
            break;
        case ('-'):
            num1 = substract(n1, n2).toString().split('');
            break;
        case ('*'):
            num1 = multiply(n1, n2).toString().split('');
            break;
        case ('/'):
            num1 = divide(n1, n2).toString.split('');
    }
    display.textContent = num1.join('');
    num2 = [];
}
