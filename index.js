function somar() {
    const primeiro = parseInt(document.getElementById('primeiro').value);
    const segundo = parseInt(document.getElementById('segundo').value);
    const soma = primeiro + segundo;
    if (isNaN(soma)) {
        return document.getElementById('resultado').innerText = 'Por favor insira um número inteiro.';
    }
    document.getElementById('resultado').innerText = soma;
}