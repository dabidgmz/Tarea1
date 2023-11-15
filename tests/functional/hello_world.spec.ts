import { test } from '@japa/runner';

test.group('llamen a dios ', () => {
  test('assertBodyCrear', async ({ client }) => {
    const response = await client.post('/usuario').form({
      name: 'p0',
      email: 'pp@gimail.com',
      phone: '870098769',
      password: '12345678',
      status: 'activo',
    });

    let dataBody = JSON.parse(response.text());
    console.log(dataBody);
    response.assertBody({
      message: 'Usuario registrado exitosamente.',
      active: 'activo',
    });
  });

  test('assertBodyContainCrear', async ({ client }) => {
    const response = await client.post('/usuario').form({
      name: 'prueba1',
      email: 'prueba1@gimail.com',
      phone: '8789099876',
      password: '123abc',
      status: 'activo',
    });

    let dataBody = JSON.parse(response.text());
    console.log(dataBody);

    response.assertBodyContains({
      message: 'Usuario registrado exitosamente.',
      active: 'activo',
    });
  });

  test('assertBodyEditar', async ({ client }) => {
    const response = await client.put('/usuario/1').form({
      name: 'pruebba',
    });

    let dataBody = JSON.parse(response.text());
    console.log(dataBody);

    response.assertBody({
      active: 'inactivo',
      message: 'Usuario modificado.',
    });
  });

  test('assertBodyContainsEditar', async ({ client }) => {
    const response = await client.put('/usuario/1').form({
      name: 'preuba3',
    });

    let dataBody = JSON.parse(response.text());
    console.log(dataBody);

    response.assertBodyContains({
      active: 'activo',
      message: 'Usuario modificado.',
    });
  });
});


/*
  test('actualizar usuario con assert.bodyContains', async ({ assert }) => {
    const userData = {
      name: 'prueba',
      email: 'ueba@p.com',
      password: 'contraseña123',
      phone: '123456789',
      status: 'activo'
    };

    const createResponse = await supertest(BASE_URL).post('/usuario').send(userData);
    assert.equal(createResponse.status, 200);
    const createdUserId = createResponse.body.id;
    const updatedUserData = {
      name: 'prueba_actualizada',
      email: 'actualizada@p.com',
      phone: '987654321',
      status: 'inactivo'
    };

    const updateResponse = await supertest(BASE_URL)
      .put(`/usuario/${createdUserId}`)
      .send(updatedUserData);
    assert.equal(updateResponse.status, 200);
    updateResponse.assertBodyContains({
      id: createdUserId,
      name: updatedUserData.name,
      email: updatedUserData.email,
      status: updatedUserData.status
    });
  });*/



/*test.group('Pruebas de Arrays', () => {
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
*/
