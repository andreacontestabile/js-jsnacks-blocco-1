// 1. Chiedo il primo numero e lo salvo in una variabile
var numero1 = parseInt(prompt("Inserisci il primo numero"));
// 2. Chiedo il secondo numero e lo salvo in una variabile
var numero2 = parseInt(prompt("Inserisci il secondo numero"));

// 3. Dichiaro la variabile messaggio
var messaggio;

// 4. Controllo che numero1 e numero2 siano numeri e non siano stati inseriti valori vuoti. Preparo il messaggio.
if (!isNaN(numero1) && !isNaN(numero2) && (numero1.toString().length > 0) && (numero2.toString().length > 0)) {

  if (numero1 > numero2) {
    messaggio = numero1 + " è il numero più grande";
  } else if (numero2 > numero1) {
    messaggio = numero2 + " è il numero più grande";
  } else {
    messaggio = "I numeri sono uguali";
  }

} else {
  messaggio = "Errore di input, riprova.";
}

// 5. Stampo il messaggio a schermo
document.getElementById('msg').innerHTML = messaggio;
