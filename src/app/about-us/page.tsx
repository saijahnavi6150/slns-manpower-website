
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  UsersRound,
  Handshake,
  Target,
  Eye,
  CalendarDays,
  Building2,
  FileText,
  UserRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// COMPANY DETAILS
const companyDetails = [
  {
    icon: CalendarDays,
    label: "Date of Incorporation",
    value: "September 12, 2023",
  },
  {
    icon: FileText,
    label: "Corporate Identification Number",
    value: "U78300TS2023PTC176942",
  },
  {
    icon: Building2,
    label: "Registration Authority",
    value: "Registrar of Companies, Hyderabad (ROC Hyderabad)",
  },
  {
    icon: UserRound,
    label: "Directors",
    value: "Mahesh Vadla, Kathi Vijay Mallesh",
  },
];

export default function AboutUsPage() {
  return (
    <main className="about-page">

      {/* OUR PURPOSE HERO */}
      <section className="about-purpose-hero">
        <Image
          src="/images/about-purpose-banner.png"
          alt="People working together to build opportunities"
          fill
          priority
          sizes="100vw"
          className="about-purpose-image"
        />

        <div className="about-purpose-overlay" />

        <div className="about-purpose-content">
          <span className="about-eyebrow">ABOUT SLNS</span>

          <h1>
            OUR PURPOSE
            <span>Empowering People Through</span>
            <span className="purpose-highlight">
              Skills &amp; Opportunities
            </span>
          </h1>

          <div className="about-title-line" />

          <p>
            We are committed to creating meaningful opportunities, developing
            skilled talent and building strong connections between individuals
            and industry.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are-section">
        <div className="about-section-container who-we-are-grid">

          <div className="who-we-are-image-wrap">
            <Image
              src="/images/about-who-we-are.png"
              alt="Professional team working together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="who-we-are-image"
            />

            <div className="who-image-caption">
              <UsersRound size={21} />
              <span>Connecting People. Creating Opportunities.</span>
            </div>
          </div>

          <div className="who-we-are-content">
            <span className="about-section-label">GET TO KNOW US</span>

            <h2>
              WHO <span>WE ARE</span>
            </h2>

            <div className="about-heading-line" />

            <p className="who-intro">
              SLNS Man Power Services Private Limited is focused on connecting
              people with meaningful career opportunities and helping
              businesses find the right talent.
            </p>

            <p>
              We provide manpower to our partner companies and create job
              opportunities for both freshers and experienced candidates. We
              connect talent with the right opportunities while supporting
              students as they take their first steps towards a successful
              career.
            </p>

            <p>
              We also provide internships, apprenticeships and industrial
              training to students, helping them develop practical skills and
              gain valuable industry exposure.
            </p>

            <div className="who-highlights">
              <div>
                <CheckCircle2 size={19} />
                <span>Manpower solutions for partner companies</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>
                  Job opportunities for freshers and experienced candidates
                </span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>
                  Internships, apprenticeships and industrial training
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="vision-mission-section">
        <div className="about-section-container">

          <div className="about-centered-heading">
            <span className="about-section-label">OUR DIRECTION</span>

            <h2>
              VISION <span>&amp; MISSION</span>
            </h2>

            <p>
              Building a stronger connection between talent, skills and
              opportunities.
            </p>
          </div>

          <div className="vision-mission-grid">

            <article className="vision-mission-card">
              <div className="vision-mission-icon">
                <Eye size={29} />
              </div>

              <span className="vision-card-label">OUR VISION</span>

              <h3>Creating a Future of Opportunities</h3>

              <p>
                To become a trusted manpower and career development partner by
                connecting skilled individuals with the right organizations
                and creating opportunities for people to grow and succeed.
              </p>

              <div className="vision-card-bottom">
                <Target size={19} />
                <span>Inspiring growth through opportunity</span>
              </div>
            </article>

            <article className="vision-mission-card mission-card">
              <div className="vision-mission-icon">
                <Target size={29} />
              </div>

              <span className="vision-card-label">OUR MISSION</span>

              <h3>Turning Talent into Opportunity</h3>

              <p>
                To provide reliable manpower solutions to organizations,
                support job seekers in finding suitable employment, and equip
                students with practical skills through internships,
                apprenticeships and industrial training.
              </p>

              <div className="vision-card-bottom">
                <Handshake size={19} />
                <span>Connecting talent with industry</span>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="company-details-section">
        <div className="about-section-container">

          <div className="company-details-heading">
            <span className="about-section-label">OFFICIAL INFORMATION</span>

            <h2>
              COMPANY <span>DETAILS</span>
            </h2>

            <p>
              Corporate information of SLNS Man Power Services Private Limited.
            </p>
          </div>

          <div className="company-details-card">

            <div className="company-details-top">
              <div className="company-details-symbol">
                <Building2 size={30} />
              </div>

              <div>
                <h3>SLNS Man Power Services</h3>
                <span>PRIVATE LIMITED</span>
              </div>
            </div>

            <div className="company-details-list">
              {companyDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div className="company-detail-row" key={detail.label}>
                    <div className="company-detail-icon">
                      <Icon size={21} />
                    </div>

                    <div className="company-detail-text">
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="company-details-bottom">
              <span>SLNS MAN POWER SERVICES PRIVATE LIMITED</span>
              <span>Corporate Information</span>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT BANNER */}
      <section className="about-contact-banner">
        <div className="about-section-container about-contact-content">

          <div>
            <span>LET&apos;S BUILD A BETTER FUTURE TOGETHER</span>

            <h2>Looking for the Right Talent or Opportunity?</h2>

            <p>
              Connect with SLNS Man Power Services and take the next step
              towards growth.
            </p>
          </div>

          <Link href="/contact-us" className="about-contact-button">
            Contact Us <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
