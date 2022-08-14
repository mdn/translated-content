---
title: Writing WebSocket servers
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
translation_of: Web/API/WebSockets_API/Writing_WebSocket_servers
original_slug: WebSockets/Writing_WebSocket_servers
---
{{APIRef("Websockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die einen Port eines TCP-Servers überwacht, der einem bestimmten Protokoll folgt. Die Aufgabe, einen benutzerdefinierten Server zu erstellen, macht den Leuten Angst. Es kann jedoch unkompliziert sein, einen einfachen WebSocket-Server auf einer Plattform Ihrer Wahl zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die dazu in der Lage ist: [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets), siehe auch C(++), Python, [PHP](/de/docs/PHP), oder Serverseitiges[ JavaScript](/de/docs/Web/JavaScript/Server-Side_JavaScript).

Dies ist kein Tutorial in einer bestimmten Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

In diesem Artikel wird davon ausgegangen, dass Sie bereits mit der Funktionsweise von {{Glossary ("HTTP")}} vertraut sind und über ein moderates Programmiererlebnis verfügen. Abhängig von der Sprachunterstützung sind möglicherweise Kenntnisse über TCP-Sockets erforderlich. In diesem Handbuch wird das Mindestwissen dargestellt, das Sie zum Schreiben eines WebSocket-Servers benötigen.

> **Note:** **Notiz:** Lesen Sie die neueste offizielle WebSockets-Spezifikation, RFC 6455. Die Abschnitte 1 und 4-7 sind für Server-Implementierer besonders interessant. In Abschnitt 10 wird die Sicherheit erläutert, und Sie sollten sie unbedingt lesen, bevor Sie Ihren Server verfügbar machen.

Ein WebSocket-Server wird hier auf sehr niedriger Ebene erklärt. WebSocket-Server sind häufig separate und spezialisierte Server (aus Gründen des Lastenausgleichs oder aus anderen praktischen Gründen). Daher verwenden Sie häufig einen Reverse-Proxy (z. B. einen normalen HTTP-Server), um WebSocket-Handshakes zu erkennen, vorzuverarbeiten und an diese Clients zu senden ein echter WebSocket-Server. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungshandlern (zum Beispiel) aufblähen müssen.

## **Der WebSocket-Handshake**

Zunächst muss der Server mithilfe eines Standard-TCP-Sockets auf eingehende Socket-Verbindungen warten. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Angenommen, Ihr Server überwacht example.com, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod ("GET")}} -Anfragen unter example.com/chat.

> **Warning:** **Warnung**: Der Server überwacht möglicherweise jeden von ihm ausgewählten Port. Wenn er jedoch einen anderen Port als 80 oder 443 auswählt, kann es zu Problemen mit Firewalls und / oder Proxys kommen. Browser benötigen im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte bieten.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Beim Handshake werden Details der Verbindung ausgehandelt, und jede Partei kann vor Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss darauf achten, alles zu verstehen, was der Client verlangt, da sonst Sicherheitsprobleme auftreten können.

> **Note:** **Tipp**: Die Anfrage-URL (/ Chat hier) hat in der Spezifikation keine definierte Bedeutung. Viele Benutzer verwenden es daher, damit ein Server mehrere WebSocket-Anwendungen verarbeiten kann. Zum Beispiel könnte example.com/chat eine Mehrbenutzer-Chat-App aufrufen, während /game auf demselben Server möglicherweise ein Multiplayer-Spiel aufruft.

### Client handshake Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Sie müssen also wissen, wie Sie die Anfrage des Kunden interpretieren. Der Client sendet eine ziemlich normale HTTP-Anfrage mit Headern, die so aussehen (die HTTP-Version muss 1.1 oder höher sein und die Methode muss GET sein):

    GET /chat HTTP/1.1
    Host: example.com:8000
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
    Sec-WebSocket-Version: 13

Der Client kann hier Erweiterungen und / oder Unterprotokolle anfordern. Einzelheiten finden Sie unter Sonstiges. Es können auch allgemeine Header wie {{HTTPHeader ("User-Agent")}}, {{HTTPHeader ("Referer")}}, {{HTTPHeader ("Cookie")}} oder Authentifizierungsheader vorhanden sein. Mach mit denen, was du willst; Sie beziehen sich nicht direkt auf das WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat sich bereits ein Reverse-Proxy mit ihnen befasst.

> **Note:** **Tipp**: Alle Browser senden einen Origin-Header. Sie können diesen Header aus Sicherheitsgründen verwenden (nach demselben Ursprung suchen, automatisch zulassen oder ablehnen usw.) und eine 403 Forbidden senden, wenn Ihnen das, was Sie sehen, nicht gefällt. Seien Sie jedoch gewarnt, dass Nicht-Browser-Agenten einen gefälschten Ursprung senden können. Die meisten Anwendungen lehnen Anforderungen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus ("400")}} ("Bad Request")} Antwort senden und den Socket sofort schließen. Wie üblich wird möglicherweise auch der Grund angegeben, warum der Handshake im HTTP-Antworttext fehlgeschlagen ist, die Nachricht wird jedoch möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader ("Sec-WebSocket-Version")}} Header zurücksenden, der die Version (en) enthält, die er versteht. Im obigen Beispiel wird Version 13 des WebSocket-Protokolls angegeben.

Der interessanteste Header hier ist {{HTTPHeader ("Sec-WebSocket-Key")}}. Schauen wir uns das also als nächstes an.

> **Note:** **Hinweis**: Normale HTTP-Statuscodes können nur vor dem Handshake verwendet werden. Nach erfolgreichem Handshake müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server handshake Antwort

Wenn der Server die Handshake-Anforderung empfängt, sollte er eine spezielle Antwort zurücksenden, die angibt, dass das Protokoll von HTTP zu WebSocket geändert wird. Dieser Header sieht ungefähr so aus (denken Sie daran, dass jede Headerzeile mit \ r \ n endet, und setzen Sie nach dem letzten ein zusätzliches \ r \ n, um das Ende des Headers anzuzeigen):

    HTTP/1.1 101 Switching Protocols
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=

Darüber hinaus kann der Server hier über Erweiterungs- / Unterprotokollanforderungen entscheiden. Einzelheiten finden Sie unter Sonstiges. Der Sec-WebSocket-Accept-Header ist wichtig, da der Server ihn von dem {{HTTPHeader ("Sec-WebSocket-Key")}} ableiten muss, den der Client an ihn gesendet hat. Verketten Sie dazu den Sec-WebSocket-Key des Clients und die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (es handelt sich um eine "magische Zeichenfolge"), nehmen Sie den SHA-1-Hash des Ergebnisses und geben Sie den base64 zurück Codierung dieses Hashs.

> **Note:** \***\*Hinweis\*\***: Dieser scheinbar überkomplizierte Prozess ist vorhanden, sodass für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten können, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten jedoch als HTTP-Anforderung interpretiert.

Wenn der Schlüssel also "dGhlIHNhbXBsZSBub25jZQ ==" war, lautet der Wert des Sec-WebSocket-Accept-Headers "s3pPLMBiTxaQ9kYGzzhZRbK + xOo =". Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können mit dem Datenaustausch beginnen !

> **Note:** \***\*Hinweis\*\***: Der Server kann andere Header wie {{HTTPHeader ("Set-Cookie")}} senden oder über andere Statuscodes nach Authentifizierung oder Weiterleitung fragen, bevor er den Antwort-Handshake sendet.

### Clients im Auge behalten

Dies bezieht sich nicht direkt auf das WebSocket-Protokoll, ist jedoch hier erwähnenswert: Ihr Server muss die Sockets der Clients verfolgen, damit Sie bei Clients, die den Handshake bereits abgeschlossen haben, nicht erneut Handshakes durchführen. Dieselbe Client-IP-Adresse kann mehrmals versuchen, eine Verbindung herzustellen. Der Server kann sie jedoch ablehnen, wenn sie zu viele Verbindungen versuchen, um sich vor Denial-of-Service-Angriffen zu schützen.

Beispielsweise können Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit den entsprechenden {{domxref ("WebSocket")}} und anderen Daten führen, die Sie dieser Verbindung zuordnen müssen.

## Exchanging data frames

Either the client or the server can choose to send a message at any time — that's the magic of WebSockets. However, extracting information from these so-called "frames" of data is a not-so-magical experience. Although all frames follow the same specific format, data going from the client to the server is masked using [XOR encryption](https://en.wikipedia.org/wiki/XOR_cipher) (with a 32-bit key). Section 5 of the specification describes this in detail.

### Format

Each data frame (from the client to the server or vice-versa) follows this same format:

    Frame format:
    ​​
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

The MASK bit tells whether the message is encoded. Messages from the client must be masked, so your server must expect this to be 1. (In fact, [section 5.1 of the spec](http://tools.ietf.org/html/rfc6455#section-5.1) says that your server must disconnect from a client if that client sends an unmasked message.) When sending a frame back to the client, do not mask it and do not set the mask bit. We'll explain masking later. _Note: You must mask messages even when using a secure socket._ RSV1-3 can be ignored, they are for extensions.

The opcode field defines how to interpret the payload data: `0x0` for continuation, `0x1` for text (which is always encoded in UTF-8), `0x2` for binary, and other so-called "control codes" that will be discussed later. In this version of WebSockets, `0x3` to `0x7` and `0xB` to `0xF` have no meaning.

The FIN bit tells whether this is the last message in a series. If it's 0, then the server keeps listening for more parts of the message; otherwise, the server should consider the message delivered. More on this later.

### Decoding Payload Length

To read the payload data, you must know when to stop reading. That's why the payload length is important to know. Unfortunately, this is somewhat complicated. To read it, follow these steps:

1.  Read bits 9-15 (inclusive) and interpret that as an unsigned integer. If it's 125 or less, then that's the length; you're **done**. If it's 126, go to step 2. If it's 127, go to step 3.
2.  Read the next 16 bits and interpret those as an unsigned integer. You're **done**.
3.  Read the next 64 bits and interpret those as an unsigned integer. (The most significant bit _must_ be 0.) You're **done**.

### Reading and Unmasking the Data

If the MASK bit was set (and it should be, for client-to-server messages), read the next 4 octets (32 bits); this is the masking key. Once the payload length and masking key is decoded, you can read that number of bytes from the socket. Let's call the data **ENCODED**, and the key **MASK**. To get **DECODED**, loop through the octets (bytes a.k.a. characters for text data) of **ENCODED** and XOR the octet with the (i modulo 4)th octet of MASK. In pseudo-code (that happens to be valid JavaScript):

    var DECODED = "";
    for (var i = 0; i < ENCODED.length; i++) {
        DECODED[i] = ENCODED[i] ^ MASK[i % 4];
    }

Now you can figure out what **DECODED** means depending on your application.

### Message Fragmentation

The FIN and opcode fields work together to send a message split up into separate frames. This is called message fragmentation. Fragmentation is only available on opcodes `0x0` to `0x2`.

Recall that the opcode tells what a frame is meant to do. If it's `0x1`, the payload is text. If it's `0x2`, the payload is binary data. However, if it's `0x0,` the frame is a continuation frame; this means the server should concatenate the frame's payload to the last frame it received from that client. Here is a rough sketch, in which a server reacts to a client sending text messages. The first message is sent in a single frame, while the second message is sent across three frames. FIN and opcode details are shown only for the client:

    Client: FIN=1, opcode=0x1, msg="hello"
    Server: (process complete message immediately) Hi.
    Client: FIN=0, opcode=0x1, msg="and a"
    Server: (listening, new message containing text started)
    Client: FIN=0, opcode=0x0, msg="happy new"
    Server: (listening, payload concatenated to previous message)
    Client: FIN=1, opcode=0x0, msg="year!"
    Server: (process complete message) Happy new year to you too!

Notice the first frame contains an entire message (has `FIN=1` and `opcode!=0x0`), so the server can process or respond as it sees fit. The second frame sent by the client has a text payload (`opcode=0x1`), but the entire message has not arrived yet (`FIN=0`). All remaining parts of that message are sent with continuation frames (`opcode=0x0`), and the final frame of the message is marked by `FIN=1`. [Section 5.4 of the spec](http://tools.ietf.org/html/rfc6455#section-5.4) describes message fragmentation.

## Pings and Pongs: The Heartbeat of WebSockets

At any point after the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected, for example.

A ping or pong is just a regular frame, but it's a **control frame**. Pings have an opcode of `0x9`, and pongs have an opcode of `0xA`. When you get a ping, send back a pong with the exact same Payload Data as the ping (for pings and pongs, the max payload length is 125). You might also get a pong without ever sending a ping; ignore this if it happens.

> **Note:** If you have gotten more than one ping before you get the chance to send a pong, you only send one pong.

## Closing the connection

To close a connection either the client or server can send a control frame with data containing a specified control sequence to begin the closing handshake (detailed in [Section 5.5.1](http://tools.ietf.org/html/rfc6455#section-5.5.1)). Upon receiving such a frame, the other peer sends a Close frame in response. The first peer then closes the connection. Any further data received after closing of connection is then discarded.

## Miscellaneous

> **Note:** WebSocket codes, extensions, subprotocols, etc. are registered at the [IANA WebSocket Protocol Registry](http://www.iana.org/assignments/websocket/websocket.xml).

WebSocket extensions and subprotocols are negotiated via headers during [the handshake](#Handshake). Sometimes extensions and subprotocols very similar, but there is a clear distinction. Extensions control the WebSocket _frame_ and _modify_ the payload, while subprotocols structure the WebSocket _payload_ and _never modify_ anything. Extensions are optional and generalized (like compression); subprotocols are mandatory and localized (like ones for chat and for MMORPG games).

### Extensions

> **Note:** **This section needs expansion. Please edit if you are equipped to do so.**

Think of an extension as compressing a file before e-mailing it to someone. Whatever you do, you're sending the _same_ data in different forms. The recipient will eventually be able to get the same data as your local copy, but it is sent differently. That's what an extension does. WebSockets defines a protocol and a simple way to send data, but an extension such as compression could allow sending the same data but in a shorter format.

> **Note:** Extensions are explained in sections 5.8, 9, 11.3.2, and 11.4 of the spec.

_TODO_

### Subprotocols

Think of a subprotocol as a custom [XML schema](https://en.wikipedia.org/wiki/XML_schema) or [doctype declaration](https://en.wikipedia.org/wiki/Document_Type_Definition). You're still using XML and its syntax, but you're additionally restricted by a structure you agreed on. WebSocket subprotocols are just like that. They do not introduce anything fancy, they just establish structure. Like a doctype or schema, both parties must agree on the subprotocol; unlike a doctype or schema, the subprotocol is implemented on the server and cannot be externally refered to by the client.

> **Note:** Subprotocols are explained in sections 1.9, 4.2, 11.3.4, and 11.5 of the spec.

A client has to ask for a specific subprotocol. To do so, it will send something like this _as part of the original handshake_:

    GET /chat HTTP/1.1
    ...
    Sec-WebSocket-Protocol: soap, wamp

or, equivalently:

    ...
    Sec-WebSocket-Protocol: soap
    Sec-WebSocket-Protocol: wamp

Now the server must pick one of the protocols that the client suggested and it supports. If there is more than one, send the first one the client sent. Imagine our server can use both `soap` and `wamp`. Then, in the response handshake, it sends:

    Sec-WebSocket-Protocol: soap

> **Warning:** The server can't send more than one `Sec-Websocket-Protocol` header.
> If the server doesn't want to use any subprotocol, _**it shouldn't send any `Sec-WebSocket-Protocol` header**_. Sending a blank header is incorrect. The client may close the connection if it doesn't get the subprotocol it wants.

If you want your server to obey certain subprotocols, then naturally you'll need extra code on the server. Let's imagine we're using a subprotocol `json`. In this subprotocol, all data is passed as [JSON](https://en.wikipedia.org/wiki/JSON). If the client solicits this protocol and the server wants to use it, the server needs to have a JSON parser. Practically speaking, this will be part of a library, but the server needs to pass the data around.

> **Note:** **Tip:** To avoid name conflict, it's recommended to make your subprotocol name part of a domain string. If you are building a custom chat app that uses a proprietary format exclusive to Example Inc., then you might use this: `Sec-WebSocket-Protocol: chat.example.com`. Note that this isn't required, it's just an optional convention, and you can use any string you wish.

## Related

- [WebSocket handshake library in C++](https://github.com/alexhultman/libwshandshake)
- [Writing WebSocket client applications](/de/docs/WebSockets/Writing_WebSocket_client_applications)
- [Tutorial: Websocket server in C#](/de/docs/WebSockets/Writing_WebSocket_server)
- [Tutorial: Websocket server in VB.NET](/de/docs/WebSockets/WebSocket_Server_Vb.NET)
- [Tutorial: Websocket server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
