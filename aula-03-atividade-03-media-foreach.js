let notas = [10 ,6.5 ,8 ,7.5]
function calcularMedia(notas){
    let media = 0
    //callback sem retorno
    notas.forEach(nota => {
        media += nota
    });
    /*
    notas.forEach(function(nota) {
        media += nota
    });
    */

    return media/notas.length
}

console.log(calcularMedia(notas))