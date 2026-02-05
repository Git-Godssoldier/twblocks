import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const UseCasesCTA = () => (
  <div className="w-full py-20 lg:py-40">
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
            Opulent processes all document formats with autonomous extraction,
            cross-referencing, and synthesis — no manual preprocessing required.
            Every use case above is validated against real enterprise documents.
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
  </div>
);
