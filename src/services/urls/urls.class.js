const { Service } = require('feathers-objection')
const { shorturl } = require('@zodash/shorturl')

exports.Urls = class Urls extends Service {
  constructor (options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model
    })
  }

  async create ({ url }) {
    const shortened = shorturl(url)
    // check if shortened url exists in the database
    const existing = await this.Model.query().where('shortened', shortened).first()
    if (existing) {
      return existing
    }
    // store the url in the database
    const newUrl = await this.Model.query().insert({ url, shortened })
    return newUrl
  }
}
