
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>SLNS Man Power Services Private Limited</h3>
          <p>
            Connecting talent with opportunity through professional manpower
            services, recruitment, internships and career support.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/partner-companies">Partner Companies</Link>
          <Link href="/internships">Internships</Link>
          <Link href="/job-placements">Job Placements</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <Phone size={16} />
            <a href="tel:9989515980">9989515980</a>
          </p>

          <p>
            <Mail size={16} />
            <a href="mailto:slnsservicespvtltd@gmail.com">
              slnsservicespvtltd@gmail.com
            </a>
          </p>

          <p>
            <MapPin size={16} />
            <span>
              P.No. 9, RTC Colony, Beside 7 Temple, Medchal,
              Malkajgiri District 501401, Telangana.
            </span>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2023 SLNS Man Power Services Private Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
