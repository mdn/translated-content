---
title: column-fill
slug: Web/CSS/column-fill
---

{{CSSRef("CSS Multi-columns")}}

Свойство `column-fill` применяется к родительскому элементу, разбитому на столбцы и указывает как содержимое располагается внутри столбца (column). Если значение свойства `column-fill` установлено как balanced, то содержимое во всех столбцах будет иметь одинаковую высоту. В случае использования значения `auto`, содержимое занимает столько пространства сколько ему потребуется.

{{cssinfo}}

## Синтаксис

```css
column-fill: auto;
column-fill: balance;

/* Значения по умолчанию */
column-fill: inherit;
column-fill: initial;
column-fill: unset;
```

### Значения

- `auto`
  - : Высота столбцов не контролируется.
- `balance`
  - : Разделяет содержимое на равные по высоте столбцы.

### Возможные значения

{{csssyntax}}

## Примеры

```css
.content-box {
  column-count: 4;
  column-rule: 1px solid black;
  column-fill: balance;
  height: 200px;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
