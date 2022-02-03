// let count = 0;

// while(count < 10){
    // console.log(count);
    // count++;
// }

//let count = 10

//do {
   // count--;
    //console.log(count);
     
//} while ( count > 0);

//let fruits = ['banana', 'apple', 'lemon', 'oran'];
//for(let i = 0; i < fruits.length; i++){
  //  console.log(fruits[i]);
//}

let info = {
    name: 'Ahmed',
    age: 20,
    height: 180,
    address: '160 street'
}
for (const property in info){
    console.log(property);
}
const allNumbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const equalButton = document.querySelector('.equal');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');

let sign = '';
let result = null;
let outputOne = '';
let outputTwo = '';
let dot = false;

allNumbers.forEach(number => {
    number.addEventListener('click', showNumber);
}); 

function showNumber(e){
    if (e.target.innerText === '.' && !dot){
        dot = true;
    } else if (e.target.innerText === '.' && dot){
        return
    }
    outputTwo = outputTwo + e.target.innerText;
    display2.innerText = outputTwo;
} 
// display result on the screen
symbols.forEach(symbol => {
    symbol.addEventListener('click', showResult)
})
// show result

function showResult(e){
    if (!outputTwo) result;
    dot = false
    const signName = e.target.innerText;

    if (outputOne && outputTwo && sign){
         checkCalculation();
    } else {
        result = parseFloat(outputTwo);
    }

    clearMainDisplay(signName);
    sign = signName;
}

function checkCalculation(){
    if(sign ==='X'){
        result = parseFloat(result) * parseFloat(outputTwo);
    } else if ( sign === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    }  else if ( sign === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    }else if ( sign === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    } else if ( sign === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    }
    }

    function clearMainDisplay(name = ''){
        outputOne += outputTwo + '' + name + ''; 
        display1.innerText =outputOne;
        display2.innerText = '';
        display3.innerText = result;
        outputTwo = '';
    }

    equalButton.addEventListener('click', calculate);

    function calculate(){
        if (!outputOne || !outputTwo){
            return;
        } else {
            checkCalculation();
            clearMainDisplay();
            display2.innerText = result;
            outputTwo = result;
            display3.innerText = '';
            outputOne = '';
        }
    }

    cButton.addEventListener('click', deleteAll);
    ceButton.addEventListener('click', deleteLastInput);

    function deleteAll(){
        display1.innerText = '';
        display2.innerText = '';
        display3.innerText = '';
        outputOne = ''
        outputTwo = ''
        result = '';
    }

    function deleteLastInput(){
        display2.innerText = '';
        outputTwo = '';
    }