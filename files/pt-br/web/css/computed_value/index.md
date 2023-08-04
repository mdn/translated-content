---
title: Valor Computado
slug: Web/CSS/computed_value
---

{{cssref}}

The **computed value** of a CSS property is computed from the specified value by:

- Handling the special values {{cssxref("inherit")}} and {{cssxref("initial")}}, and
- Doing the computation needed to reach the value described in the "Computed value" line in the property's summary.

The computation needed to reach the **computed value** for the property typically involves converting relative values (such as those in `em` units or percentages) to absolute values.

For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage specified values turn into percentage computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. These relative values that remain in the computed value become absolute when the [used value](/pt-BR/docs/CSS/used_value) is determined.

The main use of the _computed value_ (other than as a step between the [specified value](/pt-BR/docs/Web/CSS/specified_value) and [used value](/pt-BR/docs/Web/CSS/used_value)) is [inheritance](/pt-BR/docs/Web/CSS/inheritance), including the {{cssxref("inherit")}} keyword.

## Notas

The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API returns the {{cssxref("resolved_value", "resolved value")}}, which may either be the {{cssxref("computed_value", "computed value")}} or the {{cssxref("used_value", "used value")}}, depending on the property.

## Especificações

| Especificações                                                          | Status              | Comentário            |
| ----------------------------------------------------------------------- | ------------------- | --------------------- |
| {{SpecName("CSS2.1", "cascade.html#computed-value", "computed value")}} | {{Spec2("CSS2.1")}} | Especificação inicial |

## Veja também

- [CSS Reference](/pt-BR/docs/Web/CSS/Reference)
