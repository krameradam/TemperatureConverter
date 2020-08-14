const first = document.querySelector('.first')
const second = document.querySelector('.second')
const field = document.querySelector('#converter')
const result = document.querySelector('.result')
const btnConvert = document.querySelector('.convert')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')

const convert = () => {
    if (first.innerText === '°C' && field.value !== '' ) {
        result.innerHTML = `${field.value}°C to ${(field.value * 1.8 + 32).toFixed(1)}°F`
        field.value = ''
    } else if (field.value == ''){
        alert('wpisz liczbę!');
    } else {
        result.innerHTML = `${field.value}°F to ${((field.value - 32) / 1.8).toFixed(1)}°C`
        field.value = ''
    }
}

const swap = () => {
    if (first.innerText === '°C') {
        first.innerHTML = '°F'
        second.innerHTML = '°C'
        result.innerHTML = ''

    } else {
        first.innerHTML = '°C'
        second.innerHTML = '°F'
        result.innerHTML = ''
    }
}

const rest = () => {
    if (field.value.lenght !== 0) {
        field.value = ''
        result.innerHTML = ''
    }
}

btnConvert.addEventListener('click', convert)
btnChange.addEventListener('click', swap)
btnReset.addEventListener('click', rest)