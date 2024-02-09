let heightInput = document.querySelector('#heightInput')
let weightInput = document.querySelector('#weightInput')
let buttonSubmit = document.querySelector('#buttonSubmit')
let textIMC = document.querySelector('#textIMC')

buttonSubmit.addEventListener('click', () => {
    heightValue = heightInput.value
    weightValue = weightInput.value

    calculateIMC = weightValue / (heightValue * heightValue)

    if (calculateIMC < 17) {
        showText()
        textIMC.textContent = 'Você está muito abaixo do peso!'
    } else if (calculateIMC < 18.5) {
        showText()
        textIMC.textContent = 'Você está no peso normal!'
    } else if (calculateIMC < 25) {
        showText()
        textIMC.textContent = 'Você está acima do peso!'
    } else if (calculateIMC < 30) {
        showText()
        textIMC.textContent = 'Você está com obesidade grau I!'
    } else if (calculateIMC < 35) {
        showText()
        textIMC.textContent = 'Você está com obesidade grau II!'
    } else if (calculateIMC < 40) {
        showText()
        textIMC.textContent = 'Você está com obesidade grau III!'
    }
})

const showText = () => {
    if (textIMC.style.display = 'none') {
        textIMC.style.display = 'block'
    }
}
