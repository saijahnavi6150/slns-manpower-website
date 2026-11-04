
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  UsersRound,
  Target,
  CheckCircle2,
  Building2,
  Factory,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Bus,
  Utensils,
  Wallet,
  Gift,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

// =====================================================
// COMPANY DETAILS
// =====================================================

const company = {
  name: "SLNS Manpower Services Private Limited",
  phone: "9989515980",
  email: "slnsservicespvtltd@gmail.com",
  address:
    "P.No. 9, RTC Colony, Beside 7 Temple, Medchal, Malkajgiri District 501401, Telangana.",
};

// =====================================================
// PLACEMENT HIGHLIGHTS
// =====================================================

const highlights = [
  {
    title: "Career Opportunities",
    description:
      "Explore job opportunities across different industries and work environments.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Talent Connection",
    description:
      "We connect job seekers with employers looking for suitable talent.",
    icon: UsersRound,
  },
  {
    title: "Career Progress",
    description:
      "Move forward with opportunities that match your skills and experience.",
    icon: Target,
  },
];

// =====================================================
// EMPLOYEE BENEFITS
// =====================================================

const benefits = [
  {
    title: "Free Transport",
    description:
      "Transport facilities may be provided for employees, depending on the employer and workplace location.",
    icon: Bus,
  },
  {
    title: "Subsidised Food",
    description:
      "Affordable food or canteen facilities may be available at the workplace.",
    icon: Utensils,
  },
  {
    title: "Special Allowance",
    description:
      "Eligible employees may receive additional allowances as per company policy.",
    icon: Wallet,
  },
  {
    title: "Bonus",
    description:
      "Bonus benefits may be provided according to company policies and eligibility.",
    icon: Gift,
  },
  {
    title: "PF Benefits",
    description:
      "Provident Fund benefits are applicable as per statutory rules and employee eligibility.",
    icon: ShieldCheck,
  },
  {
    title: "ESI Benefits",
    description:
      "Employee State Insurance benefits are applicable as per statutory eligibility requirements.",
    icon: HeartPulse,
  },
];

// =====================================================
// INDUSTRIES
// =====================================================

const industries = [
  {
    number: "01",
    title: "Chocolate Manufacturing",
    description:
      "Explore opportunities in chocolate manufacturing, production and related operations.",
    icon: Factory,
    images: [
      "/images/placement-chocolate-1.png",
      "/images/placement-chocolate-2.png",
    ],
  },
  {
    number: "02",
    title: "Manufacturing & Production",
    description:
      "Opportunities in manufacturing units, production activities and industrial operations.",
    icon: Building2,
    images: [
      "/images/placement-gupthas-1.png",
      "/images/placement-gupthas-2.png",
    ],
  },
  {
    number: "03",
    title: "Books & Publishing",
    description:
      "Explore roles related to publishing, printing, packaging and other operations.",
    icon: BookOpen,
    images: [
      "/images/placement-books-1.png",
      "/images/placement-books-2.png",
    ],
  },
  {
    number: "04",
    title: "Industrial & Enterprise Operations",
    description:
      "Discover opportunities across industrial workplaces and enterprise operations.",
    icon: Factory,
    images: [
      "/images/placement-sunrise-1.png",
      "/images/placement-sunrise-2.png",
    ],
  },
];

// =====================================================
// PLACEMENT PROCESS
// =====================================================

const placementSteps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Share your resume, qualifications, skills and work experience with us.",
  },
  {
    number: "02",
    title: "Explore Opportunities",
    description:
      "We review your profile and explore relevant available opportunities.",
  },
  {
    number: "03",
    title: "Selection Process",
    description:
      "Attend the employer's interview and selection process as applicable.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "Proceed with the employer's next steps if you are selected.",
  },
];

// =====================================================
// JOB PLACEMENTS PAGE
// =====================================================

export default function JobPlacementsPage() {
  return (
    <main className="job-placements-page">

      {/* HERO BANNER */}
      <section className="jp-banner">
        <img
          src="/images/placement-hero.png"
          alt="Job placement and career opportunities"
          className="jp-banner-image"
        />
      </section>

      {/* INTRODUCTION */}
      <section className="jp-intro jp-container">
        <div className="jp-section-heading">
          <span className="jp-eyebrow">BUILDING CAREERS</span>

          <h1>
            Job <strong>Placements</strong>
          </h1>

          <p className="jp-lead">
            Connecting Talent with Opportunities for a Better Future
          </p>
        </div>

        <div className="jp-highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="jp-highlight-card" key={item.title}>
                <div className="jp-icon-tile">
                  <Icon size={31} strokeWidth={2} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* EMPLOYEE BENEFITS */}
      <section className="jp-benefits-section">
        <div className="jp-container">
          <div className="jp-section-heading">
            <span className="jp-eyebrow">EMPLOYEE BENEFITS</span>

            <h2>
              Benefits That <strong>Support You</strong>
            </h2>

            <p className="jp-lead">
              Explore additional facilities and benefits that may be available
              with employment opportunities.
            </p>
          </div>

          <p className="jp-benefits-note">
            Benefits depend on the employer, job role, location, eligibility
            and applicable company policies. Available benefits may include:
          </p>

          <div className="jp-benefits-grid">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article className="jp-benefit-card" key={item.title}>
                  <div className="jp-benefit-icon">
                    <Icon size={35} strokeWidth={2} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="jp-industries-section">
        <div className="jp-container">
          <div className="jp-section-heading">
            <span className="jp-eyebrow">EXPLORE CAREER OPTIONS</span>

            <h2>
              Industries We <strong>Serve</strong>
            </h2>

            <p className="jp-lead">
              Explore opportunities across different industries and workplaces.
            </p>
          </div>

          <div className="jp-industry-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="jp-industry-card"
                  key={industry.number}
                >
                  <div className="jp-industry-heading">
                    <span className="jp-industry-number">
                      {industry.number}
                    </span>

                    <div className="jp-industry-icon">
                      <Icon size={27} strokeWidth={2} />
                    </div>
                  </div>

                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>

                  <div className="jp-gallery">
                    {industry.images.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${industry.title} workplace ${index + 1}`}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLACEMENT PROCESS */}
      <section className="jp-process-section">
        <div className="jp-container">
          <div className="jp-section-heading">
            <span className="jp-eyebrow">HOW IT WORKS</span>

            <h2>
              Our Placement <strong>Process</strong>
            </h2>

            <p className="jp-lead">
              A simple process to help you explore employment opportunities.
            </p>
          </div>

          <div className="jp-process-grid">
            {placementSteps.map((step) => (
              <article className="jp-process-card" key={step.number}>
                <div className="jp-step-top">
                  <span>{step.number}</span>
                  <CheckCircle2 size={25} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className="jp-process-note">
            Recruitment procedures, interview schedules and final selection
            decisions are determined by the respective employer.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="jp-contact-cta">
        <div className="jp-contact-inner">
          <div className="jp-contact-copy">
            <span>TAKE THE NEXT STEP</span>

            <h2>Looking for a Job Opportunity?</h2>

            <p>
              Share your details with SLNS Manpower Services and explore
              suitable career opportunities.
            </p>
          </div>

          <Link href="/contact-us" className="jp-contact-button">
            Contact Us
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {/* FOOTER BANNER */}
      <section className="jp-footer-banner">
        <img
          src="/images/placement-footer-image.png"
          alt="Building a better career together"
          loading="lazy"
        />
      </section>

    </main>
  );
}
