---
title: HTMLContentElement
slug: conflicting/Web/API/HTMLSlotElement
---

{{ APIRef("Web Components") }}

{{Deprecated_header}}

A interface do **`HTMLContentElement`** representa um {{HTMLElement("content")}} Element HTML, ao qual é usado em [Shadow DOM](/pt-BR/docs/Web/Web_Components/Shadow_DOM).

## Propriedades

_Esta interface herda as propriedades de {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.select")}}
  - : é um {{domxref("DOMString")}} que reflete o [`select`](/pt-BR/docs/Web/HTML/Element/content#select) attributo HTML . O valor é uma lista de vírgula separada dos seletores CSS que selecionam o conteúdo para inserir em lugar do elemento `<content>`.

## Méthodos

_Esta interface herda os méthodos de {{domxref("HTMLElement")}}._

- {{domxref("HTMLContentElement.getDistributedNodes()")}}
  - : Retorna um static {{domxref("NodeList")}} do {{glossary("distributed nodes")}} associado com este elemento `<content>`.

## Specificações

| Specificações                                                                    | Status                           | Commentários |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('Shadow DOM', '#the-content-element', 'content')}} | {{Spec2('Shadow DOM')}} |              |

## Compatibilidade com navegadores

{{Compat("api.HTMLContentElement")}}

## Veja também

- O elemento HTML {{HTMLElement("content")}} , implementa esta interface.
- [Shadow DOM](/pt-BR/docs/Web/Web_Components/Shadow_DOM)
