import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS, // Use environment variables
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: "heera.madquick@gmail.com", // sender address
      to, // list of receivers
      subject, // Subject line
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
