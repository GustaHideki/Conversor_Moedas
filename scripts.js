const convertButton = document.querySelector(".convertButton") //seleciona o botao com a classe: "convertButton" no arquivo html 
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // seleciona o input: "input-currency" no html e cria uma variavel com o nome:"inputCurrencyValue"

    const currencyValueToConvert = document.querySelector(".currency-Value-To-Convert")

    const currencyValueConverted = document.querySelector(".currency-Value")


    const dolarToday = 4.90 // cria uma variavel que define um valor para moeda dolar
    const euroToday = 5.39 // cria uma variavel que define um valor para moeda euro
    const ieneToday = 0.035
    const francoSuicoToday = 5.59


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == "FrancoSuico") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(inputCurrencyValue / francoSuicoToday)

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    console.log(convertedValue) //  Mostra o valor da operação realizada no console.log
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assents/dolar.png"
    }
    if (currencySelect.value == "euro") {

        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assents/euro.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImg.src = "./assents/iene.png"
    }

    if (currencySelect.value == "FrancoSuico") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImg.src = "./assents/francosuico.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues) // mostra o evento "click" do button 



