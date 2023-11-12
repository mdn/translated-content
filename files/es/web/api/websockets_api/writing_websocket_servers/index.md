---
title: Escribir servidores WebSocket
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
---

## Introducción

Un servidor WebSocket es simplemente una aplicación TCP que escucha en cualquier puerto de un servidor que sigue un protocolo específico. La tarea de crear un servidor propio personalizado suele asustar a los desarrolladores, sin embargo puede resultar muy fácil implementar un servidor WebSocket en la plataforma que elijas.

Un servidor WebSocket puede ser escrito en cualquier lenguaje de programación Server-Side que sea soporte [Berkeley Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets), como por ejemplo C++ o Python o inclusive PHP y JavaScript para servidores. Este no va a ser un tutorial para ningún lenguaje espefícamente sino que te ayudará a escribir tu propio servidor.

Necesitarás conocer como trabaja el protocolo HTTP y una experiencia intermedia en programación. Dependiendo de las capacidades de tu lenguaje puede ser necesario tener conocimientos en sockets TCP. Esta guía te dará el conocimiento necesario para escribir un servidor con WebSocket.

> **Nota:** Lea las últimas especificaciones oficiales de WebSocket [RFC 6455](http://datatracker.ietf.org/doc/rfc6455/?include_text=1). Las secciones 1 y 4-7 son especialmente interesantes para personas que deseen implementar servidores. La sección 10 abarca temas de seguridad y definitivamente deberías leerla antes de exponer tu servidor a la red.

Un servidor WebSocket es explicado a un muy bajo nivel aquí. Los servidores WebSocket usualmente estan separados y especializados (por una cuestión de balance de cargas y otra razones prácticas), por lo tanto deberías usar un [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (semejante a un servidor HTTP común) casi siempre para detectar los Handshakes de WebSocket, preprocesarlos, y reenviar los datos de los clientes al servidor WebSocket real.

## Paso 1: El Handshake del WebSocket

Antes que nada, el servidor debe escuchar las conexiones entrantes usando un socket TCP estandar. Dependiendo de tu plataforma, esto puede ser manejado por tí. Por ejemplo asumamos que tu servidor esta escuchando la dirección example.com en el puerto 8000, y tu socket en el servidor responde a la petición GET con /chat.

> **Advertencia:** El servidor puede escuchar cualquier puerto que elijas, pero si elijes un puerto diferente al 80 o 443 podría haber problemas con los firewalls y proxies. Suele suceder con el puerto 443 tambien pero para eso se necesita un conexión segura (TLS/SSL). También se debe aclarar que la mayoría de los navegadores (como Firefox 8 o superiores) no permiten conexiones a servidores WebSocket sin seguridad que se realicen desde páginas web con seguridad (HTTPS).

El Handshake es el puente desde HTTP a WS. En el Handshake se negocian los detalles de la conexión y cualquier de las partes pueden abandonar el proceso antes de completar dicha conexión si los términos no son favorables. El servidor debe ser cuidadoso al analizar lo que el cliente pide, de lo contrario podrían introducirse problemas de seguridad.

### Petición de Handshake en el cliente

A pesar de que estamos creando un servidor, un cliente es quien tiene que comenzar el proceso de Handshake de WebSocket. Entonces tú tienes que saber cómo interpretar la petición del cliente. El cliente enviará una linda petición HTTP estandar que lucirá algo asi (la versión del HTTP debe ser 1.1 o mayor y el método debe ser GET):

```
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

El cliente puede solicitar aquí extensiones y/o sub protocolos; vea [Misceláneos](#Miscellaneous) para más detalles. También, cabeceras comunes como `User-Agent`, `Referer`, `Cookie`, or cabeceras de autenticación podrían ser incluidos. Haz lo que quieras con ellos; no pertencen a WebSocket. También puedes ignorarlos. En muchas configuraciones comunes, un proxy inverso ya ha tratado con ellos.

Si alguna cabecera no se entiende o posee un valor incorrecto, el servidor debe responder "[400 Bad Request](/es/docs/HTTP/Response_codes#400)" e inmediatamente cerrar la conexión. Normalmente, también puede dar la razón porque falló el _handshake_ en el cuerpo de la respuesta HTTP, pero el mensaje podría no ser mostrado (el browser no lo muestra). Si el servidor no comprende que la versión del WebSockets, debería enviar una cabecera `Sec-WebSocket-Version` que contenga la(s) versión(es) no entendidas. (Esta guía explica v13, la más nueva). Ahora, vamos a ver la cabecera más curiosa, `Sec-WebSocket-Key`.

> **Nota:** Todos los **navegadores** deben enviar una [`cabecera Origin`](/es/docs/HTTP/Access_control_CORS#Origin). Tu puedes usar esta cabecera por seguridad (revisando por el mismo origen, listas blancas/ listas negras, etc.) y enviar un [403 Forbidden](/es/docs/HTTP/Response_codes#403) si no te gusta lo que ves. Sin embargo, se advierte que los agentes no navegadores pueden enviar un falso `Origin`. La mayoría de las aplicaciones rechazaran las solicitudes sin esta cabecera.

> **Nota:** The request-uri (`/chat` here) has no defined meaning in the spec. So many people cleverly use it to let one server handle multiple WebSocket applications. For example, `example.com/chat` could invoke a multiuser chat app, while `/game` on the same server might invoke a multiplayer game.

> **Nota:** [Regular HTTP status codes](/es/docs/HTTP/Response_codes) can only be used before the handshake. After the handshake succeeds, you have to use a different set of codes (defined in section 7.4 of the spec).

### Respuesta de Handshake del servidor

Después de la petición, el servidor debería enviar una linda respuesta (aunque todavía en formato HTTP) que se verá asi (hay que recordar que la cabecera termina con \r \n y agrega un \r \n extra después del último):

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Adicionalmente, el servidor puede decidir respecto de las solicitudes "extension/subprotocol" en este punto (ver [Miscelláneos](#Miscellaneous) para más detalles). La cabecera `Sec-WebSocket-Accept` es interesante. El servidor debe derivarla a partir de la cabecera `Sec-WebSocket-Key` enviada anteriormente por el cliente. Para lograr esto se deben concatenar la cabecera del cliente `Sec-WebSocket-Key` y el string "`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`" (es un "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), calcular el [hash SHA-1](https://en.wikipedia.org/wiki/SHA-1) del resultado y devolver el string codificado en [base64](https://en.wikipedia.org/wiki/Base64) de este hash.

> **Nota:** Este aparentemente complicado e innecesario proceso se realiza de manera que sea obvio para el cliente si el servidor soporta o noWebSockets. Esto es importante de realizar, ya que podrían crearse problemas de seguridad si el servidor acepta conexiones WebSockets pero interpreta los datos como solicitudes HTTP.

Así, si la cabecera `Sec-WebSocket-Key` era "`dGhlIHNhbXBsZSBub25jZQ==`", la correspondiente respuesta `Sec-WebSocket-Accept` será "`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`". Una vez que el servidor envía estas cabeceras, el "handshake" se considera completo y puedes comenzar a intercambiar datos.

> **Nota:** El servidor puede enviar otras cabeceras como Set-Cookie, o solicitar autenticación o redirigir mediante otros status codes antes de responder al handshake.

### Llevando registro de los clientes

Esto no está directamente relacionado con el protocolo WebSocket, pero no está de más mencionarlo: tu servidor debe llevar el registro de los sockets de los clientes, de manera de no realizar handshakes constantemente con los clientes que ya han completado este proceso. La misma dirección IP cliente puede intentar conectarse múltiples veces (pero el servidor puede denegar la conexión si se intentan demasiadas conexiones con el objetivo de evitar ataques [ataques DoS](https://en.wikipedia.org/wiki/Denial_of_service)).

## Paso 2: Intercambiando Data Frames

Tanto el cliente como el servidor puede decidir enviar un mensaje en cualquier momento — ese es el encanto de los WebSockets. Sin embargo, extraer información de esos denominados "frames" o tramas de datos no es una experiencia muy mágica. Aunque todos los frames siguen el mismo formato específico, los datos que van del cliente al servidor se enmascaran utilizando el [cifrado XOR](https://en.wikipedia.org/wiki/XOR_cipher) (con una clave de 32 bits). La sección 5 de la especificación describe esto en detalle.

### Formato

Cada trama de datos (desde el cliente al servidor o viceversa) sigue este mismo formato:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |Masking-key, if MASK set to 1  |
+-------------------------------+-------------------------------+
| Masking-key (continued)       |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
```

Los RSV1-3 se pueden ignorar, son para las extensiones.

El bit MASK simplemente indica si el mensaje está codificado. Los mensajes del cliente deben estar enmascarados, por lo que tu servidor debe esperar que valga 1. (De hecho, la [sección 5.1 de las espeficicaciones](http://tools.ietf.org/html/rfc6455#section-5.1) dice que tu servidor debe desconectarse de un cliente si ese cliente envía un mensaje sin enmascarar). Cuando se envía una trama al cliente, no lo ocultes y no pongas el bit de la máscara. Te explicaremos el enmascaramiento más tarde. _Nota: Tienes que enmascarar los mensajes incluso cuando uses un socket seguro._

El campo opcode define cómo interpretar los datos de la carga útil: `0x0` para continuar, `0x1` para texto (que siempre se codifica con UTF-8), `0x2` para datos binarios, otros llamados "códigos de control" se explican más tarde. En esta versión de WebSockets, de `0x3` a `0x7` y de `0xB` a `0xF` no tienen significado.

El bit FIN indica si este es el último mensaje de una serie. Si es 0, el servidor seguirá escuchando más partes del mensaje; de lo contrario, el servidor debería considerar el mensaje entregado. Más sobre esto después.

### Decoding Payload Length

To read the payload data, you must know when to stop reading. That's why the payload length is important to know. Unfortunately, this is somewhat complicated. To read it, follow these steps:

1. Read bits 9-15 (inclusive) and interpret that as an unsigned integer. If it's 125 or less, then that's the length; you're **done**. If it's 126, go to step 2. If it's 127, go to step 3.
2. Read the next 16 bits and interpret those as an unsigned integer. You're **done**.
3. Read the next 64 bits and interpret those as an unsigned integer. You're **done**.

### Reading and Unmasking the Data

If the MASK bit was set (and it should be, for client-to-server messages), read the next 4 octets (32 bits); this is the masking key. Once the payload length and masking key is decoded, you can go ahead and read that number of bytes from the socket. Let's call the data **ENCODED**, and the key **MASK**. To get **DECODED**, loop through the octets (bytes a.k.a. characters for text data) of **ENCODED** and XOR the octet with the (i modulo 4)th octet of MASK. In pseudo-code (that happens to be valid JavaScript):

```
var DECODED = "";
for (var i = 0; i < ENCODED.length; i++) {
    DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}
```

Now you can figure out what **DECODED** means depending on your application.

### Message Fragmentation

The FIN and opcode fields work together to send a message split up into separate frames. This is called message fragmentation. Fragmentation is only available on opcodes `0x0` to `0x2`.

Recall that the opcode tells what a frame is meant to do. If it's `0x1`, the payload is text. If it's `0x2`, the payload is binary data. However, if it's `0x0,` the frame is a continuation frame. This means the server should concatenate the frame's payload to the last frame it received from that client. Here is a rough sketch, in which a server reacts to a client sending text messages. The first message is sent in a single frame, while the second message is sent across three frames. FIN and opcode details are shown only for the client:

```
Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!
```

Notice the first frame contains an entire message (has `FIN=1` and `opcode!=0x0`), so the server can process or respond as it sees fit. The second frame sent by the client has a text payload (`opcode=0x1`), but the entire message has not arrived yet (`FIN=0`). All remaining parts of that message are sent with continuation frames (`opcode=0x0`), and the final frame of the message is marked by `FIN=1`. [Section 5.4 of the spec](http://tools.ietf.org/html/rfc6455#section-5.4) describes message fragmentation.

## Pings and Pongs: The Heartbeat of WebSockets

At any point after the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected, for example.

A ping or pong is just a regular frame, but it's a **control frame**. Pings have an opcode of `0x9`, and pongs have an opcode of `0xA`. When you get a ping, send back a pong with the exact same Payload Data as the ping (for pings and pongs, the max payload length is 125). You might also get a pong without ever sending a ping; ignore this if it happens.

> **Nota:** If you have gotten more than one ping before you get the chance to send a pong, you only send one pong.

## Step 4: Closing the connection

To close a connection either the client or server can send a control frame with data containing a specified control sequence to begin the closing handshake (detailed in [Section 5.5.1](http://tools.ietf.org/html/rfc6455#section-5.5.1)). Upon receiving such a frame, the other peer sends a Close frame in response. The first peer then closes the connection. Any further data received after closing of connection is then discarded.

## Miscellaneous

> **Nota:** WebSocket codes, extensions, subprotocols, etc. are registered at the [IANA WebSocket Protocol Registry](http://www.iana.org/assignments/websocket/websocket.xml).

WebSocket extensions and subprotocols are negotiated via headers during [the handshake](#Handshake). Sometimes extensions and subprotocols seem too similar to be different things, but there is a clear distinction. Extensions control the WebSocket **frame** and **modify** the payload, while subprotocols structure the WebSocket **payload** and **never modify** anything. Extensions are optional and generalized (like compression); subprotocols are mandatory and localized (like ones for chat and for MMORPG games).

### Extensions

> **Nota:** **This section needs expansion. Please edit if you are equipped to do so.**

Think of an extension as compressing a file before e-mailing it to someone. Whatever you do, you're sending the _same_ data in different forms. The recipient will eventually be able to get the same data as your local copy, but it is sent differently. That's what an extension does. WebSockets defines a protocol and a simple way to send data, but an extension such as compression could allow sending the same data but in a shorter format.

> **Nota:** Extensions are explained in sections 5.8, 9, 11.3.2, and 11.4 of the spec.

_TODO_

### Subprotocols

Think of a subprotocol as a custom [XML schema](https://en.wikipedia.org/wiki/XML_schema) or [doctype declaration](https://en.wikipedia.org/wiki/Document_Type_Definition). You're still using XML and its syntax, but you're additionally restricted by a structure you agreed on. WebSocket subprotocols are just like that. They do not introduce anything fancy, they just establish structure. Like a doctype or schema, both parties must agree on the subprotocol; unlike a doctype or schema, the subprotocol is implemented on the server and cannot be externally refered to by the client.

> **Nota:** Subprotocols are explained in sections 1.9, 4.2, 11.3.4, and 11.5 of the spec.

A client has to ask for a specific subprotocol. To do so, it will send something like this **as part of the original handshake**:

```
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

or, equivalently:

```
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Now the server must pick one of the protocols that the client suggested and it supports. If there are more than one, send the first one the client sent. Imagine our server can use both `soap` and `wamp`. Then, in the response handshake, it'll send:

```
Sec-WebSocket-Protocol: soap
```

> **Advertencia:** The server can't send more than one `Sec-Websocket-Protocol` header.
> If the server doesn't want to use any subprotocol, **it shouldn't send any `Sec-WebSocket-Protocol` header**. Sending a blank header is incorrect.
> The client may close the connection if it doesn't get the subprotocol it wants.

If you want your server to obey certain subprotocols, then naturally you'll need extra code on the server. Let's imagine we're using a subprotocol `json`. In this subprotocol, all data is passed as [JSON](https://en.wikipedia.org/wiki/JSON). If the client solicits this protocol and the server wants to use it, the server will need to have a JSON parser. Practically speaking, this will be part of a library, but the server will need to pass the data around.

> **Nota:** To avoid name conflict, it's recommended to make your subprotocol name part of a domain string. If you are building a custom chat app that uses a proprietary format exclusive to Example Inc., then you might use this: `Sec-WebSocket-Protocol: chat.example.com`. For different versions, a widely-used method is to add a `/` followed by the version number, like `chat.example.com/2.0`. Note that this isn't required, it's just an optional convention, and you can use any string you wish.

## Related

- [Tutorial: Websocket server in C#](/es/docs/WebSockets/Writing_WebSocket_server)
- [Writing WebSocket client applications](/es/docs/WebSockets/Writing_WebSocket_client_applications)
- [Tutorial: Websocket server in VB.NET](/es/docs/WebSockets/WebSocket_Server_Vb.NET)
