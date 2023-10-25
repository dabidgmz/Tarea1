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
      rules.unique({ table: 'users', column: 'email' }),
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
    'name.required': 'El nombre es obligatorio.',
    'name.minLength': 'El nombre debe tener al menos {{ options.minLength }} caracteres.',
    'name.maxLength': 'El nombre no puede tener más de {{ options.maxLength }} caracteres.',
    'email.required': 'El correo electrónico es obligatorio.',
    'email.email': 'El correo electrónico no tiene un formato válido.',
    'email.maxLength': 'El correo electrónico no puede tener más de {{ options.maxLength }} caracteres.',
    'email.unique': 'Este correo electrónico ya está en uso.',
    'password.required': 'La contraseña es obligatoria.',
    'password.minLength': 'La contraseña debe tener al menos {{ options.minLength }} caracteres.',
    'password.maxLength': 'La contraseña no puede tener más de {{ options.maxLength }} caracteres.',
    'phone.maxLength': 'El número de teléfono no puede tener más de {{ options.maxLength }} caracteres.',
  };
}
