function carregar() {

    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')

    function atualizar() {
        var data = new Date()
        var hora = data.getHours()
        var min = String(data.getMinutes()).padStart(2, '0')
        var seg = String(data.getSeconds()).padStart(2, '0')
        msg.innerHTML = `Agora são ${hora}:${min}:${seg}.`

        if (hora >= 0 && hora < 12) {
            // BOM DIA
            img.src = 'Imagens/manha.jpg'
            img.alt = 'Foto da Manhã'
            document.body.style.background = '#e2cd9f'
        } else if (hora >= 12 && hora < 18) {
            // BOA TARDE
            img.src = 'Imagens/tarde.jpg'
            img.alt = 'Foto da Tarde'
            document.body.style.background = '#b9846f'
        } else {
            // BOA NOITE
            img.src = 'Imagens/noite.jpg'
            img.alt = 'Foto da Noite'
            document.body.style.background = '#515154'
        }
    }

    atualizar()
    setInterval(atualizar, 1000)
}