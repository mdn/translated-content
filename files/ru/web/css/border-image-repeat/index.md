---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
---

{{CSSRef}}

## Описание

The **`border-image-repeat`** CSS property defines how the middle part of a border image is handled so that it can match the size of the border. It has a one-value syntax that describes the behavior of all the sides, and a two-value syntax that sets a different value for the horizontal and vertical behavior.

{{cssinfo}}

## Синтаксис

```css
/* border-image-repeat: type */
border-image-value: stretch;

/* border-image-repeat: horizontal vertical */
border-image-width: round stretch;

/* Глобальные значения */
border-image-repeat: inherit;
border-image-repeat: initial;
border-image-repeat: unset;
```

### Значения

- _type_
  - : One of the `stretch`, `repeat`, or `round` keywords denoting how the image is treated both horizontally and vertically.
- _horizontal_
  - : One of the `stretch`, `repeat`, or `round` keywords denoting how the image is treated horizontally.
- _vertical_
  - : One of the `stretch`, `repeat`, or `round` keywords denoting how the image is treated vertically.
- `stretch`
  - : Keyword indicating that the image must be stretched to fill the gap between the two borders.
- `repeat`
  - : Keyword indicating that the image must be repeated until it fills the gap between the two borders.
- `round`
  - : Keyword indicating that the image must be repeated until it fills the gap between the two borders. If the image doesn't fit after being repeated for an integral number of times, the image is rescaled to fit.
- `space`
  - : The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles.

### Формальный синтаксис

{{csssyntax}}

## Примеры

See {{cssxref("border-image")}} for examples of what repeat values will do.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [css-tricks border-image](https://css-tricks.com/almanac/properties/b/border-image/)
