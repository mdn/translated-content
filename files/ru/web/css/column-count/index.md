---
title: column-count
slug: Web/CSS/column-count
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`column-count`** разбивает содержимое элемента на заданное число столбцов.

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## Синтаксис

```css
/* Значение, заданное ключевым словом */
column-count: auto;

/* целое значение */
column-count: 3;

/* глобальные значения */
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

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Multiple-column Layout](/ru/docs/Learn/CSS/CSS_layout/Multiple-column_Layout) (Learn Layout)
- [Basic Concepts of Multicol](/ru/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
