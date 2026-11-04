
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/our-services" },
  { label: "Partner Companies", href: "/partner-companies" },
  { label: "Internships", href: "/internships" },
  { label: "Job Placements", href: "/job-placements" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <Link
          href="/"
          className="brand-logo"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/logo.jpeg"
            alt="SLNS Man Power Services"
            width={245}
            height={62}
            priority
            className="contact-logo-image"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="main-navigation">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* SEPARATE MOBILE NAVIGATION */}
      <div className={`mobile-nav-wrapper ${menuOpen ? "show" : ""}`}>
        <nav className="mobile-nav">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <span>→</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
