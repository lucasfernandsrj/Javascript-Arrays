let alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//Remover 2 elementos (Ana e Caio) e adicionar um novo elemento (Rodrigo)
alunos.splice(1,2, 'Rodrigo') 
// 1 = indice inicial, 2  = quantidade de elementos removidos na posição inicial, Rodrigo = elemento adicionado na posição inicial

//Apenas adicionar um novo elemento (Fernanda) após o Rodrigo
alunos.splice(2,0, 'Fernanda') 
console.log(alunos)