function Contar() {     
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById ('txtp')
    var resultado = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] FALTAM DAODS!')
        resultado.innerHTML = 'Impossivel contar!'
    } else {
        resultado.innerHTML = `Contando: <br> `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert ('Passo invalido! Considerando PASSO 1')
            p= 1
        }
        if (i < f) {
        for (var c = i; c <= f; c += p) {
            // contagem crescente
            resultado.innerHTML += `${c} \u{1F449}`
        }
        
    } else {
        for (var c = i; c>=f ; c-= p) {
            // regresiva
            resultado.innerHTML += `${c} \u{1F449}`
        } 
    } 
    resultado.innerHTML += `\u{1F3C1} `
    }
}
