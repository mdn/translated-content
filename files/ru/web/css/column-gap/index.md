---
title: column-gap
slug: Web/CSS/column-gap
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`column-gap`** задаёт {{glossary("gutters","отступ")}} между колонками.

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

Изначально свойство появилось в [многоколоночной раскладке](/ru/docs/Web/CSS/CSS_multicol_layout). Позже оно перекочевало в другие методы раскладки, и теперь `column-gap` определено в спецификации [Box Alignment](/ru/docs/Web/CSS/CSS_box_alignment). А значит может использоваться в многоколоночной, флексбокс- и грид-раскладках.

Обратите внимание, что `grid-column-gap` является псевдонимом для этого свойства.

## Синтаксис

```css
/* Keyword value */
column-gap: normal;

/* <length> values */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> value */
column-gap: 3%;

/* Global values */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

Свойство `column-gap` может быть задано одним из значений, перечисленных ниже.

### Значения

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
  This is some multi-column text with a 40px column gap created with the CSS
  `column-gap` property. Don't you think that's fun and exciting? I sure do!
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

{{EmbedLiveSample("Многоколоночная_раскладка", "auto", "120px")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Похожие CSS-свойства: {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}
- Руководство по грид-раскладке: _[Основы грид-раскладки - Отступы](/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)_
- Руководство по многоколоночной раскладке: _[Стилизация колонок](/ru/docs/Web/CSS/CSS_multicol_layout/Styling_columns)_
