const app = require('../src/app');

test('Cuenta cuantos pares contiene el vector', () => {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  expect(app.contarPares(numeros)).toBe(5);
});
