
//Indices =     0       1       2      3       4          5
let alunos = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//Exercicio: Remover 2 elementos (Ana e Caio) e adicionar 3 novos elementos (Rodrigo, Leandro e Fracine)
alunos.splice(1,2, 'Rodrigo', 'Leandro', 'Francine') 
//1 = define o indice inicial = Ana; 
//2 = define a quantidade de elementos removidos a partir da posição inicial = Ana e Caio; 
//Rodrigo, Leandro, Francine = representa os elemento(s) adicionado(s) a partir da posição inicial
console.log(alunos)

//Exercicio: adicionar um novo elemento (Fernanda) após o Rodrigo
alunos.splice(2,0, 'Fernanda') 
//2 = define o indice inicial = Leandro; 
//0 = define a quantidade de elementos removidos a partir da posição inicial; 
//Fernanda = representa os elemento(s) adicionado(s) a partir da posição inicial
console.log(alunos)