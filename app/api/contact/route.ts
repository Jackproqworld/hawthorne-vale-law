import { NextResponse } from "next/server";

const emailRegex = /^[\w.+-]+@\w[\w.-]*\.[a-zA-Z]{2,}$/;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const practiceArea = String(data.practiceArea || "").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "hello@hawthorneandvale.com";

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "The contact form is not configured. Add RESEND_API_KEY in your environment.",
        },
        { status: 500 },
      );
    }

    const body = {
      from: `Hawthorne & Vale Law <noreply@hawthorneandvale.com>`,
      to: [contactEmail],
      reply_to: email,
      subject: `New contact inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #212121;">
          <h2 style="color: #1a237e;">New inquiry from Hawthorne & Vale Law website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Practice area:</strong> ${practiceArea || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result?.message || "Failed to send email.");
    }

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send message.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
