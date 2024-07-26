import { FastifyReply, FastifyRequest } from 'fastify'
import { makeFindAllProductUseCase } from 'use-cases/factory/make-find-all-product-use-case'
import { z } from 'zod'

export async function findAllProducts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  })

  const { page, limit } = registerQuerySchema.parse(request.query)

  const findAllProducts = makeFindAllProductUseCase()

  const products = await findAllProducts.handler(page, limit)

  return reply.status(200).send(products)
}
