// Aposentadoria

// condição
// Homem = contribuicao = 35 && idade = 60
// Mulher = contribuicao = 30 && idade = 55


const nome = 'Margarida';
const sexo = 'F';
const idade = 57;
const contribuicao = 35;

const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}