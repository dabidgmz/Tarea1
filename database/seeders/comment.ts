import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class CommentSeeder extends BaseSeeder {
  public async run () {
    try {
      await Comment.createMany([
        {
          user_id: 2,
          post_id: 1,
          content: "Excelente",
        },
        {
          user_id: 3,
          post_id: 2,
          content: "Hola mundo",
        },
        {
          user_id: 4,
          post_id: 3,
          content: "apocochy",
        },
        {
          user_id: 5,
          post_id: 4,
          content: "kemevez",
        },
        {
          user_id: 6,
          post_id: 5,
          content: "siwe?",
        },
      ])
    } catch (error) {
      console.error('Error seeding comments:', error.message)
    }
  }
}

