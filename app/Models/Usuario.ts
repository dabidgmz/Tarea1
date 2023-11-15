import { DateTime } from 'luxon'
import Post from './Post'
import Comment from './Comment'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Usuario extends BaseModel {
  static put(arg0: string) {
    throw new Error('Method not implemented.')
  }
  static post(arg0: string) {
    throw new Error('Method not implemented.')
  }
  @column({ isPrimary: true })
  public id: number

@hasMany(() => Post, {foreignKey: 'user_id'})
public posts: HasMany<typeof Post>

@hasMany(() => Comment,{foreignKey: 'user_id'})
public comments: HasMany<typeof Comment>

  @column()
  public name: string

  @column({columnName: 'email'})
  public email: string

  @column({columnName: 'password'})
  public password: string

  @column({columnName: 'phone'})
  public phone: string

  @column({columnName: 'status'})
  public status: string

  @column({columnName: 'remember_me_token'})
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
