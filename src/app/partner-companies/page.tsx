
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  Factory,
  BookOpen,
  BriefcaseBusiness,
} from "lucide-react";

const partners = [
  {
    name: "3F Industries Limited",
    category: "Chocolate Company",
    description:
      "An organisation in the chocolate industry and a valued part of our professional partner network.",
    logo: "/images/partner-3f-industries.png",
    icon: Factory,
  },
  {
    name: "Sunrise Stationery Depot",
    category: "Stationery Company",
    description:
      "A stationery business and a valued partner in our growing professional network.",
    logo: "/images/partner-sunrise.png",
    icon: BookOpen,
  },
  {
    name: "Guptas Enterprises",
    category: "Business Partner",
    description:
      "A business relationship built around coordination, professional support, and shared opportunities.",
    logo: null,
    icon: Building2,
  },
  {
    name: "Sri Narayana Books Company",
    category: "Books Company",
    description:
      "A valued business partner in our growing network of professional relationships.",
    logo: null,
    icon: BookOpen,
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
            {partners.map((partner, index) => {
              const PartnerIcon = partner.icon;

              return (
                <article className="partner-card" key={partner.name}>
                  <div className="partner-card-top">
                    <span className="partner-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="partner-building-icon">
                      <PartnerIcon size={24} strokeWidth={1.8} />
                    </span>
                  </div>

                  {/* COMPANY LOGO */}
                  <div className="partner-logo-area">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={200}
                        height={100}
                        className="partner-company-logo"
                        style={{
                          width: "auto",
                          height: "auto",
                          maxWidth: "155px",
                          maxHeight: "82px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <div className="partner-default-logo">
                        <PartnerIcon size={42} strokeWidth={1.5} />
                      </div>
                    )}
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
              );
            })}
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
                <BriefcaseBusiness size={28} />
              </div>

              <h3>Collaboration</h3>

              <p>
                Working together to understand requirements and create
                meaningful opportunities.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon">
                <Building2 size={28} />
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
            <UsersIcon />
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

function UsersIcon() {
  return <Handshake size={34} strokeWidth={1.8} />;
}
