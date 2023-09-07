---
title: border-image-width
slug: Web/CSS/border-image-width
---

{{CSSRef}}

## Описание

he **`border-image-width`** CSS property defines the width of the border image by defining inward offsets from the border edges. If the `border-image-width` is greater than the {{cssxref("border-width")}}, then the border image extends beyond the padding (and/or content) edge.

{{cssinfo}}

## Синтаксис

```css
/* border-image-width: all */
border-image-width: 3;

/* border-image-width: vertical horizontal */
border-image-width: 2em 3em;

/* border-image-width: top horizontal bottom */
border-image-width: 5% 15% 10%;

/* border-image-width: top right bottom left */
border-image-width: 5% 2em 10% auto;

/* Global values */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

где:

- _width_
  - : Is a value denoting the width of the image used as a border to apply to all four edges. It is used only in the one-value syntax.
- _vertical_
  - : Is a value denoting the width of the image used as a border to apply to all vertical edges, that is the top and bottom edges. It is used only in the two-value syntax.
- _horizontal_
  - : Is a value denoting the width of the image used as a border to apply to all horizontal edges, that is the right and left edges. It is used only in the two- and three-value syntaxes.
- _top_
  - : Is a value denoting the width of the image used as a border to apply to the top edge. It is used only in the three- and four-value syntaxes.
- _bottom_
  - : Is a value denoting the width of the image used as a border to apply to the bottom edge. It is used only in the three- and four-value syntaxes.
- _right_
  - : Is a value denoting the width of the image used as a border to apply to the right edge. It is used only in the four-value syntax.
- _left_
  - : Is a value denoting the width of the image used as a border to apply to the left edge. It is used only in the four-value syntax.
- `inherit`
  - : Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Значения

- `<length>`
  - : Represents the width of the border. It can be an absolute or relative length. This length must not be negative.
- `<percentage>`
  - : Represents the width of the border as a percentage of the element. The percentage must not be negative.
- `<number>`
  - : Represents a multiple of the computed value of the element's {{cssxref("border-width")}} property to be used as the border width. The number must not be negative.
- `auto`
  - : Causes the border image width to equal the intrinsic width or height (whichever is applicable) of the corresponding {{cssxref("border-image-slice")}}. If the image does not have the required intrinsic dimension then the corresponding computed border-width is used instead.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML Content

```html
<!doctype html>

<html>
  <head></head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </p>
  </body>
</html>
```

### CSS Content

```css
p {
  border-image-source: url("border.png");
  border-image-slice: 30;
  border-image-width: 20px;
  border-image-repeat: round;
  padding: 40px;
}
```

{{ EmbedLiveSample('Примеры', '100%', '200') }}

## Спецификации

| Specification                                                                 | Status                        | Comment            |
| ----------------------------------------------------------------------------- | ----------------------------- | ------------------ |
| {{SpecName('CSS3 Backgrounds', '#border-image-width', 'border-image-width')}} | {{Spec2('CSS3 Backgrounds')}} | Initial definition |

## Совместимость с браузерами

{{Compat}}
