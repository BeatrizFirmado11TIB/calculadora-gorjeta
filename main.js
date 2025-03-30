let bill = 0
let tipPorcentage = 0
let numberOfPeople = 0
let currentPorcentage = 0


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue(){
  bill = billInput.valueAsNumber
  calculate()
}

function receiveTipPorcentage(value){
    let buttonPorcentage = document.querySelector()
}

let numberOfPeopleInput = document.querySelector ("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)

function receiveNumberOfPeople(){
   numberOfPeople = numberOfPeopleInput.valueAsNumber
   calculate()
}
function calculate(){
    if (bill !== 0 && tipPorcentage !== 0 && numberOfPeople !== 0){
        console.log("calcular")
    }else {
        console.log("ainda não é possível calcular")
    }
}