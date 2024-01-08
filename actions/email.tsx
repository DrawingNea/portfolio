"use server";

import React from "react";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid sender message",
    };
  }
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "Lcy.Li@outlook.de",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
