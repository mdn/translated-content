---
title: WebSocket
slug: Web/API/WebSocket
---

{{APIRef("Web Sockets API")}}{{SeeCompatTable}}El objeto WebSocket provee la API para la creación y administración de una conexión [WebSocket](/es/docs/Web/API/WebSockets_API)a un servidor, así como también para enviar y recibir datos en la conexión.El constructor de WebSocket acepta un parámetro requerido y otro opcional.

```
WebSocket WebSocket(
  in DOMString url,
  in optional DOMString protocols
);

WebSocket WebSocket(
  in DOMString url,
  in optional DOMString[] protocols
);
```

- `url`
  - : La URL a la cual se conecta, debe ser la URL con la cual el servidor WebSocket debe responder.
- `protocols` {{optional_inline}}
  - : Permite cualquier caso, desde un simple protocolo o un arreglo de cadenas de texto. Estas cadenas de texto son usadas para indicar subprotocolos, en los cuales un único servidor puede implementar múltiples subprotocolos para el WebSocket (por ejemplo, tu podrías esperar que un servido gestione diferentes tipos de interacciones dependiendo de un tipo específico de protocolo). Si no especificas un subprotocolo, se asume una cadena de texto vacía.

El constructor puede levantar excepciones:

- `SECURITY_ERR`
  - : El puerto en el cual la conexión se realiza se encuentra bloqueado.

## Revisión de Métodos

| `void close(in optional unsigned long code, in optional DOMString reason);` |
| --------------------------------------------------------------------------- |
| `void send(in DOMString data);`                                             |

## Atributos

| Atributo         | Tipo                         | Descricción                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `binaryType`     | {{DOMXref("DOMString")}}     | Una cadena de texto indicando el tipo de dato binario que es transmitido por la conexión. Debe ser de cualquier manera "blob" si es se unas objetos DOM {{domxref("Blob")}} o bien "arraybuffer" {{jsxref("ArrayBuffer")}} si se usan otro tipo de objetos                                                                                                                        |
| `bufferedAmount` | `unsigned long`              | La cantidad de bytes de data que pueden ser almacenadas en cola utilizando llamadas a [send](#send) pero que aún no se han transmitido a la red. Este valor se reestablece a cero una vez que toda la información ha sido enviada. Este valor no vuelve a cero cuando la conexión es cerrada; si mantientes llamando [send](#send), continuará acumulandose. **Solo de lectura.** |
| `extensions`     | {{DOMXref("DOMString")}}     | Las extensiones seleccionadas por el servidor. Esto solamente puede ser un string vacío o bien una lista de extensiones que es negociada por la conexión.                                                                                                                                                                                                                         |
| `onclose`        | {{domxref("EventListener")}} | Un monitor de eventos que atiende una llamada cuando la conexión del WebSocket cambia a un estado CERRADO (CLOSED). El monitor recibe un [`CloseEvent`](/es/docs/Web/API/CloseEvent) llamado "cerrado".                                                                                                                                                                           |
| `onerror`        | {{domxref("EventListener")}} | Un monitor de eventos que es llamado cuando un error ocurre. Esto es un evento simple llamado "error"                                                                                                                                                                                                                                                                             |
| `onmessage`      | {{domxref("EventListener")}} | Un monitor de eventos que es llamado cuando un mensaje es recibido desde un servidor. El monitor recibe un objeto [`MessageEvent`](/es/docs/Web/API/MessageEvent)llamado "mensaje".                                                                                                                                                                                               |
| `onopen`         | {{domxref("EventListener")}} | Un monitor de eventos que es llamado cuando el estado `readyState` de la conexión `Websocket` cambia a `OPEN`. Esto indica que la conexión está lista para enviar y recibir datos. El evento es uno simple con el nombre "open".                                                                                                                                                  |
| `protocol`       | {{DOMXref("DOMString")}}     | Una cadena indicando el nombre del sub-protocolo que el servidor ha seleccionado. Este puede ser una de las cadenas especificadas en el parámetro `protocols` cuando se ha creado el objeto Websocket.                                                                                                                                                                            |
| `readyState`     | `unsigned short`             | El estado actual de la conexión. Este es uno de [Ready state constants](#ready_state_constants). **Solo lectura.**                                                                                                                                                                                                                                                                |
| `url`            | {{DOMXref("DOMString")}}     | La URL como la resuelve el constructor. Esto siempre es una URL absoluta. **Solo lectura.**                                                                                                                                                                                                                                                                                       |

## Constantes

### Ready state constants

Estas constantes son usadas por el atributo `readyState` para describir el estado de la conexión `WebSocket`.

| Constante    | Valor | Descripción                                      |
| ------------ | ----- | ------------------------------------------------ |
| `CONNECTING` | `0`   | La conexión no está aún abierta.                 |
| `OPEN`       | `1`   | La conexión está abierta y lista para comunicar. |
| `CLOSING`    | `2`   | La conexión está siendo cerrada.                 |
| `CLOSED`     | `3`   | La conexión está cerrada o no puede ser abierta. |

## Métodos

### close()

Cierra la conexión o intento de conexión del WebSocket si lo hay. Si la conexión ya está cerrada, no hace nada.

```
void close(
  in optional unsigned short code,
  in optional DOMString reason
);
```

#### Parámetros

- `code` {{optional_inline}}
  - : Un valor numérico indicando el código de estado que explica porqué la conexión está siendo cerrada. Si no se especifica este parámetro, se asume un valor por defecto de 1000 (que indica un cierre normal por "transacción completa") . Ver [códigos de estado](/es/docs/Web/API/CloseEvent#Status_codes) en la página de [CloseEvent](/es/docs/Web/API/CloseEvent) para la lista de valores permitidos.
- `reason` {{optional_inline}}
  - : Una cadena legible explicando porqué la conexión está siendo cerrada. Esta cadena no puede ser mayor que 123 bytes de texto UTF-8 (**no** caracteres)

#### Exceptions thrown

- `INVALID_ACCESS_ERR`
  - : Se ha especificado un código erróneo.
- `SYNTAX_ERR`
  - : La `reason` cadena es demasiado larga o continene caracteres no validos.

> **Nota:** En Gecko, este método no soporta ningun parámetro antes de Gecko 8.0 (Firefox 8.0 / Thunderbird 8.0 / SeaMonkey 2.5).

### send()

Transmite datos al servidor sobre la conexión WebSocket.

```
void send(
  in DOMString data
);

void send(
  in ArrayBuffer data
);

void send(
  in Blob data
);
```

#### Parametros

- `data`
  - : Una cadena de texto que enviar al servidor.

#### Excepciones

- `INVALID_STATE_ERR`
  - : La conexión no está abierta en este momento.
- `SYNTAX_ERR`
  - : La data tiene caracteres no válidos que no se pueden decodificar.

> **Nota:** La implementación del método `send()` en el motor de renderizado Gecko puede cambiar de la especificación en Gecko 6.0; Gecko devuelve un `boolean` indicando si la conexión esta todavía abierta (y, por extensión, que los datos son encolados o trasmitidos satisfactoriamente). Esto ha sido corregido en Gecko 8.0.
>
> A partir de Gecko 11.0, implementa {{jsxref("ArrayBuffer")}} pero no tipos de datos {{domxref("Blob")}}.

## Ejemplo

```js
// Crea una nueva conexión.
const socket = new WebSocket("ws://localhost:8080");

// Abre la conexión
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Escucha por mensajes
socket.addEventListener("message", function (event) {
  console.log("Message from server", event.data);
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Referencias adicionales

- [Writing WebSocket client applications](/es/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
