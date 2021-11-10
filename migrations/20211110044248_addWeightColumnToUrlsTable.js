const app = require('../src/app')
const db = app.get('knex')

exports.up = function () {
  return db.schema.table('urls', table => {
    table.integer('weight').defaultTo(10)
  })
}

exports.down = function () {
  return db.schema.table('urls', table => {
    table.dropColumn('weight')
  })
}
