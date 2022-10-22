---
title: 协议升级机制
slug: Web/HTTP/Protocol_upgrade_mechanism
---

{{HTTPSidebar}}

[HTTP 协议](/zh-CN/docs/Web/HTTP) 提供了一种特殊的机制，这一机制允许将一个已建立的连接升级成新的、不相容的协议。这篇指南涵盖了其工作原理和使用场景。

通常来说这一机制总是由客户端发起的（不过也有例外，比如说可以由服务端发起[升级到传输层安全协议（TLS）](#server-initiated_upgrade_to_tls)），服务端可以选择是否要升级到新协议。借助这一技术，连接可以以常用的协议启动（如 HTTP/1.1），随后再升级到 HTTP2 甚至是 WebSockets.

注意：HTTP/2 明确禁止使用此机制，这个机制只属于 HTTP/1.1

## 升级 HTTP/1.1 的链接

协议升级请求总是由客户端发起的；暂时没有服务端请求协议更改的机制。当客户端试图升级到一个新的协议时，可以先发送一个普通的请求（{{HTTPMethod("GET")}}，{{HTTPMethod("POST")}}等），不过这个请求需要进行特殊配置以包含升级请求。

特别这个请求需要添加两项额外的 header：

- [`Connection: Upgrade`](/zh-CN/docs/Web/HTTP/Headers/Connection)
  - : 设置 `Connection` 头的值为 `"Upgrade"` 来指示这是一个升级请求。
- [`Upgrade: protocols`](/zh-CN/docs/Web/HTTP/Headers/Upgrade)
  - : `Upgrade` 头指定一项或多项协议名，按优先级排序，以逗号分隔。

一个典型的包含升级请求的例子差不多是这样的：

```plain
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

根据之前的请求的协议，可能需要其他头部信息，例如：从 HTTP/1.1 升级到[WebSocket](/zh-CN/docs/Web/API/WebSocket) 允许配置有关 WebSocket 连接的头部详细信息，以及在连接时提供一定程度的安全性。查看 [升级到 WebSocket 协议的连接](#升级到websocket协议的连接) 获取更多信息。

如果服务器决定升级这次连接，就会返回一个 {{HTTPStatus(101, "101 Switching Protocols")}} 响应状态码，和一个要切换到的协议的头部字段 Upgrade。如果服务器没有（或者不能）升级这次连接，它会忽略客户端发送的 `"Upgrade` 头部字段，返回一个常规的响应：例如一个{{HTTPStatus(200, "200 OK")}}).

服务在发送 {{HTTPStatus(101)}} 状态码之后，就可以使用新的协议，并可以根据需要执行任何其他协议指定的握手。实际上，一旦这次升级完成了，连接就变成了双向管道。并且可以通过新协议完成启动升级的请求。

由 HTTP/1.1 请求建立的连接可以升级为 HTTP/2 协议的连接，但是反过来不可以。事实上 HTTP/2 已经不再支持 101 状态码了，也不再支持任何连接升级机制。

## 升级机制的常用场合

此处将介绍最常用到 `Upgrade` header 的场合。

### 升级到 WebSocket 协议的连接

至今为止最经常会需要升级一个 HTTP 连接的场合就是使用 WebSocket。当你用 [WebSocket API](/zh-CN/docs/Web/API/WebSocket) 以及其他大部分实现 WebSockets 的库去建立 WebSocket 连接时，基本上都不用操心升级的过程，因为这些 API 已经实现了这一步。比如，用如下 API 打开一个 WebSocket 连接：

```plain
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

{{domxref("WebSocket.WebSocket", "WebSocket()")}} 构造函数已经自动完成了发送初始 HTTP/1.1 请求，处理握手及升级过程。

你也可以用 `"wss://"` 地址格式来打开安全的 WebSocket 连接。

如果想要自己重头实现 WebSocket 连接，就必须要处理握手和升级过程。在创建初始 HTTP/1.1 会话之后你需要发送另一个 HTTP 标准请求，但在 headers 中要带上{{HTTPHeader("Upgrade")}} and {{HTTPHeader("Connection")}}，也就是：

```plain
Connection: Upgrade
Upgrade: websocket
```

### WebSocket 专有的 headers

以下 headers 是在 WebSocket 升级过程中会出现的。除了 {{HTTPHeader("Upgrade")}} 和 {{HTTPHeader("Connection")}} headers，其他的一般浏览器和服务器都会在交互过程中处理好。

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

用于指定一个或多个请求服务器使用的协议级 WebSocket 扩展。允许在一个请求中使用多个 Sec-WebSocket-Extension 头，结果跟在一个头文件中包含了所有列出的扩展一样。

```plain
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : 指需要 (或支持) 的扩展的逗号分隔列表。这些值来自[IANA WebSocket 扩展名注册表](https://www.iana.org/assignments/websocket/websocket.xml#extension-name)。带参数的扩展使用分号表示。

例如：

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
  - : The key for this request to upgrade. The client adds this if it wishes to do so, and the server will include in the response a key of its own, which the client will validate before delivering the upgrade reponse to you.

The server's response's `Sec-WebSocket-Accept` header will have a value computed based upon the specified `key`.

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

Included in the response message from the server during the opening handshake process when the server is willing to initiate a WebSocket connection. It will appear no more than once in the repsonse headers.

```plain
Sec-WebSocket-Accept: hash
```

- `hash`
  - : If a `Sec-WebSocket-Key` header was provided, the value of this header is computed by taking the value of the key, concatenating the string "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" to it, taking the [SHA-1](https://zh.wikipedia.org/wiki/SHA-1) hash of that concatenated string, resulting in a 20-byte value. That value is then [base64](/zh-CN/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) encoded to obtain the value of this property.

### Client-initiated upgrade to HTTP over TLS

You can also upgrade an HTTP/1.1 connection to TLS/1.0. The main advantages to this are that you can avoid using URL redirection from "http\://" to "https\://" on the server and you can easily use TLS on virtual hosts. This may, however, introduce problems with proxy servers.

Upgrading an HTTP connection to use {{Glossary("TLS")}} uses the {{HTTPHeader("Upgrade")}} header with the token `"TLS/1.0"`. If the switch is made successfully, the original request (which included `Upgrade`) is completed as normal, but on the TLS connection.

The request to TLS can be made either optionally or mandatorily.

#### Optional upgrade

To upgrade to TLS optionally (that is, allowing the connection to continue in cleartext if the upgrade to TLS fails), you simply use the `Upgrade` and {{HTTPHeader("Connection")}} headers as expected. For example, given the original request:

```plain
GET http://destination.server.ext/secretpage.html HTTP/1.1
Host: destination.server.ext
Upgrade: TLS/1.0
Connection: Upgrade
```

If the server _does not_ support TLS upgrade, or is unable to upgrade to TLS at the time, it responds with a standard HTTP/1.1 response, such as:

```plain
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

```plain
HTTP/1.1 101 Switching Protocols
Upgrade: TLS/1.0, HTTP/1.1
```

Once the TLS handshake is complete, the original request will be responded to as normal.

#### Mandatory upgrade

To request a mandatory upgrade to TLS—that is, to upgrade and fail the connection if the upgrade is not successful—your first request must be an {{HTTPMethod("OPTIONS")}} request, like this:

```plain
OPTIONS * HTTP/1.1
Host: destination.server.ext
Upgrade: TLS/1.0
Connection: Upgrade
```

If the upgrade to TLS succeeds, the server will respond with `"101 Switching Protocols"` as described in the previous section. If the upgrade fails, the HTTP/1.1 connection will fail.

### Server-initiated upgrade to TLS

This works roughly the same way as a client-initiated upgrade; an optional upgrade is requested by adding the {{HTTPHeader("Upgrade")}} header to any message. A mandatory upgrade, though, works slightly differently, in that it requests the upgrade by replying to a message it receives with the {{HTTPStatus(426)}} status code, like this:

```plain
HTTP/1.1 426 Upgrade Required
Upgrade: TLS/1.1, HTTP/1.1
Connection: Upgrade

<html>
... Human-readable HTML page describing why the upgrade is required
    and what to do if this text is seen ...
</html>
```

If the client receiving the `"426 Upgrade Required"` response is willing and able to upgrade to TLS, it should then start the same process covered above under [Client-initiated upgrade to HTTP over TLS](#client-initiated_upgrade_to_http_over_tls).

## References

- [WebSocket API](/zh-CN/docs/Web/API/WebSocket)
- [HTTP](/zh-CN/docs/Web/HTTP)
- Specifications and RFCs:

  - {{RFC(2616)}}
  - {{RFC(6455)}}
  - {{RFC(2817)}}
  - {{RFC(7540)}}
