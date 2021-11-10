const { Service } = require('feathers-objection')

exports.Urls = class Urls extends Service {
  constructor (options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model
    })
  }
}
