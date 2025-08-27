const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

amount.addEventListener("input", function() {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

