// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.

const { Model } = require('objection')

class PrankUrls extends Model {
  static get tableName () {
    return 'prank_urls'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['shortened', 'url'],

      properties: {
        id: { type: 'integer' },
        shortened: { type: 'string' },
        url: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    }
  }

  static get relationMappings () {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./urls.model')(),
        join: {
          from: 'prank_urls.shortened',
          to: 'urls.shortened'
        }
      }
    }
  };

  $beforeInsert () {
    this.createdAt = this.updatedAt = new Date().toISOString()
  }

  $beforeUpdate () {
    this.updatedAt = new Date().toISOString()
  }
}

module.exports = function (app) {
  return PrankUrls
}
