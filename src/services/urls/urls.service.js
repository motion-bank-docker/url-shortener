// Initializes the `urls` service on path `/`
const { Urls } = require('./urls.class')
const createModel = require('../../models/urls.model')
const hooks = require('./urls.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/u', new Urls(options, app), function (req, res, next) {
    if (req.route.methods.get && res.data) {
      res.redirect(res.data.url)
    }
    else next()
  })

  // Get our initialized service so that we can register hooks
  const service = app.service('u')

  service.hooks(hooks)
}
