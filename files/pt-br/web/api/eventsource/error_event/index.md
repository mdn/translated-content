---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
---

{{APIRef('WebSockets API')}}

A propriedade **`onerror`** da interface {{domxref("EventSource")}} é um [`event handler`](/pt-BR/docs/Web/Events/Event_handlers) chamado quando um erro ocorre e um evento [`error`](/pt-BR/docs/Web/API/HTMLElement/error_event) é despachado para o objeto `EventSource`.

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

> [!NOTE]
> Você pode encontrar um exemplo completo no GitHub — veja [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{domxref("EventSource")}}
