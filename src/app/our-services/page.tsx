
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  BookOpen,
  Factory,
  ArrowRight,
  CheckCircle2,
  Handshake,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Manpower Services",
    description:
      "We provide skilled, semi-skilled, and unskilled manpower to meet the workforce requirements of various industries. Our focus is on connecting businesses with suitable candidates.",
    icon: Users,
    color: "blue",
    points: [
      "Skilled and unskilled workforce",
      "Recruitment and staffing support",
      "Workforce coordination",
    ],
  },
  {
    number: "02",
    title: "Outsourcing Services",
    description:
      "We offer reliable outsourcing solutions that help companies manage their operational requirements while focusing on their core business activities.",
    icon: Building2,
    color: "green",
    points: [
      "Contract staffing support",
      "Operational workforce solutions",
      "Flexible staffing requirements",
    ],
  },
  {
    number: "03",
    title: "Job Placements",
    description:
      "We connect freshers and experienced candidates with suitable employment opportunities across different sectors, supporting both candidates and employers.",
    icon: BriefcaseBusiness,
    color: "purple",
    points: [
      "Opportunities for freshers",
      "Experienced candidate recruitment",
      "Employer and candidate coordination",
    ],
  },
  {
    number: "04",
    title: "Internships",
    description:
      "We help students gain practical exposure through internship opportunities that support their learning, professional development, and career preparation.",
    icon: GraduationCap,
    color: "orange",
    points: [
      "Student internship opportunities",
      "Practical industry exposure",
      "Career development support",
    ],
  },
  {
    number: "05",
    title: "Apprenticeship",
    description:
      "We support apprenticeship opportunities that help individuals develop workplace skills through practical learning and industry experience.",
    icon: BookOpen,
    color: "teal",
    points: [
      "Practical skill development",
      "Workplace learning opportunities",
      "Industry experience",
    ],
  },
  {
    number: "06",
    title: "Industrial Training",
    description:
      "We help students and aspiring professionals gain industry-oriented training and understand workplace practices to prepare for their future careers.",
    icon: Factory,
    color: "gold",
    points: [
      "Industry-oriented training",
      "Professional skill development",
      "Workplace readiness",
    ],
  },
];

const galleryImages = [
  {
    src: "/images/service-manpower.jpg",
    alt: "Professional manpower workforce",
    title: "Manpower Solutions",
  },
  {
    src: "/images/service-outsourcing.jpg",
    alt: "Business outsourcing operations",
    title: "Outsourcing Support",
  },
  {
    src: "/images/service-job-placement.jpg",
    alt: "Professional job placement",
    title: "Career Opportunities",
  },
  {
    src: "/images/service-internships.png",
    alt: "Students participating in internships",
    title: "Internship Programs",
  },
  {
    src: "/images/service-apprenticeship.jpg",
    alt: "Apprenticeship practical learning",
    title: "Apprenticeship",
  },
  {
    src: "/images/service-industrial-training.jpg",
    alt: "Industrial training environment",
    title: "Industrial Training",
  },
];

export default function OurServicesPage() {
  return (
    <main className="services-page">

      {/* HERO SECTION */}
      <section className="services-hero">
        <div className="services-hero-pattern" />

        <div className="services-container services-hero-inner">
          <div className="services-hero-content">
            <span className="services-hero-eyebrow">
              WHAT WE OFFER
            </span>

            <div className="services-hero-line" />

            <h1>
              OUR
              <br />
              SERVICES
            </h1>

            <p>
              Connecting people with opportunities and helping businesses
              build the workforce they need to grow.
            </p>

            <Link href="/contact-us" className="services-hero-link">
              Explore Opportunities
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="services-hero-decoration">
            <div className="decoration-one" />
            <div className="decoration-two" />
          </div>
        </div>
      </section>

      {/* INTRODUCTION AND SERVICES GRID */}
      <section className="services-intro">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Solutions That Create
              <span> Opportunities</span>
            </h2>

            <p>
              At SLNS Manpower Services Private Limited, we provide workforce
              and career support solutions designed to meet the needs of
              businesses, students, and job seekers.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className={`service-card service-${service.color}`}
                  key={service.number}
                >
                  <div className="service-card-top">
                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="service-card-content">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <ul>
                      {service.points.map((point) => (
                        <li key={point}>
                          <CheckCircle2 size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card-bottom">
                    <span>SLNS MANPOWER SERVICES</span>
                    <span className="service-card-index">
                      {service.number}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES IMAGE GALLERY */}
      <section className="services-gallery-section">
        <div className="services-container">
          <div className="services-gallery-heading">
            <span className="services-section-label">
              OUR WORK
            </span>

            <h2>
              Creating Connections.
              <span> Building Futures.</span>
            </h2>

            <p>
              Supporting industries, job seekers, and students through
              meaningful workforce and career opportunities.
            </p>
          </div>

          <div className="services-image-gallery">
            {galleryImages.map((image, index) => (
              <div className="services-gallery-item" key={image.src}>
                <div className="services-gallery-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="gallery-image"
                  />
                </div>

                <div className="services-gallery-overlay">
                  <span>0{index + 1}</span>
                  <h3>{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="services-closing-banner">
        <div className="services-container services-closing-inner">
          <div className="services-closing-icon">
            <Handshake size={34} strokeWidth={1.7} />
          </div>

          <div className="services-closing-copy">
            <span>LET&apos;S WORK TOGETHER</span>

            <h2>
              Looking for the Right Workforce
              <br />
              or Your Next Career Opportunity?
            </h2>

            <p>
              Connect with SLNS Manpower Services Private Limited.
              We are here to help you move forward.
            </p>
          </div>

          <div className="services-closing-divider" />

          <Link
            href="/contact-us"
            className="services-closing-button"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
