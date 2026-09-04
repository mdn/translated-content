---
title: Valor Computado
slug: conflicting/Web/CSS/Guides/Cascade/Property_value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d
original_slug: Web/CSS/CSS_cascade/computed_value
---

{{cssref}}

The **computed value** of a CSS property is computed from the specified value by:

- Handling the special values {{cssxref("inherit")}} and {{cssxref("initial")}}, and
- Doing the computation needed to reach the value described in the "Computed value" line in the property's summary.

The computation needed to reach the **computed value** for the property typically involves converting relative values (such as those in `em` units or percentages) to absolute values.

For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage specified values turn into percentage computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. These relative values that remain in the computed value become absolute when the [used value](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing) is determined.

The main use of the _computed value_ (other than as a step between the [specified value](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1) and [used value](/pt-BR/docs/conflicting/Web/CSS/Guides/Cascade/Property_value_processing)) is [inheritance](/pt-BR/docs/Web/CSS/Guides/Cascade/Inheritance), including the {{cssxref("inherit")}} keyword.

## Notas

The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API returns the {{cssxref("resolved_value", "resolved value")}}, which may either be the {{cssxref("computed_value", "computed value")}} or the {{cssxref("used_value", "used value")}}, depending on the property.

## Especificações

{{Specifications}}

## Veja também

- [CSS Reference](/pt-BR/docs/Web/CSS/Reference)
