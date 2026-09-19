import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hawthorne & Vale Law to schedule an initial consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Hawthorne & Vale"
        title="Let’s discuss your legal needs."
        description="Tell us a little about your matter and a member of our team will contact you to discuss potential next steps."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-details">
            <span className="eyebrow">Our office</span>
            <h2>We’re here to help you move forward.</h2>

            <p>
              Initial consultations are available by phone, video conference, or at
              our New York office by appointment.
            </p>

            <div className="contact-item">
              <strong>Address</strong>
              <span>
                200 Madison Avenue
                <br />
                New York, NY 10016
              </span>
            </div>

            <div className="contact-item">
              <strong>Phone</strong>
              <a href="tel:+12125550148">(212) 555-0148</a>
            </div>

            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:hello@hawthorneandvale.com">hello@hawthorneandvale.com</a>
            </div>

            <div className="contact-item">
              <strong>Office hours</strong>
              <span>
                Monday–Friday
                <br />
                8:30 AM–5:30 PM
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
