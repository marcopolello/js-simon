// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// NOTE:
// - sempre su ex Simon, aggiungere il controllo almeno per non far inserire più volte lo stesso num da utente e non generare numeri doppioni da indovinare;
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzae il programma.
// * Pensate bene ai tempi di esecuzione per non perdervi e quindi quando una cosa deve essere eseguita e quindi dove va messa logicamente.

var numeri = [];
for (var i = 0; numeri.length < 5; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
  if (numeri.indexOf(numero) === -1) {
    numeri.push("#" + numero);
  }
}
alert("memorizza questi numeri: " + numeri);
//da qui partono 30 secondi di tempo
setTimeout(myFunction, 30000)
