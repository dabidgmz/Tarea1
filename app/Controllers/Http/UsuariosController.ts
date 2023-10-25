import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Usuario from 'App/Models/Usuario';
import UserValidationValidator from 'App/Validators/UserValidationValidator';
export default class UsuariosController {
    public async index({ response }: HttpContextContract) {
        const usuarios = await Usuario.query().preload('posts').preload('comments') 
        return response.json(usuarios)
    }
    /*
    public async tiporeq({request,response}:HttpContextContract){
        const tipo=request.method()
        switch(tipo){
            case 'GET':
            return response.status(200).json({message:'el tipo de peticion es Get'})
            break;
            case 'POST':
            return response.status(200).json({message:'el tipo de peticion es Post'})
            break;
            case 'PUT':
            return response.status(200).json({messe:'el tipo de peticion es Put'})
            break;
            case 'DELETE':
            return response.status(200).json({messe:'el tipo de peticion es Delete'})
            break;
            default:
                return response.status(400).json({ message: 'Método no admitido' });
        }
    }
    */

        public async tipobusq({ request, response }: HttpContextContract) {
          const tipo = request.method();
          switch (tipo) {
            case 'GET':
              try {
                const userId = request.param('id');
                if (userId) {
                  const usuario = await Usuario.find(userId);
                  if (usuario) {
                    return response.status(200).json({ message: 'Usuario encontrado con éxito', usuario });
                  } else {
                    return response.status(404).json({ message: 'Usuario no encontrado' });
                  }
                } else {
                  const usuarios = await Usuario.all();
                  return response.status(200).json({ message: 'Lista de usuarios', usuarios });
                }
              } catch (error) {
                return response.status(500).json({ message: 'Error interno del servidor', error: error.message });
              }
            case 'POST':
              try {
                const validatedData = await request.validate(UserValidationValidator);
                const userData = request.only(['name', 'email', 'password', 'phone', 'status']);
                const newUser = await Usuario.create(userData);
                return response.status(201).json(newUser);
              } catch (error) {
                return response.status(400).json({ message: 'Error al crear el usuario', error: error.messages });
              }
            case 'PUT':
              try {
                const userId = request.param('id');
                const validatedData = await request.validate(UserValidationValidator);
                const updatedData = request.only(['name', 'email', 'password', 'phone', 'status']);
                const userToUpdate = await Usuario.find(userId);
                if (userToUpdate) {
                  userToUpdate.merge(updatedData);
                  await userToUpdate.save();
                  return response.status(200).json({ message: 'Usuario actualizado con éxito', usuario: userToUpdate });
                } else {
                  return response.status(404).json({ message: 'Usuario no encontrado' });
                }
              } catch (error) {
                return response.status(400).json({ message: 'Error al actualizar el usuario', error: error.messages });
              }
            case 'DELETE':
              try {
                const userIdToDelete = request.param('id');
                const userToDelete = await Usuario.find(userIdToDelete);
                if (userToDelete) {
                  userToDelete.status = 'inactive';
                  await userToDelete.save();
                  return response.status(200).json({ message: 'Usuario desactivado con éxito' });
                } else {
                  return response.status(404).json({ message: 'Usuario no encontrado' });
                }
              } catch (error) {
                return response.status(500).json({ message: 'Error al desactivar el usuario', error: error.message });
              }
            default:
              return response.status(400).json({ message: 'Mira bien soy el mencho y este método no admitido, fíjate bien si no amaneces de plomo' });
          }
        }
      }
      