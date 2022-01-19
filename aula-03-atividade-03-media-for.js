let notas = [10 ,6.5 ,8 ,7.5]
function calcularMedia(notas){
    let media = 0
    for(i=0;i<notas.length; i++){
        media+=notas[i]
    }
    return media/notas.length
}

console.log(calcularMedia(notas))