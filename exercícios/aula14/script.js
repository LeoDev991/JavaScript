function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = document.getElementById('iage');
    var res = document.getElementById('res');

    // validação
    if (fano.value.length == 0 || Number(fano.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // não continua se estiver errado
    }

    var fsex = document.getElementsByName('isex');
    var idade = anoAtual - Number(fano.value);
    var genero = '';

    if (fsex[0].checked) {
        genero = 'Homem';
    } else {
        genero = 'Mulher';
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

    var fotoDiv = document.getElementById('foto');
    fotoDiv.innerHTML = '';

    var img = document.createElement('img');
    img.setAttribute('id', 'imagem');
    img.style.borderRadius = '50%';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    img.width = 250;
    img.height = 250;

    if (genero === 'Homem') {
        if (idade >= 0 && idade < 10) {
            img.src = 'imagens/homem-bebe.jpg';
        } else if (idade < 21) {
            img.src = 'imagens/homem-jovem.jpg';
        } else if (idade < 50) {
            img.src = 'imagens/homem-adulto.jpg';
        } else {
            img.src = 'imagens/homem-idoso.jpg';
        }
    } else {
        if (idade >= 0 && idade < 10) {
            img.src = 'imagens/mulher-bebe.jpg';
        } else if (idade < 21) {
            img.src = 'imagens/mulher-jovem.jpg';
        } else if (idade < 50) {
            img.src = 'imagens/mulher-adulta.jpg';
        } else {
            img.src = 'imagens/mulher-idosa.jpg';
        }
    }

    fotoDiv.appendChild(img);
}