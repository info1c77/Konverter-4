import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"}
      title={theme === "light" ? "Тёмная тема" : "Светлая тема"}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
