
import Link from "next/link";
import {
  ArrowRight,
  Handshake,
  Building2,
  Users,
  CheckCircle2,
  Target,
  Network,
} from "lucide-react";

const partners = [
  {
    name: "3F Industries Limited",
    category: "Industrial Partner",
    description:
      "A valued organisation in our partner network, contributing to professional collaboration and workforce opportunities.",
  },
  {
    name: "Guptha's Enterprises",
    category: "Business Partner",
    description:
      "A business relationship built around coordination, professional support, and shared opportunities.",
  },
  {
    name: "Sri Narayana Books Company",
    category: "Business Partner",
    description:
      "A valued partner in our growing network of business relationships.",
  },
  {
    name: "Sunrise Company",
    category: "Corporate Partner",
    description:
      "A partner in our professional network, supporting collaborative business relationships.",
  },
];

export default function PartnerCompaniesPage() {
  return (
    <main className="partners-page">
      {/* HERO SECTION */}
      <section className="partners-hero">
        <div className="partners-hero-overlay" />

        <div className="partners-hero-content">
          <span className="partners-eyebrow">
            BUILDING STRONGER CONNECTIONS
          </span>

          <h1>
            OUR PARTNER
            <span> COMPANIES</span>
          </h1>

          <p>
            Strong business relationships create meaningful opportunities.
            Together, we build connections that support growth and progress.
          </p>

          <div className="partners-hero-actions">
            <Link
              href="#our-partners"
              className="partners-primary-button"
            >
              Explore Our Partners
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact-us"
              className="partners-outline-button"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        <div className="partners-hero-bottom">
          <span>TRUST</span>
          <span className="hero-dot" />
          <span>COLLABORATION</span>
          <span className="hero-dot" />
          <span>GROWTH</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="partners-intro section-container">
        <div className="partners-intro-icon">
          <Handshake size={34} strokeWidth={1.7} />
        </div>

        <div className="partners-intro-content">
          <span className="section-kicker">OUR BUSINESS NETWORK</span>

          <h2>
            Strong Partnerships.
            <span> Shared Success.</span>
          </h2>

          <p>
            At SLNS Man Power Services Private Limited, we believe that
            successful businesses are built through strong professional
            relationships. Our partner network helps us understand
            organisational requirements and connect people with suitable
            opportunities.
          </p>

          <p>
            We value every partnership and believe in building long-term
            relationships through trust, coordination, and mutual growth.
          </p>
        </div>
      </section>

      {/* PARTNER COMPANIES */}
      <section className="partners-list-section" id="our-partners">
        <div className="section-container">
          <div className="partners-section-heading">
            <span className="section-kicker">OUR NETWORK</span>

            <h2>
              Our Partner <span>Companies</span>
            </h2>

            <p>
              Organisations that are part of our professional network.
            </p>
          </div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <article className="partner-card" key={partner.name}>
                <div className="partner-card-top">
                  <span className="partner-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="partner-building-icon">
                    <Building2 size={27} strokeWidth={1.8} />
                  </div>
                </div>

                <span className="partner-category">
                  {partner.category}
                </span>

                <h3>{partner.name}</h3>

                <p>{partner.description}</p>

                <div className="partner-card-footer">
                  <span>SLNS PARTNER NETWORK</span>
                  <CheckCircle2 size={18} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP VALUES */}
      <section className="partnership-values-section">
        <div className="section-container">
          <div className="partners-section-heading">
            <span className="section-kicker">WHAT CONNECTS US</span>

            <h2>
              The Foundation of <span>Our Partnerships</span>
            </h2>

            <p>
              Strong professional relationships are built on shared
              principles and consistent collaboration.
            </p>
          </div>

          <div className="partnership-values-grid">
            <article className="value-card">
              <div className="value-icon">
                <Handshake size={28} />
              </div>

              <h3>Trust</h3>

              <p>
                Building dependable relationships through transparency
                and mutual respect.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <Network size={28} />
              </div>

              <h3>Collaboration</h3>

              <p>
                Working together to understand requirements and create
                meaningful opportunities.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <Target size={28} />
              </div>

              <h3>Shared Growth</h3>

              <p>
                Supporting progress through professional connections
                and long-term relationships.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COLLABORATION CTA */}
      <section className="collaboration-section">
        <div className="section-container collaboration-content">
          <div className="collaboration-icon">
            <Users size={34} />
          </div>

          <span className="section-kicker">GROW WITH US</span>

          <h2>
            Together, We Create
            <span> More Opportunities</span>
          </h2>

          <p>
            We welcome organisations that believe in meaningful
            collaboration, workforce development, and creating
            opportunities. Connect with SLNS to explore a professional
            partnership.
          </p>

          <Link
            href="/contact-us"
            className="collaboration-button"
          >
            Connect With SLNS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
