const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query
    const ongs = await connection('ongs')
      .select('*')
      .limit(5)
      .offset((page - 1) * 5)

    return response.json(ongs)
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body
    const id = crypto.randomBytes(4).toString('HEX')
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return response.json({ id })
  },
  async delete(request, response) {
    const { id } = request.params
    await connection('ongs').where('id', id).delete()

    return response.status(204).send()
  }
}