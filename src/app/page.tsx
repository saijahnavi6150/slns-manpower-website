
"use client";

import Link from "next/link";

import {
  ArrowRight,
  Check,
  UsersRound,
  BriefcaseBusiness,
  Handshake,
  GraduationCap,
  ChartNoAxesCombined,
  Globe2,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Phone,
} from "lucide-react";

// =====================================================
// SERVICES
// =====================================================

const services = [
  { title: "Recruitment Solutions", icon: UsersRound },
  { title: "Staffing Services", icon: BriefcaseBusiness },
  { title: "HR Consulting", icon: Handshake },
  { title: "Training & Development", icon: GraduationCap },
  { title: "Career Guidance", icon: ChartNoAxesCombined },
  { title: "Global Talent Solutions", icon: Globe2 },
];

// =====================================================
// WHY CHOOSE SLNS
// =====================================================

const benefits = [
  {
    title: "Trusted Partner",
    description: "A reliable partner in manpower solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Skilled Talent",
    description: "Access to a highly qualified workforce.",
    icon: UsersRound,
  },
  {
    title: "Innovative Approach",
    description: "Modern HR solutions for future-ready businesses.",
    icon: Lightbulb,
  },
  {
    title: "Long-Term Growth",
    description: "Building lasting relationships for mutual success.",
    icon: TrendingUp,
  },
];

// =====================================================
// QUICK ACCESS LINKS
// =====================================================

const quickLinks = [
  {
    title: "About Us",
    href: "/about-us",
    image: "/images/quick-about.png",
    icon: UsersRound,
  },
  {
    title: "Our Services",
    href: "/our-services",
    image: "/images/quick-services.webp",
    icon: BriefcaseBusiness,
  },
  {
    title: "Partner Companies",
    href: "/partner-companies",
    image: "/images/quick-partners.png",
    icon: Handshake,
  },
  {
    title: "Internships",
    href: "/internships",
    image: "/images/quick-internships.png",
    icon: GraduationCap,
  },
  {
    title: "Job Placements",
    href: "/job-placements",
    image: "/images/quick-jobs.png",
    icon: BriefcaseBusiness,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    image: "/images/quick-contact.jpeg",
    icon: Phone,
  },
];

// =====================================================
// HOMEPAGE
// =====================================================

export default function Home() {
  return (
    <main className="home-page">

      {/* ================= HERO SECTION ================= */}

      <section className="hero-section">
        <div className="hero-background" />

        <div className="hero-content">
          <h1 className="hero-heading">
            Your Trusted Partner in
            <br />
            <span>Manpower Solutions</span>
          </h1>

          <p className="hero-description">
            Connecting Talent with Opportunities.
          </p>

          <Link href="/our-services" className="primary-button">
            Explore Our Services
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* ================= SERVICES STRIP ================= */}

      <section className="services-strip-section">
        <div className="services-strip">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div className="service-item" key={service.title}>
                <Icon size={38} strokeWidth={2.5} />
                <span>{service.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= ABOUT INTRODUCTION ================= */}

      <section className="about-intro section-container">
        <div className="about-image">
          <img
            src="/images/company-building.png"
            alt="SLNS Man Power Services company building"
          />
        </div>

        <div className="about-content">
          <h2>SLNS Man Power Services Pvt. Ltd.</h2>

          <p>
            SLNS Man Power Services Private Limited is a dynamic and growing
            company committed to providing professional manpower solutions.
            We connect talented professionals with leading organizations,
            helping businesses build capable teams and individuals discover
            meaningful career opportunities.
          </p>

          <ul className="about-points">
            <li>
              <span><Check size={14} /></span>
              Trusted manpower solutions
            </li>

            <li>
              <span><Check size={14} /></span>
              Focused on quality and professionalism
            </li>

            <li>
              <span><Check size={14} /></span>
              Dedicated to building better careers
            </li>
          </ul>
        </div>
      </section>

      {/* ================= WHY CHOOSE SLNS ================= */}

      <section className="why-section section-container">
        <div className="section-heading">
          <span />
          <h2>
            Why Choose <strong>SLNS?</strong>
          </h2>
          <span />
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">
                  <Icon size={43} strokeWidth={2} />
                </div>

                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ================= QUICK ACCESS LINKS ================= */}

      <section className="quick-section section-container">
        <div className="section-heading quick-heading">
          <span />
          <h2>Quick Access Links</h2>
          <span />
        </div>

        <div className="quick-grid">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                className="quick-card"
                key={item.title}
                style={{
                  backgroundImage: `url("${item.image}")`,
                }}
              >
                <div className="quick-icon">
                  <Icon size={27} strokeWidth={2.2} />
                </div>

                <h3>{item.title}</h3>

                <div className="quick-arrow">
                  <ArrowRight size={20} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      

    </main>
  );
}
