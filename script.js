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
1.1 - Creo in pagina il form base 
2.1 - Richiamo gli elementi necessari in JS assegnando una variabile
3.1 - Recupero il valore dell'input
4.1 - Valido le informazioni ricevute
5.1 - Calcolo il prezzo per km
6.1 - Applico un eventuale sconto per fascia d'età
7.1 - Calcolo nuovo prezzo scontato
8.1 - Stampo in pagina

MILESTONE 2
1.2 - Aggiungi input in pagina
2.2 - Richiamo l'elemento e recupera il valore
3.2 - Valido le informazioni ricevute
*/

// Richiamo gli elementi necessari in JS assegnando una variabile
const inputKms = document.getElementById("kms");
const inputAge = document.getElementById("age");
const button = document.getElementById("search");
const paragraph = document.getElementById("paragraph")
// 2.2 Richiamo l'elemento e recupero il valore
const inputName = document.getElementById("name")
console.log(inputKms, inputAge, button, paragraph, inputName);

button.addEventListener("click", function() {
    // Recupero il valore dell'input
    const kms = parseInt(inputKms.value);
    const age = parseInt(inputAge.value);
    const userName = (inputName.value)
    console.log(kms, age, userName);
    
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
    paragraph.innerHTML = userName + " il Tuo biglietto costa: " + `<strong>${discountPrice.toFixed(2)}€</strong>`
})