---
title: Valor Resolvido
slug: Web/CSS/resolved_value
---

{{cssref}}

The **resolved value** of a CSS property is the value returned by {{domxref("Window.getComputedStyle", "getComputedStyle()")}}. For most properties, it is the {{cssxref("computed_value", "computed value") }}, but for a few legacy properties (including {{cssxref("width")}} and {{cssxref("height")}}), it is instead the {{cssxref("used_value", "used value")}}. See the specification link below for more per-property details.

## Especificações

| Especificações                                              | Status             | Comentário          |
| ----------------------------------------------------------- | ------------------ | ------------------- |
| {{SpecName("CSSOM", "#resolved-values", "resolved value")}} | {{Spec2("CSSOM")}} | Definicação inicial |

## Veja também

- [CSS Reference](/pt-BR/docs/Web/CSS/Reference)
- {{domxref("window.getComputedStyle")}}
