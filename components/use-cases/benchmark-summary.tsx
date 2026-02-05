import { Badge } from "@/components/ui/badge";

const summaryData = [
  {
    vertical: "Financial Services",
    tasks: 14,
    documentTypes: "XLSX, PDF",
    subCategories: "LBO, SEC, M&A, Compliance, Privacy, Transactions",
  },
  {
    vertical: "Legal & Compliance",
    tasks: 12,
    documentTypes: "PDF, DOCX",
    subCategories:
      "Contract, Lease, Antitrust, GDPR, Evidence, IP, Maritime",
  },
  {
    vertical: "Healthcare & Pharma",
    tasks: 4,
    documentTypes: "PDF",
    subCategories: "FDA, State Health Codes",
  },
  {
    vertical: "Manufacturing & Building",
    tasks: 4,
    documentTypes: "XLSX, PDF",
    subCategories: "Operations Analytics, Fire Safety, Transportation",
  },
  {
    vertical: "Market Intelligence",
    tasks: 9,
    documentTypes: "PDF, XLSX, PNG, PPTX",
    subCategories: "Forecasting, Strategy, Pricing, Competitive, Survey",
  },
  {
    vertical: "Government & Policy",
    tasks: 4,
    documentTypes: "PDF, PPTX",
    subCategories: "Trade, Economic, Legislative, Geographic",
  },
  {
    vertical: "Enterprise Operations",
    tasks: 5,
    documentTypes: "XLSX, PDF, DOCX",
    subCategories: "HR, Product, Business Metrics, Communications, Insurance",
  },
];

export const BenchmarkSummary = () => (
  <div className="w-full py-20 lg:py-32">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Benchmark</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Benchmark Summary
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-muted-foreground text-left">
              Opulent processes all document formats (PDF, DOCX, XLSX, PPTX,
              PNG, CSV) with autonomous extraction, cross-referencing, and
              synthesis — no manual preprocessing required.
            </p>
          </div>
        </div>
        <div className="border rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted">
                  <th className="text-left p-4 font-medium">Vertical</th>
                  <th className="text-left p-4 font-medium">Tasks</th>
                  <th className="text-left p-4 font-medium hidden sm:table-cell">
                    Document Types
                  </th>
                  <th className="text-left p-4 font-medium hidden md:table-cell">
                    Sub-Categories
                  </th>
                </tr>
              </thead>
              <tbody>
                {summaryData.map((row) => (
                  <tr key={row.vertical} className="border-b last:border-b-0">
                    <td className="p-4 font-medium">{row.vertical}</td>
                    <td className="p-4">{row.tasks}</td>
                    <td className="p-4 text-muted-foreground hidden sm:table-cell">
                      {row.documentTypes}
                    </td>
                    <td className="p-4 text-muted-foreground hidden md:table-cell">
                      {row.subCategories}
                    </td>
                  </tr>
                ))}
                <tr className="bg-muted">
                  <td className="p-4 font-semibold">Total</td>
                  <td className="p-4 font-semibold">50 tasks</td>
                  <td className="p-4 font-semibold hidden sm:table-cell">
                    80+ documents
                  </td>
                  <td className="p-4 font-semibold hidden md:table-cell">
                    38 categories
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
