---
title: EventSource
slug: Web/API/EventSource
---

{{APIRef("Websockets API")}}

La interfaz **`EventSource`** se utiliza para recibir eventos server-side. Se realiza la conexión a un servidor sobre HTTP y se reciben eventos en formato `text/event-stream` sin tener que cerrar la conexión.

## Constructor

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Crea un nuevo `EventSource` a partiendo de un valor {{domxref("USVString")}}.

## Propiedades

_Esta interfaz también heredará propiedades de su antecesor, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{readonlyinline}}
  - : Un número representando el estado de la conexión. Los valores posibles son CONECTANDO (`0`), ABIERTO (`1`), o CERRADO (`2`).
- {{domxref("EventSource.url")}} {{readonlyinline}}
  - : Un valor {{domxref("DOMString")}} representando la URL de la fuente.
- {{domxref("EventSource.withCredentials")}} {{readonlyinline}}
  - : Un valor {{domxref("Boolean")}} indicando si el objecto `EventSource` ha sido instanciado con credeciales CORS disponibles (true) o no (false, valor por defecto).

### Manejadores de Eventos

- {{domxref("EventSource.onerror")}}
  - : En un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que se invoca cuando ocurre un error y se envía el evento [`error`](/es/docs/Web/Reference/Events/error) a través del objeto `EventSource`.
- {{domxref("EventSource.onmessage")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que se invoca cuando se recibe un evento [`message`](/es/docs/Web/Reference/Events/message), que indica que se ha enviado un mensaje desde la fuente.
- {{domxref("EventSource.onopen")}}
  - : Es un [`event handler`](/es/docs/Web/Reference/Events/Event_handlers) que se invoca cuando se recibe un evento [`open`](/es/docs/Web/Reference/Events/open), que sucede en el momento que la conexión se abre.

## Métodos

_Esta interfaz también heredará métodos de su antecesor, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Cierra la conexión, si ésta existe, y asigna el valor CLOSED al atributo `readyState`. Si la conexión ya estaba cerrada, este método no hace nada.

## Ejemplos

```js
var evtSource = new EventSource("sse.php");
var eventList = document.querySelector("ul");

evtSource.onmessage = function (e) {
  var newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

> **Nota:** Está disponible un ejemplo completo en GitHub — ver [Simple SSE demo using PHP.](https://github.com/mdn/dom-examples/tree/master/server-sent-events)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Using server-sent events](/es/docs/Web/API/Server-sent_events/Using_server-sent_events)
