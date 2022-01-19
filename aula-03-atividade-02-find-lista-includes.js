const alunos = ['Lucas', 'Joao', 'Maria', 'Fabio']
const medias = [7 ,8 ,5, 10]
const listaNotasEAlunos = [alunos, medias]

//includes -> retorna um booleano
//indexOf -> retorna um valor, a posição do index.

const exibeNomeNota = (nomeDoAluno) => {
    if(listaNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaNotasEAlunos[0][indice] + ', sua média é ' + listaNotasEAlunos[1][indice]
    } else{
        return 'O aluno não está cadastrado'
    }
}

console.log(exibeNomeNota("Lucas"))