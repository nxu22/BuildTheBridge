// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const {
      name,
      email,    
      company,
      phone,
      website,
      budget,
      interests,
      otherInterests,
      goals,
      hearAbout,
    } = body;

    // Send email to yourself
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Fixed: Use Resend's test address
      to: ["nanxu1279@gmail.com"], // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b7355;">New Contact Form Submission</h2>
         
          <div style="background: #f5f2ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${website ? `<p><strong>Website:</strong> ${website}</p>` : ""}
          </div>

          <div style="background: #f5f2ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Project Details</h3>
            <p><strong>Budget:</strong> ${budget}</p>
            ${interests && interests.length > 0 ? `<p><strong>Interests:</strong> ${interests.join(", ")}</p>` : ""}
            ${otherInterests ? `<p><strong>Other Interests:</strong> ${otherInterests}</p>` : ""}
            <p><strong>Goals & Business:</strong></p>
            <p style="white-space: pre-wrap;">${goals}</p>
          </div>

          <div style="background: #f5f2ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Additional Info</h3>
            <p><strong>How they heard about us:</strong> ${hearAbout}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev", // Fixed: Use Resend's test address
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b7355;">Thanks for reaching out, ${name}!</h2>
         
          <p>We've received your message and will get back to you within 24 hours.</p>
         
          <p>In the meantime, feel free to explore more about our approach at buildthebridge.ca</p>
         
          <div style="margin-top: 30px; padding: 20px; background: #f5f2ed; border-radius: 8px;">
            <p><strong>Build The Bridge</strong><br>
            Winnipeg, Manitoba, Canada<br>
            buildthebridgeca@gmail.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
