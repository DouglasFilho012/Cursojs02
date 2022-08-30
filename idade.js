function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.getElementById('res')
    if (fano.value == 0 || Number (fano.value) > 2022 ) {
        window.alert('Verifique e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'criancahomem.png')
            } else if  (idade >= 10 && idade <= 21 ) {
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '')
            } else {
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'criancafemi.png')
            } else if  (idade >= 10 && idade <= 21 ) {
                img.setAttribute('src', 'jovemfemi.png')
            } else if (idade < 50) {
                img.setAttribute('src', '')
            } else {
                img.setAttribute('src', 'Design Sem Nome.png')
            }
        }
        resu.style.textAlign = 'center'
        resu.style.alignContent = 'center'
        resu.innerHTML= `Detectamos: ${genero} com ${idade} anos`
        resu.appendChild(img)
    }
}
