import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: true,
});

export function convertMarkdownToHtml(markdown: string): string {
  return marked.parse(markdown) as string;
}

export function buildFullHtmlDocument(bodyHtml: string, isDark: boolean): string {
  const themeAttr = isDark ? ' data-bs-theme="dark"' : "";
  return `<!DOCTYPE html>
<html lang="ru"${themeAttr}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Конвертированный документ</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
</head>
<body>
  <div class="container my-4">
${bodyHtml
  .split("\n")
  .map((line) => "    " + line)
  .join("\n")}
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;
}
