import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FileWarning } from "lucide-react";

interface HtmlPreviewProps {
  html: string;
  isDark: boolean;
}

export function HtmlPreview({ html, isDark }: HtmlPreviewProps) {
  if (!html.trim()) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <Alert className="max-w-md">
          <FileWarning className="h-4 w-4" />
          <AlertDescription>
            Нет содержимого для предпросмотра. Введите Markdown в редакторе.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-background overflow-hidden">
      <div className="px-4 py-2.5 border-b bg-muted/50 flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Предпросмотр HTML
        </span>
        <span className="text-xs text-muted-foreground">
          {isDark ? "Тёмная тема" : "Светлая тема"}
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-340px)] min-h-[400px]">
        <div
          className="bootstrap-preview p-4"
          data-bs-theme={isDark ? "dark" : "light"}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </ScrollArea>
    </div>
  );
}
