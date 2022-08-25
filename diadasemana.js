
var pais = 'BRASIL'
var agora = new Date()
var ano = agora.getFullYear()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
var milisegundos = agora.getMilliseconds()
var diase = agora.getDay()
switch (diase) {
    case 0 : 
        var switch1 = ('Domingo')
        break
    case 1 : 
        var switch1 = ('Segunda-Feira')
    case 2 :
        var switch1 = ('Terça-Feira')
        break
    case 3:
        var switch1 = ('Quarta-Feira')
        break
    case 4 :
        var switch1 = ('Quinta-Feira')
        break
    case 5 :
        var switch1 = ('Sexta-Feira')
        break
    case 6 : 
        var switch1 = ('Sabado')
        break
    default : 
        var switch1 = ('[ERRO] Dia invalido!')
        break

}
console.log(`Você está no ano de ${ano}, no dia de semana ${switch1}, as exatas ${hora} horas, ${minutos} minutos, ${segundos} segundos e ${milisegundos} milisegundo, localizado no pais ${pais} `)



