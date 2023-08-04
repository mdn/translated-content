---
title: Mecanismo de actualización del protocolo
slug: Web/HTTP/Protocol_upgrade_mechanism
---

{{HTTPSidebar}}

El protocolo [HTTP](/en/HTTP) posee un mecanismo especifico para permitir que una conexión de comunicación ya establecida, pueda actualizar su protocolo a un nuevo protocolo, incluso si es incompatible. Este documento muestra este mecanismo y presenta ejemplos de posibles escenarios en los que se puede usar.

Este mecanismo, siempre es iniciado por el cliente (con la única excepción de que el servidor use: [requerida actualización a TLS](#server-initiated_upgrade_to_tls)), y el servidor puede aceptar o rechazar el cambio al nuevo protocolo. Esto hace posible comenzar una conexión usando un protocolo de uso común, como puede ser HTTP/1.1, y posteriormente pedir un cambio de protocolo a HTTP/2.0 o incluso WebSockets.

## Acuerdo de conexión (handshake)

Las actualizaciones del protocolo de comunicación son siempre iniciadas por el cliente; no hay un mecanismo establecido para que el servidor pida un cambio de protocolo. Cuando el cliente desea una actualización a un nuevo protocolo, lo hace mandando una petición normal al servidor con cualquier método ({{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, etc.). La petición ha de configurarse de manera especial, para que incluya en ella, la petición de actualización del protocolo.

Específicamente la petición ha de incluir las dos siguientes cabeceras:

- [`Connection: Upgrade`](/es/docs/Web/HTTP/Headers/Connection)
  - : La cabecera de conexión (`Connection`) ha de tener el valor `"Upgrade"`, para indicar que se está pidiendo una actualización del protocolo.
- [`Upgrade: protocols`](/es/docs/Web/HTTP/Headers/Upgrade)
  - : La cabecera de actualización (`Upgrade`) indica los protocolos deseados, en orden de preferencia, separados por comas.

Puede que sean necesarias otras cabeceras, dependiendo del protocolo que se pida.; por ejemplo: las actualizaciones a [WebSocket](/es/docs/Web/API/WebSocket) necesitan cabeceras adicionales para definir la configuración de la conexión, así como para detalles de la seguridad. Para más detalles, lea la sección: [Upgrading to a WebSocket connection](#upgrading_to_a_websocket_connection).

El servidor, puede negarse a la actualización en este caso. Y este simplemente ignora la cabecera de actualización (`"Upgrade"`) y responde con un estado normal, ( `"200 OK"` si todo es correcto, o `30x` si quiere hacer una redirección, o `40x` ó `50x` si no puede responder con el recurso requerido) — O puede aceptar la actualización del protocolo de comunicación. En este caso, responde con un código `"101 Switching Protocols"` y con una cabecera `Upgrade` que indica el protocolo elegido.

Justo después de enviar el código de estado `"101 Switching Protocols"` se procederá a realizar el acuerdo de conexión (corresponde con el termino: 'handshake' en inglés). Si el nuevo protocolo lo necesitase, el servidor, enviaría una la respuesta a la petición inicial (la que contenía la cabecera de `"Upgrade"` ) , de acuerdo a las reglas del protocolo.

## El código de estado 101

El código de estado {{HTTPStatus(101)}} se manda en respuesta a una petición que contenga la cabecera de `"Upgrade"` para indicar que el emisor de la petición desea actualizar el protocolo de comunicación. Si se responde con el código de estado `"101 Switching Protocols"`, se han de incluir también las cabeceras `Connection` y `Upgrade` para definir el protocolo elegido. Más adelante en el texto se dan más detalles del funcionamiento de este mecanismo y ejemplos.

Se puede utilizar el mecanismo de actualización del protocolo para pasar de una conexión en HTTP/1.1 a una conexión con HTTP/2, pero no se permite cambiar el protocolo en el otro sentido. De hecho, el código de estado `"101 Switching Protocols"`, no está incluido en HTTP/2, ya que HTTP/2 no posee el mecanismo de actualización de protocolo.

## Usos frecuentes del mecanismo de actualización de protocolo

A continuación se presentan los casos más frecuentes del mecanismo de actualización de protocolo, mediante el uso de la cabecera `"Upgrade"`.

### Actualización a una conexión con HTTP/2

El procedimiento estándar, es iniciar una conexión usando HTTP/1.1, debido a su amplio uso. Y a continuación, hacer una petición de actualización de protocolo, a HTTP/2. De esta manera, se tiene una conexión de comunicaciones, incluso si el servidor no soporta protocolo HTTP/2. De todas formas, únicamente es posible actualizar el protocolo, a una versión de HTTP/2 no segura (no encriptada). Esto se realiza indicando el protocolo deseado como: `h2c`, que indica "HTTP/2 Cleartext". Además es necesario que se defina en los campos de cabecera las propiedades `HTTP2-Settings`.

```
GET / HTTP/1.1
Host: destination.server.ext
Connection: Upgrade, HTTP2-Settings
Upgrade: h2c
HTTP2-Settings: base64EncodedSettings
```

Aquí, `base64EncodedSettings` es una propiedad de HTTP/2 `"SETTINGS"` del contenido de la trama que se expresa en formato `base64url`, seguido de un carácter de igual, `"="`, omitido aquí para que se pudiera incluir en esta cabecera expresada en texto.

> **Nota:** El formato [base64url](https://tools.ietf.org/html/rfc4648#section-5) fno es el mismo que el formato estándar Base64. La única diferencia es que para asegurar que la cadena de caracteres es segura para que pueda usarse con URLs y nombres de archivos, los caracteres 62 y 63 en el alfabeto de este formato se cambian de : `"+"` y `"/"` a: `"-"` (menos) y `"_"` respectivamente.

Si el servidor no puede hacer el cambio a HTTP/2, este responderá en HTTP/1 como si fuera una petición normal (con los códigos: `"200 OK"` si todo es correcto, o `30x` si quiere hacer una redirección, o `40x` ó `50x` si no puede responder con el recurso pedido). Así una petición de una página que exista será respondida con `"HTTP/1.1 200 OK"` seguido del resto de la cabecera de la página. Si el servidor, si que puede cambiar al protocolo HTTP/2 , la respuesta será: "`HTTP/1.1 101 Switching Protocols"`. A continuación, se presenta un ejemplo de una posible respuesta, a una petición de actualización a HTTP/2.

```
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: h2c

[standard HTTP/2 server connection preface, etc.]
```

A continuación de la línea en blanco, que sigue al final de la cabecera de respuesta; el servidor, indicará los parámetros ("`SETTINGS"`) de la nueva comunicación con HTTP/2.

### Mejorar a una conexión WebSocket

By far, the most common use case for upgrading an HTTP connection is to use WebSockets, which are always implemented by upgrading an HTTP or HTTPS connection. Keep in mind that if you're opening a new connection using the [WebSocket API](/es/docs/Web/API/WebSocket), or any library that does WebSockets, most or all of this is done for you. For example, opening a WebSocket connection is as simple as:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

The {{domxref("WebSocket.WebSocket", "WebSocket()")}} constructor does all the work of creating an initial HTTP/1.1 connection then handling the handshaking and upgrade process for you.

> **Nota:** You can also use the `"wss://"` URL scheme to open a secure WebSocket connection.

If you need to create a WebSocket connection from scratch, you'll have to handle the handshaking process yourself. After creating the initial HTTP/1.1 session, you need to request the upgrade by adding to a standard request the {{HTTPHeader("Upgrade")}} and {{HTTPHeader("Connection")}} headers, as follows:

```
Connection: Upgrade
Upgrade: websocket
```

### Cabeceras específicas de WebSocket

The following headers are involved in the WebSocket upgrade process. Other than the {{HTTPHeader("Upgrade")}} and {{HTTPHeader("Connection")}} headers, the rest are generally optional or handled for you by the browser and server when they're talking to each other.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Specifies one or more protocol-level WebSocket extensions to ask the server to use. Using more than one `Sec-WebSocket-Extension` header in a request is permitted; the result is the same as if you included all of the listed extensions in one such header.

```
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : A comma-separated list of extensions to request (or agree to support). These should be selected from the [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name). Extensions which take parameters do so using semicolon delineation.

For example:

```
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Provides information to the server which is needed in order to confirm that the client is entitled to request an upgrade to WebSocket. This header can be used when insecure (HTTP) clients wish to upgrade, in order to offer some degree of protection against abuse. The value of the key is computed using an algorithm defined in the WebSocket specification, so this _does not provide security_. Instead, it helps to prevent non-WebSocket clients from inadvertently, or through misuse, requesting a WebSocket connection. In essence, then, this key simply confirms that "Yes, I really mean to open a WebSocket connection."

This header is automatically added by clients that choose to use it; it cannot be added using the {{domxref("XMLHttpRequest.setRequestHeader()")}} method.

```
Sec-WebSocket-Key: key
```

- `key`
  - : The key for this request to upgrade. The client adds this if it wishes to do so, and the server will include in the response a key of its own, which the client will validate before delivering the upgrade reponse to you.

The server's response's `Sec-WebSocket-Accept` header will have a value computed based upon the specified `key`.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

The `Sec-WebSocket-Protocol` header specifies one or more WebSocket protocols that you wish to use, in order of preference. The first one that is supported by the server will be selected and returned by the server in a `Sec-WebSocket-Protocol` header included in the response. You can use this more than once in the header, as well; the result is the same as if you used a comma-delineated list of subprotocol identifiers in a single header.

```
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : A comma-separated list of subprotocol names, in the order of preference. The subprotocols may be selected from the [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) or may be a custom name jointly understood by the client and the server.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Encabezado de petición

Specifies the WebSocket protocol version the client wishes to use, so the server can confirm whether or not that version is supported on its end.

```
Sec-WebSocket-Version: version
```

- `version`
  - : The WebSocket protocol version the client wishes to use when communicating with the server. This number should be the most recent version possible listed in the [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number). The most recent final version of the WebSocket protocol is version 13.

##### Encabezado de respuesta

If the server can't communicate using the specified version of the WebSocket protocol, it will respond with an error (such as 426 Upgrade Required) that includes in its headers a `Sec-WebSocket-Version` header with a comma-separated list of the supported protocol versions. If the server does support the requested protocol version, no `Sec-WebSocket-Version` header is included in the response.

```
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : A comma-delineated list of the WebSocket protocol versions supported by the server.

### Cabeceras exclusivas de respuesta

The response from the server may include these.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Included in the response message from the server during the opening handshake process when the server is willing to initiate a WebSocket connection. It will appear no more than once in the repsonse headers.

```
Sec-WebSocket-Accept: hash
```

- `hash`
  - : If a `Sec-WebSocket-Key` header was provided, the value of this header is computed by taking the value of the key, concatenating the string "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" to it, taking the [SHA-1](https://es.wikipedia.org/wiki/SHA-1) hash of that concatenated string, resulting in a 20-byte value. That value is then [base64](/es/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) encoded to obtain the value of this property.

### Mejora a HTTP sobre TLS iniciada por el cliente

You can also upgrade an HTTP/1.1 connection to TLS/1.0. The main advantages to this are that you can avoid using URL redirection from `http://` to `https://` on the server and you can easily use TLS on virtual hosts. This may, however, introduce problems with proxy servers.

Upgrading an HTTP connection to use {{Glossary("TLS")}} uses the {{HTTPHeader("Upgrade")}} header with the token `"TLS/1.0"`. If the switch is made successfully, the original request (which included `Upgrade`) is completed as normal, but on the TLS connection.

The request to TLS can be made either optionally or mandatorily.

#### Mejora opcional

To upgrade to TLS optionally (that is, allowing the connection to continue in cleartext if the upgrade to TLS fails), you simply use the `Upgrade` and {{HTTPHeader("Connection")}} headers as expected. For example, given the original request:

```
GET http://destination.server.ext/secretpage.html HTTP/1.1
Host: destination.server.ext
Upgrade: TLS/1.0
Connection: Upgrade
```

If the server _does not_ support TLS upgrade, or is unable to upgrade to TLS at the time, it responds with a standard HTTP/1.1 response, such as:

```
HTTP/1.1 200 OK
Date: Thu, 17 Aug 2017 21:07:44 GMT
Server: Apache
Last-Modified: Thu, 17 Aug 2017 08:30:15 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 31374

<html>
  ...
</html>
```

If the server _does_ support TLS upgrade and wishes to permit the upgrade, it responds with the `"101 Switching Protocols"` response code, like this:

```
HTTP/1.1 101 Switching Protocols
Upgrade: TLS/1.0, HTTP/1.1
```

Once the TLS handshake is complete, the original request will be responded to as normal.

#### Mejora obligatoria

To request a mandatory upgrade to TLS—that is, to upgrade and fail the connection if the upgrade is not successful—your first request must be an {{HTTPMethod("OPTIONS")}} request, like this:

```
OPTIONS * HTTP/1.1
Host: destination.server.ext
Upgrade: TLS/1.0
Connection: Upgrade
```

If the upgrade to TLS succeeds, the server will respond with `"101 Switching Protocols"` as described in the previous section. If the upgrade fails, the HTTP/1.1 connection will fail.

### Mejora a TLS iniciada por el servidor

This works roughly the same way as a client-initiated upgrade; an optional upgrade is requested by adding the {{HTTPHeader("Upgrade")}} header to any message. A mandatory upgrade, though, works slightly differently, in that it requests the upgrade by replying to a message it receives with the {{HTTPStatus(426)}} status code, like this:

```
HTTP/1.1 426 Upgrade Required
Upgrade: TLS/1.1, HTTP/1.1
Connection: Upgrade

<html>
... Human-readable HTML page describing why the upgrade is required
    and what to do if this text is seen ...
</html>
```

If the client receiving the `"426 Upgrade Required"` response is willing and able to upgrade to TLS, it should then start the same process covered above under [Client-initiated upgrade to TLS](#client-initiated_upgrade_to_tls).

## Referencias

- [WebSocket API](/es/docs/Web/API/WebSocket)
- [HTTP](/es/docs/Web/HTTP)
- Especificaciones y RFCs:

  - {{RFC(2616)}}
  - {{RFC(6455)}}
  - {{RFC(2817)}}
  - {{RFC(7540)}}
