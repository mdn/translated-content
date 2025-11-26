---
title: grid-template-areas
slug: Web/CSS/Reference/Properties/grid-template-areas
original_slug: Web/CSS/grid-template-areas
---

{{CSSRef}}

CSS-свойство **`grid-template-areas`** создаёт {{glossary("grid areas", "грид-области")}} путём размещения именованных ячеек в грид-раскладке.

{{InteractiveExample("CSS Demo: grid-template-areas")}}

```css interactive-example-choice
grid-template-areas:
  "a a a"
  "b c c"
  "b c c";
```

```css interactive-example-choice
grid-template-areas:
  "b b a"
  "b b c"
  "b b c";
```

```css interactive-example-choice
grid-template-areas:
  "a a ."
  "a a ."
  ". b c";
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One (a)</div>
      <div>Two (b)</div>
      <div>Three (c)</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

Создаваемые области не связаны с конкретным грид-элементом, но их можно указать в свойствах {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, или в их сокращённых вариантах: {{cssxref("grid-row")}}, {{cssxref("grid-column")}} и {{cssxref("grid-area")}}.

## Синтаксис

```css
/* Ключевые слова */
grid-template-areas: none;

/* Строка (<string>) в качестве значения */
grid-template-areas: "a b";
grid-template-areas:
  "a b b"
  "a c d";

/* Глобальные значения */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: revert;
grid-template-areas: unset;
```

### Значения

- `none`
  - : Грид-контейнер не определяет именованных грид-областей.
- `{{cssxref("&lt;string&gt;")}}+`
  - : На каждую строку в значении создаётся ряд, а для каждой ячейки внутри строки — колонка. Несколько ячеек с одинаковыми именами внутри и между рядами образуют единую именованную грид-область, охватывающую соответствующие грид-ячейки. Однако это происходит только в том случае, если ячейки образуют прямоугольную форму.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Создание именованных грид-областей

#### HTML

```html
<section id="page">
  <header>Шапка</header>
  <nav>Навигация</nav>
  <main>Основной контент</main>
  <footer>Подвал</footer>
</section>
```

#### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

#### Результат

{{EmbedLiveSample("Создание именованных грид-областей", "100%", "250px")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Руководство по грид-раскладке: _[Области грид-шаблона](/ru/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)_
- Видеоурок: _[Grid Template Areas](https://gridbyexample.com/video/grid-template-areas/)_
