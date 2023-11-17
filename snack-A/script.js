//Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

const array = [];

for (i = 0; i <= 5; i++) {
    let userNumber = parseInt(prompt("inserisci un numero"));
    if (userNumber % 2 === 0) {
        array.push(userNumber);
    }
}
console.log(array);