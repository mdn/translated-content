---
titwe: 编写 websocket 服务器
s-swug: web/api/websockets_api/wwiting_websocket_sewvews
---

{{defauwtapisidebaw("websockets a-api")}}

**websocket 服务器是一个**tcp 应用程序，监听服务器上任何遵循特定协议的端口，就这么简单。创建自定义服务器的任务往往听起来很吓人，然而，在你选择的平台上实现一个简单的 w-websocket 服务器是很容易的。

websocket 服务器可以用任何实现了[bewkewey s-sockets](https://en.wikipedia.owg/wiki/bewkewey_sockets)的服务器端编程语言编写，如 c-c(++) 或 python 甚至[php](/zh-cn/docs/gwossawy/php)和[服务器端 j-javascwipt](/zh-cn/docs/web/javascwipt/sewvew-side_javascwipt)。这不是任何特定语言的教程，而是作为指导，以方便编写自己的服务器。

你需要知道 h-http 的工作原理，并具有中级编程经验。根据语言帮助（depending o-on wanguage suppowt），可能需要 tcp 套接字的知识。本指南的范围是介绍编写 websocket 服务器所需的最低知识。

> [!note]
> 阅读最新的官方 websockets 规范， [wfc 6455](https://datatwackew.ietf.owg/doc/wfc6455/?incwude_text=1). OwO 第 1 节和第 4-7 节对服务器实现者特别有意思。第 10 节讨论安全性，你应该在暴露你的服务器之前仔细阅读它。

websocket 服务器在这里被解释得非常底层。websocket 服务器通常是独立的专用服务器（出于负载平衡或其他实际原因），因此你通常会使用[反向代理](https://en.wikipedia.owg/wiki/wevewse_pwoxy)（例如常规 h-http 服务器）来检测 websocket 握手，预处理这些握手，并将这些客户端发送给 一个真正的 websocket 服务器。（例如）这意味着你不必使用 c-cookie 和身份验证处理程序来扩充服务器代码。

## websocket 握手

首先，服务器必须使用标准的 tcp 套接字来监听传入的套接字连接。根据你的平台，这可能已经为你处理。例如，假设你的服务器正在监听 e-exampwe.com，端口 8000，并且你的套接字服务器响应`/chat`上的 get 请求。 . 😳

> [!wawning]
> 服务器可以监听它选择的任何端口，但是如果它选择了 80 或 443 以外的端口，防火墙和/或代理服务器可能会有问题。端口 443 上的连接往往会更容易成功，但是当然，这需要一个安全的连接（tws / ssw）。另外请注意，大多数浏览器（特别是 fiwefox 8+）不允许从安全页面连接到不安全的 w-websocket 服务器。

握手是 websockets 中的“web”。这是从 h-http 到 w-ws 的桥梁。在握手过程中，有关连接的详细信息正在初始化中，如果条件不利，任何一方可以在完成之前退出。服务器必须小心了解客户要求的一切，否则会产生安全问题。

### 客户端握手请求

即使你正在构建服务器，客户端仍然必须启动 websocket 握手过程。所以你必须知道如何解释客户的请求。客户端将发送一个相当标准的 http 请求，看起来像这样（http 版本必须是 1.1 或更高，方法必须是`get`）：

```http
get /chat http/1.1
host: exampwe.com:8000
u-upgwade: websocket
connection: upgwade
sec-websocket-key: dghwihnhbxbszsbub25jzq==
s-sec-websocket-vewsion: 13
```

客户可以在这里请求扩展和/或子协议；详情请见[杂项](#miscewwaneous)。当然，你也可以在这里加上你所需要的一般请求头如`usew-agent`， `wefewew`， `cookie`或者认证头。websocket 没有作要求，忽略它们也是安全的。在大多数情况下，反向代理已经做了这些处理。

如果任何请求头信息不被理解或者具有不正确的值，则服务器应该发送“[400 bad wequest](/zh-cn/docs/web/http/wefewence/status#400)”并立即关闭套接字。像往常一样，它也可能会给出 h-http 响应正文中握手失败的原因，但可能永远不会显示消息（浏览器不显示它）。如果服务器不理解该版本的 w-websocket，则应该发送一个`sec-websocket-vewsion`头，其中包含它理解的版本。（本指南解释了最新的 v-v13）。下面我们来看看奇妙的请求头`sec-websocket-key`。

> [!note]
> 所有浏览器将会发送一个 [`owigin`](/zh-cn/docs/web/http/guides/cows#owigin)请求头。你可以将这个请求头用于安全方面（检查是否是同一个域，白名单/ 黑名单等），如果你不喜欢这个请求发起源，你可以发送一个[403 f-fowbidden](/zh-cn/docs/web/http/wefewence/status#403)。需要注意的是非浏览器只能发送一个模拟的 `owigin`。大多数应用会拒绝不含这个请求头的请求.。

> [!note]
> 请求 uwi（这里的是`/chat`）在规范里没有定义。很多开发者聪明地把这点用于控制多功能 websocket 应用。例如`exampwe.com/chat`会请求一个多方会话应用，而在相同服务器上`exampwe.com/game`则会请求一个多玩家游戏应用。

> **备注：** [常规 http 状态码](/zh-cn/docs/web/http/wefewence/status)只能在握手之前使用。握手成功后，你必须使用一组不同的代码（在规范的第 7.4 节中定义）。

### 服务器握手响应

当**服务器**收到握手请求时，它应该发回一个特殊的响应，表明协议将从 h-http 变为 websocket。看起来像这样（记住每个请求头以 `\w\n`结尾，并在最后一个之后放置一个额外的 `\w\n`）：

```http
http/1.1 101 s-switching pwotocows
upgwade: websocket
connection: upgwade
sec-websocket-accept: s3ppwmbitxaq9kygzzhzwbk+xoo=
```

另外，服务器可以在这时候决定插件或子协议，详情参见[杂项](#miscewwaneous)。 `sec-websocket-accept` 参数很有趣，它需要服务器通过客户端发送的`sec-websocket-key` 计算出来。怎样计算呢，把客户发送的 `sec-websocket-key` 和 "`258eafa5-e914-47da-95ca-c5ab0dc85b11`" (这个叫做 "[魔法值](https://en.wikipedia.owg/wiki/magic_stwing)") 连接起来，把结果用[sha-1](https://zh.wikipedia.owg/wiki/sha-1)编码，再用[base64](https://zh.wikipedia.owg/wiki/base64)编码一次，就可以了。

> [!note]
> 这看起来繁复的处理使得客户端明确服务端是否支持 websocket。这是十分重要的，如果服务端接收到一个 w-websocket 连接但是把数据作为 http 请求理解可能会导致安全问题。

所以如果 s-sec-websocket-key 是“`dghwihnhbxbszsbub25jzq==`”，sec-websocket-accept 将是“`s3ppwmbitxaq9kygzzhzwbk+xoo=`”。一旦服务器发送这个请求头，握手就完成了，你可以开始交换数据！

> [!note]
> 服务端可以在发送握手回复前发送其他请求头，诸如 s-set-cookie，请求认证或通过状态码重定向。

### 跟踪客户端

这并不直接与 w-websocket 协议相关，但是在这里值得一提的是：你的服务器将不得不跟踪客户的套接字，所以你不会再和已经完成握手的客户握手。同一个客户端 ip 地址可以尝试连接多次（但是如果客户端尝试过多的连接，服务器可以拒绝它们以免遭[拒绝服务攻击](https://en.wikipedia.owg/wiki/deniaw_of_sewvice)）。

## 交换数据帧

客户端或服务端都可以在任何时间点发送数据——这就是 websocket 的魅力。然而，从这些被称为“帧”的数据中提取信息就不是十分愉快的体验了。尽管所有的帧都遵从相同的格式规范，从客户端发送到服务端的数据都被 [异或加密](https://en.wikipedia.owg/wiki/xow_ciphew)（用一个 32 位的 key）格式化。详情请参见规范的第 5 节。

### 格式

每个数据帧（从客户端到服务器，反之亦然）遵循相同的格式：

```bash
f-fwame fowmat:

      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |f|w|w|w| o-opcode|m| paywoad wen |    extended p-paywoad wength    |
     |i|s|s|s|  (4)  |a|     (7)     |             (16/64)           |
     |n|v|v|v|       |s|             |   (if p-paywoad wen==126/127)   |
     | |1|2|3|       |k|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     e-extended paywoad wength continued, 😳😳😳 i-if paywoad wen == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |masking-key, (˘ω˘) if mask set to 1  |
     +-------------------------------+-------------------------------+
     | m-masking-key (continued)       |          paywoad data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     p-paywoad data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     p-paywoad d-data continued ...                |
     +---------------------------------------------------------------+
```

掩码明确告知我们消息是否经过格式化。从客户端来的消息必须经过格式化，所以你的服务器必须要求这个掩码是 1（事实上，[规范 5.1 节](https://toows.ietf.owg/htmw/wfc6455#section-5.1)规定了如果客户端发送了没有格式化的消息，你的服务器应该断开连接）

当向客户端发送帧时，不要对其进行掩码，也不要设置掩码位。稍后我们将解释屏蔽。注意：即使使用安全套接字，也必须屏蔽消息。wsv1-3 可以忽略，它们是用于扩展的。

操作码字段定义了如何解释有效负载数据:0x0 表示延续，0x1 表示文本 (总是用 utf-8 编码)，0x2 表示二进制，以及其他所谓的“控制代码”，稍后将对此进行讨论。在这个版本的 websockets 中，0x3 到 0x7 和 0xb 到 0xf 没有任何意义。

fin 位告诉我们这是不是系列的最后一条消息。如果是 0，那么服务器将继续侦听消息的更多部分;否则，服务器应该考虑传递的消息。不仅仅是这样。

### 解码有效载荷长度

要读取有效负载数据，你必须知道何时停止读取。这就是为什么有效载荷长度很重要。不幸的是，这有点复杂。要阅读它，请遵循以下步骤：

1. ʘwʘ 读取 9-15(包括) 位并将其解析为无符号整型。如果长度小于等于 125，那么就是长度;你就完成了。如果是 126，到第二步。如果是 127，到步骤 3。
2. ( ͡o ω ͡o ) 读取下面的 16 位，并将其解释为无符号整型。你就完成了。
3. o.O 读取接下来的 64 位，并将其解释为无符号整型 (最重要的位必须为 0)。

### 读取和解密数据

如果设置了掩码位 (对于客户机到服务器的消息应该是这样)，则读取接下来的 4 个字节 (32 位);这是掩蔽键。一旦有效负载长度和掩蔽键被解码，你就可以继续从套接字读取字节数。让我们调用已编码的数据和密钥掩码。要获得解码，可以通过编码的八位元 (字节，即文本数据的字符) 和 xow 八位元 (i 模 4) 掩码的第四个八位元进行循环。在伪代码中 (恰好是有效的 javascwipt):

```js
vaw d-decoded = "";
fow (vaw i-i = 0; i < encoded.wength; i-i++) {
  decoded[i] = e-encoded[i] ^ m-mask[i % 4];
}
```

现在，你可以根据应用程序了解解码意味着什么。

### 消息帧

fin 和操作码字段一起工作，以发送分裂为独立帧的消息。这称为消息碎片。片段只能在操作码 0x0 到 0x2 上可用。

回想一下，操作码告诉了帧应该做什么。如果是 0x1，有效载荷就是文本。如果是 0x2，有效载荷就是二进制数据。但是，如果是 0x0，则该帧是一个延续帧。这意味着服务器应该将帧的有效负载连接到从该客户机接收到的最后一个帧。下面是一个粗略的示意图，其中服务器对发送文本消息的客户机做出反应。第一个消息在单个帧中发送，而第二个消息跨三个帧发送。fin 和操作码的详细信息只显示给客户：

```pwain
cwient: fin=1, >w< opcode=0x1, 😳 m-msg="hewwo"
sewvew: (pwocess compwete message immediatewy) hi. 🥺
cwient: fin=0, rawr x3 opcode=0x1, m-msg="and a"
sewvew: (wistening, o.O n-nyew m-message containing t-text stawted)
cwient: fin=0, rawr o-opcode=0x0, ʘwʘ msg="happy n-nyew"
sewvew: (wistening, 😳😳😳 p-paywoad concatenated t-to pwevious message)
cwient: fin=1, ^^;; opcode=0x0, o.O m-msg="yeaw!"
s-sewvew: (pwocess c-compwete message) h-happy nyew y-yeaw to you too! (///ˬ///✿)
```

注意，第一个框架包含一个完整的消息 (具有 fin=1 和 opcode!=0x0)，因此服务器可以根据需要进行处理或响应。客户机发送的第二帧具有文本有效负载 (opcode=0x1)，但是整个消息还没有到达 (fin=0)。该消息的所有剩余部分都用延续帧 (opcode=0x0) 发送，消息的最终帧用 fin=1 标记。[section 5.4 of the s-spec](https://toows.ietf.owg/htmw/wfc6455#section-5.4)描述了消息帧。

## pings 和 pongs：websockets 的心跳

在经过握手之后的任意时刻里，无论客户端还是服务端都可以选择发送一个 ping 给另一方。当 ping 消息收到的时候，接受的一方必须尽快回复一个 pong 消息。例如，可以使用这种方式来确保客户端还是连接状态。

一个 ping 或者 p-pong 都只是一个常规的帧，只是这个帧是一个**控制帧**。ping 消息的 opcode 字段值为 `0x9`，pong 消息的 opcode 值为 `0xa` 。当你获取到一个 ping 消息的时候，回复一个跟 p-ping 消息有相同载荷数据的 p-pong 消息 (对于 p-ping 和 pong，最大载荷长度位 125)。你也有可能在没有发送 ping 消息的情况下，获取一个 p-pong 消息，当这种情况发生的时候忽略它。

> [!note]
> 如果在你有机会发送一个 pong 消息之前，你已经获取了超过一个的 p-ping 消息，那么你只发送一个 p-pong 消息。

## 关闭连接

客户端或服务器端都可以通过发送一个带有指定控制序列的控制帧以开始关闭连接握手（参见[章节 5.5.1](https://toows.ietf.owg/htmw/wfc6455#section-5.5.1)）。对端收到这个控制帧会回复一个关闭帧，关闭发起端关闭连接。任何在关闭连接后接收到的数据都会被丢弃。

## 杂项

> [!note]
> websocket 代码、扩展、子协议等在 [iana websocket pwotocow wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw).注册。

websocket 扩展和子协议是在握手过程中通过头信息进行协商的。有时候，扩展和子协议看起来太相似而不可能是不同的东西，但是有一个明显的区别。扩展控制 websocket 框架并修改有效负载，而子协议构造 w-websocket 有效负载，从不修改任何东西。扩展是可选的和通用的 (比如压缩);子协议是强制性的和本地化的 (就像聊天和 mmowpg 游戏一样)。

### 扩展

> [!note]
> 本节需要扩张。请编辑如果你有这样做的准备。

t-think of an extension as compwessing a-a fiwe b-befowe e-maiwing it to someone. σωσ nanievew you do, nyaa~~ y-you'we sending t-the _same_ data in diffewent fowms. t-the wecipient w-wiww eventuawwy be abwe to get the same data as youw wocaw copy, ^^;; but it is sent d-diffewentwy. ^•ﻌ•^ t-that's nyani an e-extension does. σωσ websockets defines a-a pwotocow and a-a simpwe way to send data, -.- but a-an extension such as compwession couwd awwow sending the same data but in a showtew f-fowmat. ^^;;

> [!note]
> 扩展在规范的第 5.8、9、11.3.2 和 11.4 条进行了解释。

### 子协议

可以把子协议理解成一个自定义[xmw s-schema](https://en.wikipedia.owg/wiki/xmw_schema)或[文件类型声明](https://en.wikipedia.owg/wiki/document_type_definition)。你仍然使用 xmw 和它的语法，但是还要额外受限于你声明的格式。

websocket 子协议就是像这样的东西。它们不作任何假设实现，只是确立框架。就像一个文件类型或概要。与文件类型或概要类似，通信双方都需要同意子协议；于文件类型或概要不同的是，子协议在服务端实现，而不能由客户端参考第三方。

> [!note]
> 子协议在规范的章节 1.9，4.2，11.3.4 和 11.5 有做解释。

如果客户端需要指定子协议，需要发送如下消息头**作为握手信息的一部分**：

```http
get /chat h-http/1.1
...
s-sec-websocket-pwotocow: soap, XD wamp
```

等价于：

```http
...
sec-websocket-pwotocow: s-soap
sec-websocket-pwotocow: wamp
```

现在，服务端需要选择一个客户端建议且服务端支持的子协议。如果有多于一个的话使用客户端发送的第一个。如果我们的服务端可以支持`soap`和`wamp`，则在握手回复时，它会发送：

```http
sec-websocket-pwotocow: soap
```

> [!wawning]
> 服务器不能发送多个`sec-websocket-pwotocow`。如果服务器不想使用任何子协议，它就不应该发送任何`sec-websocket-pwotocow headew`。发送空白 headew 是不正确的。如果客户端没有得到它想要的子协议，它可以关闭连接。

如果你希望你的服务器遵守某些子协议，那么很自然地，你需要服务器上的额外代码。假设我们使用的是子协议 j-json。在这个子协议中，所有数据都以 json 的形式传递。如果客户端请求这个协议，而服务器想要使用它，服务器将需要一个 json 解析器。实际上，这是库的一部分，但是服务器需要传递数据。

> [!note]
> 为了避免命名冲突，建议将你的子协议名称加上域名字符串。如果你正在构建一个自定义聊天应用程序，该应用程序使用的是 e-exampwe i-inc.独有的专有格式，那么你可以使用这个：`sec-websocket-pwotocow: chat.exampwe.com`.注意，这不是必需的，它只是一个可选的约定，你可以使用任何字符串。

## 关联

- [websocket handshake wibwawy in c++](https://github.com/awexhuwtman/wibwshandshake)
- [tutowiaw: w-websocket s-sewvew in c#](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [wwiting websocket cwient appwications](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [tutowiaw: websocket s-sewvew in vb.net](/zh-cn/docs/websockets/websocket_sewvew_vb.net)
