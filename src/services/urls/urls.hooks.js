const { shorturl } = require('@zodash/shorturl')
const getRandomItem = require('random-weighted-item').default
const { pick } = require('lodash')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [async context => {
      const shortened = shorturl(context.data.url)
      const { data } = await context.service.find({ query: { shortened } })
      if (data.length) {
        context.result = data[0]
        return context
      }
      context.data.shortened = shortened
      return context
    }],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [async context => {
      const shortened = context.id
      // get the prank-urls service
      const prankUrls = context.app.service('prank-urls')
      // find the prank-urls with the shortened url
      const { data } = await prankUrls.find({ query: { shortened } })
      if (data.length) {
        const prankUrl = getRandomItem([context.result, ...data], (prankUrl) => prankUrl.weight)
        context.result = prankUrl
        return context
      }
      return context
    }, context => { context.result = pick(context.result, ['url']) }],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
