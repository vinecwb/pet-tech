import { FastifyInstance } from 'fastify'
import { create } from '../user/create'
import { findUser } from './find-user'
import { signin } from './signin'

export async function userRoutes(app: FastifyInstance) {
  app.get('/user/:id', findUser)
  app.post('/user', create)
  app.post('/user/signin', signin)
}
