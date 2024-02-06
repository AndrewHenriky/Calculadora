                let currentInput = '';
                let currentOperator = '';
                let resultDisplayed = false;
        
                function appendNumber(number) {
                    if (resultDisplayed) {
                        clearDisplay();
                        resultDisplayed = false;
                    }
                    currentInput += number;
                    updateDisplay();
                }
        
                function setOperator(operator) {
                    if (currentInput !== '') {
                        currentOperator = operator;
                        currentInput += ' ' + operator + ' ';
                        updateDisplay();
                    }
                }
        
                function clearDisplay() {
                    currentInput = '';
                    currentOperator = '';
                    updateDisplay();
                }
        
                function calculateResult() {
                    const expression = currentInput.split(' ');
                    const num1 = parseFloat(expression[0]);
                    const op = expression[1];
                    const num2 = parseFloat(expression[2]);
        
                    let result;
        
                    switch (op) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num1 / num2;
                            break;
                        default:
                            break;
                    }
        
                    currentInput = result.toString();
                    resultDisplayed = true;
                    updateDisplay();
                }
        
                function updateDisplay() {
                    document.getElementById('display').value = currentInput;
                }
