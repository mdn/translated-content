---
title: GlobalEventHandlers.onlostpointercapture
slug: Web/API/Element/lostpointercapture_event
---

{{ApiRef("HTML DOM")}}

A propriedade **`onlostpointercapture`** do mixin {{domxref("GlobalEventHandlers")}} é uma {{event("Event_handlers", "event handler")}} que processa eventos {{event("lostpointercapture")}}.

## Sintaxe

```
target.onlostpointercapture = functionRef;
```

### Value

`functionRef` é o nome de uma função ou uma [expressão de função](/pt-BR/docs/Web/JavaScript/Reference/Operators/function). A função recebe um objeto {{domxref("PointerEvent")}} como seu único argumento.

## Exemplo

```js
function overHandler(event) {
  // Determinar o manipulador lostpointercapture para o evento alvo (target event).
  let lostCaptureHandler = event.target.onlostpointercapture;
}

function init() {
  let el = document.getElementById("target");
  el.onlostpointercapture = overHandler;
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- Evento [`Document: lostpointercapture`](/pt-BR/docs/Web/API/Document/lostpointercapture_event)
- Evento [`HTMLElement: lostpointercapture`](/pt-BR/docs/Web/API/HTMLElement/lostpointercapture_event)
- {{domxref("Element.releasePointerCapture()")}}
