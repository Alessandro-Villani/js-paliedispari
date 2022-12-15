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

    //4.1 Get user word
    userWord = inputWord.value;

    console.log(isPalindrome(userWord));


})


//# FUNCTIONS

//Function to check if word is palindrome

function isPalindrome(word){
    
    //1. Reverse the input word
    let reversedWord = '';

    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }

    console.log(reversedWord);

    //2. Check if reversed word is equal to word
    let isEqual = false;

    if(reversedWord === word){
        isEqual = true;
    }

    return isEqual;

}