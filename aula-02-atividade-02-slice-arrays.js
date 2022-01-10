const turma = 
['Joao', 'Juliana','Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 
'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 
'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']
//slice(0,10)
const turma1 = turma.slice(0, turma.length/2)
console.log(`Alunos da sala 1: ${turma1}`)
//slice(10)
const turma2 = turma.slice(turma.length/2)
console.log(`Alunos da sala 1: ${turma2}`)