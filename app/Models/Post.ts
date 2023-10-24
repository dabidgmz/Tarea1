import { DateTime } from 'luxon'
import Usuario from './Usuario'
import Comment from './Comment'
import { BaseModel, column, belongsTo, BelongsTo, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Usuario)
  public usuario: BelongsTo<typeof Usuario>

  @hasMany(() => Comment, {foreignKey: 'post_id'})
  public comments: HasMany<typeof Comment>

  @column({columnName: 'title'})
  public title: string

  @column({columnName: 'content'})
  public content: string

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
}
