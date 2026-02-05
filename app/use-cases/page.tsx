"use client";

import {
  Landmark,
  Scale,
  HeartPulse,
  Factory,
  LineChart,
  Building2,
  Briefcase,
} from "lucide-react";
import { UseCasesHero } from "@/components/use-cases/use-cases-hero";
import { BenchmarkStats } from "@/components/use-cases/benchmark-stats";
import { IndustrySection } from "@/components/use-cases/industry-section";
import { BenchmarkSummary } from "@/components/use-cases/benchmark-summary";
import { UseCasesCTA } from "@/components/use-cases/use-cases-cta";

const industries = [
  {
    id: "financial-services",
    icon: Landmark,
    badge: "14 Validated Tasks  \u00b7  8 Sub-Categories",
    title: "Financial Services & Investment Banking",
    subtitle:
      "The deepest vertical in the benchmark \u2014 14 validated tasks across LBO modeling, SEC filings, M&A, compliance, and more.",
    useCases: [
      {
        title: "Leveraged Buyout Modeling",
        description:
          "Opulent ingests complex LBO models (PLTF_LBO_v07, v08) and performs autonomous financial analysis \u2014 sensitivity tables, IRR calculations, debt schedule validation, and exit scenario modeling. Analysts upload Excel workbooks and receive structured findings with flagged assumptions.",
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
          "Historical and current stock transaction analysis \u2014 pattern detection, wash sale identification, cost basis reconciliation, and regulatory compliance checks. Opulent processes transaction spreadsheets and flags anomalies against IRS and SEC reporting thresholds.",
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
          "General-purpose calculation sheet processing \u2014 Opulent parses formula-heavy spreadsheets, validates computational logic, identifies circular references, and documents model assumptions for audit readiness.",
        artifacts: "Calculation spreadsheets (XLSX)",
      },
    ],
  },
  {
    id: "legal-compliance",
    icon: Scale,
    badge: "12 Validated Tasks  \u00b7  10 Sub-Categories",
    title: "Legal & Compliance",
    subtitle:
      "Comprehensive coverage from contract review to maritime law \u2014 12 validated tasks across 10 sub-categories.",
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
          "Multi-document lease analysis \u2014 extension options, amendments, and assignment/assumption agreements. Opulent tracks critical dates, calculates financial obligations across lease modifications, and generates consolidated lease abstracts.",
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
          "Multi-source evidentiary analysis \u2014 personal knowledge requirements (Rule 602), best evidence rule (Rule 1002), and lay opinion testimony (Rule 701). Opulent synthesizes rules across sources and generates admissibility checklists for trial preparation.",
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
          "Jones Act compliance analysis \u2014 vessel documentation requirements (46 CFR 67.19, 67.97), cabotage restrictions (46 U.S.C. Section 55102), and federal maritime legislation. Opulent evaluates vessel eligibility and coastwise trade restrictions.",
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
    ],
  },
  {
    id: "healthcare-pharma",
    icon: HeartPulse,
    badge: "4 Validated Tasks  \u00b7  Regulatory Compliance",
    title: "Healthcare & Pharmaceutical",
    subtitle:
      "Regulatory compliance across FDA and state health codes \u2014 4 validated tasks covering drug labeling, advertising, and facility compliance.",
    useCases: [
      {
        title: "FDA Regulatory Analysis",
        description:
          "Comprehensive FDA document processing \u2014 Chemistry, Manufacturing, and Controls (CM) guidance papers, drug labeling requirements (21 CFR 201.128), and advertising regulations (21 CFR 202.1). Opulent maps product attributes against regulatory requirements and identifies pre-submission gaps.",
        artifacts:
          "FDA CM papers, CFR drug labeling rules, advertising regulations, misbranding statutes (5 documents across 3 tasks)",
      },
      {
        title: "Healthcare Facility Compliance",
        description:
          "Texas Administrative Code analysis across 5 healthcare regulatory sections \u2014 admission policies (Section 553.259), patient rights (Section 553.267), emergency preparedness (Section 553.275), coordination of care (Section 553.261), and employee qualifications (Section 553.253). Opulent generates facility-specific compliance matrices with gap analysis.",
        artifacts:
          "5 Texas Administrative Code sections covering full operational compliance",
      },
    ],
  },
  {
    id: "manufacturing-building",
    icon: Factory,
    badge: "4 Validated Tasks  \u00b7  Operations & Safety",
    title: "Manufacturing & Building Operations",
    subtitle:
      "Multi-year operations data and safety specification analysis \u2014 4 validated tasks across manufacturing analytics and building compliance.",
    useCases: [
      {
        title: "Manufacturing Site Analytics",
        description:
          "Five-year operational analysis (2020-2024) across manufacturing sites. Opulent processes production data, identifies efficiency trends, calculates OEE (Overall Equipment Effectiveness), detects capacity constraints, and generates operations review dashboards.",
        artifacts:
          "Manufacturing site operations datasets spanning 2020-2024 (XLSX, 2 task instances)",
      },
      {
        title: "Building Safety & Fire Door Specifications",
        description:
          "Comparative analysis of fire-rated door products \u2014 SentinelGuard FD60, AegisCore FR60, and Fireline Veritas FR60. Opulent extracts performance specifications, compares against building code requirements, and generates procurement comparison matrices with compliance verification.",
        artifacts:
          "Three FR60-rated fire door specification sheets (PDF)",
      },
      {
        title: "Transportation Operations",
        description:
          "Bus fleet operations data analysis \u2014 route optimization, schedule adherence, and operational efficiency metrics. Opulent processes transportation datasets and identifies underperforming routes, peak demand patterns, and resource allocation improvements.",
        artifacts: "Bus operations dataset (XLSX)",
      },
    ],
  },
  {
    id: "market-intelligence",
    icon: LineChart,
    badge: "9 Validated Tasks  \u00b7  Strategy & Forecasting",
    title: "Market Intelligence & Corporate Strategy",
    subtitle:
      "From autonomous vehicle forecasts to spinoff planning \u2014 9 validated tasks across forecasting, pricing, and competitive intelligence.",
    useCases: [
      {
        title: "Autonomous Vehicle Market Forecasting",
        description:
          "Dual-source market analysis \u2014 2026 autonomous market forecasts combined with company-specific market share projections (AmensaDrive). Opulent synthesizes macro forecasts with competitive positioning data and generates scenario-based investment theses.",
        artifacts:
          "Industry forecast + company-specific market share projections (2 PDFs)",
      },
      {
        title: "Corporate Restructuring",
        description:
          "Strategic spinoff plan analysis (Harborview Strategic Solutions). Opulent evaluates separation mechanics, standalone financial viability, tax implications, and stakeholder impact. Generates board-ready assessment with risk-adjusted valuation ranges.",
        artifacts: "Corporate spinoff plan (PDF)",
      },
      {
        title: "Pricing Strategy Optimization",
        description:
          "Multi-format pricing analysis \u2014 visual optimization curves (price multiplier charts, subscriber growth), combined with presentation-format pricing models (usage-based pricing). Opulent processes both quantitative data and strategic frameworks to recommend pricing tiers.",
        artifacts:
          "Pricing optimization charts (PNG), subscriber analytics (PNG), pricing model deck (PPTX)",
      },
      {
        title: "Competitive Intelligence",
        description:
          "Real-time competitor data processing. Opulent ingests competitive datasets, identifies market positioning shifts, surfaces pricing differentials, and generates strategic response recommendations with competitive battle cards.",
        artifacts: "Competitor data spreadsheets (XLSX)",
      },
      {
        title: "Decision Scoring Frameworks",
        description:
          "Multi-criteria decision analysis \u2014 Opulent processes scoring matrices, validates weighting methodologies, runs sensitivity analysis on criteria weights, and generates ranked recommendation reports with confidence intervals.",
        artifacts: "Decision criteria scoring documents (PDF)",
      },
      {
        title: "Market Share Targeting",
        description:
          "Capacity and market share targeting analysis. Opulent evaluates current market position against aspirational targets, identifies growth vectors, and models the operational requirements to achieve target share allocations.",
        artifacts: "Target seat share analysis (PDF)",
      },
      {
        title: "Survey Research Synthesis",
        description:
          "Multi-wave survey analysis (Helios F1, F2, F3 datasets). Opulent processes survey results across segments, identifies statistically significant trends, correlates responses across waves, and generates insight reports with visualization recommendations.",
        artifacts: "Three survey result datasets (XLSX)",
      },
    ],
  },
  {
    id: "government-policy",
    icon: Building2,
    badge: "4 Validated Tasks  \u00b7  Trade & Legislative",
    title: "Government, Policy & Regulation",
    subtitle:
      "Trade policy to legislative analysis \u2014 4 validated tasks covering tariff modeling, fiscal policy, and congressional bill analysis.",
    useCases: [
      {
        title: "Trade Policy Analysis",
        description:
          "White House policy document processing \u2014 reciprocal tariff rate modifications. Opulent extracts rate schedules, identifies affected product categories (HTS codes), models cost impact on supply chains, and generates compliance guidance for affected importers.",
        artifacts: "White House tariff policy documents (PDF)",
      },
      {
        title: "Economic Policy Modeling",
        description:
          "Fiscal and monetary policy multiplier analysis. Opulent processes policy mix charts, evaluates multiplier assumptions, and generates scenario models showing the impact of different policy combinations on economic output.",
        artifacts: "Policy mix and multiplier analysis (PDF)",
      },
      {
        title: "Legislative Impact Assessment",
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
    badge: "5 Validated Tasks  \u00b7  HR, Metrics & Communications",
    title: "Enterprise Operations",
    subtitle:
      "HR analytics, product metrics, and communications intelligence \u2014 5 validated tasks for operational workflows.",
    useCases: [
      {
        title: "Employee Compensation Analytics",
        description:
          "Wage data analysis for workforce planning. Opulent processes compensation datasets, identifies pay equity gaps, benchmarks against market rates, generates band analysis reports, and surfaces compliance risks under equal pay regulations.",
        artifacts: "Employee wage datasets (XLSX)",
      },
      {
        title: "Product Launch Metrics",
        description:
          "Launch KPI tracking and target analysis. Opulent ingests target metric definitions, builds tracking dashboards, monitors actuals against plan, and generates launch performance scorecards with variance commentary.",
        artifacts: "Launch target metrics documentation (PDF)",
      },
      {
        title: "Business Performance Analytics",
        description:
          "Quarterly statistics processing (Elastic Q2-26). Opulent extracts performance KPIs, computes quarter-over-quarter trends, benchmarks against guidance, and generates earnings preview analysis suitable for investor communications.",
        artifacts: "Quarterly performance statistics (PDF)",
      },
      {
        title: "Email Intelligence & Communications Audit",
        description:
          "Multi-source email analysis \u2014 summit correspondence, email chains, and professional communications (Dr. Anne John). Opulent processes email compilations, extracts action items, identifies decision threads, maps stakeholder positions, and generates structured communication summaries.",
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

export default function UseCasesPage() {
  return (
    <main className="pt-20">
      <UseCasesHero />
      <BenchmarkStats />
      {industries.map((industry) => (
        <IndustrySection key={industry.id} {...industry} />
      ))}
      <BenchmarkSummary />
      <UseCasesCTA />
    </main>
  );
}
