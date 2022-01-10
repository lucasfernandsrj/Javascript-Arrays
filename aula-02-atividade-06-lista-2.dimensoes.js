let listaDeAlunos = ['João', 'Juliana', 'Caio', 'Ana']
let listaDeMedias = [10 ,8 ,7.5 ,9]

let listaDeAlunosENotas = [listaDeAlunos, listaDeMedias]
console.log(listaDeAlunosENotas)

for(i=0; i < listaDeAlunos.length; i++){
    console.log(`O aluno(a) ${listaDeAlunosENotas[0][i]} ficou com a média ${listaDeAlunosENotas[1][i]}.`)
}