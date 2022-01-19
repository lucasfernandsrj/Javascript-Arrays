const salaJS = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    //atual = valor de cada posição percorrida no array
    //0 = valor inicial da variavel acum
    let somador = (acum, atual) => atual + acum
    const somaDasNotas = notasDaSala.reduce(somador, 0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)