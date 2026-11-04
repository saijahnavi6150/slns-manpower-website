
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  ArrowUpRight,
  Clock3,
  Building2,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "Call Our Team",
    description: "Speak with us about your requirements.",
    value: "9989515980",
    action: "Call Now",
    href: "tel:9989515980",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your business enquiries.",
    value: "slnsservicespvtltd@gmail.com",
    action: "Send an Email",
    href: "mailto:slnsservicespvtltd@gmail.com",
  },
  {
    icon: Camera,
    title: "Connect on Instagram",
    description: "Follow our updates and activities.",
    value: "@slns2_023",
    action: "Visit Instagram",
    href: "https://www.instagram.com/slns2_023",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="contact-container contact-hero-content">
          <span className="contact-eyebrow">
            <span />
            CONNECT WITH SLNS
          </span>

          <h1>
            Let's Start a
            <br />
            <span>Meaningful Conversation.</span>
          </h1>

          <p>
            Looking for reliable manpower solutions, career opportunities
            or a business partnership? We are here to understand your needs
            and help you move forward.
          </p>

          <div className="contact-hero-actions">
            <Link href="#contact-details" className="contact-primary-btn">
              Contact Our Team
              <ArrowUpRight size={18} />
            </Link>

            <Link href="tel:9989515980" className="contact-hero-phone">
              <Phone size={17} />
              9989515980
            </Link>
          </div>
        </div>

        <div className="contact-hero-strip">
          <div className="contact-container">
            <span>PEOPLE</span>
            <i />
            <span>OPPORTUNITIES</span>
            <i />
            <span>PROGRESS</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="contact-intro">
        <div className="contact-container contact-intro-grid">
          <div className="contact-intro-heading">
            <span className="contact-section-label">GET IN TOUCH</span>
            <h2>
              Strong relationships
              <br />
              <span>begin with a connection.</span>
            </h2>
          </div>

          <p>
            At SLNS Man Power Services Private Limited, we value every
            professional relationship. Whether you represent a company
            seeking workforce support or an individual exploring career
            opportunities, we would be happy to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="contact-details-section" id="contact-details">
        <div className="contact-container">
          <div className="contact-section-heading">
            <span className="contact-section-label">
              WE'RE JUST A MESSAGE AWAY
            </span>
            <h2>How Can We Help You?</h2>
            <p>
              Reach us through any of the following channels.
              Our team will be glad to connect with you.
            </p>
          </div>

          <div className="contact-cards">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="contact-card" key={item.title}>
                  <div className="contact-card-top">
                    <div className="contact-card-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="contact-card-number">
                      0{index + 1}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <p className="contact-card-description">
                    {item.description}
                  </p>

                  <div className="contact-card-value">
                    {item.value}
                  </div>

                  <Link
                    href={item.href}
                    className="contact-card-link"
                    target={
                      item.title === "Connect on Instagram"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.title === "Connect on Instagram"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.action}
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICE ADDRESS */}
      <section className="contact-location-section">
        <div className="contact-container contact-location-inner">
          <div className="contact-location-icon">
            <MapPin size={30} />
          </div>

          <div className="contact-location-content">
            <span className="contact-section-label">OUR LOCATION</span>
            <h2>Visit Our Office</h2>

            <p className="contact-location-description">
              We welcome business enquiries, recruitment discussions
              and partnership opportunities at our office in Medchal.
            </p>

            <div className="contact-address">
              <Building2 size={21} />
              <p>
                P.No. 9, RTC Colony, Beside 7 Temple,
                Medchal, Malkajgiri District,
                501401, Telangana, India.
              </p>
            </div>

            <div className="contact-office-note">
              <Clock3 size={18} />
              <span>
                Please contact us in advance before visiting our office.
              </span>
            </div>

            <Link
              href="https://www.google.com/maps/search/?api=1&query=P.No.9%2C%20RTC%20Colony%2C%20Beside%207%20Temple%2C%20Medchal%2C%20Telangana%20501401"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn"
            >
              Get Directions
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* THANK YOU IMAGE ONLY - NO TEXT OR BUTTONS */}
      <section
        className="contact-cta"
        aria-label="Thank you"
      />
    </main>
  );
}
