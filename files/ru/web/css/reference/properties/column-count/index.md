---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
original_slug: Web/CSS/column-count
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`column-count`** разбивает содержимое элемента на заданное число столбцов.

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

## Синтаксис

```css
/* Ключевые слова */
column-count: auto;

/* целое значение */
column-count: 3;

/* Глобальные значения */
column-count: inherit;
column-count: initial;
column-count: unset;
```

### Значения

- `auto`
  - : Количество столбцов определяется другими свойствами CSS, такими как {{cssxref("column-width")}}.
- {{cssxref("&lt;integer&gt;")}}
  - : Является строго положительным {{cssxref("&lt;integer&gt;")}}, описывающим идеальное число столбцов, в которые будет стекаться содержимое элемента. Если {{cssxref("column-width")}}. также, не установлено в значение -`auto`, оно указывает максимально допустимое число столбцов.

### Formal syntax

{{csssyntax}}

## Пример

### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `column-count`
  property. The text is equally distributed over the columns.
</p>
```

### CSS

```css
.content-box {
  column-count: 3;
}
```

### Result

{{EmbedLiveSample('Пример', 'auto', 120)}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Multiple-column Layout](/ru/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Basic Concepts of Multicol](/ru/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
