var idade = 70
        console.log(`Você tem ${idade} anos`)
if (idade < 16 ){
        console.log('Não vota')
} else if (idade < 18 || idade > 65 ) {
        console.log ('Voto não obrigatório')
} else if (idade == 0) {
        console.log('Por favor inserir idade real')
} else {
        console.log('Voto obrigatório')
}