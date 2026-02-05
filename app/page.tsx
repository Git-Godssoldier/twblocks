import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  Scale,
  HeartPulse,
  Factory,
  LineChart,
  Building2,
  Briefcase,
  MoveRight,
  PhoneCall,
} from "lucide-react";

/* ────────────────────────────────────────
   DATA
   ──────────────────────────────────────── */

const industries = [
  {
    id: "financial-services",
    icon: Landmark,
    badge: "14 Validated Tasks  ·  8 Sub-Categories",
    title: "Financial Services & Investment Banking",
    subtitle:
      "The deepest vertical in the benchmark — 14 validated tasks across LBO modeling, SEC filings, M&A, compliance, and more.",
    useCases: [
      {
        title: "Leveraged Buyout Modeling",
        description:
          "Opulent ingests complex LBO models (PLTF_LBO_v07, v08) and performs autonomous financial analysis — sensitivity tables, IRR calculations, debt schedule validation, and exit scenario modeling. Analysts upload Excel workbooks and receive structured findings with flagged assumptions.",
        artifacts:
          "Multi-version LBO spreadsheets with iterative model refinement",
      },
      {
        title: "SEC Filing Analysis",
        description:
          "Autonomous 10-K annual report analysis for public companies (SLRC, Solventum FY2024). Opulent extracts key financial metrics, identifies risk factors, compares year-over-year performance, and generates executive summaries suitable for investment committee presentations.",
        artifacts:
          "Full 10-K annual reports (PDF), condensed financial summaries",
      },
      {
        title: "M&A Due Diligence",
        description:
          "Competitive valuation analysis using Annual Contract Value datasets and acquisition pricing comparables. Opulent cross-references competitor ACV data against asking prices to surface valuation multiples, identify outliers, and generate deal screening memos.",
        artifacts:
          "Competitor ACV spreadsheets, acquisition price databases",
      },
      {
        title: "Stock Transaction Forensics",
        description:
          "Historical and current stock transaction analysis — pattern detection, wash sale identification, cost basis reconciliation, and regulatory compliance checks. Opulent processes transaction spreadsheets and flags anomalies against IRS and SEC reporting thresholds.",
        artifacts:
          "Stock transaction records (current + historic XLSX)",
      },
      {
        title: "Interest Rate & Benchmark Data",
        description:
          "SOFR (Secured Overnight Financing Rate) data processing for loan pricing, derivative valuation, and benchmark transition analysis. Opulent ingests rate data and computes spread adjustments, forward curves, and hedging recommendations.",
        artifacts: "SOFR actual rate datasets (XLSX)",
      },
      {
        title: "Financial Compliance",
        description:
          "Fair Credit Reporting Act compliance review and consent agreement analysis. Opulent cross-references lending documents against FCRA requirements, identifies disclosure gaps, and generates compliance checklists with remediation steps.",
        artifacts:
          "SLL Consent Agreements, Fair Credit Reporting Act documentation",
      },
      {
        title: "Consumer Financial Privacy",
        description:
          "Gramm-Leach-Bliley Act privacy regulation analysis (12 CFR Part 1016). Opulent reviews institutional privacy policies against CFPB requirements, identifies non-compliant disclosures, and drafts corrected notice templates.",
        artifacts: "CFPB privacy regulation (12 CFR Part 1016)",
      },
      {
        title: "Financial Modeling",
        description:
          "General-purpose calculation sheet processing — Opulent parses formula-heavy spreadsheets, validates computational logic, identifies circular references, and documents model assumptions for audit readiness.",
        artifacts: "Calculation spreadsheets (XLSX)",
      },
      {
        title: "Quarterly Earnings Analysis",
        description:
          "Multi-company quarterly results processing (Elastic Q2-26, comparable datasets). Opulent extracts revenue, margin, and guidance data, benchmarks against consensus estimates, and generates earnings review summaries for portfolio managers.",
        artifacts: "Quarterly performance statistics and earnings reports",
      },
      {
        title: "Portfolio Risk Assessment",
        description:
          "Cross-asset portfolio analysis incorporating stock transaction history, SOFR benchmark rates, and LBO model outputs. Opulent synthesizes risk exposures across instruments, generates VaR estimates, and recommends portfolio rebalancing actions.",
        artifacts: "Multi-format portfolio data (XLSX, PDF)",
      },
      {
        title: "Loan Pricing & Structuring",
        description:
          "SOFR-linked loan pricing using real-time benchmark data combined with borrower financial analysis. Opulent computes credit spreads, models covenant packages, and generates term sheet recommendations with scenario-based pricing grids.",
        artifacts: "SOFR rate datasets, borrower financial spreadsheets",
      },
      {
        title: "Revenue Recognition Analysis",
        description:
          "ASC 606 compliance review for SaaS and enterprise contracts. Opulent analyzes ACV schedules, identifies performance obligations, and maps revenue recognition timing against contract milestones.",
        artifacts: "ACV spreadsheets, contract documentation",
      },
      {
        title: "Regulatory Change Impact",
        description:
          "Analysis of FCRA and GLBA regulatory updates on existing financial products and processes. Opulent identifies affected product lines, quantifies compliance gaps, and generates remediation timelines with cost estimates.",
        artifacts: "Federal regulatory documents, internal compliance records",
      },
      {
        title: "Investment Memo Generation",
        description:
          "Automated investment committee memo preparation combining LBO model outputs, SEC filing analysis, and competitive intelligence. Opulent structures findings into standardized IC memo format with risk/return framework.",
        artifacts: "LBO models, 10-K filings, competitive datasets",
      },
    ],
  },
  {
    id: "legal-compliance",
    icon: Scale,
    badge: "12 Validated Tasks  ·  10 Sub-Categories",
    title: "Legal & Compliance",
    subtitle:
      "Comprehensive coverage from contract review to maritime law — 12 validated tasks across 10 sub-categories.",
    useCases: [
      {
        title: "Contract Termination Review",
        description:
          "Opulent processes termination notices, extracts key dates and conditions, validates against original agreement terms, and identifies potential exposure or cure period opportunities. Attorneys receive structured risk assessments with cited clauses.",
        artifacts: "Notice of Termination (PDF)",
      },
      {
        title: "Lease Portfolio Management",
        description:
          "Multi-document lease analysis — extension options, amendments, and assignment/assumption agreements. Opulent tracks critical dates, calculates financial obligations across lease modifications, and generates consolidated lease abstracts.",
        artifacts:
          "Lease extension notices, amendment agreements, assignment documents (3-document portfolio)",
      },
      {
        title: "Antitrust & Merger Filing",
        description:
          "Hart-Scott-Rodino pre-merger notification preparation. Opulent analyzes updated HSR form requirements (Jan 2025), cross-references acquiring-person details, and validates filing completeness against FTC thresholds.",
        artifacts: "HSR form updates, acquiring-person forms (PDF + DOCX)",
      },
      {
        title: "GDPR & Data Privacy",
        description:
          "Full GDPR text analysis with case law context (SRB v. EDPS, EDPS v. SRB). Opulent maps data processing activities to GDPR articles, identifies compliance gaps, and generates Data Protection Impact Assessment frameworks with precedent citations.",
        artifacts:
          "GDPR full text, European court decisions (3-document corpus)",
      },
      {
        title: "Evidence Law Research",
        description:
          "Multi-source evidentiary analysis — personal knowledge requirements (Rule 602), best evidence rule (Rule 1002), and lay opinion testimony (Rule 701). Opulent synthesizes rules across sources and generates admissibility checklists for trial preparation.",
        artifacts:
          "Federal Rules of Evidence analysis documents (3 specialized PDFs)",
      },
      {
        title: "Family Law Calculations",
        description:
          "Illinois child support computation under 750 ILCS 5:505 with 2025 income shares schedules. Opulent applies statutory formulas, performs gross-to-net conversions using standardized tax deductions, and generates court-ready calculation worksheets.",
        artifacts:
          "Illinois statute, 2025 income schedules, gross-to-net conversion tables",
      },
      {
        title: "Intellectual Property",
        description:
          "DMCA safe harbor analysis (17 U.S.C. Section 512) with state civil code cross-reference. Opulent evaluates takedown procedures, counter-notification requirements, and service provider liability under both federal and state frameworks.",
        artifacts: "DMCA statute, state civil code provisions",
      },
      {
        title: "Maritime & Transportation Law",
        description:
          "Jones Act compliance analysis — vessel documentation requirements (46 CFR 67.19, 67.97), cabotage restrictions (46 U.S.C. Section 55102), and federal maritime legislation. Opulent evaluates vessel eligibility and coastwise trade restrictions.",
        artifacts:
          "CFR regulations, USC statutes, federal maritime law (4-document corpus)",
      },
      {
        title: "Anti-SLAPP Defense",
        description:
          "Strategic Lawsuit Against Public Participation motion preparation. Opulent analyzes factual basis against applicable anti-SLAPP statutes, identifies protected speech categories, and drafts motion frameworks with burden-shifting arguments.",
        artifacts: "Anti-SLAPP motion documents (DOCX)",
      },
      {
        title: "State Business Regulation",
        description:
          "New York General Business Law analysis (Section 899-aa). Opulent reviews data breach notification requirements, consumer protection obligations, and compliance procedures for businesses operating in New York.",
        artifacts: "NY Consolidated Laws (PDF)",
      },
      {
        title: "Regulatory Cross-Reference",
        description:
          "Multi-jurisdiction regulatory comparison — federal (DMCA, FCRA) vs. state (NY GBL) vs. international (GDPR). Opulent maps overlapping requirements, identifies conflicts, and generates unified compliance matrices for multinational operations.",
        artifacts: "Multi-jurisdiction regulatory documents",
      },
      {
        title: "Litigation Document Assembly",
        description:
          "Automated litigation package preparation combining evidence rules analysis, anti-SLAPP motion frameworks, and contract termination reviews. Opulent assembles document sets with cross-referenced citations and procedural checklists.",
        artifacts: "Multi-format litigation documents (PDF, DOCX)",
      },
    ],
  },
  {
    id: "healthcare-pharma",
    icon: HeartPulse,
    badge: "4 Validated Tasks  ·  Regulatory Compliance",
    title: "Healthcare & Pharmaceutical",
    subtitle:
      "Regulatory compliance across FDA and state health codes — 4 validated tasks covering drug labeling, advertising, and facility compliance.",
    useCases: [
      {
        title: "FDA Drug Labeling Compliance",
        description:
          "Analysis of 21 CFR 201.128 requirements for intended use and adequate directions for use. Opulent maps product claims against regulatory requirements, identifies labeling deficiencies, and generates corrective labeling recommendations for pre-submission review.",
        artifacts: "FDA CFR drug labeling regulations (PDF)",
      },
      {
        title: "Drug Advertising Review",
        description:
          "Comprehensive 21 CFR 202.1 advertising regulation analysis. Opulent evaluates promotional materials against FDA advertising requirements, flags misleading claims, validates fair balance in risk/benefit presentation, and generates compliance review reports.",
        artifacts: "FDA CFR advertising regulations, FDA misbranding statutes",
      },
      {
        title: "FDA CMC Guidance Processing",
        description:
          "Chemistry, Manufacturing, and Controls guidance paper analysis. Opulent processes FDA CM guidance documents, extracts specification requirements, identifies testing protocols, and generates CMC submission checklists aligned with current FDA expectations.",
        artifacts: "FDA CM guidance papers (PDF)",
      },
      {
        title: "Healthcare Facility Compliance",
        description:
          "Texas Administrative Code analysis across 5 healthcare regulatory sections — admission policies (Section 553.259), patient rights (Section 553.267), emergency preparedness (Section 553.275), coordination of care (Section 553.261), and employee qualifications (Section 553.253). Opulent generates facility-specific compliance matrices with gap analysis.",
        artifacts:
          "5 Texas Administrative Code sections covering full operational compliance",
      },
    ],
  },
  {
    id: "manufacturing-building",
    icon: Factory,
    badge: "4 Validated Tasks  ·  Operations & Safety",
    title: "Manufacturing & Building Operations",
    subtitle:
      "Multi-year operations data and safety specification analysis — 4 validated tasks across manufacturing analytics and building compliance.",
    useCases: [
      {
        title: "Manufacturing Site Analytics (Multi-Year)",
        description:
          "Five-year operational analysis (2020-2024) across manufacturing sites. Opulent processes production data, identifies efficiency trends, calculates OEE (Overall Equipment Effectiveness), detects capacity constraints, and generates operations review dashboards.",
        artifacts:
          "Manufacturing site operations datasets spanning 2020-2024 (XLSX, 2 task instances)",
      },
      {
        title: "Fire Door Specification Analysis",
        description:
          "Comparative analysis of fire-rated door products — SentinelGuard FD60, AegisCore FR60, and Fireline Veritas FR60. Opulent extracts performance specifications, compares against building code requirements, and generates procurement comparison matrices with compliance verification.",
        artifacts:
          "Three FR60-rated fire door specification sheets (PDF)",
      },
      {
        title: "Bus Fleet Operations Analytics",
        description:
          "Bus fleet operations data analysis — route optimization, schedule adherence, and operational efficiency metrics. Opulent processes transportation datasets and identifies underperforming routes, peak demand patterns, and resource allocation improvements.",
        artifacts: "Bus operations dataset (XLSX)",
      },
      {
        title: "Building Code Compliance Mapping",
        description:
          "Cross-referencing fire door specifications against building code requirements for specific facility types. Opulent generates compliance matrices, identifies gaps, and recommends specification changes for code compliance.",
        artifacts: "Fire door specs, building code reference documents",
      },
    ],
  },
  {
    id: "market-intelligence",
    icon: LineChart,
    badge: "9 Validated Tasks  ·  Strategy & Forecasting",
    title: "Market Intelligence & Corporate Strategy",
    subtitle:
      "From autonomous vehicle forecasts to spinoff planning — 9 validated tasks across forecasting, pricing, and competitive intelligence.",
    useCases: [
      {
        title: "Autonomous Vehicle Market Forecasting",
        description:
          "Dual-source market analysis — 2026 autonomous market forecasts combined with company-specific market share projections (AmensaDrive). Opulent synthesizes macro forecasts with competitive positioning data and generates scenario-based investment theses.",
        artifacts:
          "Industry forecast + company-specific market share projections (2 PDFs)",
      },
      {
        title: "Corporate Restructuring & Spinoff Analysis",
        description:
          "Strategic spinoff plan analysis (Harborview Strategic Solutions). Opulent evaluates separation mechanics, standalone financial viability, tax implications, and stakeholder impact. Generates board-ready assessment with risk-adjusted valuation ranges.",
        artifacts: "Corporate spinoff plan (PDF)",
      },
      {
        title: "Pricing Strategy Optimization",
        description:
          "Multi-format pricing analysis — visual optimization curves (price multiplier charts, subscriber growth), combined with presentation-format pricing models (usage-based pricing). Opulent processes both quantitative data and strategic frameworks to recommend pricing tiers.",
        artifacts:
          "Pricing optimization charts (PNG), subscriber analytics (PNG), pricing model deck (PPTX)",
      },
      {
        title: "Competitive Intelligence Processing",
        description:
          "Real-time competitor data processing. Opulent ingests competitive datasets, identifies market positioning shifts, surfaces pricing differentials, and generates strategic response recommendations with competitive battle cards.",
        artifacts: "Competitor data spreadsheets (XLSX)",
      },
      {
        title: "Decision Scoring Frameworks",
        description:
          "Multi-criteria decision analysis — Opulent processes scoring matrices, validates weighting methodologies, runs sensitivity analysis on criteria weights, and generates ranked recommendation reports with confidence intervals.",
        artifacts: "Decision criteria scoring documents (PDF)",
      },
      {
        title: "Market Share Targeting & Capacity Planning",
        description:
          "Capacity and market share targeting analysis. Opulent evaluates current market position against aspirational targets, identifies growth vectors, and models the operational requirements to achieve target share allocations.",
        artifacts: "Target seat share analysis (PDF)",
      },
      {
        title: "Multi-Wave Survey Synthesis",
        description:
          "Multi-wave survey analysis (Helios F1, F2, F3 datasets). Opulent processes survey results across segments, identifies statistically significant trends, correlates responses across waves, and generates insight reports with visualization recommendations.",
        artifacts: "Three survey result datasets (XLSX)",
      },
      {
        title: "Go-to-Market Strategy",
        description:
          "Combined competitive intelligence and pricing optimization for market entry. Opulent synthesizes competitor positioning, pricing sensitivity data, and survey insights to generate GTM strategy recommendations with phased execution plans.",
        artifacts: "Competitor data, pricing models, survey datasets",
      },
      {
        title: "Strategic Planning & Board Materials",
        description:
          "Board presentation preparation combining spinoff analysis, market forecasts, and competitive positioning. Opulent generates executive-ready strategy decks with data-backed recommendations and scenario planning frameworks.",
        artifacts:
          "Spinoff plans, market forecasts, competitive intelligence (PDF, PPTX)",
      },
    ],
  },
  {
    id: "government-policy",
    icon: Building2,
    badge: "4 Validated Tasks  ·  Trade & Legislative",
    title: "Government, Policy & Regulation",
    subtitle:
      "Trade policy to legislative analysis — 4 validated tasks covering tariff modeling, fiscal policy, and congressional bill analysis.",
    useCases: [
      {
        title: "Trade Policy & Tariff Analysis",
        description:
          "White House policy document processing — reciprocal tariff rate modifications. Opulent extracts rate schedules, identifies affected product categories (HTS codes), models cost impact on supply chains, and generates compliance guidance for affected importers.",
        artifacts: "White House tariff policy documents (PDF)",
      },
      {
        title: "Fiscal & Monetary Policy Modeling",
        description:
          "Fiscal and monetary policy multiplier analysis. Opulent processes policy mix charts, evaluates multiplier assumptions, and generates scenario models showing the impact of different policy combinations on economic output.",
        artifacts: "Policy mix and multiplier analysis (PDF)",
      },
      {
        title: "Congressional Bill Impact Assessment",
        description:
          "Congressional bill analysis (HR9999). Opulent extracts provisions, identifies affected regulatory frameworks, models compliance requirements for affected entities, and generates legislative impact summaries with amendment tracking.",
        artifacts: "Legislative presentation materials (PPTX)",
      },
      {
        title: "Census & Geographic Analysis",
        description:
          "US Census geographic division mapping and analysis. Opulent processes NCEI reference maps, supports regional market analysis, and generates geographically segmented reports aligned with official Census Bureau boundaries.",
        artifacts: "NCEI geographic reference maps (PDF)",
      },
    ],
  },
  {
    id: "enterprise-operations",
    icon: Briefcase,
    badge: "5 Validated Tasks  ·  HR, Metrics & Communications",
    title: "Enterprise Operations",
    subtitle:
      "HR analytics, product metrics, and communications intelligence — 5 validated tasks for operational workflows.",
    useCases: [
      {
        title: "Employee Compensation Analytics",
        description:
          "Wage data analysis for workforce planning. Opulent processes compensation datasets, identifies pay equity gaps, benchmarks against market rates, generates band analysis reports, and surfaces compliance risks under equal pay regulations.",
        artifacts: "Employee wage datasets (XLSX)",
      },
      {
        title: "Product Launch Metrics & KPI Tracking",
        description:
          "Launch KPI tracking and target analysis. Opulent ingests target metric definitions, builds tracking dashboards, monitors actuals against plan, and generates launch performance scorecards with variance commentary.",
        artifacts: "Launch target metrics documentation (PDF)",
      },
      {
        title: "Quarterly Business Performance",
        description:
          "Quarterly statistics processing (Elastic Q2-26). Opulent extracts performance KPIs, computes quarter-over-quarter trends, benchmarks against guidance, and generates earnings preview analysis suitable for investor communications.",
        artifacts: "Quarterly performance statistics (PDF)",
      },
      {
        title: "Email Intelligence & Communications Audit",
        description:
          "Multi-source email analysis — summit correspondence, email chains, and professional communications (Dr. Anne John). Opulent processes email compilations, extracts action items, identifies decision threads, maps stakeholder positions, and generates structured communication summaries.",
        artifacts:
          "Email compilations (PDF), email chains (PDF), professional correspondence (DOCX)",
      },
      {
        title: "Insurance Industry Analysis",
        description:
          "Insurance marketing organization evaluation. Opulent analyzes coalition structures, market positioning, and distribution channel strategies, generating competitive landscape assessments for carriers and brokers.",
        artifacts: "Insurance marketing coalition documentation (PDF)",
      },
    ],
  },
];

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
    subCategories: "Contract, Lease, Antitrust, GDPR, Evidence, IP, Maritime",
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
    subCategories:
      "HR, Product, Business Metrics, Communications, Insurance",
  },
];

const navItems = [
  { icon: Landmark, label: "Financial Services", tasks: "14 tasks", href: "#financial-services" },
  { icon: Scale, label: "Legal & Compliance", tasks: "12 tasks", href: "#legal-compliance" },
  { icon: HeartPulse, label: "Healthcare & Pharma", tasks: "4 tasks", href: "#healthcare-pharma" },
  { icon: Factory, label: "Manufacturing", tasks: "4 tasks", href: "#manufacturing-building" },
  { icon: LineChart, label: "Market Intelligence", tasks: "9 tasks", href: "#market-intelligence" },
  { icon: Building2, label: "Government & Policy", tasks: "4 tasks", href: "#government-policy" },
  { icon: Briefcase, label: "Enterprise Ops", tasks: "5 tasks", href: "#enterprise-operations" },
];

/* ────────────────────────────────────────
   PAGE
   ──────────────────────────────────────── */

export default function UseCasesPage() {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="w-full">
        <div className="container mx-auto">
          <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
            <div>
              <Badge variant="outline">
                {"50 Tasks · 38 Categories · 80+ Documents"}
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular text-balance">
                Industry Use Cases
              </h1>
              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-balance">
                Real-world enterprise tasks validated against the Apex Agent QA
                benchmark. Every use case below represents a real task validated
                against actual enterprise documents including LBO models, SEC
                filings, federal regulations, multi-party contracts,
                manufacturing datasets, and market forecasts.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Button size="lg" className="gap-4" variant="outline" asChild>
                <a href="https://opulentia.ai/enterprise">
                  Talk to Founders <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" className="gap-4" asChild>
                <a href="https://platform.opulentia.ai">
                  Get Started <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Nav ── */}
      <section className="w-full py-12 lg:py-20 border-y">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center gap-2 text-center group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-md border bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium leading-tight">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.tasks}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Industry Sections ── */}
      {industries.map((industry) => {
        const Icon = industry.icon;
        return (
          <section
            key={industry.id}
            id={industry.id}
            className="w-full py-20 lg:py-32 scroll-mt-24"
          >
            <div className="container mx-auto">
              <div className="flex flex-col gap-10">
                {/* heading */}
                <div className="flex gap-4 flex-col items-start">
                  <div>
                    <Badge>{industry.badge}</Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md border bg-muted">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-balance">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                      {industry.subtitle}
                    </p>
                  </div>
                </div>

                {/* cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industry.useCases.map((useCase) => (
                    <div
                      key={useCase.title}
                      className="flex flex-col justify-between gap-4 p-6 border rounded-md bg-card hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium tracking-tight">
                          {useCase.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {useCase.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 pt-2 border-t">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          Validated Artifacts
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {useCase.artifacts}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Benchmark Summary ── */}
      <section className="w-full py-20 lg:py-32">
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
                  synthesis.
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
                      <tr
                        key={row.vertical}
                        className="border-b last:border-b-0"
                      >
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
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
            <div>
              <Badge>Get Started</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                Ready to automate enterprise workflows?
              </h3>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                Every use case above is validated against real enterprise
                documents. No manual preprocessing required.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <Button className="gap-4" variant="outline" asChild>
                <a href="https://opulentia.ai/enterprise">
                  Talk to Founders <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
              <Button className="gap-4" asChild>
                <a href="https://platform.opulentia.ai">
                  Get Started <MoveRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
