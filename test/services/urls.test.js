const app = require('../../src/app')

describe('\'urls\' service', () => {
  it('registered the service', () => {
    const service = app.service('urls')
    expect(service).toBeTruthy()
  })
})
