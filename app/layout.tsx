import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ModeToggle } from "@/components/ui/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opulent \u2014 Industry Use Cases",
  description:
    "Real-world enterprise tasks validated against the Apex Agent QA benchmark. 50 tasks, 38 categories, 80+ documents across Financial Services, Legal, Healthcare, Manufacturing, Market Intelligence, Government, and Enterprise Operations.",
  keywords:
    "enterprise AI, document processing, financial analysis, legal compliance, healthcare regulatory, market intelligence, opulent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="TWBlocks - Free SaaS website blocks"
        />
        <meta
          property="og:description"
          content="Free SaaS website blocks based on React with shadcn & Tailwind"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tommyjepsen/twblocks/main/public/hero4.png?raw=true"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ModeToggle />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
