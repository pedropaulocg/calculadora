visor = document.getElementById('visor')

function limpar() {
    visor.innerText = ('')
}

function digito(numero) {
    num = visor.innerText
    visor.innerText = num + numero
}
function apagar() {
    var digitos = visor.innerHTML
    visor.innerHTML = digitos.substring(0, digitos.length - 1)
}
function calculo() {
    var R = visor.innerHTML
    if (visor != '') {
        visor.innerHTML = eval(R)
    }
}