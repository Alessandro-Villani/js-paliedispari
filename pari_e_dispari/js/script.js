/*---------------------------------------TRACCIA-------------------------------------------

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

----------------------------------------------------------------------------------------*/

//1. Select input from DOM

const inputNumber = document.getElementById('number');
const inputEvenOdd = document.querySelector('input[name="even-odd"]:checked');

//2. Select form from DOM

const inputForm = document.querySelector('form');
console.log(inputForm);

//3. Select output from DOM

const outputTarget = document.getElementById('target');

//4. Add event listener

inputForm.addEventListener('submit', function(event){
    
    event.preventDefault();
    
    //4.1 Check if user selected even or odd
    const inputEvenOddValue = document.querySelector('input[name="even-odd"]:checked').value;
    console.log(inputEvenOddValue);

    //4.2 Reset output message
    let message = ''
    outputTarget.classList.remove('text-danger');

    //4.3 Pick user number from DOM
    userNumber = inputNumber.value;
    console.log(userNumber);

    //4.4 Validation
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
        message = 'Devi inserire un numero compreso tra 1 e 5'
        outputTarget.classList.add('text-danger');
    }
    else if (!inputEvenOdd){
        message = 'Devi scegliere pari o dispari';
        outputTarget.classList.add('text-danger');
    }
    //4.5 If validation is ok
    else {
        //4.5.1 Generate random number between 1-5 for cpu
        cpuNumber = getRandomNumber(1, 5);
        console.log(cpuNumber);
    }

    //5. Print in page
    outputTarget.innerText = message

});


//# FUNCTIONS

//1. Function generating Random Number
function getRandomNumber(min, max){

    const randomNumber = Math.floor(Math.random() * max - min + 1) + min;

    return randomNumber;

}

//2. Function verifying if the number is even

function isEven(number){
    
    const isEven = !(number % 2) ? true : false;

    return isEven;

}