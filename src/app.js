function contarPares(numero) {
    let pares = 0;

    for (let i = 0; i < numero.length; i++) {
        if(numero[i] % 2 === 0) {
            pares = pares + 1;
        }
    }
    return pares;
}

module.exports = {contarPares};