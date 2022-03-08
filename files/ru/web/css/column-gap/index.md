---
title: column-gap (grid-column-gap)
slug: Web/CSS/column-gap
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Multi-column Layout
  - CSS Property
  - Reference
  - column-gap
  - recipe:css-property
browser-compat: css.properties.column-gap
---
{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`column-gap`** устанавливает промежуток ({{glossary("Gutters","интервал")}}) между колонками.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

Изначально свойство появилось в [многоколоночной раскладке](/ru/docs/Web/CSS/CSS_Columns). Позже оно перекочевало в другие методы раскладки, и теперь `column-gap` определено в спецификации [Box Alignment](/ru/docs/Web/CSS/CSS_Box_Alignment). А значит может использоваться в многоколоночной, флексбокс- и грид-раскладках.

## Синтаксис

```css
/* Значение в виде ключевого слова */
column-gap: normal;

/* Значение типа <length> */
column-gap: 3px;
column-gap: 2.5em;

/* Значение типа <percentage> */
column-gap: 3%;

/* Глобальные значения */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: unset;
```

Свойство `column-gap` может быть задано одним из значений, перечисленных ниже.

### Значений

- `normal`
  - : Между колонками используется стандартное расстояние, определённое браузером. В случае многоколоночной раскладки это будет `1em`. Для всех остальных типов раскладки это значение равно нулю.
- {{CSSxRef("&lt;length&gt;")}}
  - : Размер промежутка между колонками, определяемое единицам измерения {{CSSxRef("&lt;length&gt;", "длины")}}. Значение {{CSSxRef("&lt;length&gt;")}} должно быть положительным.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Размер промежутка между колонками, указанный в {{CSSxRef("&lt;percentage&gt;", "процентах")}}. Значение {{CSSxRef("&lt;percentage&gt;")}} должно быть положительным.

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
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

#### Результат

{{EmbedLiveSample("Флексбокс-раскладка", "auto", "120px")}}

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
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Результат

{{EmbedLiveSample("Грид-раскладка", "auto", "120px")}}

### Многоколоночная раскладка

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column
  gap created with the CSS `column-gap` property.
  Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### Результат

{{EmbedLiveSample("Многоколоночная раскладка", "auto", "120px")}}

## Спецификации

{{Specifications("css.properties.column-gap.grid_context")}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Похожие CSS-свойства: {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Интервалы](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)_
- Руководство по многоколоночной раскладке: _[Стилизация колонок](/ru/docs/Web/CSS/CSS_Columns/Styling_Columns)_
