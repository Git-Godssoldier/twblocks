import { Badge } from "@/components/ui/badge";
import { type LucideIcon } from "lucide-react";

interface UseCase {
  title: string;
  description: string;
  artifacts: string;
}

interface IndustrySectionProps {
  id: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  subtitle: string;
  useCases: UseCase[];
}

export const IndustrySection = ({
  id,
  icon: Icon,
  badge,
  title,
  subtitle,
  useCases,
}: IndustrySectionProps) => (
  <div id={id} className="w-full py-20 lg:py-32 scroll-mt-24">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-md border bg-muted">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left text-balance">
                {title}
              </h2>
            </div>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
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
  </div>
);
