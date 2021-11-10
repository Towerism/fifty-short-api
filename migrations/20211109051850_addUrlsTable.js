const app = require('../src/app')
const db = app.get('knex')

exports.up = function () {
  return db.schema.createTable('urls', table => {
    table.string('shortened')
    table.primary('shortened', { constraintName: 'urls_primary_key' })
    table.string('url')
    table.timestamp('createdAt')
    table.timestamp('updatedAt')
  })
}

exports.down = function () {
  return db.schema.dropTable('urls')
}
