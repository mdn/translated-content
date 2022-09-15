---
title: EventSource.onerror
slug: Web/API/EventSource/error_event
translation_of: Web/API/EventSource/onerror
original_slug: Web/API/EventSource/onerror
---
{{APIRef('WebSockets API')}}

A propriedade **`onerror`** da interface {{domxref("EventSource")}} é um {{event("Event_handlers", "event handler")}} chamado quando um erro ocorre e um evento {{event("error")}} é despachado para o objeto `EventSource`.

## Sintaxe

```
eventSource.onerror = function
```

## Exemplos

```js
evtSource.onerror = function() {
  console.log("EventSource failed.");
};
```

> **Nota:** Você pode encontrar um exemplo completo no GitHub — veja [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificações

| Especificação                                                                                                | Status                           | Comentário        |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------- |
| {{SpecName('HTML WHATWG', "comms.html#handler-eventsource-onerror", "onerror")}} | {{Spec2('HTML WHATWG')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.EventSource.error_event")}}

## Veja também

- {{domxref("EventSource")}}
