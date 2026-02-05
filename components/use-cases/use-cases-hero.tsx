import { Badge } from "@/components/ui/badge";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const UseCasesHero = () => (
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        <div>
          <Badge variant="outline">50 Tasks &middot; 38 Categories &middot; 80+ Documents</Badge>
        </div>
        <div className="flex gap-4 flex-col">
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular text-balance">
            Industry Use Cases
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center text-balance">
            Real-world enterprise tasks validated against the Apex Agent QA
            benchmark. Every use case below represents a real task validated
            against actual enterprise documents including LBO models, SEC
            filings, federal regulations, multi-party contracts, manufacturing
            datasets, and market forecasts.
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
  </div>
);
