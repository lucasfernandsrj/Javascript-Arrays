const notas = [10, 7 ,8 ,5 ,10]
notas.pop() //não aceita parametros. Remove SEMPRE ultimo elemento do array
console.log(notas)

function somaNotas(notas){
    let media3 = 0;
    for (let i = 0; i < notas.length; i++){
        media3+=notas[i]
    }
    return media3/notas.length;
}
console.log(`A média é ${somaNotas(notas)}`)