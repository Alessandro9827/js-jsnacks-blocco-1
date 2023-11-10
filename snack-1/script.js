const firstUserAge = parseInt(prompt('Quanti anni ha Alessandro?'))
const secondUserAge = parseInt(prompt('Quanti anni ha Lucia?'))

if (firstUserAge > secondUserAge) {
    console.log('Alessandro è il più grande')
}
else if (secondUserAge > firstUserAge) {
    console.log('Lucia è la più grande')
}
else {
    console.log ('Entrambi hanno la stessa età')
}