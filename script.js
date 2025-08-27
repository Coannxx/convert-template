// Obtendo os elementos do form
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", function() {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Captando o evento de submit do formulario
form.onsubmit = () => {
 event.preventDefault()

 console.log(currency.value)
}