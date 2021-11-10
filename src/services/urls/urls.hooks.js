const { shorturl } = require('@zodash/shorturl')

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
    get: [],
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
