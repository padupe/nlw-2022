import { MailAdapter, SendMailData } from "../mailAdapter"
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2bada861dd189f",
      pass: "526243b8319049"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
            from: "Equipe Feedget <meuemail@email.com>",
            to: "Paulo Peixoto <peixoto.pauloeduardo@gmail.com>",
            subject,
            html: body
        })
    }
    
}