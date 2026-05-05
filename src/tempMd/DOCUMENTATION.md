# LogiFlow — Документация сайта логистики и складского хранения

## Оглавление
1. [Обзор проекта](#1-обзор-проекта)
2. [Стек технологий](#2-стек-технологий)
3. [Структура файлов](#3-структура-файлов)
4. [Цветовая тема](#4-цветовая-тема)
5. [Компоненты Layout](#5-компоненты-layout)
6. [18 секций главной страницы](#6-18-секций-главной-страницы)
7. [Использованные shadcn/ui компоненты](#7-использованные-shadcnui-компоненты)
8. [Роутинг и навигация](#8-роутинг-и-навигация)
9. [Запуск и сборка](#9-запуск-и-сборка)
10. [Расширение и кастомизация](#10-расширение-и-кастомизация)

---

## 1. Обзор проекта

**LogiFlow** — одностраничный сайт (SPA) для компании, предоставляющей услуги логистики, грузоперевозок и складского хранения.

### Ключевые характеристики
- **Тип:** одностраничное приложение (SPA) с плавной прокруткой к секциям
- **Язык:** TypeScript + React 18
- **Сборщик:** Vite (rolldown-vite 7.x)
- **UI-библиотека:** shadcn/ui (Radix UI primitives)
- **Тематика:** логистика и складское хранение, B2B-направленность
- **Локализация:** русскоязычный контент, дата-форматирование через `date-fns/locale/ru`

---

## 2. Стек технологий

| Технология | Версия | Назначение |
|---|---|---|
| React | 18.x | UI-фреймворк |
| TypeScript | 5.x | Строгая типизация |
| Vite (rolldown) | 7.1.x | Сборщик, dev-server |
| Tailwind CSS | 3.4.x | Утилитарные CSS-стили |
| shadcn/ui + Radix UI | latest | Готовые компоненты |
| lucide-react | 0.519.x | Иконки |
| react-router-dom | 6.26.x | Клиентский роутинг |
| embla-carousel-react | 8.3.x | Карусель (FleetSection) |
| react-day-picker | 8.10.x | Компонент Calendar |
| date-fns | 3.6.x | Утилиты для дат, `ru` locale |
| cmdk | 1.0.x | Command-palette (TrackingSection) |
| vaul | latest | Drawer (мобильный Header) |
| @tanstack/react-query | 5.x | Query-клиент (App.tsx) |
| zod | 3.x | Схемы валидации (доступен) |
| react-hook-form | 7.x | Формы (доступен) |
| recharts | 2.x | Графики (доступен) |

---

## 3. Структура файлов

```
src/
├── App.tsx                          # Корневой компонент, роутер, провайдеры
├── main.tsx                         # Точка входа React
├── index.css                        # Глобальные стили, CSS-переменные shadcn, кастомные классы
├── pages/
│   ├── Index.tsx                    # Главная страница — компонует все 18 секций
│   └── NotFound.tsx                 # Страница 404
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Шапка сайта
│   │   ├── Footer.tsx               # Подвал сайта
│   │   └── Layout.tsx               # Обёртка: Header + children + Footer
│   ├── sections/
│   │   ├── HeroSection.tsx          # Секция 1 — Главный экран
│   │   ├── ServicesSection.tsx      # Секция 2 — Услуги
│   │   ├── StatsSection.tsx         # Секция 3 — Статистика
│   │   ├── AboutSection.tsx         # Секция 4 — О компании
│   │   ├── FeaturesSection.tsx      # Секция 5 — Преимущества
│   │   ├── HowItWorksSection.tsx    # Секция 6 — Как мы работаем
│   │   ├── PricingSection.tsx       # Секция 7 — Тарифы
│   │   ├── FleetSection.tsx         # Секция 8 — Автопарк
│   │   ├── WarehouseSection.tsx     # Секция 9 — Склады
│   │   ├── TrackingSection.tsx      # Секция 10 — Отслеживание грузов
│   │   ├── PartnersSection.tsx      # Секция 11 — Партнёры
│   │   ├── TestimonialsSection.tsx  # Секция 12 — Отзывы
│   │   ├── TeamSection.tsx          # Секция 13 — Команда
│   │   ├── FaqSection.tsx           # Секция 14 — FAQ
│   │   ├── CalculatorSection.tsx    # Секция 15 — Калькулятор стоимости
│   │   ├── ContactSection.tsx       # Секция 16 — Контакты и форма
│   │   ├── BlogSection.tsx          # Секция 17 — Блог и новости
│   │   └── CtaBannerSection.tsx     # Секция 18 — Финальный CTA-баннер
│   └── ui/                          # shadcn/ui компоненты (без изменений)
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
└── lib/
    └── utils.ts                     # cn() утилита
```

---

## 4. Цветовая тема

Тема определена в `src/index.css` через CSS-переменные Tailwind/shadcn.

### Переменные светлой темы (`:root`)

| Переменная | Значение HSL | Описание |
|---|---|---|
| `--background` | `210 25% 98%` | Фон страницы (голубоватый светлый) |
| `--foreground` | `215 25% 15%` | Основной цвет текста (тёмно-синий) |
| `--primary` | `215 65% 18%` | Главный цвет бренда (глубокий тёмно-синий) |
| `--primary-foreground` | `0 0% 98%` | Текст на primary-фоне |
| `--secondary` | `210 20% 93%` | Вторичный фон (светло-серо-синий) |
| `--accent` | `25 95% 53%` | Акцентный цвет (ярко-оранжевый) |
| `--accent-foreground` | `0 0% 98%` | Текст на accent-фоне |
| `--muted` | `210 15% 90%` | Приглушённый фон |
| `--muted-foreground` | `215 15% 45%` | Приглушённый текст |
| `--card` | `0 0% 100%` | Фон карточек |
| `--border` | `215 20% 85%` | Цвет границ |
| `--ring` | `25 95% 53%` | Кольцо фокуса (accent) |

### Кастомные CSS-классы

```css
/* Полноэкранный градиент для Hero-секции */
.hero-gradient {
  background: linear-gradient(135deg, hsl(215 65% 12%) 0%, hsl(215 55% 22%) 40%, hsl(220 45% 30%) 100%);
}

/* Тёмный градиент для Stats/About-секций */
.logistics-gradient {
  background: linear-gradient(135deg, hsl(215 65% 16%) 0%, hsl(220 55% 24%) 100%);
}

/* Оранжевый градиент для CTA-баннера */
.orange-gradient {
  background: linear-gradient(135deg, hsl(25 95% 45%) 0%, hsl(30 90% 55%) 100%);
}

/* Сеточный оверлей (декоративная сетка поверх градиентов) */
.section-grid-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

---

## 5. Компоненты Layout

### `Header.tsx`

Постоянно-фиксированный заголовок страницы.

**Структура:**
1. **Верхняя информационная полоса** (скрывается при прокрутке):
   - Контакты: телефон (Tooltip), e-mail, время работы
   - Значки социальных сетей (VK, Telegram, WhatsApp)
2. **Основная навигационная полоса:**
   - Логотип LogiFlow с `Badge` рейтинга
   - `NavigationMenu` с выпадающим меню услуг (6 пунктов)
   - Ссылки: О нас, Склады, Отслеживание, Контакты
   - Кнопка «Заказать звонок» (Button + accent)
   - Мобильный `Sheet` (drawer) с полным меню
3. **Анкорная навигация** — все ссылки ведут к `#id` секций

**shadcn компоненты:** `NavigationMenu`, `NavigationMenuContent`, `NavigationMenuTrigger`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuLink`, `Sheet`, `SheetContent`, `SheetTrigger`, `SheetHeader`, `Button`, `Badge`, `Separator`, `Tooltip`, `TooltipProvider`

---

### `Footer.tsx`

Многоколоночный подвал.

**Структура:**
1. **Бренд-колонка:** логотип, описание, сертификаты (`Badge`), иконки соцсетей с `Tooltip`
2. **Услуги:** список со ссылками
3. **Компания:** навигационные ссылки (О нас, Команда, Вакансии и т.д.)
4. **Клиентам:** ссылки (Отслеживание, Калькулятор, FAQ и т.д.)
5. **Контакты:** адрес, телефон, e-mail, время работы
6. **Рассылка:** `Input` + `Button`, после подписки — уведомление `useToast`
7. **Copyright-строка** с `Separator`

---

### `Layout.tsx`

```tsx
export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
```

---

## 6. 18 секций главной страницы

### Секция 1 — `HeroSection` (`#hero`)

**Назначение:** первый экран, захват внимания, быстрый ввод трекинг-номера.

**Функциональность:**
- Градиентный фон `.hero-gradient` с декоративной сеткой
- Строка поиска отслеживания груза (Input + Button)
- Анимированные счётчики статистики (4 показателя)
- `Alert` с акционным предложением
- `Dialog` «Подробнее о компании» (модальное окно)
- CTA кнопки с плавной прокруткой к секциям

**shadcn компоненты:** `Badge`, `Input`, `Button`, `Alert`, `AlertTitle`, `AlertDescription`, `Dialog`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `Tooltip`, `TooltipProvider`, `ScrollArea`

---

### Секция 2 — `ServicesSection` (`#services`)

**Назначение:** каталог логистических услуг с фильтрацией по категориям.

**Функциональность:**
- `Tabs` с 4 категориями: Все, Перевозки, Склады, Международные
- 8 карточек услуг с иконками, описанием, временем и ценой
- `HoverCard` с расширенным описанием при наведении
- `Badge` со статусом (Популярно, Новинка и т.д.)

**shadcn компоненты:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Card`, `CardContent`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `Badge`, `HoverCard`, `HoverCardTrigger`, `HoverCardContent`, `Button`, `Separator`

---

### Секция 3 — `StatsSection` (`#stats`)

**Назначение:** ключевые показатели компании, награды.

**Функциональность:**
- 4 крупных числовых показателя с иконками
- `Progress` бары с анимацией (по каждому направлению)
- `Card` с историей наград и сертификатов
- `Tooltip` с расшифровкой метрик

**shadcn компоненты:** `Card`, `CardContent`, `Progress`, `Badge`, `Tooltip`, `TooltipProvider`, `Separator`

---

### Секция 4 — `AboutSection` (`#about`)

**Назначение:** история компании, миссия, сертификаты, руководство.

**Функциональность:**
- `Tabs` с 4 вкладками: История, Миссия, Сертификаты, Руководство
- `ScrollArea` с временной шкалой основных событий
- `Avatar` + `AvatarFallback` для фото руководителей
- `Progress` с показателями результатов по годам
- `Badge` для сертификатов и наград

**shadcn компоненты:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `ScrollArea`, `Avatar`, `AvatarFallback`, `AvatarImage`, `Progress`, `Badge`, `Card`, `Separator`

---

### Секция 5 — `FeaturesSection` (`#features`)

**Назначение:** конкурентные преимущества компании.

**Функциональность:**
- 6 карточек преимуществ с иконками
- `Accordion` в каждой карточке для раскрытия подробностей
- `Tooltip` с краткой подсказкой
- `Badge` с категорией преимущества

**shadcn компоненты:** `Card`, `CardContent`, `CardHeader`, `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`, `Badge`, `Tooltip`, `TooltipProvider`, `Separator`

---

### Секция 6 — `HowItWorksSection` (`#how-it-works`)

**Назначение:** пошаговое описание процесса работы.

**Функциональность:**
- 6 шагов с иконками и нумерацией
- `Card` для каждого шага с описанием
- Стрелки-связи между шагами (визуальная цепочка)
- `Tooltip` с уточнением по каждому шагу
- `Badge` с номером этапа

**shadcn компоненты:** `Card`, `CardContent`, `Badge`, `Tooltip`, `TooltipProvider`, `Button`, `Separator`

---

### Секция 7 — `PricingSection` (`#pricing`)

**Назначение:** тарифные планы с выбором периода оплаты.

**Функциональность:**
- `Switch` для переключения ежемесячно / ежегодно (скидка 20%)
- 3 тарифных плана: Старт, Бизнес (выделен), Корпоратив
- `Checkbox` для дополнительных опций в каждом плане
- `Badge` «Популярный» на основном тарифе
- `Tooltip` с описанием ограничений

**shadcn компоненты:** `Card`, `CardContent`, `CardHeader`, `CardFooter`, `Switch`, `Label`, `Badge`, `Checkbox`, `Tooltip`, `TooltipProvider`, `Button`, `Separator`

---

### Секция 8 — `FleetSection` (`#fleet`)

**Назначение:** демонстрация автопарка компании.

**Функциональность:**
- `Carousel` с карточками транспортных средств
- `ScrollArea` со списком технических характеристик
- `Badge` с типом груза и грузоподъёмностью
- `Tooltip` на характеристиках
- `Card` с деталями каждого ТС

**shadcn компоненты:** `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselNext`, `CarouselPrevious`, `Card`, `CardContent`, `CardHeader`, `ScrollArea`, `Badge`, `Tooltip`, `TooltipProvider`, `Separator`

---

### Секция 9 — `WarehouseSection` (`#warehouse`)

**Назначение:** информация о складской сети (4 города).

**Функциональность:**
- `Tabs` по городам: Москва, СПб, Екатеринбург, Казань
- `Table` с характеристиками склада (площадь, температура, вместимость)
- `Progress` с заполненностью склада (%) + цветовая индикация
- `Card` со списком услуг конкретного склада
- `Badge` с классом склада (A+, A, B+)

**shadcn компоненты:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Table`, `TableBody`, `TableHeader`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`, `Progress`, `Card`, `Badge`, `Tooltip`, `TooltipProvider`, `Separator`

---

### Секция 10 — `TrackingSection` (`#tracking`)

**Назначение:** интерактивная демонстрация отслеживания груза.

**Функциональность:**
- `Command` palette (cmdk) для быстрого поиска по номеру накладной
- Тестовые номера: `LF-2024-001234`, `LF-2024-005678`, `LF-2024-009900`
- `Popover` с деталями груза при выборе
- `Alert` с текущим статусом отправления
- `Progress` с процентом выполнения доставки
- Timeline-шкала с этапами доставки

**shadcn компоненты:** `Command`, `CommandInput`, `CommandList`, `CommandItem`, `CommandEmpty`, `CommandGroup`, `Popover`, `PopoverContent`, `PopoverTrigger`, `Input`, `Alert`, `AlertTitle`, `AlertDescription`, `Progress`, `Badge`, `Card`, `Button`

---

### Секция 11 — `PartnersSection` (`#partners`)

**Назначение:** витрина клиентов и партнёров.

**Функциональность:**
- 10 логотипов (аббревиатур) партнёров
- `HoverCard` с информацией о партнёре при наведении
- `Avatar` + `AvatarFallback` как замена логотипам
- `ScrollArea` для прокрутки расширенного списка
- `Badge` с типом сотрудничества (Клиент, Партнёр, Интегратор)

**shadcn компоненты:** `HoverCard`, `HoverCardTrigger`, `HoverCardContent`, `Avatar`, `AvatarFallback`, `Card`, `CardContent`, `Badge`, `ScrollArea`, `Tooltip`, `TooltipProvider`, `Separator`

---

### Секция 12 — `TestimonialsSection` (`#testimonials`)

**Назначение:** отзывы клиентов с пагинацией.

**Функциональность:**
- 9 отзывов, по 3 на странице
- `Pagination` с 3 страницами
- `Avatar` с инициалами авторов
- Визуализация рейтинга звёздами с `Tooltip`
- `Badge` с должностью автора
- `Card` для каждого отзыва

**shadcn компоненты:** `Card`, `CardContent`, `Avatar`, `AvatarFallback`, `Badge`, `Separator`, `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationPrevious`, `Tooltip`, `TooltipProvider`

---

### Секция 13 — `TeamSection` (`#team`)

**Назначение:** команда ключевых сотрудников.

**Функциональность:**
- 8 карточек с сотрудниками
- `HoverCard` с bio при наведении на фото
- `Popover` с контактной информацией (кнопка «Связаться»)
- `Avatar` с цветными инициалами
- `Badge` с должностью
- `Tooltip` на иконках социальных сетей

**shadcn компоненты:** `HoverCard`, `HoverCardTrigger`, `HoverCardContent`, `Popover`, `PopoverContent`, `PopoverTrigger`, `Avatar`, `AvatarFallback`, `Card`, `CardContent`, `CardHeader`, `CardFooter`, `Badge`, `Button`, `Separator`, `Tooltip`, `TooltipProvider`

---

### Секция 14 — `FaqSection` (`#faq`)

**Назначение:** часто задаваемые вопросы с поиском.

**Функциональность:**
- `Input` для живого поиска по вопросам и ответам
- Фильтрация по категориям (`Badge`-кнопки)
- `Accordion` для каждого вопроса/ответа
- Показ счётчика результатов
- Кнопка «Задать вопрос» с переходом к форме контактов

**shadcn компоненты:** `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`, `Input`, `Badge`, `Card`, `CardContent`, `Separator`, `Button`

---

### Секция 15 — `CalculatorSection` (`#calculator`)

**Назначение:** интерактивный калькулятор стоимости доставки.

**Функциональность:**
- `Slider` для расстояния (100 – 6 000 км)
- `Select` для типа транспорта (FTL, LTL, авиа, экспресс)
- `RadioGroup` для срочности (стандарт / срочно / экспресс)
- `Checkbox` для дополнительных услуг (страхование, упаковка, погрузка, SMS-уведомления)
- `Input` для веса, объёма и объявленной стоимости
- `Progress` анимация расчёта
- `Alert` / `Card` с результатом

**Логика расчёта:**
```
baseRate = ставка_транспорта × расстояние
urgencyMultiplier = 1.0 / 1.35 / 1.7
addOns = сумма_доп_услуг
total = baseRate × urgencyMultiplier + addOns
```

**shadcn компоненты:** `Slider`, `Select`, `SelectTrigger`, `SelectContent`, `SelectItem`, `RadioGroup`, `RadioGroupItem`, `Checkbox`, `Input`, `Label`, `Progress`, `Alert`, `AlertTitle`, `AlertDescription`, `Card`, `CardContent`, `CardHeader`, `Button`, `Tooltip`, `TooltipProvider`, `Separator`, `Badge`

---

### Секция 16 — `ContactSection` (`#contact`)

**Назначение:** форма обратной связи и контактная информация.

**Функциональность:**
- `Calendar` (react-day-picker) в `Popover` для выбора даты (locale `ru`)
- `Switch` для режима «Срочное обращение» + условный `Alert`
- `Select` для типа услуги
- `Input` для имени, телефона, e-mail, компании
- `Textarea` для сообщения
- `Checkbox` для согласия на обработку данных и подписки
- `Tooltip` на деактивированной кнопке отправки
- `Card` с контактными данными (4 блока)

**shadcn компоненты:** `Calendar`, `Popover`, `PopoverContent`, `PopoverTrigger`, `Switch`, `Alert`, `AlertDescription`, `Select`, `Input`, `Textarea`, `Checkbox`, `Label`, `Button`, `Tooltip`, `TooltipProvider`, `Separator`, `Card`, `CardContent`, `Badge`

---

### Секция 17 — `BlogSection` (`#blog`)

**Назначение:** новостной блог компании.

**Функциональность:**
- `Tabs` с категориями: Все, Новости, Советы, Кейсы
- При смене вкладки — `Skeleton` анимация загрузки (400 мс)
- 6 статей с карточками (`Card`)
- `HoverCard` с деталями статьи
- `Pagination` по 3 статьи на страницу
- `Badge` с цветовой кодировкой категорий

**shadcn компоненты:** `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`, `Card`, `CardContent`, `CardHeader`, `CardFooter`, `CardTitle`, `CardDescription`, `Badge`, `HoverCard`, `HoverCardTrigger`, `HoverCardContent`, `Skeleton`, `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationNext`, `PaginationPrevious`, `Separator`, `Button`

---

### Секция 18 — `CtaBannerSection` (`#cta-banner`)

**Назначение:** финальный призыв к действию с формой быстрой заявки.

**Функциональность:**
- Оранжевый `.orange-gradient` фон с декоративными кругами
- Левая колонка: заголовок, 4 гарантии, контактные каналы с `Tooltip`
- Правая колонка: быстрая форма в `Card` (белый фон)
- `RadioGroup` для выбора интересующей услуги (4 варианта, styled как кнопки)
- `Input` для имени и телефона
- `Button` с состоянием загрузки (spinner)
- `Alert` успешной отправки + `Tooltip` при незаполненной форме
- `Tooltip` на недоступной кнопке

**shadcn компоненты:** `Card`, `CardContent`, `Badge`, `Button`, `Input`, `Label`, `Alert`, `AlertTitle`, `AlertDescription`, `Separator`, `RadioGroup`, `RadioGroupItem`, `Tooltip`, `TooltipProvider`

---

## 7. Использованные shadcn/ui компоненты

### Полная таблица компонентов

| Компонент | Использован в секциях |
|---|---|
| `Accordion` | FeaturesSection (5), FaqSection (14) |
| `Alert` | HeroSection (1), TrackingSection (10), CalculatorSection (15), ContactSection (16), CtaBannerSection (18) |
| `Avatar` | AboutSection (4), PartnersSection (11), TestimonialsSection (12), TeamSection (13), BlogSection (17) |
| `Badge` | Все секции (1–18) |
| `Button` | Все секции (1–18) |
| `Calendar` | ContactSection (16) |
| `Card` | Все секции (1–18) |
| `Carousel` | FleetSection (8) |
| `Checkbox` | PricingSection (7), CalculatorSection (15), ContactSection (16) |
| `Command` | TrackingSection (10) |
| `Dialog` | HeroSection (1) |
| `HoverCard` | ServicesSection (2), PartnersSection (11), TeamSection (13), BlogSection (17) |
| `Input` | HeroSection (1), TrackingSection (10), CalculatorSection (15), ContactSection (16), CtaBannerSection (18), Footer |
| `Label` | PricingSection (7), CalculatorSection (15), ContactSection (16), CtaBannerSection (18) |
| `NavigationMenu` | Header |
| `Pagination` | TestimonialsSection (12), BlogSection (17) |
| `Popover` | TrackingSection (10), TeamSection (13), ContactSection (16), CtaBannerSection (18) |
| `Progress` | StatsSection (3), AboutSection (4), WarehouseSection (9), TrackingSection (10), CalculatorSection (15) |
| `RadioGroup` | CalculatorSection (15), CtaBannerSection (18) |
| `ScrollArea` | HeroSection (1), AboutSection (4), FleetSection (8), PartnersSection (11) |
| `Select` | CalculatorSection (15), ContactSection (16) |
| `Separator` | Практически все секции и Layout |
| `Sheet` | Header (мобильное меню) |
| `Skeleton` | BlogSection (17) |
| `Slider` | CalculatorSection (15) |
| `Switch` | PricingSection (7), ContactSection (16) |
| `Table` | WarehouseSection (9) |
| `Tabs` | ServicesSection (2), AboutSection (4), WarehouseSection (9), BlogSection (17) |
| `Textarea` | ContactSection (16) |
| `Toast` / `Toaster` | Footer (newsletter), App.tsx |
| `Tooltip` | Header, большинство секций |

---

## 8. Роутинг и навигация

### Структура роутинга (`App.tsx`)

```
/       →  Index (все 18 секций в одной странице)
/*      →  NotFound (страница 404)
```

### Анкорная навигация

Все ссылки в Header, Footer и кнопках используют якоря `#id`:

| ID секции | Заголовок |
|---|---|
| `#hero` | Главный экран |
| `#services` | Услуги |
| `#stats` | Статистика |
| `#about` | О компании |
| `#features` | Преимущества |
| `#how-it-works` | Как мы работаем |
| `#pricing` | Тарифы |
| `#fleet` | Автопарк |
| `#warehouse` | Склады |
| `#tracking` | Отслеживание |
| `#partners` | Партнёры |
| `#testimonials` | Отзывы |
| `#team` | Команда |
| `#faq` | FAQ |
| `#calculator` | Калькулятор |
| `#contact` | Контакты |
| `#blog` | Блог |
| `#cta-banner` | Заявка |

Плавная прокрутка активирована глобально:
```css
html { scroll-behavior: smooth; }
```

---

## 9. Запуск и сборка

### Установка зависимостей
```bash
npm install
```

### Запуск dev-сервера
```bash
npm run dev
# → http://localhost:8080
```

### Production-сборка
```bash
npm run build
```

### Предпросмотр production-сборки
```bash
npm run preview
```

### Линтинг
```bash
npm run lint
```

---

## 10. Расширение и кастомизация

### Изменение цветовой темы

Отредактируйте переменные в `src/index.css`:
```css
:root {
  --primary: /* ваш HSL */;
  --accent: /* ваш HSL */;
}
```

### Добавление новой секции

1. Создайте файл `src/components/sections/NewSection.tsx`
2. Добавьте `id="new-section"` на тег `<section>`
3. Импортируйте в `src/pages/Index.tsx`
4. Добавьте ссылку в `Header.tsx` и `Footer.tsx`

### Замена mock-данных на API

Каждая секция содержит массивы с данными в начале файла. Замените их на вызовы `fetch`/`axios` с `useEffect` или используйте `@tanstack/react-query` (уже подключён в `App.tsx`):

```tsx
import { useQuery } from "@tanstack/react-query";

const { data, isLoading } = useQuery({
  queryKey: ["services"],
  queryFn: () => fetch("/api/services").then(r => r.json()),
});
```

### Добавление новых shadcn/ui компонентов

```bash
npx shadcn@latest add <component-name>
```

### Подключение реальных данных для отслеживания

В `TrackingSection.tsx` замените объект `trackingData` на реальный API-ответ с теми же полями (`status`, `progress`, `steps[]`).

### Использование recharts для графиков

В `StatsSection.tsx` или `CalculatorSection.tsx` можно добавить:
```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
```

---

*Документация создана: декабрь 2024 | Проект: LogiFlow SPA | Версия: 1.0.0*
