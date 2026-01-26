---
title: 協議升級機制
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
---

[HTTP/1.1 協議](/zh-TW/docs/Web/HTTP)提供了一種特殊的機制，這一機制允許將一個已建立的連接升級成新的、不相容的協議。這篇指南涵蓋了其運作原理和使用場景。

通常來說這一機制總是由客戶端發起的 （不過也有例外，比如說可以由服務端發起[升級到傳輸層安全協議（TLS）](#server-initiated_upgrade_to_tls)）， 服務端可以選擇是否要升級到新協議。借助這一技術，連接可以以常用的協議啟動（如 HTTP/1.1），隨後再升級到 HTTP2 甚至是 WebSockets.

注意：HTTP/2 明確禁止使用此機制，這個機制只屬於 HTTP/1.1

## 升级 HTTP/1.1 連線

協議升級請求總是由客戶端發起的；暫時沒有服務端請求協議更改的機制。當客戶端試圖升級到一個新的協議時，可以先發送一個普通的請求（{{HTTPMethod("GET")}}，{{HTTPMethod("POST")}}等），不過這個請求需要進行特殊配置以包含升級請求。
Upgrade 請求看起來就像：

```plain
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

根據之前的請求的協議，可能需要其他頭部信息，例如：從 HTTP/1.1 升級到 WebSocket 允許配置有關 WebSocket 連接的頭部詳細信息，以及在連接時提供一定程度的安全性。查看 [Upgrading to a WebSocket connection](#upgrading_to_a_websocket_connection) 獲取更多信息。

如果服務器決定升級這次連接，就會返回一個 {{HTTPStatus(101, "101 Switching Protocols")}} 響應狀態碼，和一個要切換到的協議的頭部字段 Upgrade。 如果服務器沒有（或者不能）升級這次連接，它會忽略客戶端發送的 "Upgrade 頭部字段，返回一個常規的響應：例如一個{{HTTPStatus(200, "200 OK")}}).

服務在發送 101 狀態碼之後，就可以使用新的協議，並可以根據需要執行任何其他協議指定的握手。實際上，一旦這次升級完成了，連接就變成了雙向管道。並且可以通過新協議完成啟動升級的請求。

## Common uses for this mechanism

Here we look at the most common use cases for the {{HTTPHeader("Upgrade")}} header.

### Upgrading to a WebSocket connection

By far, the most common use case for upgrading an HTTP connection is to use WebSockets, which are always implemented by upgrading an HTTP or HTTPS connection. Keep in mind that if you're opening a new connection using the [WebSocket API](/zh-TW/docs/Web/API/WebSocket), or any library that does WebSockets, most or all of this is done for you. For example, opening a WebSocket connection is as simple as:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

The {{domxref("WebSocket.WebSocket", "WebSocket()")}} constructor does all the work of creating an initial HTTP/1.1 connection then handling the handshaking and upgrade process for you.

> [!NOTE]
> You can also use the `"wss://"` URL scheme to open a secure WebSocket connection.

If you need to create a WebSocket connection from scratch, you'll have to handle the handshaking process yourself. After creating the initial HTTP/1.1 session, you need to request the upgrade by adding to a standard request the {{HTTPHeader("Upgrade")}} and {{HTTPHeader("Connection")}} headers, as follows:

```plain
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-specific headers

The following headers are involved in the WebSocket upgrade process. Other than the {{HTTPHeader("Upgrade")}} and {{HTTPHeader("Connection")}} headers, the rest are generally optional or handled for you by the browser and server when they're talking to each other.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Specifies one or more protocol-level WebSocket extensions to ask the server to use. Using more than one `Sec-WebSocket-Extension` header in a request is permitted; the result is the same as if you included all of the listed extensions in one such header.

```plain
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : A comma-separated list of extensions to request (or agree to support). These should be selected from the [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name). Extensions which take parameters do so by using semicolon delineation.

For example:

```plain
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Provides information to the server which is needed in order to confirm that the client is entitled to request an upgrade to WebSocket. This header can be used when insecure (HTTP) clients wish to upgrade, in order to offer some degree of protection against abuse. The value of the key is computed using an algorithm defined in the WebSocket specification, so this _does not provide security_. Instead, it helps to prevent non-WebSocket clients from inadvertently, or through misuse, requesting a WebSocket connection. In essence, then, this key simply confirms that "Yes, I really mean to open a WebSocket connection."

This header is automatically added by clients that choose to use it; it cannot be added using the {{domxref("XMLHttpRequest.setRequestHeader()")}} method.

```plain
Sec-WebSocket-Key: key
```

- `key`
  - : The key for this request to upgrade. The client adds this if it wishes to do so, and the server will include in the response a key of its own, which the client will validate before delivering the upgrade response to you.

The server's response's {{HTTPHeader("Sec-WebSocket-Accept")}} header will have a value computed based upon the specified `key`.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

The `Sec-WebSocket-Protocol` header specifies one or more WebSocket protocols that you wish to use, in order of preference. The first one that is supported by the server will be selected and returned by the server in a `Sec-WebSocket-Protocol` header included in the response. You can use this more than once in the header, as well; the result is the same as if you used a comma-delineated list of subprotocol identifiers in a single header.

```plain
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : A comma-separated list of subprotocol names, in the order of preference. The subprotocols may be selected from the [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) or may be a custom name jointly understood by the client and the server.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Request header

Specifies the WebSocket protocol version the client wishes to use, so the server can confirm whether or not that version is supported on its end.

```plain
Sec-WebSocket-Version: version
```

- `version`
  - : The WebSocket protocol version the client wishes to use when communicating with the server. This number should be the most recent version possible listed in the [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number). The most recent final version of the WebSocket protocol is version 13.

##### Response header

If the server can't communicate using the specified version of the WebSocket protocol, it will respond with an error (such as 426 Upgrade Required) that includes in its headers a `Sec-WebSocket-Version` header with a comma-separated list of the supported protocol versions. If the server does support the requested protocol version, no `Sec-WebSocket-Version` header is included in the response.

```plain
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : A comma-delineated list of the WebSocket protocol versions supported by the server.

### Response-only headers

The response from the server may include these.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Included in the response message from the server during the opening handshake process when the server is willing to initiate a WebSocket connection. It will appear no more than once in the response headers.

```plain
Sec-WebSocket-Accept: hash
```

- `hash`
  - : If a {{HTTPHeader("Sec-WebSocket-Key")}} header was provided, the value of this header is computed by taking the value of the key, concatenating the string "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" to it, taking the [SHA-1](https://zh.wikipedia.org/wiki/SHA-1) hash of that concatenated string, resulting in a 20-byte value. That value is then [base64](/zh-TW/docs/Glossary/Base64) encoded to obtain the value of this property.

## References

- [WebSocket API](/zh-TW/docs/Web/API/WebSocket)
- [HTTP](/zh-TW/docs/Web/HTTP)
- Specifications and RFCs:
  - {{RFC(7230)}}
  - {{RFC(6455)}}
  - {{RFC(7540)}}
