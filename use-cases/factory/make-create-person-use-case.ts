import { PersonRepository } from '@/repositories/pg/person.repository'
import { CreatePersonUseCase } from 'use-cases/create-person'

export function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository()
  const createPersonUseCase = new CreatePersonUseCase(personRepository)
  return createPersonUseCase
}
