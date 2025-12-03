---
title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
original_slug: Web/CSS/row-gap
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`row-gap`** задаёт отступ ({{glossary("gutters","gutter")}}) между рядами.

{{InteractiveExample("CSS Demo: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## Синтаксис

```css
/* <length> values */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* <percentage> value */
row-gap: 10%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

Обратите внимание, что `grid-row-gap` является псевдонимом для этого свойства.

### Значения

- `<length-percentage>`
  - : Ширина отступа, разделяющего ряды. {{CSSxRef("&lt;percentage&gt;", "Процентные")}} значения рассчитываются относительно размера грид-элемента.

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

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Похожие CSS-свойства: {{CSSxRef("column-gap")}}, {{CSSxRef("gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Отступы](/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)_
