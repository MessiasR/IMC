const alertError = document.querySelector(".alert-error")
const modal = document.querySelector(".modal-wrapper")
const btnSubmit = document.querySelector("#btnSubmit")
const btnClose = document.querySelector("#btnClose")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

btnSubmit.addEventListener('click', handleSubmitClick)
btnClose.addEventListener('click', handleCloseClick)

function handleSubmitClick(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)
    
    if(showAlertError) {
        alertError.classList.add("open")

        inputWeight.value = ""
        inputHeight.value = ""
        
        return;
    }

    alertError.classList.remove("open")

    const resultIMC = (Number(weight) / (Number((height) /100) **2)).toFixed(2)
    
    document.querySelector(".modal h2 span").innerText = `Seu IMC é de ${resultIMC}`
    toggleScreenResult()

    inputWeight.value = ""
    inputHeight.value = ""
}

inputHeight.oninput = () => alertError.classList.remove("open")
inputWeight.oninput = () => alertError.classList.remove("open")

function notANumber(value) {
    return isNaN(value) || value == ""
}

function handleCloseClick() {
    toggleScreenResult()
}



function toggleScreenResult() {
    modal.classList.toggle("open")
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event) {
    
    if(event.key == 'Escape') {
        modal.classList.remove("open")
    }
}

