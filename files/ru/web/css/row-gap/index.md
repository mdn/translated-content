---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-property
  - row-gap
browser-compat: css.properties.row-gap
---
{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`row-gap`** устанавливает промежуток ({{glossary("gutters","интервал")}}) между рядами.

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## Синтаксис

```css
/* Значения типа <length> */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* Значения типа <percentage> */
row-gap: 10%;

/* Глобальные значения */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: unset;
```

### Значения

- `<length-percentage>`
  - : Ширина интервала, разделяющего ряды. {{CSSxRef("&lt;percentage&gt;", "Процентные")}} значения рассчитываются относительно размера грид-элемента.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Флексбокс-раскладка

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Результат

{{EmbedLiveSample('Флексбокс-раскладка', "auto", "120px")}}

### Грид-раскладка

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Результат

{{EmbedLiveSample('Грид-раскладка', 'auto', 120)}}

## Спецификации

{{Specifications("css.properties.row-gap.grid_context")}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Похожие CSS-свойства: {{CSSxRef("column-gap")}}, {{CSSxRef("gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Интервалы](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)_
