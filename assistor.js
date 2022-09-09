let firststake = document.getElementById("firstStake")
let secondstake = document.getElementById("secondStake")
let total = document.getElementById("total")
let account =  Number(prompt("enter account balance"))
let askodd = Number(prompt("enter one odd"))
let multiplied5 = account * 1.22
let divisor = multiplied5 / askodd
let miunus = account - divisor
firststake.textContent = "STAKE1 =" + divisor
secondstake.textContent = "STAKE2 =" + miunus
