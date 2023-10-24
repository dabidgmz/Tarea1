import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class extends BaseSeeder {
  public async run () {
    await Post.createMany([
      {
        title: "nashe",
        content: "etselente",
        user_id:1
      },
      {
        title: "que?",
        content: "so",
        user_id: 2,
      },
      {
        title: "zy?",
        content: "no",
        user_id: 3
      },
      {
        title: "si no funciona?",
        content: "lo repruebo",
        user_id: 4
      },
      {
        title: "si no funciona?",
        content: "lo repruebo",
        user_id: 5
      },
    ])
  }
}
