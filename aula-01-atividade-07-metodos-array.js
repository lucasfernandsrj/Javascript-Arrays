let array1 = [5 ,3 ,2 ,10]
let array2 = [2 ,4 ,3 ,6]
let array3 = [4 ,5 ,9 ,4]
let array4 = [6 ,1 ,5 ,10]

//concat
/*
Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
*/
console.log(array1.concat(array2)) // não altera o array1
let array12 = array1.concat(array2) //É necessário salvar o resultado em um novo array
console.log(array12)

//filter
/*
Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
*/
function valorMaior(valor) {
    return valor >= 5;
  }
  var filtered = array1.filter(valorMaior);
 console.log(filtered)

 //find
 /*
 Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
 */
 function valorMaior(valor) {
    return valor >= 5;
  }
  var filtered = array1.find(valorMaior);
 console.log(filtered)

 //findIndex
 /*
 Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
 */
 function valorMaior(valor) {
    return valor >= 5;
  }
  var filtered = array1.findIndex(valorMaior);
 console.log(filtered)

 //indexOf
 /*
 Localiza e retorna o índice referente à primeira ocorrência de determinado valor em um array. Caso não exista nenhuma ocorrência do valor, retorna -1.
 */
console.log(array3.indexOf(4))

//lastIndexOf
 /*
Funciona da mesma forma que o indexOf(), porém retorna o índice referente à última ocorrência de um valor em um array, varrendo o array de trás para frente.
 */
 console.log(array3.lastIndexOf(4))

//pop
 /*
Retira o último elemento do array.
Altera o array original removendo o elemento.
*/
array4.pop()
console.log(array4)

//shift
 /*
Retira o primeiro elemento do array.
Altera o array original removendo o elemento e trocando o índice de todos os elementos para um a menos do que eram, o índice 1 passa a ser o 0, o 2 passa a ser o 1, e assim por diante.
*/
array4.shift()
console.log(array4)

//push
 /*
Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.
*/
array4.push(15)
console.log(array4)

//unshift
 /*
Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.
*/
array4.unshift(15)
console.log(array4)

//reduce
/*
Utiliza uma função definida pelo usuário em cada um dos elementos, 
guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, 
retornando um único valor no final, reduzindo o array para um único valor.
*/
const array5 = [1, 2, 3, 4];
const reduceSoma = (atual, proximo) => atual + proximo;
const reduceMultiplica = (atual, proximo) => atual * proximo;

// 1 + 2 + 3 + 4
console.log(array5.reduce(reduceSoma));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array5.reduce(reduceSoma, 5));
// expected output: 15

//1 * 2 = 2 * 3 = 6 * 4 = 24 
console.log(array5.reduce(reduceMultiplica));
// expected output: 24

//4 * 3 = 12 * 2 = 24 * 1 = 24 
console.log(array5.reduceRight(reduceMultiplica));
// expected output: 24

//reverse
/*
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
*/
let array6 = [1 ,2 ,3 ,4]
console.log(array6)
array6.reverse()
console.log(array6)

//slice
/*
Copia uma parte do array para outro array.
*/
let frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
let citricos = frutas.slice(1, 3);
console.log(citricos)

//sort
/*
Organiza o array de acordo com a classificação Unicode, 
onde os números vêm antes das letras, porém não funciona corretamente para números,
onde temos que definir uma função que irá auxiliar o comando.
*/
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']
console.log(fruit)

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
console.log(scores)

//splice
/*
Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, 
e incluir um ou mais elementos a partir de um índice escolhido.
*/
let myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
console.log(myFish)
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
console.log(myFish)
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
console.log(myFish)