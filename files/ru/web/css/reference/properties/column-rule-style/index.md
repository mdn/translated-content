---
title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
original_slug: Web/CSS/column-rule-style
---

{{ CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`column-rule-style`** устанавливает стиль линии, расположенной между колонками при мультиколоночной вёрстке.

{{InteractiveExample("CSS Demo: column-rule-style")}}

```css interactive-example-choice
column-rule-style: none;
```

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: solid;
```

```css interactive-example-choice
column-rule-style: double;
```

```css interactive-example-choice
column-rule-style: ridge;
column-rule-color: #88f;
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
  columns: 3;
  column-rule: solid;
  text-align: left;
}
```

## Синтаксис

```css
/* <'border-style'> значения */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Глобальные значения */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: unset;
```

Свойство `column-rule-style` указывается как одиночное `<'border-style'>` значение.

### Значения

- `<'border-style'>`
  - : Ключевое слово, определяющее {{ cssxref("border-style") }}, описывающий стиль для линии, разделяющей столбцы. Стилизация должна быть интерпретирована как разрушающая границы модель.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-style`
  property is used to change the style of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

### Результат

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}
