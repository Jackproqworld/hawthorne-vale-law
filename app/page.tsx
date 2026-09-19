import Link from "next/link";

const stats = [
  ["12+", "Years of legal experience"],
  ["1.2K+", "Clients represented"],
  ["96%", "Client satisfaction"],
  ["24h", "Typical initial response"],
] as const;

const practices = [
  {
    icon: "⚖️",
    title: "Business & Corporate Law",
    description:
      "Counsel for founders, executives, and growing companies handling formation, governance, contracts, and commercial strategy.",
  },
  {
    icon: "📑",
    title: "Contracts & Transactions",
    description:
      "Thoughtful review, drafting, and negotiation of agreements designed to protect your interests and reduce legal exposure.",
  },
  {
    icon: "🏛️",
    title: "Dispute Resolution",
    description:
      "Strategic representation in negotiations, mediation, and litigation with a focus on efficient and durable outcomes.",
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Strategic counsel. Trusted outcomes.</span>
            <h1>Clarity when your legal decisions matter most.</h1>
            <p className="hero-lead">
              Hawthorne & Vale Law provides practical, sophisticated counsel to
              businesses, professionals, and individuals navigating important legal
              decisions.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Request a Consultation
              </Link>
              <Link href="/practice-areas" className="btn btn-secondary">
                Explore Practice Areas
              </Link>
            </div>

            <div className="trust-row">
              <span>Responsive Counsel</span>
              <span>Clear Communication</span>
              <span>Practical Strategy</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <span className="card-kicker">A measured approach to legal risk</span>
              <h2>Protecting your position today and tomorrow.</h2>
              <p>
                We combine rigorous legal analysis with a practical understanding of
                your business, priorities, and desired outcome.
              </p>
              <Link href="/about" className="text-link">
                Learn about our approach →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(([value, label]) => (
            <div className="stat-box" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">How we can help</span>
              <h2>Focused legal services for complex matters.</h2>
            </div>
            <p>
              Our practice is designed to provide dependable guidance throughout the
              lifecycle of a legal matter.
            </p>
          </div>

          <div className="card-grid three-columns">
            {practices.map((practice) => (
              <article className="service-card" key={practice.title}>
                <div className="icon-wrap">{practice.icon}</div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
                <Link href="/practice-areas" className="text-link">
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container split-section">
          <div>
            <span className="eyebrow">The Hawthorne & Vale difference</span>
            <h2>Legal counsel that moves at the pace of your priorities.</h2>
          </div>

          <div className="feature-list">
            <div>
              <strong>Clear legal strategy</strong>
              <p>
                We explain the issue, outline your options, and identify the next
                practical step.
              </p>
            </div>

            <div>
              <strong>Direct communication</strong>
              <p>
                You receive timely updates and straightforward advice without
                unnecessary legal jargon.
              </p>
            </div>

            <div>
              <strong>Business-minded judgment</strong>
              <p>
                We balance legal protection with the commercial and personal realities
                behind each decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-box">
          <div>
            <span className="eyebrow eyebrow-light">Take the next step</span>
            <h2>Let’s discuss how we can help.</h2>
            <p>Schedule an initial conversation with our legal team.</p>
          </div>

          <Link href="/contact" className="btn btn-primary">
            Contact the Firm
          </Link>
        </div>
      </section>
    </main>
  );
}
