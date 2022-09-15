---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - Referencia
  - Selecionar
  - Select
  - metodo
translation_of: Web/API/HTMLInputElement/select
---
{{ APIRef("HTML DOM") }}

O método **`HTMLInputElement.select()`** seleciona todo o texto em um elemento {{HTMLElement("textarea")}} ou em um elemento {{HTMLElement("input")}} do tipo _text_.

## Sintaxe

```
element.select()
```

## Especificação

| Especificação                                                                                            | Estado                           | Comentário |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'forms.html#dom-textarea/input-select', 'select')}} | {{Spec2('HTML WHATWG')}} |            |

## Notas

Executar `element.select()` não irá necessariamente focar o _input_, por isso é frequentemente usado em conjunto com {{domxref("HTMLElement.focus()")}}.

## Veja também

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
