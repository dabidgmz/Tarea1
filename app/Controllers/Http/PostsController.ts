import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
export default class PostsController {
    public async index({ }: HttpContextContract) {
        const posts = await Post.query().orderBy('id','asc')
        return Response.json(posts)
    }
}
