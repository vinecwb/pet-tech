import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findaddress } from './find-address'

export async function addressRoutes(app: FastifyInstance) {
  app.post('/address', create)
  app.get('/address/person/:personId', findaddress)
}
