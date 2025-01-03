const inputValue = document.querySelector(".input");

function appendValue(value) {
   
    inputValue.value += value;
}

function clearInput() {
    inputValue.value = "";
}

function calculate() {
    try {
        inputValue.value = eval(inputValue.value); 
    } catch {
        inputValue.value = "Error"; 
    }
}