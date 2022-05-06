import { Router } from "express"
import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailerMailAdapter";
import { PrismaFeedbacksRepository } from "../repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "../useCases/submitFeedbackUseCase";

export const feedbacksRoutes = Router()

feedbacksRoutes.post('/', async (request, response) => {

  const { type, comment, screenshot } = request.body

  const prismaFeedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })
    
  return response.status(201).send()
})