import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  fileName: string;
}

export function MarkdownEditor({ value, onChange, fileName }: MarkdownEditorProps) {
  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const charCount = value.length;
  const lineCount = value ? value.split("\n").length : 0;

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            Редактор Markdown
          </span>
          {fileName && (
            <Badge variant="secondary" className="font-normal">
              {fileName}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{lineCount} строк</span>
          <span className="text-border">·</span>
          <span>{wordCount} слов</span>
          <span className="text-border">·</span>
          <span>{charCount} символов</span>
        </div>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"# Заголовок\n\nВведите ваш **Markdown** здесь...\n\n- Пункт 1\n- Пункт 2\n\n[Ссылка](https://example.com)"}
        className="flex-1 min-h-[400px] resize-none font-mono text-sm leading-relaxed"
        spellCheck={false}
      />
    </div>
  );
}
