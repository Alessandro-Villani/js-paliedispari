/*--------------------------------------TRACCIA--------------------------------------------

Chiedere all’utente di inserire una parola tramiite un form
Creare una funzione per capire se la parola inserita è palindroma

----------------------------------------------------------------------------------------*/

//1. Select input from DOM

const inputWord = document.getElementById('word');

//2. Select form from DOM

const inputForm = document.querySelector('form');
console.log(inputForm);

//3. Select output from DOM

const outputTarget = document.getElementById('target');

//4. Add event listener

inputForm.addEventListener('click', function(event){
    event.preventDefault();
    
})