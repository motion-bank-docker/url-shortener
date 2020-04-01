// const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication')
// const { LocalStrategy } = require('@feathersjs/authentication-local')
const { Auth0Service, Auth0Strategy } = require('@morphatic/feathers-auth0-strategy')

module.exports = app => {
  // const authentication = new AuthenticationService(app)
  //
  // authentication.register('jwt', new JWTStrategy())
  // authentication.register('local', new LocalStrategy())

  const authentication = new Auth0Service(app)

  // register the strategy
  authentication.register('auth0', new Auth0Strategy())

  app.use('/authentication', authentication)
}
