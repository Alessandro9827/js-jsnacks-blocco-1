//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (createlo voi con almeno 5 nomi),
//chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const nameList = ["Ale", "Marta", "Anna", "Franco","Michele", "Lucia"];
const userName = prompt("inserisci il tuo nome");

let answer = false;

for ( let i = 0; i < nameList.length; i++) {
    const name = nameList[i];

    if ( name.toLowerCase().trim() == userName.toLowerCase().trim()) {
        answer = true;
    }
}

console.log(answer);