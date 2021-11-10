// Initializes the `urls` service on path `/urls`
const { Urls } = require('./urls.class')
const createModel = require('../../models/urls.model')
const hooks = require('./urls.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/urls', new Urls(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('urls')

  service.hooks(hooks)
}
