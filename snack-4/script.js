//Ciclare per i primi 100 numeri 
//e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

const arrey = [];

for ( let i = 0; i < 100; i++) {
    if (i % 7 == 0) {
        arrey.push(i);
    }
    else if (i % 8 == 0) {
        arrey.push(i);
    }
}
for (let i = 0; i < arrey.length; i++) {
    console.log(arrey[i]);
}
