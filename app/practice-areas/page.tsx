import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Explore business, contract, and dispute resolution services.",
};

const practiceAreas = [
  {
    number: "01",
    title: "Business & Corporate Law",
    description:
      "We advise businesses at every stage, from formation and ownership changes to governance, commercial agreements, and strategic transactions.",
    services: [
      "Business formation and entity selection",
      "Operating agreements and shareholder matters",
      "Corporate governance",
      "Commercial transactions",
      "Outside general counsel services",
    ],
  },
  {
    number: "02",
    title: "Contracts & Commercial Agreements",
    description:
      "We draft, review, and negotiate agreements with a focus on clarity, enforceability, and protecting your commercial interests.",
    services: [
      "Service and vendor agreements",
      "Employment and executive agreements",
      "Confidentiality agreements",
      "Licensing and partnership agreements",
      "Contract risk assessment",
    ],
  },
  {
    number: "03",
    title: "Dispute Resolution",
    description:
      "When disputes arise, we work to protect your interests through negotiation, mediation, arbitration, or litigation.",
    services: [
      "Pre-litigation strategy",
      "Commercial disputes",
      "Breach of contract claims",
      "Mediation and arbitration",
      "Civil litigation",
    ],
  },
];

export default function PracticeAreasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our practice"
        title="Legal services designed around your priorities."
        description="From everyday business decisions to high-stakes disputes, our attorneys provide practical counsel at every stage."
      />

      <section className="section">
        <div className="container practice-list">
          {practiceAreas.map((practice) => (
            <article className="practice-row" key={practice.title}>
              <div className="practice-number">{practice.number}</div>

              <div className="practice-content">
                <h2>{practice.title}</h2>
                <p>{practice.description}</p>
              </div>

              <ul className="practice-services">
                {practice.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-box">
          <div>
            <span className="eyebrow eyebrow-light">Have a legal question?</span>
            <h2>Start with a conversation.</h2>
            <p>We can help identify the right next step for your matter.</p>
          </div>

          <a href="/contact" className="btn btn-primary">
            Contact the Firm
          </a>
        </div>
      </section>
    </main>
  );
}
