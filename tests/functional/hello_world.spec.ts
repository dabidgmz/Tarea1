import { test } from '@japa/runner';

test.group('llamen a dios test', () => {
  
   test('Crea User', async ({ client, assert }) => {
 const response = await client.post('usuario').form({
      name: "jose",
      email: "jose@gmail.com",
      password: "12345678",
      phone: "12345678",
      status:"activo"
    });
    let datosBody = JSON.parse(response.text());
    console.log(datosBody);
    response.assertStatus(201); 
    response.assertBody({
      message: "Usuario creado exitosamente",
      user: {
        name: "jose",
        email: "jose@gmail.com",
        id: datosBody.user.id,
        updated_at: datosBody.user.updated_at
      }
    });
    if ('result' in datosBody) {
      assert.isBoolean(datosBody.result);
      assert.isTrue(datosBody.result);
    }
  });

    
    test('update User', async ({ client, assert }) => {
      const response = await client.put('/usuario/5').form({
        name: "josesillo",
      email: "jose@gmail.com",
      password: "12345678",
      phone: "12345678",
      status:"inactivo"
      });
      let datosBody = JSON.parse(response.text());
      console.log(datosBody);
      response.assertStatus(200); 
      response.assertBody({
        message: "Usuario actualizado exitosamente",
        user: {
          name: "josesillo",
          email: "jose@gmail.com",
          id: 5,
          created_at: datosBody.user.created_at,
          estado: 1, 
          updated_at: datosBody.user.updated_at
        }
      });
      if ('result' in datosBody) {
        assert.isBoolean(datosBody.result);
        assert.isTrue(datosBody.result);
      }
    });
        
      test('Crea User', async ({ client, assert }) => {
      const response = await client.post('/usuario').form({
        name: "pablo",
        email: "pablo@gmail.com",
        password: "12345678",
        phone: "12345678",
        status:"activo"
        });
        let datosBody = JSON.parse(response.text());
        console.log(datosBody);
        response.assertStatus(201); 
        response.assertBodyContains({
          message: "Usuario creado exitosamente",
          user: {
            name: "pablo",
            email: "pablo@gmail.com"
          }
        });
        if ('result' in datosBody) {
          assert.isBoolean(datosBody.result);
          assert.isTrue(datosBody.result);
        }
      });
        test('update User', async ({ client, assert }) => {
          const response = await client.put('/usuario/6').form({
            name: "pabillo",
      email: "pabillo@gmail.com",
      password: "12345678",
      phone: "12345678",
      status:"inactivo"
          });
          let datosBody = JSON.parse(response.text());
          console.log(datosBody);
          response.assertStatus(200); 
          response.assertBodyContains({
            message: "Usuario actualizado exitosamente",
            user: {
              name: "pabillo",
              email: "pablo@gmail.com",
            }
          });
          if ('result' in datosBody) {
            assert.isBoolean(datosBody.result);
            assert.isTrue(datosBody.result);
          }
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
