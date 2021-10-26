const app = require('../src/app');

test('Genera un vector de tamaño N', () => {
  let vector = app.generarVector(10, 20, 30);

  expect(vector.length).toBe(10);
});

test('Genera un vector de tamaño N con valores aleatorios', () => {
  let vector = app.generarVector(10, 20, 30);

  for (let i = 0; i < vector.length; i++) {
    expect(vector[i]).toBeGreaterThanOrEqual(20);
    expect(vector[i]).toBeLessThanOrEqual(30);
  }
});
