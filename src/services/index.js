const urls = require('./urls/urls.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(urls)
}
