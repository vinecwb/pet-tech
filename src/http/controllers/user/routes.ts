import { FastifyInstance } from 'fastify'
import { create } from '../user/create'
import { findUser } from './find-user'

export async function userRoutes(app: FastifyInstance) {
  app.get('/user/:id', findUser)
  app.post('/user', create)
}
