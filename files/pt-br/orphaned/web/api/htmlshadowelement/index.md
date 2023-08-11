---
title: HTMLShadowElement
slug: orphaned/Web/API/HTMLShadowElement
---

{{ APIRef("Web Components") }}

A interface **`HTMLShadowElement`** representa um elemento HTML {{HTMLElement("shadow")}}, Ao qual é usado no [Shadow DOM](/pt-BR/docs/Web/Web_Components/Shadow_DOM).

## Propriedades

_Esta interface herda as propriedades do {{domxref("HTMLElement")}}._

## Métodos

_Esta interface herda os métodos do {{domxref("HTMLElement")}}._

- {{domxref("HTMLShadowElement.getDistributedNodes()")}}
  - : Retorna uma estática {{domxref("NodeList")}} do {{glossary("distributed nodes")}} associado com este elemento \<shadow>.

## Especificações

| Especificação                                                                    | Status                           | Comentário |
| -------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('Shadow DOM', '#the-shadow-element', 'shadow')}} | {{Spec2('Shadow DOM')}} |            |

## Compatibilidade com navegadores

{{Compat("api.HTMLShadowElement")}}

Se Shadow DOM não é habilitado no Firefox, os elementos \<shadow> se comportarão como {{domxref("HTMLUnknownElement")}}. Shadow DOM foi implementado primeiro no Firefox 28 e está por trás de uma preferência, `dom.webcomponents.enabled`, ao qual é desabilitado por padrão. \[1]

## Veja também

- O elemento HTML {{HTMLElement("shadow")}} , implementa esta interface.
- [Shadow DOM](/pt-BR/docs/Web/Web_Components/Shadow_DOM)
