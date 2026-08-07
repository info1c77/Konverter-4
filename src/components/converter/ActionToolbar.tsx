import { Button } from "@/components/ui/button";
import { Copy, Download, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ActionToolbarProps {
  fullHtml: string;
  onClear: () => void;
}

export function ActionToolbar({ fullHtml, onClear }: ActionToolbarProps) {
  const handleCopy = async () => {
    if (!fullHtml.trim()) {
      toast({
        title: "Нечего копировать",
        description: "Сначала введите Markdown в редакторе.",
        variant: "destructive",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(fullHtml);
      toast({
        title: "Скопировано в буфер",
        description: "HTML-код скопирован в буфер обмена.",
      });
    } catch {
      toast({
        title: "Ошибка копирования",
        description: "Не удалось скопировать. Проверьте разрешения браузера.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    if (!fullHtml.trim()) {
      toast({
        title: "Нечего скачивать",
        description: "Сначала введите Markdown в редакторе.",
        variant: "destructive",
      });
      return;
    }
    const blob = new Blob([fullHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast({
      title: "Файл скачан",
      description: "converted.html сохранён на ваше устройство.",
    });
  };

  const handleClear = () => {
    onClear();
    toast({
      title: "Редактор очищен",
      description: "Содержимое редактора удалено.",
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" onClick={handleCopy} className="gap-2">
        <Copy className="h-4 w-4" />
        Копировать HTML
      </Button>
      <Button variant="outline" onClick={handleDownload} className="gap-2">
        <Download className="h-4 w-4" />
        Скачать HTML
      </Button>
      <Button
        variant="ghost"
        onClick={handleClear}
        className="gap-2 text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="h-4 w-4" />
        Очистить
      </Button>
    </div>
  );
}
