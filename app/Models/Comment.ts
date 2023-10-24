import { DateTime } from 'luxon'
import Usuario from './Usuario'
import Post from './Post'
import { BaseModel, column, belongsTo, BelongsTo} from '@ioc:Adonis/Lucid/Orm'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

  @column({columnName: 'content'})
  public content: string

  @column()
  public user_id: number

  @column()
  public post_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
