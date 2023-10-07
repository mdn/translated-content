---
title: Event.isTrusted
slug: Web/API/Event/isTrusted
---

{{APIRef("DOM")}}
A propriedade **`isTrusted`** da interface {{domxref("Event")}}, exclusiva para leitura, é uma booleana ({{domxref("Boolean")}}) de valor verdadeiro (`true`) se tal evento é disparado pela ação do usuário. Retorna falso (`false`) caso o acionamento do evento seja ocasionado pelo método {{domxref("EventTarget.dispatchEvent()")}} ou tenha sido criado ou modificado por um script.

## Sintaxe

```
var eventIsTrusted = event.isTrusted;
```

### Valor

{{domxref("Boolean")}}

## Exemplo

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
