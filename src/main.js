const app = require("./app");

let vector = [4, 5, 1, 7, 8, 2, 9, 3];
console.log(app.contarPares(vector));

console.log(app.generarVector(10, 90, 97));

vector = app.generarVector(20, 13, 50);
console.log(vector.toString());
console.log(app.obtenerImpares(vector));