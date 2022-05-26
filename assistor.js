let firststake = document.getElementById("firstStake")
let secondstake = document.getElementById("secondStake")
let total = document.getElementById("total")
let firstquestion = prompt("1 for firstlife 2 for secondlife")
if(firstquestion === "1"){
let firstRequest = Number(prompt("enter account balance"))
let secondRequest =Number(prompt("enter one odd"))
let result = firstRequest / 51
let result2 = result * 1.22
let thirdRequest = result2 / secondRequest
let fourtRequest = result - thirdRequest
firststake.textContent = "STAKE1 = "+ thirdRequest 
secondstake.textContent = "STAKE2 ="+ fourtRequest
total.textContent += thirdRequest + fourtRequest
}
else if(firstquestion === "2"){
let saverequest =  Number(prompt("enter previous stake amount"))
let ask = Number(prompt("enter one odd"))
let multiplied = saverequest * 7
let multiplied2 = multiplied * 1.22
let multiplied3 = multiplied2 / ask
let multiplie4 = multiplied3 - multiplied
firststake.textContent = "STAKE1 ="+ multiplied3
secondstake.textContent = "STAKE2 ="+ multiplie4
}
else if (firstquestion === "3"){
let account =  Number(prompt("enter account balance"))
let askodd = Number(prompt("enter one odd"))
let multiplied5 = account * 1.22
let divisor = multiplied5 / askodd
let miunus = account - divisor
firststake.textContent = "STAKE1 =" + divisor
secondstake.textContent = "STAKE2 =" + miunus
}