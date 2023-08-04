---
title: border-image-outset
slug: Web/CSS/border-image-outset
---

{{CSSRef}}

## Описание

The **`border-image-outset`** property describes by what amount the _border image area_ extends beyond the border box.

Portions of the border image that are rendered outside the border box as a result of this property do not cause scrolling to be triggered. These areas also don't capture or cause mouse events to occur on behalf of the bordered element.

{{cssinfo}}

## Синтаксис

```css
/* border-image-outset: sides */
border-image-outset: 1.5;

/* border-image-outset: vertical horizontal */
border-image-outset: 1 1.2;

/* border-image-outset: top horizontal bottom */
border-image-outset: 30px 2 45px;

/* border-image-outset: top right bottom left */
border-image-outset: 7px 12px 14px 5px;

border-image-repeat: inherit;
```

### Значения

> **Примечание:** When a value is specified as a unitless {{cssxref("&lt;number&gt;")}}, that value is multiplied by the corresponding computed {{cssxref("border-width")}} to determine the `border-image-outset`. Negative values are invalid.

- _sides_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box in all four directions.
- _horizontal_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box in both horizontal directions (left and right).
- _vertical_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box in both vertical directions (top and bottom).
- _top_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box past its top edge.
- _bottom_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box past its bottom edge.
- _right_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box past its right edge.
- _left_
  - : Is a {{cssxref("&lt;length&gt;")}} or a {{cssxref("&lt;number&gt;")}} of the amount by which the border image area extends beyond the border box past its left edge.
- `inherit`
  - : Is a keyword indicating that all four values are inherited from each parent elements' calculated value.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
