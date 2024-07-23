import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindWithPersonUseCase } from 'use-cases/factory/make-find-with-person'
import { z } from 'zod'

export async function findUser(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.number(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const findWithPersonUseCase = makeFindWithPersonUseCase()

  const user = await findWithPersonUseCase.handler(id)

  return reply.status(200).send(user)
}
