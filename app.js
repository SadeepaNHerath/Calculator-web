function calc() {
    let number1 = new Number(document.getElementById("num1").value);
    let number2 = new Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let output = document.getElementById("output");

    console.log(operator);
    
    switch (operator) {
        case "+": output.innerHTML = "Answer is " + (number1 + number2); break;
        case "-": output.innerHTML = "Answer is " + (number1 - number2); break;
        case "*": output.innerHTML = "Answer is " + (number1 * number2); break;
        case "/": output.innerHTML = "Answer is " + (number1 / number2); break;
        default: output.innerHTML = "Choose option";
    }

} 