---
title: EventSource()
slug: Web/API/EventSource/EventSource
tags:
  - API
  - Construtor
  - EventSource
  - Eventos enviados pelo servidor
  - Referencia
translation_of: Web/API/EventSource/EventSource
---
{{APIRef('WebSockets API')}}

O construtor **`EventSource()`** retorna uma nova {{domxref("EventSource")}}, que representa um recurso remoto.

## Sintaxe

```
eventSource = new EventSource(url, configuration);
```

### Parâmetros

- `url`
  - : Uma {{domxref("USVString")}} que representa a localização de um recurso remoto servindo os eventos/mensagens.
- `configuration` {{optional_inline}}

  - : Fornece opções para configurar a nova conexão. Os atributos possíveis são:

    - `withCredentials`, valor padrão `false`, indicando se o CORS deve ser instruído a `incluir` credenciais.

## Exemplos

```js
var evtSource = new EventSource('sse.php');
var eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
```

> **Nota:** Você pode encontrar um exemplo completo no GitHub — veja [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificações

| Specification                                                                                        | Status                           | Comment           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------- |
| {{SpecName('HTML WHATWG', "comms.html#dom-eventsource", "EventSource()")}} | {{Spec2('HTML WHATWG')}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("api.EventSource.EventSource")}}

## See also

- {{domxref("EventSource")}}
