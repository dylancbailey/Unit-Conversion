const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-p")
const volumeEl = document.getElementById("volume-p")
const massEl = document.getElementById("mass-p")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertUnit(0)

btnEl.addEventListener("click", function() {
    let value = Number(inputEl.value)
    convertUnit(value)
})

function convertUnit(value) {
    let feet = (value * meterToFeet).toFixed(3)
    let meters = (value / meterToFeet).toFixed(3)
    lengthEl.innerHTML = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`
    let liter = (value * literToGallon).toFixed(3)
    let gallon = (value / literToGallon).toFixed(3)
    volumeEl.innerHTML = `${value} liters = ${liter} gallons | ${value} gallons = ${gallon} liters`
    let pounds = (value * kiloToPound).toFixed(3)
    let kilos = (value / kiloToPound).toFixed(3)
    massEl.innerHTML = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilos} kilos`
}