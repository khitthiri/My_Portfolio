import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendEmail = async ({
  name,
  email,
  message,
}) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "khitthiri.mw@gmail.com",
    reply_to: email,
    subject: "New Portfolio Contact",

    html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${name}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Message:</strong></p>

      <p>${message}</p>
    `,
  });
};

export default sendEmail;