import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opulent \u2014 Industry Use Cases",
  description:
    "Real-world enterprise tasks validated against the Apex Agent QA benchmark. 50 tasks, 38 categories, 80+ documents across Financial Services, Legal, Healthcare, Manufacturing, Market Intelligence, Government, and Enterprise Operations.",
};

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
