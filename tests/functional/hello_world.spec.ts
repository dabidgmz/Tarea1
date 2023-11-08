import { test } from '@japa/runner';
test.group('Pruebas de Arrays', () => {
  test('Debería ser un array', ({assert}) => {
    const arr = [1, 2,3];
    assert.isArray(arr);
  });

  test('No debería ser un array', ({assert}) => {
    const value = 'No soy un array nimodilllo';
    assert.isNotArray(value);
  });

  test('El array debería estar vacío llenalo o que', ({assert}) => {
    const emptyArray = [];
    assert.isEmpty(emptyArray);
  });

  test('Debería ser falso como su amor por mi', ({assert}) => {
    const value = false;
    assert.isFalse(value);
  });
});
