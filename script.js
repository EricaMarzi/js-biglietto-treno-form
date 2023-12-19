console.log("JS OK")

/* 
- Creo in pagina il form base 
- Richiamo gli elementi necessari in JS assegnando una variabile
- Recupero il valore dell'input
*/

const inputKms = document.getElementById("kms");
const inputAge = document.getElementById("age");
const button = document.getElementById("search");
console.log(inputKms, inputAge, button)

button.addEventListener("click", function() {
    const kms = parseInt(inputKms.value);
    const age = parseInt(inputAge.value);
    console.log(kms, age)
    

})