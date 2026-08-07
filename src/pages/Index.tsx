import { useMemo, useState } from "react";
import { ThemeToggle } from "@/components/converter/ThemeToggle";
import { FileUpload } from "@/components/converter/FileUpload";
import { ConverterTabs } from "@/components/converter/ConverterTabs";
import { ActionToolbar } from "@/components/converter/ActionToolbar";
import { useTheme } from "@/hooks/use-theme";
import { convertMarkdownToHtml, buildFullHtmlDocument } from "@/lib/markdown";
import { FileText } from "lucide-react";

const DEFAULT_MARKDOWN = `# Добро пожаловать в конвертер Markdown → HTML

Этот инструмент превращает ваш **Markdown** в красивый **HTML** со стилями **Bootstrap 5**.

## Возможности

- Загрузка готового файла \`.md\`
- Редактор с подсчётом слов и символов
- Предпросмотр результата
- Просмотр и копирование HTML-кода
- Скачивание готового HTML-файла
- Переключение светлой и тёмной темы

## Пример форматирования

> Цитата — отличный способ выделить важную мысль.

### Список дел

- [x] Загрузить Markdown
- [x] Настроить тему
- [ ] Опубликовать документ

### Таблица

| Услуга | Цена | Срок |
|--------|------|------|
| Базовый | 500 ₽ | 1 день |
| Профи | 1500 ₽ | 3 дня |
| Премиум | 3000 ₽ | 7 дней |

### Код

\`\`\`javascript
function greet(name) {
  return \`Привет, \${name}!\`;
}
\`\`\`

### Сетка Bootstrap

<div class="row g-3">
  <div class="col-md-4">
    <div class="card text-bg-primary h-100">
      <div class="card-body">
        <h5 class="card-title">Карточка 1</h5>
        <p class="card-text">Первая колонка сетки.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-bg-success h-100">
      <div class="card-body">
        <h5 class="card-title">Карточка 2</h5>
        <p class="card-text">Вторая колонка сетки.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card text-bg-warning h-100">
      <div class="card-body">
        <h5 class="card-title">Карточка 3</h5>
        <p class="card-text">Третья колонка сетки.</p>
      </div>
    </div>
  </div>
</div>

[Подробнее о Markdown](https://www.markdownguide.org/)
`;

const Index = () => {
  const { theme, toggleTheme } = useTheme();
  const [markdown, setMarkdown] = useState<string>(DEFAULT_MARKDOWN);
  const [fileName, setFileName] = useState<string>("");

  const html = useMemo(() => convertMarkdownToHtml(markdown), [markdown]);
  const fullHtml = useMemo(
    () => buildFullHtmlDocument(html, theme === "dark"),
    [html, theme]
  );

  const handleFileLoaded = (content: string, name: string) => {
    setMarkdown(content);
    setFileName(name);
  };

  const handleClear = () => {
    setMarkdown("");
    setFileName("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Шапка */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">
                MD → HTML Конвертер
              </h1>
              <p className="text-xs text-muted-foreground">
                Markdown в HTML со стилями Bootstrap
              </p>
            </div>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      {/* Основной контент */}
      <main className="container mx-auto max-w-6xl px-4 py-6">
        {/* Панель действий */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <FileUpload onFileLoaded={handleFileLoaded} />
          <ActionToolbar fullHtml={fullHtml} onClear={handleClear} />
        </div>

        {/* Табы */}
        <ConverterTabs
          markdown={markdown}
          onMarkdownChange={setMarkdown}
          fileName={fileName}
          html={html}
          fullHtml={fullHtml}
          isDark={theme === "dark"}
        />
      </main>

      {/* Подвал */}
      <footer className="border-t mt-8">
        <div className="container mx-auto max-w-6xl px-4 py-4 text-center text-sm text-muted-foreground">
          Конвертер Markdown в HTML · Bootstrap 5 · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default Index;
