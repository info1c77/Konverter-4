import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileWarning } from "lucide-react";

interface HtmlSourceProps {
  fullHtml: string;
}

export function HtmlSource({ fullHtml }: HtmlSourceProps) {
  if (!fullHtml.trim()) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <Alert className="max-w-md">
          <FileWarning className="h-4 w-4" />
          <AlertDescription>
            Нет сгенерированного HTML. Введите Markdown в редакторе.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-background overflow-hidden h-full">
      <div className="px-4 py-2.5 border-b bg-muted/50 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Исходный код HTML
        </span>
        <span className="text-xs text-muted-foreground">
          {fullHtml.length} символов
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-340px)] min-h-[400px]">
        <pre className="p-4 text-xs font-mono leading-relaxed whitespace-pre-wrap break-words">
          <code>{fullHtml}</code>
        </pre>
      </ScrollArea>
    </div>
  );
}
