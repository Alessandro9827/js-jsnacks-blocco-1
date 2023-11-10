const firstUserAge = parseInt(prompt('Quanti anni ha il primo utente?'))
const secondUserAge = parseInt(prompt('Quanti anni ha il secondo utene?'))

if (firstUserAge > secondUserAge) {
    console.log('Il primo utente è il più grande')
}
else if (secondUserAge > firstUserAge) {
    console.log('Il secondo utenete è il più grande')
}
else {
    console.log ('Entrambi hanno la stessa età')
}