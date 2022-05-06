import express from 'express'
import { feedbacksRoutes } from './feedbacks.routes'

export const router = express.Router()

router.use("/feedbacks", feedbacksRoutes)