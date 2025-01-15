---
title: 编写 WebSocket 服务器
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
---

{{DefaultAPISidebar("WebSockets API")}}

**WebSocket 服务器是一个**TCP 应用程序，监听服务器上任何遵循特定协议的端口，就这么简单。创建自定义服务器的任务往往听起来很吓人，然而，在你选择的平台上实现一个简单的 WebSocket 服务器是很容易的。

WebSocket 服务器可以用任何实现了[Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets)的服务器端编程语言编写，如 C(++) 或 Python 甚至[PHP](/zh-CN/docs/Glossary/PHP)和[服务器端 JavaScript](/zh-CN/docs/Web/JavaScript/Server-Side_JavaScript)。这不是任何特定语言的教程，而是作为指导，以方便编写自己的服务器。

你需要知道 HTTP 的工作原理，并具有中级编程经验。根据语言帮助（Depending on language support），可能需要 TCP 套接字的知识。本指南的范围是介绍编写 WebSocket 服务器所需的最低知识。

> [!NOTE]
> 阅读最新的官方 WebSockets 规范， [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). 第 1 节和第 4-7 节对服务器实现者特别有意思。第 10 节讨论安全性，你应该在暴露你的服务器之前仔细阅读它。

WebSocket 服务器在这里被解释得非常底层。WebSocket 服务器通常是独立的专用服务器（出于负载平衡或其他实际原因），因此你通常会使用[反向代理](https://en.wikipedia.org/wiki/Reverse_proxy)（例如常规 HTTP 服务器）来检测 WebSocket 握手，预处理这些握手，并将这些客户端发送给 一个真正的 WebSocket 服务器。（例如）这意味着你不必使用 cookie 和身份验证处理程序来扩充服务器代码。

## WebSocket 握手

首先，服务器必须使用标准的 TCP 套接字来监听传入的套接字连接。根据你的平台，这可能已经为你处理。例如，假设你的服务器正在监听 example.com，端口 8000，并且你的套接字服务器响应`/chat`上的 GET 请求。 .

> [!WARNING]
> 服务器可以监听它选择的任何端口，但是如果它选择了 80 或 443 以外的端口，防火墙和/或代理服务器可能会有问题。端口 443 上的连接往往会更容易成功，但是当然，这需要一个安全的连接（TLS / SSL）。另外请注意，大多数浏览器（特别是 Firefox 8+）不允许从安全页面连接到不安全的 WebSocket 服务器。

握手是 WebSockets 中的“Web”。这是从 HTTP 到 WS 的桥梁。在握手过程中，有关连接的详细信息正在初始化中，如果条件不利，任何一方可以在完成之前退出。服务器必须小心了解客户要求的一切，否则会产生安全问题。

### 客户端握手请求

即使你正在构建服务器，客户端仍然必须启动 WebSocket 握手过程。所以你必须知道如何解释客户的请求。客户端将发送一个相当标准的 HTTP 请求，看起来像这样（HTTP 版本必须是 1.1 或更高，方法必须是`GET`）：

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

客户可以在这里请求扩展和/或子协议；详情请见[杂项](#miscellaneous)。当然，你也可以在这里加上你所需要的一般请求头如`User-Agent`， `Referer`， `Cookie`或者认证头。WebSocket 没有作要求，忽略它们也是安全的。在大多数情况下，反向代理已经做了这些处理。

如果任何请求头信息不被理解或者具有不正确的值，则服务器应该发送“[400 Bad Request](/zh-CN/docs/Web/HTTP/Status#400)”并立即关闭套接字。像往常一样，它也可能会给出 HTTP 响应正文中握手失败的原因，但可能永远不会显示消息（浏览器不显示它）。如果服务器不理解该版本的 WebSocket，则应该发送一个`Sec-WebSocket-Version`头，其中包含它理解的版本。（本指南解释了最新的 v13）。下面我们来看看奇妙的请求头`Sec-WebSocket-Key`。

> [!NOTE]
> 所有浏览器将会发送一个 [`Origin`](/zh-CN/docs/Web/HTTP/CORS#origin)请求头。你可以将这个请求头用于安全方面（检查是否是同一个域，白名单/ 黑名单等），如果你不喜欢这个请求发起源，你可以发送一个[403 Forbidden](/zh-CN/docs/Web/HTTP/Status#403)。需要注意的是非浏览器只能发送一个模拟的 `Origin`。大多数应用会拒绝不含这个请求头的请求.。

> [!NOTE]
> 请求 URI（这里的是`/chat`）在规范里没有定义。很多开发者聪明地把这点用于控制多功能 WebSocket 应用。例如`example.com/chat`会请求一个多方会话应用，而在相同服务器上`example.com/game`则会请求一个多玩家游戏应用。

> **备注：** [常规 HTTP 状态码](/zh-CN/docs/Web/HTTP/Status)只能在握手之前使用。握手成功后，你必须使用一组不同的代码（在规范的第 7.4 节中定义）。

### 服务器握手响应

当**服务器**收到握手请求时，它应该发回一个特殊的响应，表明协议将从 HTTP 变为 WebSocket。看起来像这样（记住每个请求头以 `\r\n`结尾，并在最后一个之后放置一个额外的 `\r\n`）：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

另外，服务器可以在这时候决定插件或子协议，详情参见[杂项](#Miscellaneous)。 `Sec-WebSocket-Accept` 参数很有趣，它需要服务器通过客户端发送的`Sec-WebSocket-Key` 计算出来。怎样计算呢，把客户发送的 `Sec-WebSocket-Key` 和 "`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`" (这个叫做 "[魔法值](https://en.wikipedia.org/wiki/Magic_string)") 连接起来，把结果用[SHA-1](https://zh.wikipedia.org/wiki/SHA-1)编码，再用[base64](https://zh.wikipedia.org/wiki/Base64)编码一次，就可以了。

> [!NOTE]
> 这看起来繁复的处理使得客户端明确服务端是否支持 WebSocket。这是十分重要的，如果服务端接收到一个 WebSocket 连接但是把数据作为 HTTP 请求理解可能会导致安全问题。

所以如果 Sec-WebSocket-Key 是“`dGhlIHNhbXBsZSBub25jZQ==`”，Sec-WebSocket-Accept 将是“`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`”。一旦服务器发送这个请求头，握手就完成了，你可以开始交换数据！

> [!NOTE]
> 服务端可以在发送握手回复前发送其他请求头，诸如 Set-Cookie，请求认证或通过状态码重定向。

### 跟踪客户端

这并不直接与 WebSocket 协议相关，但是在这里值得一提的是：你的服务器将不得不跟踪客户的套接字，所以你不会再和已经完成握手的客户握手。同一个客户端 IP 地址可以尝试连接多次（但是如果客户端尝试过多的连接，服务器可以拒绝它们以免遭[拒绝服务攻击](https://en.wikipedia.org/wiki/Denial_of_service)）。

## 交换数据帧

客户端或服务端都可以在任何时间点发送数据——这就是 WebSocket 的魅力。然而，从这些被称为“帧”的数据中提取信息就不是十分愉快的体验了。尽管所有的帧都遵从相同的格式规范，从客户端发送到服务端的数据都被 [异或加密](https://en.wikipedia.org/wiki/XOR_cipher)（用一个 32 位的 key）格式化。详情请参见规范的第 5 节。

### 格式

每个数据帧（从客户端到服务器，反之亦然）遵循相同的格式：

```bash
Frame format:

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

掩码明确告知我们消息是否经过格式化。从客户端来的消息必须经过格式化，所以你的服务器必须要求这个掩码是 1（事实上，[规范 5.1 节](https://tools.ietf.org/html/rfc6455#section-5.1)规定了如果客户端发送了没有格式化的消息，你的服务器应该断开连接）

当向客户端发送帧时，不要对其进行掩码，也不要设置掩码位。稍后我们将解释屏蔽。注意：即使使用安全套接字，也必须屏蔽消息。RSV1-3 可以忽略，它们是用于扩展的。

操作码字段定义了如何解释有效负载数据:0x0 表示延续，0x1 表示文本 (总是用 UTF-8 编码)，0x2 表示二进制，以及其他所谓的“控制代码”，稍后将对此进行讨论。在这个版本的 WebSockets 中，0x3 到 0x7 和 0xB 到 0xF 没有任何意义。

FIN 位告诉我们这是不是系列的最后一条消息。如果是 0，那么服务器将继续侦听消息的更多部分;否则，服务器应该考虑传递的消息。不仅仅是这样。

### 解码有效载荷长度

要读取有效负载数据，你必须知道何时停止读取。这就是为什么有效载荷长度很重要。不幸的是，这有点复杂。要阅读它，请遵循以下步骤：

1. 读取 9-15(包括) 位并将其解析为无符号整型。如果长度小于等于 125，那么就是长度;你就完成了。如果是 126，到第二步。如果是 127，到步骤 3。
2. 读取下面的 16 位，并将其解释为无符号整型。你就完成了。
3. 读取接下来的 64 位，并将其解释为无符号整型 (最重要的位必须为 0)。

### 读取和解密数据

如果设置了掩码位 (对于客户机到服务器的消息应该是这样)，则读取接下来的 4 个字节 (32 位);这是掩蔽键。一旦有效负载长度和掩蔽键被解码，你就可以继续从套接字读取字节数。让我们调用已编码的数据和密钥掩码。要获得解码，可以通过编码的八位元 (字节，即文本数据的字符) 和 XOR 八位元 (i 模 4) 掩码的第四个八位元进行循环。在伪代码中 (恰好是有效的 JavaScript):

```js
var DECODED = "";
for (var i = 0; i < ENCODED.length; i++) {
  DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}
```

现在，你可以根据应用程序了解解码意味着什么。

### 消息帧

FIN 和操作码字段一起工作，以发送分裂为独立帧的消息。这称为消息碎片。片段只能在操作码 0x0 到 0x2 上可用。

回想一下，操作码告诉了帧应该做什么。如果是 0x1，有效载荷就是文本。如果是 0x2，有效载荷就是二进制数据。但是，如果是 0x0，则该帧是一个延续帧。这意味着服务器应该将帧的有效负载连接到从该客户机接收到的最后一个帧。下面是一个粗略的示意图，其中服务器对发送文本消息的客户机做出反应。第一个消息在单个帧中发送，而第二个消息跨三个帧发送。FIN 和操作码的详细信息只显示给客户：

```plain
Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!
```

注意，第一个框架包含一个完整的消息 (具有 FIN=1 和 opcode!=0x0)，因此服务器可以根据需要进行处理或响应。客户机发送的第二帧具有文本有效负载 (opcode=0x1)，但是整个消息还没有到达 (FIN=0)。该消息的所有剩余部分都用延续帧 (opcode=0x0) 发送，消息的最终帧用 FIN=1 标记。[Section 5.4 of the spec](https://tools.ietf.org/html/rfc6455#section-5.4)描述了消息帧。

## Pings 和 Pongs：WebSockets 的心跳

在经过握手之后的任意时刻里，无论客户端还是服务端都可以选择发送一个 ping 给另一方。当 ping 消息收到的时候，接受的一方必须尽快回复一个 pong 消息。例如，可以使用这种方式来确保客户端还是连接状态。

一个 ping 或者 pong 都只是一个常规的帧，只是这个帧是一个**控制帧**。Ping 消息的 opcode 字段值为 `0x9`，pong 消息的 opcode 值为 `0xA` 。当你获取到一个 ping 消息的时候，回复一个跟 ping 消息有相同载荷数据的 pong 消息 (对于 ping 和 pong，最大载荷长度位 125)。你也有可能在没有发送 ping 消息的情况下，获取一个 pong 消息，当这种情况发生的时候忽略它。

> [!NOTE]
> 如果在你有机会发送一个 pong 消息之前，你已经获取了超过一个的 ping 消息，那么你只发送一个 pong 消息。

## 关闭连接

客户端或服务器端都可以通过发送一个带有指定控制序列的控制帧以开始关闭连接握手（参见[章节 5.5.1](https://tools.ietf.org/html/rfc6455#section-5.5.1)）。对端收到这个控制帧会回复一个关闭帧，关闭发起端关闭连接。任何在关闭连接后接收到的数据都会被丢弃。

## 杂项

> [!NOTE]
> WebSocket 代码、扩展、子协议等在 [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml).注册。

WebSocket 扩展和子协议是在握手过程中通过头信息进行协商的。有时候，扩展和子协议看起来太相似而不可能是不同的东西，但是有一个明显的区别。扩展控制 WebSocket 框架并修改有效负载，而子协议构造 WebSocket 有效负载，从不修改任何东西。扩展是可选的和通用的 (比如压缩);子协议是强制性的和本地化的 (就像聊天和 MMORPG 游戏一样)。

### 扩展

> [!NOTE]
> 本节需要扩张。请编辑如果你有这样做的准备。

Think of an extension as compressing a file before e-mailing it to someone. Whatever you do, you're sending the _same_ data in different forms. The recipient will eventually be able to get the same data as your local copy, but it is sent differently. That's what an extension does. WebSockets defines a protocol and a simple way to send data, but an extension such as compression could allow sending the same data but in a shorter format.

> [!NOTE]
> 扩展在规范的第 5.8、9、11.3.2 和 11.4 条进行了解释。

### 子协议

可以把子协议理解成一个自定义[XML schema](https://en.wikipedia.org/wiki/XML_schema)或[文件类型声明](https://en.wikipedia.org/wiki/Document_Type_Definition)。你仍然使用 XML 和它的语法，但是还要额外受限于你声明的格式。

WebSocket 子协议就是像这样的东西。它们不作任何假设实现，只是确立框架。就像一个文件类型或概要。与文件类型或概要类似，通信双方都需要同意子协议；于文件类型或概要不同的是，子协议在服务端实现，而不能由客户端参考第三方。

> [!NOTE]
> 子协议在规范的章节 1.9，4.2，11.3.4 和 11.5 有做解释。

如果客户端需要指定子协议，需要发送如下消息头**作为握手信息的一部分**：

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

等价于：

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

现在，服务端需要选择一个客户端建议且服务端支持的子协议。如果有多于一个的话使用客户端发送的第一个。如果我们的服务端可以支持`soap`和`wamp`，则在握手回复时，它会发送：

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> 服务器不能发送多个`Sec-Websocket-Protocol`。如果服务器不想使用任何子协议，它就不应该发送任何`Sec-WebSocket-Protocol header`。发送空白 header 是不正确的。如果客户端没有得到它想要的子协议，它可以关闭连接。

如果你希望你的服务器遵守某些子协议，那么很自然地，你需要服务器上的额外代码。假设我们使用的是子协议 JSON。在这个子协议中，所有数据都以 JSON 的形式传递。如果客户端请求这个协议，而服务器想要使用它，服务器将需要一个 JSON 解析器。实际上，这是库的一部分，但是服务器需要传递数据。

> [!NOTE]
> 为了避免命名冲突，建议将你的子协议名称加上域名字符串。如果你正在构建一个自定义聊天应用程序，该应用程序使用的是 Example Inc.独有的专有格式，那么你可以使用这个：`Sec-WebSocket-Protocol: chat.example.com`.注意，这不是必需的，它只是一个可选的约定，你可以使用任何字符串。

## 关联

- [WebSocket handshake library in C++](https://github.com/alexhultman/libwshandshake)
- [Tutorial: Websocket server in C#](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Writing WebSocket client applications](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: Websocket server in VB.NET](/zh-CN/docs/WebSockets/WebSocket_Server_Vb.NET)
