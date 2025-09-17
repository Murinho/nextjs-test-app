import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Mock Site",
  description: "A tiny Next.js app for Vercel deploy testing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
