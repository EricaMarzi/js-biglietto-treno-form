console.log("JS OK")
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
const buttonSearch = document.getElementById("search");
const paragraph = document.getElementById("paragraph");
// 2.2 Richiamo l'elemento e recupero il valore
const inputFirstName = document.getElementById("first-name");
const inputLastName = document.getElementById("last-name");
console.log(inputKms, inputAge, buttonSearch, paragraph);

let kms;
let age;
let firstName;
let lastName;

buttonSearch.addEventListener("click", function() {
    // Recupero il valore dell'input
    kms = parseInt(inputKms.value);
    age = parseInt(inputAge.value);
    firstName = (inputFirstName.value);
    lastName = (inputLastName.value);
    userName = firstName + " " + lastName;
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

    //! metti il validatore per la sezione nome e cognome
    
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


// Svuota campi
const buttonClean = document.getElementById("cancel");
buttonClean.addEventListener("click", function() {
    kms = "";
    age = "";
    firstName = "";
    lastName = "";
}) //! non va ;;
    