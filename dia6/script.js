const isValidEmail = (email) => {
    const regex = 
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const inputCPF = document.querySelector('input[name="cpf"]')

let isValidForm = false
//Resetar input e zerar ele
const resetInput = (elem) => {
    elem.classList.remove('invalid')
    elem.nextElementSibling.classList.add('error-hidden')
}
//Função de Validação
const invalidateElement = (elem) => {
    elem.classList.add('invalid')
    elem.nextElementSibling.classList.remove('error-hidden')
    isValidForm = false
}

const validateInput = () => {

    isValidForm = true
    //Validação do Nome
    if(!inputName.value) {
        invalidateElement(inputName)
    } //Validação do E-mail
    if(!isValidEmail(inputEmail.value)) {
        invalidateElement(inputEmail)
    }//Validação do CPF
    if(!isValidCPF(inputCPF.value)) {
        invalidateElement(inputCPF)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validateInput()

    if(isValidForm) {
        //POST - Backend
        form.remove()
        message.classList.remove('error-hidden')
        console.log('Validou e enviou')
    }
})

inputName.addEventListener("input", () => {
    resetInput(inputName)
})

inputEmail.addEventListener("input", () => {
    resetInput(inputEmail)
})

inputCPF.addEventListener("input", () => {
    resetInput(inputCPF)
})