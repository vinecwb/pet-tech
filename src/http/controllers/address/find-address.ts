import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindAddressByPersonUseCase } from 'use-cases/factory/make-find-address-by-person-use-case'
import { z } from 'zod'

export async function findaddress(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    personId: z.coerce.number(),
  })

  const registerQuerySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number(),
  })

  const { personId } = registerParamsSchema.parse(request.params)
  const { page, limit } = registerQuerySchema.parse(request.query)

  const findaddressByPersonUseCase = makeFindAddressByPersonUseCase()
  const address = await findaddressByPersonUseCase.handler(
    personId,
    page,
    limit,
  )

  return reply.status(200).send(address)
}
