/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.querySelector("#input-el")
const convertEl = document.querySelector(".convert")
const len = document.querySelector(".length")
const vol = document.querySelector(".volume")
const mass = document.querySelector(".mass")

convertEl.addEventListener("click", function(){
    let val = inputEl.value
    let lenVAl = val*3.281
    let feetVAl = val/3.281
    let volVAl = val*0.264
    let galVAl = val/0.264
    let massVAl = val*2.204
    let poundVAl = val/2.204
    len.textContent = `${val} meters = ${lenVAl.toFixed(2)} feet | ${val} feet = ${feetVAl.toFixed(2)} meters`
    vol.textContent = `${val} liters = ${volVAl.toFixed(2)} gallons | ${val} gallons = ${galVAl.toFixed(2)} liters`
    mass.textContent = `${val} kg = ${massVAl.toFixed(2)} pounds | ${val} pounds = ${poundVAl.toFixed(2)} kg`
})