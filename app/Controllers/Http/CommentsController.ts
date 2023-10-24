import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
export default class CommentsController {
    public async index({ }: HttpContextContract) {
        const comments = await Comment.query().orderBy('id','asc')
        return Response.json(comments)
    }
}
