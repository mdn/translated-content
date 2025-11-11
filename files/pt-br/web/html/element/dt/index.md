---
title: <dt>
slug: Web/HTML/Element/dt
---

## Sumário

O elemento **HTML `<dt>`** (ou Elemento HTML de Definição de Termo) identifica um termo na lista de definição. Este elemento pode ocorrer somente em um elemento filho de {{HTMLElement("dl")}}. Geralmente seguido por um elemento {{HTMLElement("dd")}}; ou multiplos `<dt>` na mesma linha indicam vários termos sendo definidos pelo próximo element {{HTMLElement("dd")}}.

- _[Content categories](/pt-BR/docs/Web/HTML/Content_categories)_ Vazio.
- _Permitted content_<!-- TODO: add content --> [Flow content](/pt-BR/docs/Web/HTML/Content_categories#flowing_content), but with no {{HTMLElement("header")}}, {{HTMLElement("footer")}}, sectioning content or heading content descendants.
- _Tag omission_ Must have a start tag. The end tag may be omitted if this element is immediately followed by another `<dd>` element, or if there is no more content in the parent element.
- _Permitted parent elements_ Before a {{HTMLElement("dt")}} or a {{HTMLElement("dd")}} element, inside a {{HTMLElement("dl")}}.
- _DOM interface_ {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the [HTMLSpanElement](/pt-BR/docs/DOM/span) interface for this element.

## Atributos

Este elemento inclui somente [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

## Exemplo

Para exemplo veja [definição de lista](/pt-BR/docs/Web/HTML/Element/dl#examples).

## Especificações

{{Specifications}}

## Navegadores compatíveis

{{Compat}}

## Veja também

- {{HTMLElement("dd")}}, {{HTMLElement("dl")}}

{{HTMLSidebar}}
