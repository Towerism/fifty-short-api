const app = require('../../src/app');

describe('\'prankUrls\' service', () => {
  it('registered the service', () => {
    const service = app.service('prank-urls');
    expect(service).toBeTruthy();
  });
});
