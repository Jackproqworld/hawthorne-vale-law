import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Learn about Hawthorne & Vale Law and our client-focused approach.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Hawthorne & Vale"
        title="Thoughtful counsel. Practical results."
        description="We are a boutique law firm built around responsive service, careful analysis, and legal strategies tailored to the people and businesses we represent."
      />

      <section className="section">
        <div className="container split-section">
          <div>
            <span className="eyebrow">Our philosophy</span>
            <h2>Good legal advice should create clarity.</h2>
          </div>

          <div className="prose">
            <p>
              Hawthorne & Vale Law was founded on a simple idea: clients deserve legal
              counsel that is both sophisticated and understandable.
            </p>

            <p>
              We work with business owners, executives, professionals, and individuals
              who need a trusted partner when the stakes are high. Our role is to
              understand the larger picture, identify meaningful risks, and help you
              make informed decisions.
            </p>

            <p>
              Whether we are negotiating a commercial agreement or helping resolve a
              dispute, we remain focused on your objectives and the practical outcome
              you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">Our values</span>
            <h2>The standards behind our work.</h2>
          </div>

          <div className="card-grid three-columns">
            <article className="value-card">
              <span className="value-number">01</span>
              <h3>Integrity</h3>
              <p>
                We provide candid advice and maintain the highest standards of
                professional conduct.
              </p>
            </article>

            <article className="value-card">
              <span className="value-number">02</span>
              <h3>Preparation</h3>
              <p>
                We approach every matter with detailed analysis, careful planning, and
                disciplined execution.
              </p>
            </article>

            <article className="value-card">
              <span className="value-number">03</span>
              <h3>Responsiveness</h3>
              <p>
                We understand that timely legal guidance can make a meaningful
                difference in the decisions you face.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
