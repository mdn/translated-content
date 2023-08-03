---
title: gap (grid-gap)
slug: Web/CSS/gap
---

{{CSSRef}}

Свойство **`gap`** [CSS](/ru/docs/Web/CSS) задаёт {{glossary("gutters","отступы")}} между колонками и рядами. Является [сокращением](/ru/docs/Web/CSS/Shorthand_properties) для свойств {{CSSxRef("row-gap")}} и {{CSSxRef("column-gap")}}.

{{EmbedInteractiveExample("pages/css/gap.html")}}

Обратите внимание, что `grid-gap` является псевдонимом для этого свойства.

## Синтаксис

```css
/* One <length> value */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* One <percentage> value */
gap: 16%;
gap: 100%;

/* Two <length> values */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* One or two <percentage> values */
gap: 16% 100%;
gap: 21px 82%;

/* calc() values */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Global values */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

Свойство задаёт значение для `<'row-gap'>`, за которым может следовать значение для `<'column-gap'>`. Если `<'column-gap'>` опущено, то оно устанавливается в то же значение, что и `<'row-gap'>`.

`<'row-gap'>` и `<'column-gap'>` могут быть заданы как `<length>`, так и `<percentage>`.

### Значения

- {{CSSxRef("&lt;length&gt;")}}
  - : Размер отступа, разделяющего линии сетки.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Размер отступа, разделяющего линии сетки, относительно размера грид-элемента.

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
  gap: 20px 5px;
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

{{EmbedLiveSample("Флексбокс-раскладка", "auto", 250)}}

### Грид-раскладка

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
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
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Результат

{{EmbedLiveSample("Грид-раскладка", "auto", 250)}}

### Многоколоночная раскладка

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Результат

{{EmbedLiveSample("Многоколоночная_раскладка", "auto", "120px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Похожие CSS-свойства: {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Отступы](/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)_
