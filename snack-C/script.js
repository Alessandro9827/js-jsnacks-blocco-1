//Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre):
// moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

let numeroA = parseInt(prompt('Inserisci un numero di almeno due cifre'));
let numeroB = parseInt(prompt('Inserisci un numero di almeno quattro cifre'));

let numeroFinale = numeroA;

for (let i = 0 ; i < 1 ; i++){
    numeroFinale = numeroFinale * 2;
    if (numeroFinale < numeroB){
        i--;
    }
    console.log('Valore della moltiplicazione per due:', numeroFinale);
}

console.log('Risultato:', numeroFinale);