let num1 = 0;
let num2 = 0;
let operator;

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
    if (b === 0) {return 'ERROR'}
    return parseInt(a) / parseInt(b);
}

function operate(n1, n2, opr) {
    switch(opr) {
        case ('+'):
            return add(n1, n2);
            break;
        case ('-'):
            return substract(n1, n2);
            break;
        case ('*'):
            return multiply(n1, n2);
            break;
        case ('/'):
            return divide(n1, n2);
    }
}