import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FileUploadProps {
  onFileLoaded: (content: string, fileName: string) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function FileUpload({ onFileLoaded }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast({
        title: "Файл слишком большой",
        description: "Максимальный размер файла — 5 МБ.",
        variant: "destructive",
      });
      return;
    }

    const isMarkdown =
      file.name.endsWith(".md") ||
      file.name.endsWith(".markdown") ||
      file.name.endsWith(".txt") ||
      file.type === "text/markdown" ||
      file.type === "text/plain";

    if (!isMarkdown) {
      toast({
        title: "Неподдерживаемый формат",
        description: "Загрузите файл с расширением .md, .markdown или .txt",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        onFileLoaded(content, file.name);
        toast({
          title: "Файл загружен",
          description: `«${file.name}» успешно загружен в редактор.`,
        });
      }
    };
    reader.onerror = () => {
      toast({
        title: "Ошибка чтения",
        description: "Не удалось прочитать файл. Попробуйте снова.",
        variant: "destructive",
      });
    };
    reader.readAsText(file);

    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".md,.markdown,.txt,text/markdown,text/plain"
        onChange={handleFileChange}
        className="hidden"
        id="md-file-input"
      />
      <Button
        variant="outline"
        onClick={() => inputRef.current?.click()}
        className="gap-2"
      >
        <Upload className="h-4 w-4" />
        Загрузить .md
      </Button>
      <span className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <FileText className="h-4 w-4" />
        <span>или начните печатать ниже</span>
      </span>
    </>
  );
}
