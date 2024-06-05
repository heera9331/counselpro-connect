import nodemailer from "nodemailer";

const endpoint = process.env.MAILTRAP_ENDPOINT || "";
const token = process.env.MAILTRAP_TOKEN || "";

console.log(endpoint);
console.log(token);

const sendEmail = async ({
  from,
  to,
  subject,
  html,
}: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) => {
  try {
    const { MailtrapClient } = require("mailtrap");
    const client = new MailtrapClient({
      endpoint,
      token,
    });

    const sender = {
      email: "mailtrap@demomailtrap.com",
      name: "Thank for choosing this app",
    };
    const recipients = [
      {
        email: to,
      },
    ];

    return client.send({
      from: sender,
      to: recipients,
      subject: subject,
      text: html,
      category: "Integration Test",
    });
  } catch (error) {
    console.log("error while sending email");
    throw new Error(error.message);
  }
};

export default sendEmail;
