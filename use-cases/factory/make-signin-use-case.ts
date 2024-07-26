import { UserRepository } from '@/repositories/pg/user.repository'
import { SiginUseCase } from 'use-cases/signin'

export function makeSigninUseCase() {
  const userRepository = new UserRepository()

  const signinUseCase = new SiginUseCase(userRepository)

  return signinUseCase
}
