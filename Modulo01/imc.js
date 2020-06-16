//Cálculo de IMC

const nome = 'Margarida';
const peso = 80;
const altura = 1.50;

const imc = peso / (altura * altura)

let message = ""

if (imc >= 50) {
    message = `${nome} você está acima do peso`
} else {
    message = `${nome} você não está acima do peso`
}

console.log(message)