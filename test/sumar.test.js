const app = require('../src/app');

test('Suma dos vectores de igual tamaño', () => {
  let vector1 = [1, 2, 3, 4, 5];
  let vector2 = [10, 8, 6, 4, 2];
  let suma = [11, 10, 9, 8, 7];
  expect(app.sumar(vector1, vector2).sort()).toEqual(suma.sort());
});

test('Suma dos vectores de diferente tamaño', () => {
  let vector1 = [1, 2, 3, 4, 5, 7];
  let vector2 = [10, 8, 6, 4, 2];
  expect(app.sumar(vector1, vector2)).toBe(-1);
});
