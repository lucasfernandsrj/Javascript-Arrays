const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda' ]
//[ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

const arrayOriginal2 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal2.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat2)
console.log(arrayOriginal2)