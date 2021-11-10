// Initializes the `prankUrls` service on path `/prank-urls`
const { PrankUrls } = require('./prank-urls.class')
const createModel = require('../../models/prank-urls.model')
const hooks = require('./prank-urls.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/prank-urls', new PrankUrls(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('prank-urls')

  service.hooks(hooks)
};
