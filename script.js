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

BONUS
- Fase creativa perditempo (html+css)

*/

// Richiamo gli elementi necessari in JS assegnando una variabile
const inputKms = document.getElementById("kms");
const inputAge = document.getElementById("age");
const button = document.getElementById("search");
const paragraph = document.getElementById("paragraph");
// 2.2 Richiamo l'elemento e recupero il valore
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
console.log(inputKms, inputAge, button, paragraph);

button.addEventListener("click", function() {
    // Recupero il valore dell'input
    const kms = parseInt(inputKms.value);
    const age = parseInt(inputAge.value);
    const firstName = (inputFirstName.value);
    const lastName = (inputLastName.value);
    const userName = firstName + " " + lastName;
    console.log(kms, age, firstName, userName);
    
    // Valido le informazioni ricevute
    if (isNaN(kms) || isNaN(age)) {
        alert("Valore errato, inserisci dei numeri");
        return;
    } else if (kms < 1 || age < 1) {
        alert("Valore errato, valore minimo 1");
        return;
    }
    
    // Calcolo il prezzo per km
    const kmPrice = 0.21;
    let basePrice = kms * kmPrice;
    console.log ("prezzo base:", basePrice);
    
    // Applico un eventuale sconto per fascia d'età
    let discount = "";
    let offer = "Adult"
    if (age < 18) {
        discount = basePrice * 0.2
        offer = "Young"
        console.log("sconto:", discount);
    } else if (age >= 65) {
        discount = basePrice * 0.4;
        offer = "Senior"
        console.log("sconto:", discount);
    }
    
    // Calcolo nuovo prezzo scontato
    const discountPrice = basePrice - discount;
    console.log ("prezzo scontato:", discountPrice);

    // Randomizzatore carrozza
    const minCarriage = 1
    const maxCarriage = 10
    const randomCarriage = Math.floor(Math.random() * (maxCarriage - minCarriage +1)) + minCarriage;
    console.log(randomCarriage)
    
    // Randomizzatore codice
    const minCode = 10000
    const maxCode = 99999
    const randomCode = Math.floor(Math.random() * (maxCode - minCode +1)) + minCode;
    console.log(randomCode)
    
    
    // Stampo in pagina

    const passengerName = document.querySelector(".passenger"); //!perché All non va?
    passengerName.innerText = userName;

    const ticketPrice = document.querySelector(".ticket-price");
    ticketPrice.innerText = discountPrice.toFixed(2) + "€";
    
    const carriageNumber = document.querySelector(".carriage-number");
    carriageNumber.innerText = randomCarriage;

    const codeNumber = document.querySelector(".code-number");
    codeNumber.innerText = randomCode;
    
    const ticketOffer = document.querySelector(".ticket-offer");
    ticketOffer.innerText = offer;
    
})



//! metti il validatore per la sezione nome e cognome