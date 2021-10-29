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

function obtenerImpares(vector) {
    let impares = new Array();

    for (let i = 0; i < vector.length; i++) {
    if (vector[i] % 2 !== 0) {
        impares.push(vector[i]);
    }
}
    return impares;
}

function sumar(vector1, vector2) {
    if (vector1.length !== vector2.length) {
        return -1;
    }
    let suma = new Array();
    for (let i = 0; i < vector1.length; i++) {
        suma.push(vector1[i] + vector2[i]);
    }
    return suma;
}

function eliminarNumero(vector, numero) {
    let eliminados = 0;
    let i = 0;

    while (i < vector.length) {
        if (vector[i] === numero) {
            vector.splice(i, 1);
            eliminados = eliminados + 1;
        } else {
            i = i + 1;
        }
    }
    return eliminados;
}

module.exports = {contarPares, 
    generarVector, 
    obtenerImpares, 
    sumar, 
    eliminarNumero};