// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://user:secret@localhost/fifty_short_api',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
