




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


document.getElementById('giocatore').innerHTML = 'Il Giocatore ha scelto: ' + giocatore;
document.getElementById('computer').innerHTML = 'Il Computer ha scelto: ' + computer;
document.getElementById('risultato').innerHTML = vincitore;

