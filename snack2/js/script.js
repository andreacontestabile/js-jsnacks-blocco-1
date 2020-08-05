// 1. Chiedo la prima parola e la salvo in una variabile
var parola1 = prompt("Inserisci la prima parola");
// 2. Chiedo la seconda parola e la salvo in una variabile
var parola2 = prompt("Inserisci la seconda parola");
// 3. Dichiaro la variabile messaggio
var messaggio;
// 4. Verifico quale delle due parole sia la più breve. Nel messaggio apparirà sempre prima la parola più breve, poi quella più lunga.

if (parola1.length > 0 && parola2.length > 0) {

  if (parola1.length < parola2.length) {
    messaggio = parola1 + " " + parola2;
  } else if (parola2.length < parola1.length) {
    messaggio = parola2 + " " + parola1;
  } else {
    messaggio = "Le parole " + parola1 + " e " + parola2 + " hanno la stessa lunghezza.";
  }

} else {
  messaggio = "Errore di input. Riprova.";
}


// 5. Stampo il messaggio a video
document.getElementById('msg').innerHTML = messaggio;
