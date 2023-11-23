import { test } from '@japa/runner';

test.group('llamen a dios test', () => {
  
  test('Crea User', async ({ client, assert }) => {
    const response = await client.post('/usuario').form({
      name: "y9",
      email: "y9@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);
    
    response.assertStatus(201);

    if ('usuario' in datosBody) {
      assert.isDefined(datosBody.usuario.id);
      assert.isDefined(datosBody.usuario.updated_at);
    }

    response.assertBody({
      message: "Usuario creado exitosamente",
      usuario: { // Change 'user' to 'usuario'
        created_at: datosBody.usuario.created_at,
        email: "y9@gmail.com",
        id: datosBody.usuario.id, // Remove quotes around id
        name: "y9",
        password: "12345678",
        phone: "12345678",
        status: "activo",
        updated_at: datosBody.usuario.updated_at,
      }
    });
  });

  test('update User', async ({ client, assert }) => {
    const response = await client.put('/usuario/10').form({
      name: "y99",
      email: "y99@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);

    if ('usuario' in datosBody) {
      assert.isDefined(datosBody.usuario.created_at);
    }

    response.assertStatus(200);
    response.assertBody({
      message: "Usuario actualizado con éxito", // Change 'exitosamente' to 'con éxito'
      usuario: { // Change 'user' to 'usuario'
        created_at: datosBody.usuario.created_at,
        email: "y99@gmail.com",
        id: datosBody.usuario.id, // Remove quotes around id
        name: "y99",
        password: "12345678",
        phone: "12345678",
        remember_me_token: null,
        status: "activo",
        updated_at: datosBody.usuario.updated_at,
      }
    });
  });
});




/*import { test } from '@japa/runner';

test.group('llamen a dios test', () => {
  
  test('Crea User', async ({ client, assert }) => {
    const response = await client.post('/usuario').form({
      name: "y5",
      email: "y5@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);
    
    response.assertStatus(201);

    if ('user' in datosBody) {
      assert.isDefined(datosBody.user.id);
      assert.isDefined(datosBody.user.updated_at);
    }

    response.assertBody({
      message: "Usuario creado exitosamente",
      user: {
        created_at: datosBody.user.created_at,
    email: "y5@gmail.com",
    id: datosBody.user.id,
    name: "y5",
    password: "12345678",
    phone: "12345678",
    status: "activo",
    updated_at: datosBody.user.updated_at,
      }
    });
  });

  test('update User', async ({ client, assert }) => {
    const response = await client.put('/usuario/7').form({
      name: "y55",
      email: "y55@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);

    if ('user' in datosBody) {
      assert.isDefined(datosBody.user.created_at);
    }

    response.assertStatus(200);
    response.assertBody({
      message: "Usuario actualizado exitosamente",
      user: {
        created_at: datosBody.usuario.created_at,
    email: "y55@gmail.com",
    id: datosBody.usuario.id,
    name: "y55",
    password: "12345678",
    phone: "12345678",
    remember_me_token: null,
    status: "activo",
    updated_at: datosBody.usuario.updated_at,
      }
    });
  });
/*
  test('Crea User', async ({ client, assert }) => {
    const response = await client.post('/usuario').form({
      name: "y2",
      email: "y2@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);

    response.assertStatus(201);

    if ('user' in datosBody) {
      assert.isDefined(datosBody.user.id);
      assert.isDefined(datosBody.user.updated_at);
    }

    response.assertBodyContains({
      message: "Usuario creado exitosamente",
      user: {
        name: "y2",
        email: "y2@gmail.com",
        password: "12345678",
        phone: "12345678",
        status: "activo"
      }
    });
  });

  test('update User', async ({ client, assert }) => {
    const response = await client.put('/usuario/3').form({
      name: "y22",
      email: "y22@gmail.com",
      password: "12345678",
      phone: "12345678",
      status: "activo"
    });

    let datosBody = JSON.parse(response.text());
    console.log(datosBody);

    response.assertStatus(404); // Assuming the user with ID 3 does not exist
    response.assertBody({
      message: "Usuario no encontrado"
    });
  });*/

/*
});
*/





