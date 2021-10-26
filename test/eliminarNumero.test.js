const app = require('../src/app');

test('Elimina un número del contenido de un vector', () => {
  let vector = [1, 2, 3, 4, 2, 8, 5, 2, 2, 3, 4, 2, 1];

  expect(app.eliminarNumero(vector, 20)).toBe(0);
  expect(vector).toEqual([1, 2, 3, 4, 2, 8, 5, 2, 2, 3, 4, 2, 1]);

  expect(app.eliminarNumero(vector, 2)).toBe(5);
  expect(vector).toEqual([1, 3, 4, 8, 5, 3, 4, 1]);
});
