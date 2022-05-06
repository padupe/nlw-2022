import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

describe("Submit Feedback", () => {

    const createFeedbackSpy = jest.fn()
    const sendMailSpy = jest.fn()

    const submitFeedabckUseCase = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    )

    it("Should be able to submit a feedback", async () => {

        await expect(submitFeedabckUseCase.execute({
            type: "BUG",
            comment: "Example Comment",
            screenshot: "data:image/png;base64"
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()

    })

    it("Should not be able to submit a feedback without type", async () => {

        await expect(submitFeedabckUseCase.execute({
            type: "",
            comment: "Example Comment",
            screenshot: "data:image/png;base64"
        })).rejects.toThrow()

    })

    it("Should not be able to submit a feedback without comment", async () => {

        await expect(submitFeedabckUseCase.execute({
            type: "IDEA",
            comment: "",
            screenshot: "data:image/png;base64"
        })).rejects.toThrow()

    })

    it("Should not be able to submit a feedback with an invalid screenshot", async () => {

        await expect(submitFeedabckUseCase.execute({
            type: "IDEA",
            comment: "Failure",
            screenshot: "fail.jpeg"
        })).rejects.toThrow()

    })
})