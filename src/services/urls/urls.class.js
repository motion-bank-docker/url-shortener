const { Service } = require('feathers-mongoose')
const { NotFound } = require('@feathersjs/errors')
const { URL } = require('url')

exports.Urls = class Urls extends Service {
  async get (id, params) {
    const result = await super.find({ code: id })
    if (Array.isArray(result.data) && result.data.length) {
      return result.data.shift()
    }
    else return new NotFound()
  }

  create (data) {
    let parsed
    try {
      parsed = new URL(data.url)
    }
    catch (err) { /* ignored */ }
    const {
      hash,
      host,
      hostname,
      pathname,
      port,
      protocol,
      search
    } = parsed
    const url = {
      url: parsed.href,
      parsed: {
        hash,
        host,
        hostname,
        pathname,
        port,
        protocol,
        search
      }
    }
    return super.create(url)
  }
}
