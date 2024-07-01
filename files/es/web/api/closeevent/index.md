---
title: CloseEvent
slug: Web/API/CloseEvent
---

{{APIRef("Websockets API")}}

Un `CloseEvent` se envia a los clientes usando {{Glossary("WebSockets")}} cuando la conexión esta cerrada. Esto se entrega al que escucha indicado por el atributo `onclose` del objeto `WebSocket.`

## Constructor

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : Crear un nuevo `CloseEvent`.

## Propiedades

_Esta interface tambien hereda propiedades de su padre, {{domxref("Event")}}._

- {{domxref("CloseEvent.code")}} {{readOnlyInline}}

  - : Devuelve un `unsigned short` que contienen el código de cierre enviado por el servidor. Los siguientes valores son los codigos de estado permitidos. Las siguientes definiciones vienen del sitio web de IANA \[[Ref](https://www.iana.org/assignments/websocket/websocket.xml#close-code-number)].

    | Status code   | Name                       | Description                                                                                                                                                                                                     |
    | ------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `0`–`999`     |                            | **Reserved and not used.**                                                                                                                                                                                      |
    | `1000`        | Cierre Normal              | Cierre normal; La conexion se completo con exito cualquiera sea el proposito para el cual fue creado.                                                                                                           |
    | `1001`        | Going Away                 | El punto final se fue(desaparecio), ya sea por una falla en el servidor o por que el navegador esta navegando fuera de la página que abrio la conexión.                                                         |
    | `1002`        | Error de Protocolo         | El punto final esta terminando la conexion debido a un error en el protocolo.                                                                                                                                   |
    | `1003`        | Datos no soportadors       | La conexión esta siendo terminada por que el punto final recibio daros de un tipo que acepta o soportar (por ejemplo, está esperando un solo texto y el punto final recibio datos binarios).                    |
    | `1004`        |                            | **Reservado.** Un signinficado se podria definir en un futuro.                                                                                                                                                  |
    | `1005`        | Estado no recibido.        | **Reservado.** Indica que no se proporciono ningún código de estado aunque se esperaba uno.                                                                                                                     |
    | `1006`        | Cierre anormal             | **Reservado.** Se usa para indicar que una conexion fue cerrada de forma anormal (es decir, sin que se envie un frame cerrado with no close frame being sent) when a status code is expected.                   |
    | `1007`        | Invalid frame payload data | The endpoint is terminating the connection because a message was received that contained inconsistent data (e.g., non-UTF-8 data within a text message).                                                        |
    | `1008`        | Violación de politica      | The endpoint is terminating the connection because it received a message that violates its policy. This is a generic status code, used when codes 1003 and 1009 are not suitable.                               |
    | `1009`        | Mensaje muy grande         | The endpoint is terminating the connection because a data frame was received that is too large.                                                                                                                 |
    | `1010`        | Extensión faltante.        | The client is terminating the connection because it expected the server to negotiate one or more extension, but the server didn't.                                                                              |
    | `1011`        | Error interno              | The server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request.                                                                          |
    | `1012`        | Reinicio de servicio       | El servidor esta terminado la conexion porque esta reiniciando. \[[Ref](https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html)]                                                                      |
    | `1013`        | Trate mas tarde nuevamente | The server is terminating the connection due to a temporary condition, e.g. it is overloaded and is casting off some of its clients. \[[Ref](https://www.ietf.org/mail-archive/web/hybi/current/msg09670.html)] |
    | `1014`        | Bad Gateway                | The server was acting as a gateway or proxy and received an invalid response from the upstream server. This is similar to 502 HTTP Status Code.                                                                 |
    | `1015`        | TLS Saludo                 | **Reserved.** Indicates that the connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified).                                                            |
    | `1016`–`1999` |                            | **Reservado para futuro uso del estandar WebSocket.**                                                                                                                                                           |
    | `2000`–`2999` |                            | **Reservado para uso de extensiones WebSocket .**                                                                                                                                                               |
    | `3000`–`3999` |                            | Available for use by libraries and frameworks. **May not** be used by applications. Available for registration at the IANA via first-come, first-serve.                                                         |
    | `4000`–`4999` |                            | Disponible para uso de aplicaciones.                                                                                                                                                                            |

- {{domxref("CloseEvent.reason")}} {{readOnlyInline}}
  - : Retorna un {{domxref("DOMString")}} indicando la razon por que el servidor cerro la conexión. Esto es especifico para el servidor y sub-protocolo en particular.
- {{domxref("CloseEvent.wasClean")}} {{readOnlyInline}}
  - : Retorna un {{jsxref("Boolean")}} que indica si o no la conexion fue cerrada limpiamente.

## Metodos

_Esta interface tambien hereda metodos de su padre, {{domxref("Event")}}._

- {{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : Inicializa el valor de un `CloseEvent` creado. Si el evento ya ha sido enviado, este método no funciona. No use más este método, use el {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} constructor en su lugar.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- [`WebSocket`](/es/docs/Web/API/WebSocket)
