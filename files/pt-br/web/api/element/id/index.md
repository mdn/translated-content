---
title: Element.id
slug: Web/API/Element/id
tags:
  - API
  - DOM
  - Gecko
  - Property
  - Reference
translation_of: Web/API/Element/id
---
{{ApiRef("DOM")}}

A propriedade **`Element.id`** representa o identificador do elemento, refletindo no atributo global **[id](/pt-BR/docs/Web/HTML/Global_attributes/id)**.

O ID precisa ser único no documento, e geralmente é utilizado para obter o elemento usando {{domxref("document.getElementById", "getElementById")}}.. Outro uso comum de `id` é utilizar o [ID como um seletor](/pt-BR/docs/Web/CSS/ID_selectors) ao estilizar o documento com CSS.

> **Nota:** IDs são case-sensitive, mas você não deve criar IDs cuja única diferença nos nomes sejam letras maiúsculas/minúsculas (veja [Case sensitivity in class and id names](/pt-BR/docs/Case_Sensitivity_in_class_and_id_Names)).

## Sintaxe

```
var idStr = element.id; // Retorna o id.
element.id = idStr; // Insere o id
```

- `idStr` é o identificador do elemento.

## Especificações

| Especificação                                                                    | Status                           | Comentário                                            |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-id', 'id')}}             | {{Spec2('DOM WHATWG')}} | Sem alteração desde {{SpecName('DOM2 HTML')}}. |
| {{SpecName('DOM2 HTML', 'html.html#ID-63534901', 'id')}}     | {{Spec2('DOM2 HTML')}}     | Sem alteração desde {{SpecName('DOM1')}}.     |
| {{SpecName('DOM1', 'level-one-html.html#ID-63534901', 'id')}} | {{Spec2('DOM1')}}         | Definição inicial.                                    |

## Compatibilidade com navegadores

{{Compat("api.Element.id")}}

## Veja também

- O atributo global [**id**](/pt-BR/docs/Web/HTML/Global_attributes/id).
