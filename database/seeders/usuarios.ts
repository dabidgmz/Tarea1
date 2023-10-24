import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class extends BaseSeeder {

  public async run () {
    // Write your database queries inside the run method
    await Usuario.createMany([
      {
        name: 'jesuscristo',
        email: 'sky@gmail.com',
        password: 'admin123',
        phone: '8712541987',
      },
      {
        name: 'patoramiro',
        email: 'cuak@gmail.com',
        password: 'jack123',
        phone: '8713567890',
      },
      {
        name: 'elpou',
        email: 'nashe@gmail.com',
        password: 'hola2234',
        phone: '8717321111',
      },
      {
        name: 'igmargod',
        email: 'yadensedebaja@gmail.com',
        password: '12345678',
        phone: '8719023461',
      },
      {
        name: 'Marquitox',
        email: 'jovenazo69@gmail.com',
        password: '12345678',
        phone: '8711204567',
      }
    ])
  }


}
