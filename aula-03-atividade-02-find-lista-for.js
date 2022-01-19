const alunos = ['Lucas', 'Joao', 'Maria', 'Fabio']
const medias = [7 ,8 ,5, 10]
const listaNotasEAlunos = [alunos, medias]

function recebeNome(alunoBuscado){
    for(var i = 0;i< alunos.length;i++){
        if(listaNotasEAlunos[0][i].toUpperCase() == alunoBuscado.toUpperCase()){
            return listaNotasEAlunos[1][i]
        }
        //console.log(listaNotasEAlunos[0][i])
        //console.log(listaNotasEAlunos[1][i])
    }
}

const alunoBuscado = 'lucas'
const notaBuscada = recebeNome(alunoBuscado)


if(notaBuscada === undefined){
    console.log('O aluno não foi encontrado.')
}else{
    console.log(`A média final do aluno ${alunoBuscado} é ${notaBuscada}`)
}