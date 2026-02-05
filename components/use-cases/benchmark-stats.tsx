import {
  Landmark,
  Scale,
  HeartPulse,
  Factory,
  LineChart,
  Building2,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Landmark,
    label: "Financial Services",
    tasks: "14 tasks",
  },
  {
    icon: Scale,
    label: "Legal & Compliance",
    tasks: "12 tasks",
  },
  {
    icon: HeartPulse,
    label: "Healthcare & Pharma",
    tasks: "4 tasks",
  },
  {
    icon: Factory,
    label: "Manufacturing & Building",
    tasks: "4 tasks",
  },
  {
    icon: LineChart,
    label: "Market Intelligence",
    tasks: "9 tasks",
  },
  {
    icon: Building2,
    label: "Government & Policy",
    tasks: "4 tasks",
  },
  {
    icon: Briefcase,
    label: "Enterprise Operations",
    tasks: "5 tasks",
  },
];

export const BenchmarkStats = () => (
  <div className="w-full py-12 lg:py-20 border-y">
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-4">
        {industries.map((item) => (
          <a
            key={item.label}
            href={`#${item.label.toLowerCase().replace(/[&\s]+/g, "-")}`}
            className="flex flex-col items-center gap-2 text-center group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-md border bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium leading-tight">{item.label}</p>
            <p className="text-xs text-muted-foreground">{item.tasks}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
);
