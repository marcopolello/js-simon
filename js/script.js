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

// ciclo per creare array di numeri random generati dal pc
var numeri = [];
for (var i = 0; numeri.length < 5; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
  if (numeri.indexOf(numero) === -1) {
    numeri.push(numero);
  }
}

alert("memorizza questi numeri: " + numeri);
console.log(numeri + "<-- numeri da memorizzare");
//da qui partono 30 secondi di tempo

setTimeout(myFunction, 10000);
/* mi serve una funzione che chieda all'utente 5 prompt e che esegua dei controlli,
passati i controlli li salverà in un array */

// mi servo di alcune variabili
var corretti = [];
var sbagliati = [];
var punteggio = 5, input, tentativi = 5, ricordati = 0;

// funzioni
function myFunction() {
  var inseriti = [];
  // ciclo per i vari tentativi
  for (var i = 0; i < tentativi; i++) {
    input = parseInt(prompt("scrivi uno dei numeri precedentemente memorizzati"));

    if (inseriti.includes(input)) { //numero già inserito
      alert("numero già inserito");
      tentativi++;
      console.log("primo caso");
    } else if (numeri.includes(input)) {
      corretti.push(input);
      inseriti.push(input);
      ricordati++;
      console.log("secondo caso");
    } else if (input > 100 || input < 1 || isNaN(input)){  //numero sotto 1 o sopra a 100 oppure una parola
      alert("inserisci un numero da 1 a 100");
      tentativi++;
      console.log("terzo caso");
    } else {
      inseriti.push(input);
      sbagliati.push(input);
      punteggio--;
      console.log("quarto caso");
    }
  }
console.log(punteggio + "<--Punti totalizzati");
console.log(corretti + "<--Numeri corretti");
console.log(sbagliati + "<--Numeri sbagliati");
console.log(ricordati + "<--quanti numeri hai ricordato");
}
