//L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("inserisci qui la tua prima parola");
const secondWord = prompt("inserisci qui la tua seconda parola")

if (firstWord.length > secondWord.length) {
    console.log(firstWord , secondWord)
}
else {
    console.log(secondWord , firstWord);
}







