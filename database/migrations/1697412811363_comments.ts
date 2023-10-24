import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("user_id").unsigned().references('id').inTable('usuarios').onDelete('CASCADE')
      table.integer("post_id").unsigned().references('id').inTable('posts').onDelete('CASCADE')
      table.string("content", 255).notNullable()
      table.dateTime('created_at', { useTz: true }).defaultTo(this.now())
      table.dateTime('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
