/*---------------------------------------TRACCIA-------------------------------------------

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

----------------------------------------------------------------------------------------*/

//1. Select input from DOM

const inputNumber = document.getElementById('number');

//2. Select form from DOM

const inputForm = document.querySelector('form');
console.log(inputForm);

//3. Select output from DOM

const outputTarget = document.getElementById('target');

//4. Add event listener

inputForm.addEventListener('click', function(event){
    
    event.preventDefault();



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