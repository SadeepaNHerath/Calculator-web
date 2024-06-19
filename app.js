let number1 = new Number (document.getElementById("num1").value);
let number2 = new Number (document.getElementById("num2").value);
let operator = document.getElementById("operator").value;
let output = document.getElementById("output").innerHTML;

function calc(){
    
    switch(operator){
        case "+" : output = (number1+number2) ; break;
        case "-" : output = (number1-number2) ; break;
        case "*" : output = (number1*number2) ; break;
        case "/" : output = (number1/number2) ; break;
        default : output = "Choose option";
    }
}
