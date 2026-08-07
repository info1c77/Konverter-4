import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MarkdownEditor } from "./MarkdownEditor";
import { HtmlPreview } from "./HtmlPreview";
import { HtmlSource } from "./HtmlSource";
import { FileCode2, Eye, Code2, PenLine } from "lucide-react";

interface ConverterTabsProps {
  markdown: string;
  onMarkdownChange: (value: string) => void;
  fileName: string;
  html: string;
  fullHtml: string;
  isDark: boolean;
}

export function ConverterTabs({
  markdown,
  onMarkdownChange,
  fileName,
  html,
  fullHtml,
  isDark,
}: ConverterTabsProps) {
  return (
    <Tabs defaultValue="editor" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-4 h-11">
        <TabsTrigger value="editor" className="gap-2">
          <PenLine className="h-4 w-4" />
          <span>Редактор</span>
        </TabsTrigger>
        <TabsTrigger value="preview" className="gap-2">
          <Eye className="h-4 w-4" />
          <span>Предпросмотр</span>
        </TabsTrigger>
        <TabsTrigger value="source" className="gap-2">
          <Code2 className="h-4 w-4" />
          <span>HTML-код</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="editor" className="mt-0">
        <div className="rounded-lg border bg-background p-4 h-full">
          <MarkdownEditor
            value={markdown}
            onChange={onMarkdownChange}
            fileName={fileName}
          />
        </div>
      </TabsContent>

      <TabsContent value="preview" className="mt-0">
        <HtmlPreview html={html} isDark={isDark} />
      </TabsContent>

      <TabsContent value="source" className="mt-0">
        <HtmlSource fullHtml={fullHtml} />
      </TabsContent>
    </Tabs>
  );
}
