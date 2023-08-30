---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
---

{{CSSRef}}

CSS-свойство **`grid-template-areas`** создаёт {{glossary("grid areas", "грид-области")}} путём размещения именованных ячеек в грид-раскладке.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Создаваемые области не связаны с конкретным грид-элементом, но их можно указать в свойствах {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, или в их сокращённых вариантах: {{cssxref("grid-row")}}, {{cssxref("grid-column")}} и {{cssxref("grid-area")}}.

## Синтаксис

```css
/* Ключевое слово в качестве значения */
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

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные CSS-свойства: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Руководство по грид-раскладке: _[Области грид-шаблона](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Видеоурок: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_
