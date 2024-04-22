---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
---

{{APIRef('WebSockets API')}}

A propriedade **`onerror`** da interface {{domxref("EventSource")}} é um {{event("Event_handlers", "event handler")}} chamado quando um erro ocorre e um evento {{event("error")}} é despachado para o objeto `EventSource`.

## Sintaxe

```
eventSource.onerror = function
```

## Exemplos

```js
evtSource.onerror = function () {
  console.log("EventSource failed.");
};
```

> **Nota:** Você pode encontrar um exemplo completo no GitHub — veja [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("EventSource")}}
