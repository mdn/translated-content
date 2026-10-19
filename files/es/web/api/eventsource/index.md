---
title: EventSource
slug: Web/API/EventSource
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

La interfaz **`EventSource`** es la interfaz del contenido web para los [eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events).

Una instancia de `EventSource` abre una conexión persistente con un servidor [HTTP](/es/docs/Web/HTTP), que envía [eventos](/es/docs/Learn_web_development/Core/Scripting/Events) en formato `text/event-stream`. La conexión permanece abierta hasta que se cierra con una llamada a {{domxref("EventSource.close()")}}.

{{InheritanceDiagram}}

Una vez abierta la conexión, los mensajes entrantes del servidor llegan a tu código en forma de eventos. Si el mensaje entrante incluye un campo event, el evento que se dispara coincide con el valor de ese campo. Si no hay ningún campo event, se dispara un evento genérico {{domxref("EventSource/message_event", "message")}}.

A diferencia de [WebSockets](/es/docs/Web/API/WebSockets_API), los eventos enviados por el servidor son unidireccionales; es decir, los mensajes de datos se entregan en una sola dirección, del servidor al cliente (como el navegador web del usuario). Esto los convierte en una excelente opción cuando no es necesario enviar datos del cliente al servidor en forma de mensaje. Por ejemplo, `EventSource` es un enfoque útil para gestionar actualizaciones de estado en redes sociales, fuentes de noticias o la transferencia de datos a un mecanismo de [almacenamiento del lado del cliente](/es/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage) como [IndexedDB](/es/docs/Web/API/IndexedDB_API) o el [almacenamiento web](/es/docs/Web/API/Web_Storage_API).

> [!WARNING]
> Cuando **no se usa sobre HTTP/2**, SSE tiene un límite en el número máximo de conexiones abiertas, lo que puede resultar especialmente problemático al abrir varias pestañas, ya que el límite es _por navegador_ y está fijado en un número muy bajo (6). El problema se ha marcado como "Won't fix" (no se corregirá) en [Chrome](https://crbug.com/275955) y [Firefox](https://bugzil.la/906896). El límite se aplica por combinación de navegador y dominio; esto significa que es posible abrir 6 conexiones SSE en total (sumando todas las pestañas) hacia `www.example1.com` y otras 6 conexiones SSE hacia `www.example2.com` (según [Stack Overflow](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource/5326159)). Con HTTP/2, el número máximo de _flujos HTTP_ simultáneos se negocia entre el servidor y el cliente (el valor predeterminado es 100).

## Constructor

- {{domxref("EventSource.EventSource", "EventSource()")}}
  - : Crea un nuevo `EventSource` para recibir eventos enviados por el servidor desde una URL determinada, opcionalmente en modo de credenciales.

## Propiedades de instancia

_Esta interfaz también hereda propiedades de su interfaz padre, {{domxref("EventTarget")}}._

- {{domxref("EventSource.readyState")}} {{ReadOnlyInline}}
  - : Un número que representa el estado de la conexión. Los valores posibles son `CONNECTING` (`0`), `OPEN` (`1`) o `CLOSED` (`2`).
- {{domxref("EventSource.url")}} {{ReadOnlyInline}}
  - : Una cadena que representa la URL de la fuente.
- {{domxref("EventSource.withCredentials")}} {{ReadOnlyInline}}
  - : Un valor booleano que indica si el objeto `EventSource` se instanció con credenciales de origen cruzado ([CORS](/es/docs/Web/HTTP/Guides/CORS)) establecidas (`true`) o no (`false`, el valor predeterminado).

## Métodos de instancia

_Esta interfaz también hereda métodos de su interfaz padre, {{domxref("EventTarget")}}._

- {{domxref("EventSource.close()")}}
  - : Cierra la conexión, si existe, y establece el atributo `readyState` en `CLOSED`. Si la conexión ya está cerrada, el método no hace nada.

## Eventos

- {{domxref("EventSource/error_event", "error")}}
  - : Se dispara cuando falla la apertura de una conexión con una fuente de eventos.
- {{domxref("EventSource/message_event", "message")}}
  - : Se dispara cuando se reciben datos de una fuente de eventos.
- {{domxref("EventSource/open_event", "open")}}
  - : Se dispara cuando se ha abierto una conexión con una fuente de eventos.

Además, la propia fuente de eventos puede enviar mensajes con un campo event, lo que crea eventos ad hoc asociados a ese valor.

## Ejemplos

En este ejemplo básico se crea un `EventSource` para recibir eventos sin nombre desde el servidor; una página llamada `sse.php` se encarga de generar los eventos.

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `mensaje: ${e.data}`;
  eventList.appendChild(newElement);
};
```

Cada evento recibido hace que se ejecute el manejador de eventos `onmessage` de nuestro objeto `EventSource`. Este, a su vez, crea un nuevo elemento {{HTMLElement("li")}}, escribe en él los datos del mensaje y luego añade el nuevo elemento a la lista que ya está en el documento.

> [!NOTE]
> Puedes encontrar un ejemplo completo en GitHub: consulta la [demostración sencilla de SSE con PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

Para escuchar eventos con nombre, necesitas un detector de eventos para cada tipo de evento enviado.

```js
const sse = new EventSource("/api/v1/sse");

/*
 * Esto escuchará únicamente eventos
 * similares al siguiente:
 *
 * event: notice
 * data: useful data
 * id: some-id
 */
sse.addEventListener("notice", (e) => {
  console.log(e.data);
});

/*
 * De igual forma, esto escuchará los eventos
 * con el campo `event: update`
 */
sse.addEventListener("update", (e) => {
  console.log(e.data);
});

/*
 * El evento "message" es un caso especial: captura
 * tanto los eventos sin campo event como los que
 * tienen el tipo específico `event: message`.
 * No se activará con ningún otro tipo de evento.
 */
sse.addEventListener("message", (e) => {
  console.log(e.data);
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events)
- [Uso de eventos enviados por el servidor](/es/docs/Web/API/Server-sent_events/Using_server-sent_events)
