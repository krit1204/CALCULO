const display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '(') {
        let openCount = (display.innerText.match(/\(/g) || []).length;
        let closeCount = (display.innerText.match(/\)/g) || []).length;
        if (openCount <= closeCount) {
            display.innerText += value;
        }
    } else if (value === ')') {
        let openCount = (display.innerText.match(/\(/g) || []).length;
        let closeCount = (display.innerText.match(/\)/g) || []).length;
        if (openCount > closeCount) {
            display.innerText += value;
        }
    } else if (value === '**2') {
        display.innerText += '**2';

    } else if (value === 'Math.PI') {
        display.innerText += 'Math.PI';

    } else {
        if (value === 'Math.sqrt(' || value === 'Math.log10(') {
            display.innerText += value;
        } else if (value === 'Math.sin(' || value === 'Math.cos(' || value === 'Math.tan(') {
            display.innerText += value;
            display.innerText += ')';
        } else {
            display.innerText += value;
        }
    }
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
    try {
    
        let expression = display.innerText;
        let openParentheses = (expression.match(/\(/g) || []).length;
        let closeParentheses = (expression.match(/\)/g) || []).length;
        for (let i = 0; i < (openParentheses - closeParentheses); i++) {
            expression += ')';
        }
        
        expression = expression.replace(/\*\*2/g, '**2');
        
        display.innerText = eval(expression);
    } catch {
        display.innerText = 'Error';
    }
}

function appendPi() {
    appendToDisplay('Math.PI');
}
