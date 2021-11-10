const { Service } = require('feathers-objection')

exports.PrankUrls = class PrankUrls extends Service {
  constructor (options) {
    const { Model, ...otherOptions } = options

    super({
      ...otherOptions,
      model: Model
    })
  }
}
