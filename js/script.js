




// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1 - Generare numeri random

var giocatore = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;

var vincitore = 'Ha vinto il Computer';

// 2 - Stabilire il vincitore

if (giocatore > computer) {

    vincitore = 'Ha vinto il Giocatore';

} else if (giocatore == computer) {
 
    vincitore = 'Pareggio';

}

console.log('Il giocatore ha scelto: ' + giocatore);
console.log('Il computer ha scelto: ' + computer);
console.log(vincitore);