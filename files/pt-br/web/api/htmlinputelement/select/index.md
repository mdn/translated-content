---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
---

{{ APIRef("HTML DOM") }}

O método **`HTMLInputElement.select()`** seleciona todo o texto em um elemento {{HTMLElement("textarea")}} ou em um elemento {{HTMLElement("input")}} do tipo _text_.

## Sintaxe

```
element.select()
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Notas

Executar `element.select()` não irá necessariamente focar o _input_, por isso é frequentemente usado em conjunto com {{domxref("HTMLElement.focus()")}}.

## Veja também

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
