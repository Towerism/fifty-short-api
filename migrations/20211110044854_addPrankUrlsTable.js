const app = require('../src/app')
const db = app.get('knex')

exports.up = function () {
  return db.schema.createTable('prank_urls', table => {
    table.increments('id').primary()
    table.string('shortened')
    table.string('url')
    table.integer('weight').defaultTo(10)
    table.timestamp('createdAt')
    table.timestamp('updatedAt')

    table.index('shortened')

    // create many to one relationship with urls with the shortened column as the foreign key
    table.foreign('shortened').references('urls.shortened')
  })
}

exports.down = function () {
  return db.schema.dropTable('prank_urls')
}
