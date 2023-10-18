---
title: border-image-slice
slug: Web/CSS/border-image-slice
---

{{CSSRef}}

## Описание

CSS-свойство **`border-image-slice`** делит изображение указанное в {{cssxref("border-image-source")}} на девять областей: четыре угла, четыре края и середину. Это происходит путём указания 4 внутренних смещений.

[![The nine slices defined by the CSS border-image shorthand or border-image-slice longhand properties](/files/3814/border-image-slice.png)](/files/3814/border-image-slice.png)Четыре значения управляют положением линий среза. If some are not specified, they are inferred from the other with the usual 4-value syntax of CSS.

The middle is not used by the border itself but is used as a background-image if the keyword `fill` is set. The keyword can be set at any position in the property (before, after or between the other values).

The {{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-outset")}} properties define how these images will be used.

The shorthand CSS property {{cssxref("border-image")}} may reset this property to its default value.

{{cssinfo}}

## Синтаксис

```css
/* border-image-slice: slice */
border-image-slice: 30%;

/* border-image-slice: horizontal vertical */
border-image-slice: 10% 30%;

/* border-image-slice: top horizontal bottom */
border-image-slice: 30 30% 45;

/* border-image-slice: top right bottom left */
border-image-slice: 7 12 14 5;

/* border-image-slice: … fill */
/* The fill value can be placed between any value */
border-image-slice: 10% fill 7 12;

/* Глобальные значения */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

### Значения

- _slice_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the four slicing lines. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _horizontal_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the two horizontal slicing lines, the top and the bottom ones. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _vertical_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the two vertical slicing lines, the right and the left ones. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _top_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the top slicing line. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _bottom_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the bottom slicing line. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _right_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the right slicing line. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- _left_
  - : Is a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}} of the offset for the left slicing line. Note that a {{cssxref("&lt;length&gt;")}} value is not allowed, and therefore invalid. The {{cssxref("&lt;number&gt;")}} represents _pixels_ for raster images and _coordinates_ for vector images. Also, {{cssxref("&lt;percentage&gt;")}} values are relative to the height or width of the image, whichever is adequate. Negative values are invalid and values greater than the relevant size, height or width, are clamped to `100%`.
- `fill`
  - : Is a keyword whose presence forces the use of the middle image slice to be displayed over the background image, its size and height are resized like those of the top and left image slices, respectively.
- `inherit`
  - : Is a keyword indicating that all four values are inherited from their parent's element calculated value.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
