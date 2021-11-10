// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class Urls extends Model {
  static get tableName () {
    return 'urls'
  }

  static get idColumn () {
    return 'shortened'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['shortened', 'url'],

      properties: {
        shortened: { type: 'string' },
        url: { type: 'string' }
      }
    }
  }

  $beforeInsert () {
    this.createdAt = this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate () {
    this.updatedAt = new Date().toISOString()
  }
}

module.exports = function (app) {
  return Urls
}
