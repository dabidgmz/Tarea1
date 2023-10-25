import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UserValidationValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(2),
      rules.maxLength(50),
    ]),
    email: schema.string({}, [
      rules.email(),
      rules.maxLength(255),
      rules.unique({ table: 'usuarios', column: 'email' }), // Cambiado 'users' a 'usuarios'
    ]),
    password: schema.string({}, [
      rules.minLength(8),
      rules.maxLength(180),
    ]),
    phone: schema.string({}, [
      rules.maxLength(10),
    ]),
    status: schema.boolean.optional(),
    remember_me_token: schema.string.optional(),
    created_at: schema.date.optional(),
    updated_at: schema.date.optional(),
  });

  public messages: CustomMessages = {
    'name.required': 'ey te crees gracioso? el nombre es obligatorio!!.',
    'name.minLength': 'El nombre debe tener al menos {{ options.minLength }} caracteres ponte al tiro mijo.',
    'name.maxLength': 'El nombre no puede tener más de {{ options.maxLength }} caracteres en que mundo vives?.',
    'email.required': 'El correo electrónico es obligatorio si no a donde te legan mi mensajes bb.',
    'email.email': 'El correo electrónico no tiene un formato válido pilas mijo.',
    'email.maxLength': 'El correo electrónico no puede tener más de {{ options.maxLength }} caracteres.',
    'email.unique': 'Este correo electrónico ya está en uso ya ni la riegas men .',
    'password.required': 'a donde tan rapido velosista? La contraseña es obligatoria .',
    'password.minLength': 'La contraseña debe tener al menos {{ options.minLength }} caracteres si no te hackeo.',
    'password.maxLength': 'La contraseña no puede tener más de {{ options.maxLength }} caracteres.',
    'phone.maxLength': 'El número de teléfono no puede tener más de {{ options.maxLength }} caracteres o que tienes movistar eda.',
  };
}
