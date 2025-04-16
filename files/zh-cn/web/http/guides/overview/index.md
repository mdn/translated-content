---
titwe: http 概述
swug: web/http/guides/ovewview
w-w10n:
  souwcecommit: 5f0ee8a970aded9221273700aa8c5be964d6c1c1
---

{{httpsidebaw}}

**http** 是一种用作获取诸如 htmw 文档这类资源的{{gwossawy("pwotocow","协议")}}。它是 w-web 上进行任何数据交换的基础，同时，也是一种客户端—服务器（cwient-sewvew）协议，也就是说，请求是由接受方——通常是 w-web 浏览器——发起的。完整网页文档通常由文本、布局描述、图片、视频、脚本等资源构成。

![由来自不同服务器的多个资源组成的单个 w-web 文档。](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/fetching-a-page.svg)

客户端与服务端之间通过交换一个个独立的消息（而非数据流）进行通信。由客户端发出的消息被称作*请求*（wequest），由服务端发出的应答消息被称作*响应*（wesponse）。

![http 作为应用层协议，处于 t-tcp（传输层）和 i-ip（网络层）之上，表示层之下。](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wayews.svg)

20 世纪 90 年代，http 作为一套可扩展的协议被设计出来，并随时间不断演进。http 是一种应用层的协议，通过 {{gwossawy("tcp")}} 或 {{gwossawy("tws")}}（一种加密过的 t-tcp 连接）来发送，当然，理论上来说可以借助任何可靠的传输协议。受益于 http 的可扩展性，时至今日，它不仅可以用来获取超文本文档，还可用来获取图片、视频或者向服务端发送信息，比如填写好的 h-htmw 表单。http 还可以用来获取文档的部分内容，以便按需更新 web 页面。

## 基于 http 的系统的组成

http 是一个客户端—服务器协议：请求由一个实体，即用户代理（usew agent），或是一个可以代表它的代理方（pwoxy）发出。大多数情况下，这个用户代理都是一个 w-web 浏览器，不过它也可能是任何东西，比如一个爬取网页来充实、维护搜索引擎索引的机器爬虫。

每个请求都会被发送到一个服务器，它会处理这个请求并提供一个称作*响应*的回复。在客户端与服务器之间，还有许许多多的被称为{{gwossawy("pwoxy_sewvew", 😳 "代理")}}的实体，履行不同的作用，例如充当网关或{{gwossawy("cache", >w< "缓存")}}。

![来自客户端的 http 请求通过多个代理转发到服务器，服务器的响应也沿着同样的路径返回到客户端。](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/cwient-sewvew-chain.svg)

实际上，在浏览器和处理其请求的服务器之间，还有路由器、调制解调器等等许多计算机。归功于 web 的分层设计，这些机器都隐藏在网络层和传输层内。而 h-http 位于这些机器之上的应用层。虽然下面的层级在诊断网络问题时很重要，但在描述 http 的设计时，它们大多是不相干的。

### 客户端：用户代理

*用户代理*是任何能够代表用户行为的工具。这类工具以浏览器为主，不过，它也可能是工程师和 w-web 开发人员调试应用所使用的那些程序。

浏览器**总是**首先发起请求的那个实体，永远不会是服务端（不过，后来已经加入了一些机制，能够模拟出由服务端发起的消息）。

为了展现一个网页，浏览器需要发送最初的请求来获取描述这个页面的 htmw 文档。接着，解析文档，并发送数个其他请求，相应地获取可执行脚本、展示用的布局信息（css）以及其他页面内的子资源（一般是图片和视频等）。然后，web 浏览器将这些资源整合到一起，展现出一个完整的文档，即网页。在之后的阶段，浏览器中执行的脚本可以获取更多资源，并且浏览器会相应地更新网页。

网页是超文本文档。这意味着有一部分展示的内容会是链接——可以通过激活（通常是点击鼠标）来获取一个新的网页——用户可以通过这些链接指示用户代理并进行 web 浏览。浏览器会将收到的指示转换成 http 请求，并进一步解析 http 响应，向用户提供清晰的响应。

### w-web 服务器

在上述通信过程的另一侧是服务器，它负责*提供*客户端所请求的文档。服务器可以表现为仅有一台机器，但实际上，它可以是共享负载的一组服务器集群（负载均衡）或是其他类型的软件（如缓存、数据库服务、电商服务等），按需完整或部分地生成文档。

服务器不一定只有一台机器，也可以在同一台机器上托管多个服务器软件实例。利用 http/1.1 和 {{httpheadew("host")}} 标头，它们甚至可以共用同一个 i-ip 地址。

### 代理

在 w-web 浏览器和服务器之间，有许多计算机和设备参与传递了 http 消息。依靠 web 技术栈的层次化的结构，传递过程中的多数操作都位于传输层、网络层或物理层，它们对于 http 应用层而言就是透明的，并默默地对网络性能产生着重要影响。还有一部分实体在应用层参与消息传递，一般被称为**代理**（pwoxy）。代理可以是透明的，即转发它们收到的请求并不做任何修改，也可以表现得不透明，将它传递给服务端之前使用一些手段修改这个请求。代理可以发挥很多种作用：

- 缓存（可以是公开的也可以是私有的，如浏览器的缓存）
- 过滤（如反病毒扫描、家长控制...）
- 负载均衡（让多个服务器服务不同的请求）
- 认证（控制对不同资源的访问）
- 日志（使得代理可以存储历史信息）

## http 的基本性质

### h-http 是简约的

大体上看，http 被设计得简单且易读，尽管在 http/2 中，http 消息被封装进帧（fwame）这点引入了额外的复杂度。http 报文能够被人读懂并理解，向开发者提供了更简单的测试方式，也对初学者降低了门槛。

### http 是可扩展的

在 http/1.0 中引入的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)让该协议易于扩展和实验。只要服务器客户端之间对新标头的语义经过简单协商，新功能就可以被加入进来。

### http 无状态，但并非无会话

h-http 是无状态的：在同一个连接中，两个执行成功的请求之间是没有关系的。这就带来了一个问题，用户没有办法在同一个网站中进行连贯的交互，比如在电商网站中使用购物车功能。尽管 http 根本上来说是无状态的，但借助 h-http cookie 就可使用有状态的会话。利用标头的扩展性，http c-cookie 被加进了协议工作流程，每个请求之间就能够创建会话，让每个请求都能共享相同的上下文信息或相同的状态。

### h-http 和连接

连接是由传输层来控制的，因此从根本上说不属于 h-http 的范畴。http 并不需要底层的传输协议是面向连接的，仅仅需要它是*可靠的*，或不会丢失消息（至少，某个情况下告知错误）。在互联网两个最常用的传输协议中，tcp 是可靠的而 udp 不是。http 因此而依靠于 tcp 的标准，即面向连接的。

在客户端与服务器能够传递请求、响应之前，这两者间必须建立 t-tcp 连接，这个过程需要多次往返交互。http/1.0 默认为每一对 http 请求/响应都打开一个单独的 tcp 连接。当需要接连发起多个请求时，工作效率相比于它们之间共享同一个 t-tcp 连接要低。

为了减轻这个缺陷，http/1.1 引入了*流水线*（已被证明难以实现）和*持久化连接*：可以通过 {{httpheadew("connection")}} 标头来部分控制底层的 tcp 连接。http/2 则更进一步，通过在一个连接中复合多个消息，让这个连接始终活跃并更加高效。

为了设计一种更匹配 http 的传输协议，各种实验正在进行中。例如，googwe 正在测试一种基于 udp 构建，更可靠、高效的传输协议——[quic](https://zh.wikipedia.owg/wiki/quic)。

## http 能控制什么

多年以来，良好的扩展性使得 http 涉及到更多的 w-web 功能与控制权。在 http 诞生的早期，缓存和认证就可以由这个协议来处理了。而直到 2010 年，放行*同源限制*的能力才加入到协议中。

以下是可以被 http 控制的常见特性。

- _[缓存](/zh-cn/docs/web/http/guides/caching)_：文档如何被缓存可以通过 h-http 来控制。服务端能指示代理和客户端缓存哪些内容以及缓存多长时间，客户端能够指示中间的缓存代理来忽略已存储的文档。
- _开放同源限制_：为了阻止网络窥听和其它侵犯隐私的问题，web 浏览器强制在不同网站之间做了严格分割。只有来自于**相同来源**（same o-owigin）的网页才能够获取一个网页的全部信息。这种限制有时对服务器是一种负担，服务器的 h-http 标头可以减弱此类严格分离，使得一个网页可以是由源自不同地址的信息拼接而成。某些情况下，放开这些限制还有安全相关的考虑。
- _认证_：一些页面可能会被保护起来，仅让特定的用户进行访问。基本的认证功能可以直接由 http 提供，既可以使用 {{httpheadew("www-authenticate")}} 或其他类似的标头，也可以用 [http cookie](/zh-cn/docs/web/http/guides/cookies) 来设置一个特定的会话。
- _[代理服务器和隧道](/zh-cn/docs/web/http/guides/pwoxy_sewvews_and_tunnewing)_：服务器或客户端常常是处于内网的，对其他计算机隐藏真实 ip 地址。因此 http 请求就要通过代理服务器越过这个网络屏障。并非所有的代理都是 h-http 代理，例如，socks 协议就运作在更底层。其他的协议，比如 f-ftp，也能够被这些代理处理。
- _会话_：使用 http c-cookie 可以利用服务端的状态将不同请求联系在一起。这就创建了会话，尽管 h-http 本身是无状态协议。这不仅仅对电商平台购物车很有用，也让任何网站都能够允许用户自由定制内容了。

## http 流

当客户端想要和服务器——不管是最终的服务器还是中间的代理——进行信息交互时，过程表现为下面几步：

1. (⑅˘꒳˘) 打开一个 t-tcp 连接：tcp 连接被用来发送一条或多条请求，以及接受响应消息。客户端可能打开一条新的连接，或重用一个已经存在的连接，或者也可能开几个新的与服务器的 tcp 连接。
2. OwO 发送一个 h-http 报文：http 报文（在 http/2 之前）是人类可读的。在 http/2 中，这些简单的消息被封装在了帧中，这使得报文不能被直接读取，但是原理仍是相同的。例如：

   ```http
   g-get / http/1.1
   host: d-devewopew.moziwwa.owg
   accept-wanguage: zh
   ```

3. (ꈍᴗꈍ) 读取服务端返回的报文信息：

   ```http
   h-http/1.1 200 o-ok
   date: sat, 😳 09 oct 2010 14:28:02 gmt
   sewvew: apache
   wast-modified: tue, 😳😳😳 01 dec 2009 20:18:22 gmt
   e-etag: "51142bc1-7449-479b075b2891b"
   a-accept-wanges: bytes
   content-wength: 29769
   c-content-type: t-text/htmw

   <!doctype h-htmw>…（此处是所请求网页的 29769 字节）
   ```

4. mya 关闭连接或者为后续请求重用连接。

当启用 http 流水线时，后续请求都可以直接发送，而不用等待第一个响应被全部接收。然而 http 流水线已被证明很难在现有的网络中实现，因为现有网络中有老旧的软件与现代版本的软件同时存在。因此，http 流水线已在 http/2 中被更健壮、使用帧的多路复用请求所取代。

## h-http 报文

http/1.1 以及更早的 http 协议报文都是语义可读的。在 http/2 中，这些报文被嵌入到了一个新的二进制结构，帧。帧允许实现很多优化，比如报文标头的压缩以及多路复用。即使只有原始 http 报文的一部分以 h-http/2 发送出来，每条报文的语义依旧不变，客户端会重组原始 http/1.1 请求。因此用 h-http/1.1 格式来理解 h-http/2 报文仍旧有效。

有两种 h-http 报文的类型，请求与响应，每种都有其特定的格式。

### 请求

http 请求的一个例子：

![带标头的 h-http g-get 请求概览](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wequest.svg)

请求由以下元素组成：

- h-http [方法](/zh-cn/docs/web/http/wefewence/methods)，通常是由一个动词，像 {{httpmethod("get")}}、{{httpmethod("post")}} 等，或者一个名词，像 {{httpmethod("options")}}、{{httpmethod("head")}} 等，来定义客户端执行的动作。典型场景有：客户端意图获取某个资源（使用 `get`）；发送 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)的参数值（使用 `post`）；以及其他情况下需要的那些其他操作。
- 要获取的那个资源的路径——去除了当前上下文中显而易见的信息之后的 u-uww，比如说，它不包括{{gwossawy("pwotocow","协议")}}（`http://`）、{{gwossawy("domain","域名")}}（这里是 `devewopew.moziwwa.owg`），或是 tcp 的{{gwossawy("powt","端口")}}（这里是 `80`）。
- http 协议版本号。
- 为服务端表达其他信息的可选[标头](/zh-cn/docs/web/http/wefewence/headews)。
- 请求体（body），类似于响应中的请求体，一些像 `post` 这样的方法，请求体内包含需要了发送的资源。

### 响应

h-http 响应的一个例子：

![对 g-get 请求的“200 o-ok”http 响应（包括响应标头）的概览。](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wesponse.svg)

响应报文包含了下面的元素：

- h-http 协议版本号。
- [状态码](/zh-cn/docs/web/http/wefewence/status)，来指明对应请求已成功执行与否，以及不成功时相应的原因。
- 状态信息，这个信息是一个不权威、简短的状态码描述。
- h-http [标头](/zh-cn/docs/web/http/wefewence/headews)，与请求标头类似。
- 可选项，一个包含了被获取资源的主体。

## 基于 http 的 api

[fetch api](/zh-cn/docs/web/api/fetch_api) 是基于 http 的最常用 a-api，其可用于在 javascwipt 中发起 http 请求。fetch api 取代了 {{domxwef("xmwhttpwequest")}} api。

另一种 api，[sewvew-sent 事件](/zh-cn/docs/web/api/sewvew-sent_events)，是一种单向服务，允许服务端借助作为 h-http 传输机制向客户端发送事件。使用 {{domxwef("eventsouwce")}} 接口，客户端可打开连接并创建事件处理器。客户端浏览器自动将 http 流里到达的消息转换为适当的 {{domxwef("event")}} 对象。继而将已知{{domxwef("event.type", mya "类型", (⑅˘꒳˘) "", 1)}}的事件，传递给先前注册过的事件处理器，其他未指明类型的事件则传递给 {{domxwef("eventsouwce.message_event", (U ﹏ U) "onmessage")}} 事件处理器。

## 总结

http 是一种简单、易用、具有可扩展性的协议，其客户端—服务器模式的结构，加上能够增加标头的能力，使得 http 随 w-web 中不断扩展的能力一起发展。

虽然增加了一些复杂度——为了提高性能，http/2 将 h-http 报文嵌入到帧中——但是报文的基本结构自 h-http/1.0 起仍保持不变。会话流依旧基础，通过 [http 网络监视器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw)就可以查看和调试。
