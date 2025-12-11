function contar() {
    let start = document.getElementById('istart')
    let end = document.getElementById('iend')
    let pass = document.getElementById('ipass')
    let res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar...'
        window.alert('[ERRO] Faltam Dados!')
        return
    }

    let s = Number(start.value)
    let e = Number(end.value)
    let p = Number(pass.value)


    if (p <= 0) {
        window.alert('[ERRO] Passo inválido (0). Usando passo = 1.')
        p = 1
    }

    res.innerHTML = 'Contando: <br>'

    if (s <= e) {
        for (let c = s; c <= e; c += Math.abs(p)) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for (let c = s; c >= e; c -= Math.abs(p)) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }

    res.innerHTML += 'FIM \u{1F3C1}'
}