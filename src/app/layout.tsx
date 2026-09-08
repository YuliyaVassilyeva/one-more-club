import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One More Club",
  description: "Miami's Newest Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
