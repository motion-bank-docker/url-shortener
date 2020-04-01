const { authenticate } = require('@feathersjs/authentication').hooks
const { fromAuth0 } = require('@morphatic/feathers-auth0-strategy')
const { isProvider, some, unless } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [unless(some(isProvider('server'), fromAuth0()), authenticate('auth0'))],
    get: [],
    create: [unless(some(isProvider('server'), fromAuth0()), authenticate('auth0'))],
    update: [unless(some(isProvider('server'), fromAuth0()), authenticate('auth0'))],
    patch: [unless(some(isProvider('server'), fromAuth0()), authenticate('auth0'))],
    remove: [unless(some(isProvider('server'), fromAuth0()), authenticate('auth0'))]
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
