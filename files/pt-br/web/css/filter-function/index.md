---
title: <filter-function>
slug: Web/CSS/filter-function
---

{{cssref}}

The **`<filter-function>`** [CSS](/pt-BR/docs/Web/CSS) [data type](/pt-BR/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.

## Syntax

The `<filter-function>` data type is specified using one of the filter functions listed below. Each function requires an argument which, if invalid, results in no filter being applied.

- [`blur()`](/pt-BR/docs/Web/CSS/filter-function/blur)
  - : Blurs the image.
- [`brightness()`](/pt-BR/docs/Web/CSS/filter-function/brightness)
  - : Makes the image brighter or darker.
- [`contrast()`](/pt-BR/docs/Web/CSS/filter-function/contrast)
  - : Increases or decreases the image's contrast.
- [`drop-shadow()`](/pt-BR/docs/Web/CSS/filter-function/drop-shadow)
  - : Applies a drop shadow behind the image.
- [`grayscale()`](/pt-BR/docs/Web/CSS/filter-function/grayscale)
  - : Converts the image to grayscale.
- [`hue-rotate()`](/pt-BR/docs/Web/CSS/filter-function/hue-rotate)
  - : Changes the overall hue of the image.
- [`invert()`](/pt-BR/docs/Web/CSS/filter-function/invert)
  - : Inverts the colors of the image.
- [`opacity()`](/pt-BR/docs/Web/CSS/filter-function/opacity)
  - : Makes the image transparent.
- [`saturate()`](/pt-BR/docs/Web/CSS/filter-function/saturate)
  - : Super-saturates or desaturates the input image.
- [`sepia()`](/pt-BR/docs/Web/CSS/filter-function/sepia)
  - : Converts the image to sepia.

## Specification

| Specification                                                                        | Status                     | Comments            |
| ------------------------------------------------------------------------------------ | -------------------------- | ------------------- |
| {{ SpecName('Filters 1.0', '#typedef-filter-function', '&lt;filter-function&gt;') }} | {{ Spec2('Filters 1.0') }} | Initial definition. |

## See also

- Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}
