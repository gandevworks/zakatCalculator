// javascript

// let zakatResult = document.getElementById("zakatResult")
// let inputField = document.getElementById("inputField")

// I want to take the input value and times it by 2.5 then 
// broadcast it in the result

// inputField.addEventListener("keyup", function (event){
//     let searchQuery = event.target.value.toLowerCase();
//     zakatResult.textContent = searchQuery
// })
const inputInput = document.getElementById("inputInput")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const btn0 = document.getElementById("btn0")
const zakatBtn = document.getElementById("zakatBtn2")
const resetBtn = document.getElementById("resetBtn")





btn1.addEventListener("click",  function () {
    inputInput.value += 1
})
btn2.addEventListener("click",  function () {
    inputInput.value += 2
})
btn3.addEventListener("click",  function () {
    inputInput.value += 3
})
btn4.addEventListener("click",  function () {
    inputInput.value += 4
})
btn5.addEventListener("click",  function () {
    inputInput.value += 5
})
btn6.addEventListener("click",  function () {
    inputInput.value += 6
})
btn7.addEventListener("click",  function () {
    inputInput.value += 7
})
btn8.addEventListener("click",  function () {
    inputInput.value += 8
})
btn9.addEventListener("click",  function () {
    inputInput.value += 9
})
btn0.addEventListener("click",  function () {
    inputInput.value += 0
})
zakatBtn.addEventListener("click",  function () {
        inputInput.value *= 0.025
})
resetBtn.addEventListener("click",  function () {
    inputInput.value = ""
})




