let notas = [10, 6, 8]
console.log(notas)
notas.push(7) //adiciona valor na ultima posição do vetor
console.log(notas)

//media diretamente
let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length
console.log(media)

//media com for
var media2 = 0
for (let i = 0; i < notas.length; i++){
    media2+=notas[i]
}
console.log(media2/notas.length)

//media com função
function somaNotas(notas){
    let media3 = 0;
    for (let i = 0; i < notas.length; i++){
        media3+=notas[i]
    }
    return media3/notas.length;
}
console.log(somaNotas(notas))