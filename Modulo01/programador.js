// Vetores e objetos

const programador = {
    nome: "Stephanie",
    idade: 25,
    tecnologias:  [
        { nome: 'JavaScript', especialidade: 'Desktop' }, 
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[1].especialidade}`)