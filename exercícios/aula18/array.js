let num = [5,8,2,9,3]

num.push(0)
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`A ordem crescente dos vetores é ${num.sort()}`)

/*for (let pos = 0; pos <num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/


for( let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let search = num.indexOf(2)
//Quando o resultado der -1 é porque não existe
if (search == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${search}`)
}
