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
const outputNumbers = document.getElementById('numbers-target');

//4. Add event listener

inputForm.addEventListener('submit', function(event){
    
    event.preventDefault();

    //4.1 Reset output message
    let message = ''
    outputTarget.classList.remove('text-danger');
    
    //4.2 Check if user selected even or odd
    const inputEvenOddValue = document.querySelector('input[name="even-odd"]:checked').value;
    console.log(inputEvenOddValue);

    //4.3 Pick user number from DOM
    userNumber = parseInt(inputNumber.value.trim());
    console.log(userNumber);


    //4.4 Storage variable
    let sum = 0;

    //4.5 Validation
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
        message = 'Devi inserire un numero compreso tra 1 e 5'
        outputTarget.classList.add('text-danger');
    }
    else if (!inputEvenOdd){
        message = 'Devi scegliere pari o dispari';
        outputTarget.classList.add('text-danger');
    }
    //4.6 If validation is ok
    else {
        //4.6.1 Generate random number between 1-5 for cpu
        cpuNumber = getRandomNumber(1, 5);
        console.log(cpuNumber);

        //4.6.2 Sum user number and cpu number
        sum = userNumber + cpuNumber;
        console.log(sum);
        
        //4.6.3 Prepare message
        message = 'Hai perso!'
        if ((isEven(sum) && inputEvenOddValue === 'even') || (!isEven(sum) && inputEvenOddValue === 'odd')){
            message = 'Hai vinto!';
        } 
    }

    //5. Print in page
    outputNumbers.innerText = `Il tuo numero è ${userNumber}, il mio numero è ${cpuNumber}, la somma è ${sum}.`;
    outputTarget.innerText = message;

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