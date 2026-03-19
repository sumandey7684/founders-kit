import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Founders Kit - Curated Startup Resources & Tools",
  description:
    "A curated collection of essential resources, tools, and playbooks to help founders build, launch, and scale startups successfully. 500+ resources across 20+ categories.",
  keywords: [
    "startup resources",
    "founder tools",
    "startup toolkit",
    "entrepreneur resources",
    "startup guide",
    "YC resources",
    "startup playbook",
    "founder kit",
  ],
  authors: [{ name: "Avinash Singh", url: "https://x.com/AvinashSingh_20" }],
  creator: "Avinash Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/avinash201199/founders-kit",
    title: "Founders Kit - Curated Startup Resources & Tools",
    description:
      "A curated collection of essential resources, tools, and playbooks to help founders build, launch, and scale startups successfully.",
    siteName: "Founders Kit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Kit - Curated Startup Resources & Tools",
    description:
      "A curated collection of essential resources, tools, and playbooks to help founders build, launch, and scale startups successfully.",
    creator: "@AvinashSingh_20",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
