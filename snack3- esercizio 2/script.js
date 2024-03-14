/**
 * Snack3
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
    Ogni volta che ne crei uno, stampalo.
 */

let newArray = [];

function getRandomNumbers (minNumber, maxNumber) {
    let array = [];

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    let newNumber = 
}