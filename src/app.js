function contarPares(numero) {
    let pares = 0;

    for (let i = 0; i < numero.length; i++) {
        if(numero[i] % 2 === 0) {
            pares = pares + 1;
        }
    }
    return pares;
}

function generarVector(n, a, b) {
    let vector = new Array();

    for (let i = 0; i < n; i++) {
        vector.push(generarAleatorio(a, b));
    }
    return vector;
}

function generarAleatorio(inicio = 5, fin = 10) {
    let cuantos = fin - inicio + 1;
    let aleatorio = Math.trunc(Math.random() * cuantos) + inicio;

    return aleatorio;
}

module.exports = {contarPares, generarVector};