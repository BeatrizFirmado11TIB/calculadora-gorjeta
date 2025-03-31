let bill = 0
let tipPorcentage = 0
let numberOfPeople = 0
let buttonSelected = null


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue(){
  bill = billInput.valueAsNumber
  calculate()
}

function receiveTipPorcentage(value){

    if (buttonSelected !== null){
        buttonSelected.classList.remove ("button-selected")
    }
    buttonSelected = document.querySelector('#button-${value}')
    buttonSelected.classList.add("button-selected")
    tipPorcentage = value / 100

    let customTipInput = document.querySelector("custom-tip")
    customTipInput.value = ""
    calculate()
}

function receiveCustomTipPorcentage() {
    let customTipInput = document.querySelector("#custom-tip")
    tipPorcentage = customTipInput.valueAsNumber / 100

   removeClassButtonSelected()
   document.querySelector("custom-tip").value = ""

    calculate()
}

let numberOfPeopleInput = document.querySelector ("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)

function receiveNumberOfPeople(){
   numberOfPeople = numberOfPeopleInput.valueAsNumber
   calculate()
}
function calculate(){
    if (bill !== 0 && tipPorcentage !== 0 && numberOfPeople !== 0){
        let tipAmountStrong = document.querySelector (".amount strong")
        let tipAmountPerson = (bill * tipPorcentage) / numberOfPeople
        
        tipAmountStrong.innerText = `$${tipAmountPerson.toFixed(2)}`

        let totalStrong = document.querySelector (".total strong")
        let total = (bill / numberOfPeople) + tipAmountPerson

        totalStrong.innerText = `$${total.toFixed(2)}`

    }else {
        console.log("ainda não é possível calcular")
    }
}

function reset(){
   billInput.value = ""
   bill = 0
   numberOfPeople.value = ""
   numberOfPeople = 0
   
   removeClassButtonSelected()
   tipPorcentage = 0
   
   document.querySelector(".amount strong").innerText = "$0.00"
   document.querySelector(".total strong").innerText = "$0.00"
}

    function removeClassButtonSelected(){
        if (buttonSelected !== null){
            buttonSelected.classList.remove("button-selected")
            buttonSelected = null
        }    
    }