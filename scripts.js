
const buttunConvert = document.querySelector(".button")
const currencySelect = document.querySelector(".selectCurrency")


const convertValues = async () => {
    const inputValue = document.querySelector(".inputValue").value
    const valueBr = document.querySelector(".valueBr")
    const valueCurrency = document.querySelector(".valueCurrency")


const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

const dolarValue = data.USDBRL.high
const euroValue = data.EURBRL.high

    if (currencySelect.value == "dolar") {
        valueCurrency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarValue)
    }

    if (currencySelect.value == "euro") {
        valueCurrency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroValue)
    }

    valueBr.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

const changeCurrency = ()=>{
    const nameCurrency = document.querySelector(".nameCurrency")
    const imageCurrency = document.querySelector(".imageCurrency")

    if(currencySelect.value == "dolar"){
        nameCurrency.innerHTML = "Dólar Americano"
        imageCurrency.src = "./assents/dolar.png"
    }

    if(currencySelect.value == "euro"){
        nameCurrency.innerHTML = "Euro"
        imageCurrency.src = "./assents/euro.png"
    }

    convertValues()

}


currencySelect.addEventListener('change', changeCurrency)
buttunConvert.addEventListener('click', convertValues)
