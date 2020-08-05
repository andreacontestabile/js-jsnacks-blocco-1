// 1. Chiedo un numero e lo salvo in una variabile
var numero = parseInt(prompt("Digita un numero."));
// 2. Dichiaro la variabile messaggio
var messaggio;
// 3. Se il numero è pari, comparirà nel messaggio. Se è dispari, comparirà il numero successivo.
if (!isNaN(numero) && numero.toString().length > 0) {
  if (numero % 2 == 0) {
    messaggio = "Hai digitato " + numero + ", che è un numero pari.";
  } else {
    messaggio = "Hai digitato " + numero + ", che è un numero dispari. Il numero successivo è " + (numero + 1) + ".";
  }
} else {
  messaggio = "Errore di input. Riprova."
}
// 4. Stampo a video il risultato
document.getElementById('msg').innerHTML = messaggio;
