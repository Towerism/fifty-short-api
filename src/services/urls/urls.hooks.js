const { shorturl } = require('@zodash/shorturl')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [async context => {
      const shortened = shorturl(context.data.url)
      const existing = await context.service.get(shortened)
      if (existing) {
        context.result = existing
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
