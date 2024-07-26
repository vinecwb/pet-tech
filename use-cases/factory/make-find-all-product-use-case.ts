import { ProductRepository } from '@/repositories/typeorm/product.repository'
import { FindAllProductsUseCase } from 'use-cases/find-all-products'

export function makeFindAllProductUseCase() {
  const productRepository = new ProductRepository()

  const findAllProductUseCase = new FindAllProductsUseCase(productRepository)

  return findAllProductUseCase
}
