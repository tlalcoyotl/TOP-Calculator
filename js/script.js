let numStore = 0;
let operator = '';
let display = document.querySelector('#display');
let justOperated = false;
let justEqualed = false;
const buttons = document.querySelector('#buttons')


function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function substract(a, b) {
    return parseFloat(parseFloat(a) - parseFloat(b));
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (b == 0) {return 'lol'};
    console.log(parseFloat(a));
    console.log(parseFloat(b));
    return parseFloat (parseFloat(a) / parseFloat(b));
}

function operate(n1, n2, opr) {
    switch(opr) {
        case ('+'):
            display.textContent = add(n1, n2)
            break;
        case ('-'):
            if (numStore == 0) {
                display.textContent = substract(n2, n1)
            } else {
                display.textContent = substract(n1, n2)
            }
            break;
        case ('*'):
            display.textContent = multiply(n1, n2)
            break;
        case ('/'):
            display.textContent = divide(n1, n2)
            break;
    }
}

const clear = buttons.addEventListener('click', e => {
    if (e.target.id == 'clear') {
        display.textContent = '';
        numStore = 0;
        operator = '';
        justEqualed = false;
        justOperated = false;
    }
});

const equalAction = buttons.addEventListener('click', e => {
    if (e.target.id === 'equal') {
        if (justOperated && display.textContent === numStore) {
            display.textContent = numStore;
            return;
        }
        if (justEqualed === false) {runOperate()};
        justEqualed = true;
    }
});

const screenNumbers = buttons.addEventListener('click', e =>{
    if (display.textContent !== 'ERROR' && display.textContent !== 'lol') {
        if(e.target.className == 'number'
        && justOperated == true) {
            display.textContent = '';
            printText(e);
            justOperated = false;
            justEqualed = false;
        } else if (display.textContent.length <= 10 
            && e.target.className == 'number') {
                printText(e);
                if (justOperated) {justOperated = false;}
                justEqualed = false;
        }
    }
});

const pressOperator = buttons.addEventListener('click', e => {
    if (e.target.className == 'operator' && e.target.id !== 'equal') { 
        if (operator !== '' && justEqualed !== true) {
            runOperate();
            justEqualed = false;
        }
        numStore = display.textContent;
        getOperator(e);
        justOperated = true;
    }
});

function runOperate() {
    if (display.textContent === 'ERROR' || display.textContent === 'lol') {
        return;
    }
    if (display.textContent.length > 20) {
        display.textContent = 'ERROR';
        return;
    }
    if (numStore == 0) {
        numStore = display.textContent;
        return;
    } else {
        operate(numStore, display.textContent, operator);
    }
    numStore = display.textContent;
    console.log(numStore);
}

function printText(e) {
    if (display.textContent === '' && e.target.id === 'dot') display.textContent = 0.;
    if (display.textContent.split('').includes('.') && e.target.id === 'dot'){
        return;
    } else {
        display.textContent += e.target.textContent.toString();
    }
}

function getOperator(e) {
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
    }
}

// const deleter = buttons.addEventListener('click', e => {
//     if (e.target.id = 'delete' && display.textContent !== '') {
//         display.textContent = display.textContent.slice(0, -1);
//     }
// });