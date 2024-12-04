function appendToDisplay(value) {
    document.calc.txt.value += value;
  }
  
  function clearAll() {
    document.calc.txt.value = '';
  }
  
  function calculateResult() {
    try {
      document.calc.txt.value = eval(document.calc.txt.value);
    } catch (e) {
      document.calc.txt.value = "Error";
    }
  }
  
  document.addEventListener('keydown', function (e) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+'];
    
    if (validKeys.includes(e.key)) {
      appendToDisplay(e.key);
    } else if (e.key === 'Enter') {
      calculateResult();
    } else if (e.key === 'Backspace') {
      document.calc.txt.value = document.calc.txt.value.slice(0, -1);
    }
  });
  