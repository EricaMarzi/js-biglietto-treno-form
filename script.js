console.log("JS OK")

/* 

MILESTONE 2:
Solo una volta che la milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, vi forniamo uno screenshot da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra. 
BONUS
- Aggiungere il tasto annulla per riportare i campi al valore originale
- Usare una select per inserire l'età
- Stampare sul biglietto un numero di carrozza e un numero di biglietto casuali
*/

/* 
MILESTONE 1
- Creo in pagina il form base 
- Richiamo gli elementi necessari in JS assegnando una variabile
- Recupero il valore dell'input
- Valido le informazioni ricevute
- Calcolo il prezzo per km
- Applico un eventuale sconto per fascia d'età
- Calcolo nuovo prezzo scontato
- Stampo in pagina

MILESTONE 2
*/

// Richiamo gli elementi necessari in JS assegnando una variabile
const inputKms = document.getElementById("kms");
const inputAge = document.getElementById("age");
const button = document.getElementById("search");
const paragraph = document.getElementById("paragraph")
console.log(inputKms, inputAge, button, paragraph);

button.addEventListener("click", function() {
    // Recupero il valore dell'input
    const kms = parseInt(inputKms.value);
    const age = parseInt(inputAge.value);
    console.log(kms, age);
    
    // Valido le informazioni ricevute
    if (isNaN(kms) || isNaN(age)) {
        alert("Valore errato, inserisci dei numeri");
        return;
    } else if (kms < 1 || age < 1) {
        alert("Valore errato, valore minimo 1");
        return;
    }
    
    // Calcolo il prezzo per km
    const kmPrice = 0.21
    let basePrice = kms * kmPrice
    console.log ("prezzo base:", basePrice)
    
    // Applico un eventuale sconto per fascia d'età
    let discount = null
    if (age < 18) {
        discount = basePrice * 0.2
        console.log("sconto:", discount)
    } else if (age >= 65) {
        discount = basePrice * 0.4
        console.log("sconto:", discount)
    }
    
    // Calcolo nuovo prezzo scontato
    const discountPrice = basePrice - discount
    console.log ("prezzo scontato:", discountPrice)
    
    
    // Stampo in pagina
    paragraph.innerHTML = "Il Tuo biglietto costa: " + `<strong>${discountPrice.toFixed(2)}€</strong>`
})