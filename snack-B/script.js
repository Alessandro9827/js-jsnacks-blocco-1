//Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre 
//che compongono il numero.

const userNumber = prompt('Inserisci un numero di almeno 7 cifre').trim();

let somma = 0;

for (let index = 0; index < userNumber.length; index++) {
    somma += parseInt(userNumber.charAt(index))
}

console.log(somma);