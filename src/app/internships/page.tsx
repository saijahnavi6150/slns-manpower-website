
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  FileText,
  CheckCircle2,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";

const eligibility = [
  "Diploma",
  "B. Tech",
  "Degree",
  "ITI",
  "PG",
  "For All Branches",
];

const documents = [
  "Updated Aadhar Xerox",
  "Educational Certificates",
  "Bank Account First Page Xerox",
  "Resume",
  "Passport Size Photos – 2 Copies",
  "PAN Card Xerox",
];

const branches = [
  {
    number: "01",
    icon: "</>",
    name: "Computer Science & Engineering (CSE)",
  },
  {
    number: "02",
    icon: "AI",
    name: "Artificial Intelligence & Machine Learning",
  },
  {
    number: "03",
    icon: "DS",
    name: "Artificial Intelligence & Data Science",
  },
  {
    number: "04",
    icon: "◉",
    name: "ECE",
  },
  {
    number: "05",
    icon: "ϟ",
    name: "EEE",
  },
  {
    number: "06",
    icon: "▥",
    name: "CIVIL",
  },
  {
    number: "07",
    icon: "⚙",
    name: "MECHANICAL",
  },
  {
    number: "08",
    icon: "✦",
    name: "ALL OTHER TECHNICAL BRANCHES",
  },
];

const gallery = [
  {
    image: "/images/internship-practical.png",
    title: "Practical Training",
    description:
      "Gain practical exposure through hands-on learning and guided activities.",
  },
  {
    image: "/images/internship-industrial.png",
    title: "Industrial Exposure",
    description:
      "Understand industrial environments, operations and workplace processes.",
  },
  {
    image: "/images/internship-workplace.png",
    title: "Professional Workplace",
    description:
      "Get familiar with professional workplace practices and teamwork.",
  },
  {
    image: "/images/internship-learning.png",
    title: "Skill Development",
    description:
      "Improve technical knowledge and develop professional skills.",
  },
  {
    image: "/images/internship-career.png",
    title: "Career Development",
    description:
      "Build a foundation for future learning and career opportunities.",
  },
];

export default function InternshipsPage() {
  return (
    <main className="internships-page">
      {/* HERO SECTION */}
      <section className="internship-hero">
        <div className="internship-hero-image">
          <Image
            src="/images/internship-hero-image.png"
            alt="Students participating in internship training"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="internship-hero-overlay" />

        <div className="internship-container internship-hero-content">
          <span className="internship-eyebrow">
            LEARN • TRAIN • GROW
          </span>

          <h1>
            Build Your Skills.
            <br />
            Shape Your Future.
          </h1>

          <p>
            Explore internship, apprenticeship and industrial training
            opportunities with SLNS Manpower Services Private Limited.
          </p>

          <Link href="/contact-us" className="internship-primary-button">
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="internship-intro">
        <div className="internship-container internship-intro-content">
          <div className="internship-intro-icon">
            <GraduationCap size={42} strokeWidth={1.7} />
          </div>

          <span className="section-kicker">
            OPPORTUNITIES FOR STUDENTS
          </span>

          <h2>
            Start Your Professional Journey
            <span> With SLNS</span>
          </h2>

          <p>
            SLNS Manpower Services Private Limited supports students in
            developing practical knowledge and workplace skills through
            internship, apprenticeship and industrial training opportunities.
            Our aim is to help students understand industry requirements and
            prepare for future career opportunities.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY AND DOCUMENTS */}
      <section className="internship-information">
        <div className="internship-container">
          <div className="internship-section-heading">
            <span className="section-kicker">
              INTERNSHIP INFORMATION
            </span>

            <h2>Everything You Need to Get Started</h2>

            <p>
              Check the eligibility requirements and documents before
              enquiring about an internship opportunity.
            </p>
          </div>

          <div className="internship-info-grid">
            {/* ELIGIBILITY */}
            <article className="internship-info-card">
              <div className="internship-card-heading">
                <div className="internship-heading-icon eligibility-icon">
                  <GraduationCap size={27} />
                </div>

                <div>
                  <span className="card-kicker">WHO CAN APPLY</span>
                  <h3>Eligibility Criteria</h3>
                </div>
              </div>

              <p className="internship-card-description">
                Students from the following educational backgrounds can
                enquire about available training opportunities.
              </p>

              <div className="internship-checklist">
                {eligibility.map((item, index) => (
                  <div className="eligibility-item" key={item}>
                    <span className="item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="item-label">{item}</span>
                    <CheckCircle2
                      className="eligibility-check"
                      size={19}
                    />
                  </div>
                ))}
              </div>
            </article>

            {/* REQUIRED DOCUMENTS */}
            <article className="internship-info-card documents-card">
              <div className="internship-card-heading">
                <div className="internship-heading-icon documents-icon">
                  <FileText size={26} />
                </div>

                <div>
                  <span className="card-kicker">KEEP THEM READY</span>
                  <h3>Required Documents</h3>
                </div>
              </div>

              <p className="internship-card-description">
                Keep the following documents ready when applying for an
                internship or training opportunity.
              </p>

              <div className="internship-checklist">
                {documents.map((item, index) => (
                  <div className="document-item" key={item}>
                    <span className="item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="item-label">{item}</span>
                    <CheckCircle2
                      className="document-check"
                      size={19}
                    />
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* LEARNING EXPERIENCE GALLERY */}
      <section className="internship-gallery-section">
        <div className="internship-container">
          <div className="internship-section-heading">
            <span className="section-kicker">
              LEARNING EXPERIENCE
            </span>

            <h2>Learn Beyond the Classroom</h2>

            <p>
              Develop practical understanding, improve your skills and
              prepare yourself for professional opportunities.
            </p>
          </div>

          <div className="internship-gallery-grid">
            {gallery.map((item) => (
              <article
                className="internship-gallery-card"
                key={item.title}
              >
                <div className="internship-gallery-photo">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    className="internship-gallery-image"
                  />
                </div>

                <div className="internship-gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL BRANCHES */}
      <section className="internship-branches-section">
        <div className="internship-container">
          <div className="internship-branches-heading">
            <div className="internship-branches-icon">
              <Code2 size={30} />
            </div>

            <span className="section-kicker">
              OUR TECHNICAL BRANCHES
            </span>

            <h2>
              Training Available for
              <span> All Technical Branches</span>
            </h2>

            <p>
              We welcome students from different technical disciplines.
              Contact our team to enquire about internship, apprenticeship
              and industrial training opportunities.
            </p>
          </div>

          <div className="internship-branch-list">
            {branches.map((branch) => (
              <article
                className="internship-branch-item"
                key={branch.number}
              >
                <span className="branch-number">
                  {branch.number}
                </span>

                <div className="branch-icon">
                  {branch.icon}
                </div>

                <h3>{branch.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="internship-cta-section">
        <div className="internship-container internship-cta-content">
          <div className="internship-cta-icon">
            <BriefcaseBusiness size={32} />
          </div>

          <span className="section-kicker">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>Ready to Take the Next Step?</h2>

          <p>
            Contact SLNS Manpower Services Private Limited to enquire about
            internship, apprenticeship and industrial training opportunities.
          </p>

          <div className="internship-cta-actions">
            <Link
              href="/contact-us"
              className="internship-cta-button"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <a
              href="tel:9989515980"
              className="internship-cta-button secondary"
            >
              Call: 9989515980
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
