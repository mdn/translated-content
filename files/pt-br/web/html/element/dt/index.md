---
title: <dt>
slug: Web/HTML/Element/dt
---

## Sumário

O elemento **HTML `<dt>`** (ou Elemento HTML de Definição de Termo) identifica um termo na lista de definição. Este elemento pode ocorrer somente em um elemento filho de {{HTMLElement("dl")}}. Geralmente seguido por um elemento {{HTMLElement("dd")}}; ou multiplos `<dt>` na mesma linha indicam vários termos sendo definidos pelo próximo element {{HTMLElement("dd")}}.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ Vazio.
- _Permitted content_{{todo}} [Flow content](/pt-BR/docs/HTML/Content_categories#Flowing_content), but with no {{HTMLElement("header")}}, {{HTMLElement("footer")}}, sectioning content or heading content descendants.
- _Tag omission_ Must have a start tag. The end tag may be omitted if this element is immediately followed by another `<dd>` element, or if there is no more content in the parent element.
- _Permitted parent elements_ Before a {{HTMLElement("dt")}} or a {{HTMLElement("dd")}} element, inside a {{HTMLElement("dl")}}.
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [HTMLSpanElement](/pt-BR/docs/DOM/span) interface for this element.

## Atributos

Este elemento inclui somente [atributos globais](/pt-BR/docs/HTML/Global_attributes).

## Exemplo

Para exemplo veja [definição de lista](/pt-BR/docs/HTML/Element/dl#Examples).

## Especificações

| Specification                                                                     | Status                   | Comment |
| --------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-dt-element', '&lt;dt&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dt-element', '&lt;dt&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dt&gt;')}}                | {{Spec2('HTML4.01')}}    |         |

## Navegadores compatíveis

{{Compat("html.elements.dt")}}

## Veja também

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

{{HTMLSidebar}}
