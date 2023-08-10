---
title: Valor Especifícado
slug: Web/CSS/specified_value
---

{{CSSRef}}

O **valor especificado** de uma propriedade CSS está definido em uma de três maneiras.

1. If the document's stylesheet has specified a value for the property then it will be used. For example; if the {{cssxref("color")}} property is set to `green` then the text color of the corresponding element will be green.
2. If the document's stylesheet has not specified a value then it will be inherited form the parent element (if possible). For example; if we have a paragraph ({{HTMLElement("p")}}) inside a {{HTMLElement("div")}} and the {{HTMLElement("div")}} has a CSS `font` property value of "Arial" and the {{HTMLElement("p")}} doesn't have a `font` property defined then it will inherit the Arial font.
3. If none of the above are available, the initial value for the element as specified by the CSS specification is applied.

## Especificações

| Especificações                                                           | Status              | Comentario        |
| ------------------------------------------------------------------------ | ------------------- | ----------------- |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | Definição inicial |

## Veja também

- [CSS Reference](/pt-BR/docs/Web/CSS/Reference)
