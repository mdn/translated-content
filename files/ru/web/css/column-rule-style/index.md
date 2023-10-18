---
title: column-rule-style
slug: Web/CSS/column-rule-style
---

{{ CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`column-rule-style`** устанавливает стиль линии, расположенной между колонками при мультиколоночной вёрстке.

{{EmbedInteractiveExample("pages/css/column-rule-style.html")}}

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

/* глобальные значения */
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

## Поддержка браузерами

{{Compat}}
