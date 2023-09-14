/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("convert-btn")
const card1 = document.getElementById("meter")

btnEl.addEventListener("click", function() {
    card1.innerHTML = `${inputEl.value} meters = ${inputEl.value * 3.281} feet | ${inputEl.value} feet = ${inputEl.value / 3.281}`
})
