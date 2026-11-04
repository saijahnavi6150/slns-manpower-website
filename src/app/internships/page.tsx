
import Image from "next/image";
import Link from "next/link";

const eligibility = [
  "Diploma",
  "B.Tech",
  "Degree",
  "ITI",
  "PG",
  "All Technical Branches",
];

const documents = [
  "Updated Aadhar Xerox",
  "Educational Certificates",
  "Bank Account First Page Xerox",
  "Resume",
  "Passport Size Photos – 2 Copies",
  "PAN Card Xerox",
];

const gallery = [
  {
    image: "/images/internship-practical.png",
    title: "Practical Training",
    description: "Gain practical exposure through hands-on learning.",
  },
  {
    image: "/images/internship-industrial.png",
    title: "Industrial Exposure",
    description: "Understand real industrial environments and processes.",
  },
  {
    image: "/images/internship-workplace.png",
    title: "Professional Workplace",
    description: "Experience professional workplace practices.",
  },
  {
    image: "/images/internship-learning.png",
    title: "Skill Development",
    description: "Develop technical and professional skills.",
  },
  {
    image: "/images/internship-career.png",
    title: "Career Development",
    description: "Build a foundation for your future career.",
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
          </Link>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="internship-intro">
        <div className="internship-container">
          <span className="section-kicker">
            OPPORTUNITIES FOR STUDENTS
          </span>

          <h2>Start Your Professional Journey With SLNS</h2>

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
            {/* ELIGIBILITY CARD */}
            <div className="internship-info-card">
              <div className="internship-card-heading">
                <div className="internship-heading-icon eligibility-icon">
                  <span>✓</span>
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
                    <span className="eligibility-check">✓</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DOCUMENTS CARD */}
            <div className="internship-info-card documents-card">
              <div className="internship-card-heading">
                <div className="internship-heading-icon documents-icon">
                  <span>▤</span>
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
                    <span className="document-check">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNSHIP GALLERY */}
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

      {/* BRANCHES */}
      <section className="internship-branches-section">
        <div className="internship-container branches-inner">
          <div>
            <span className="section-kicker">
              STUDENT OPPORTUNITIES
            </span>

            <h2>Opportunities Across Technical Branches</h2>

            <p>
              Students from different technical and educational backgrounds
              can contact our team to enquire about suitable opportunities.
            </p>
          </div>

          <div className="internship-branch-list">
            <div className="internship-branch-item">Diploma</div>
            <div className="internship-branch-item">Engineering</div>
            <div className="internship-branch-item">ITI</div>
            <div className="internship-branch-item">Degree</div>
            <div className="internship-branch-item">Postgraduate</div>
            <div className="internship-branch-item">
              Other Technical Courses
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="internship-cta-section">
        <div className="internship-container internship-cta-content">
          <span className="section-kicker">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>Ready to Take the Next Step?</h2>

          <p>
            Contact SLNS Manpower Services Private Limited to enquire about
            internship, apprenticeship and industrial training opportunities.
          </p>

          <div className="internship-cta-actions">
            <Link href="/contact-us" className="internship-cta-button">
              Contact Us
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
