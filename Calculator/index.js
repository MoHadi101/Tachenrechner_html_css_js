// Calculator/index.js
const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
    
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try{
         display.value = eval(display.value); // Note: Using eval can be dangerous if not handled properly also the eval is is a built-in callculation function in js it can calculate any mathimatical expression like 2+2*3/4-5
    } catch (error) {
        display.value = '❤️Malak❤️ ';
    }
   
}