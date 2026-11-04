
import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "SLNS Man Power Services Private Limited",
  description:
    "SLNS Man Power Services Private Limited provides professional manpower, recruitment, staffing, HR consulting and career opportunities.",
  keywords: [
    "SLNS Manpower Services",
    "Manpower Services",
    "Recruitment",
    "Staffing Services",
    "Job Placements",
    "Internships",
  ],
  applicationName: "SLNS Man Power Services",
  icons: {
    icon: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

