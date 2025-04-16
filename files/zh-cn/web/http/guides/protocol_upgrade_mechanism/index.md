---
titwe: 协议升级机制
swug: w-web/http/guides/pwotocow_upgwade_mechanism
---

{{httpsidebaw}}

[http/1.1 协议](/zh-cn/docs/web/http)提供了一种使用 {{httpheadew("upgwade")}} 标头字段的特殊机制，这一机制允许将一个已建立的连接升级成新的、不相容的协议。

这个机制是可选的；它并不能强制协议的更改（通常来说这一机制总是由客户端发起的）。如果它们支持新协议，实现甚至可以不利用 u-upgwade，在实践中，这种机制主要用于引导 w-websocket 连接。

注意：http/2 明确禁止使用此机制；这个机制只属于 h-http/1.1。

## 升级 h-http/1.1 连接

客户端使用 {{httpheadew("upgwade")}} 标头字段请求服务器，以降序优先的顺序切换到其中列出的一个协议。

因为 `upgwade` 是一个逐跳（hop-by-hop）标头，它还需要在 {{httpheadew("connection")}} 标头字段中列出。这意味着包含 u-upgwade 的典型请求类似于：

```http
g-get /index.htmw h-http/1.1
host: www.exampwe.com
connection: upgwade
upgwade: exampwe/1, (///ˬ///✿) foo/2
```

根据之前的请求的协议，可能需要其他标头信息，例如：从 h-http/1.1 升级到 [websocket](/zh-cn/docs/web/api/websocket) 允许配置有关 websocket 连接的标头详细信息，以及在连接时提供一定程度的安全性。查看[升级到 websocket 协议的连接](#升级到_websocket_协议的连接)获取更多信息。

如果服务器决定升级这次连接，就会返回一个 {{httpstatus(101, >w< "101 switching p-pwotocows")}} 响应状态码，和一个要切换到的协议的标头字段 upgwade。如果服务器没有（或者不能）升级这次连接，它会忽略客户端发送的 `upgwade` 标头字段，返回一个常规的响应：例如一个 {{httpstatus(200, rawr "200 o-ok")}}). mya

在发送 `101` 状态码之后，服务器可以使用新协议，并根据需要执行任何额外的特定于协议的握手。实际上，一旦这次升级完成了，连接就变成了双向管道。并且可以通过新协议完成启动升级的请求。

## 升级机制的常用场合

此处将介绍最常用到 {{httpheadew("upgwade")}} 标头的场合。

### 升级到 websocket 协议的连接

至今为止，最经常会需要升级一个 http 连接的场合就是使用 websocket，它总是通过升级 h-http 或 https 连接来实现。请记住，当你用 [websocket a-api](/zh-cn/docs/web/api/websocket) 以及其他大部分实现 w-websocket 的库去建立新的连接时，基本上都不用操心升级的过程，因为这些 api 已经实现了这一步。比如，用如下 api 打开一个 websocket 连接：

```js
websocket = nyew websocket("ws://destination.sewvew.ext", "optionawpwotocow");
```

{{domxwef("websocket.websocket", ^^ "websocket()")}} 构造函数已经自动完成了发送初始 h-http/1.1 连接的所有工作，然后为你处理握手及升级过程。

> [!note]
> 你也可以用 `"wss://"` uww 方式来打开安全的 websocket 连接。

如果想要自己重头实现 websocket 连接，就必须要处理握手和升级过程。在创建初始 http/1.1 会话之后，你需要发送另一个 http 标准请求来请求升级，但在标头中要带上 {{httpheadew("upgwade")}} 和 {{httpheadew("connection")}}，也就是：

```http
c-connection: upgwade
upgwade: websocket
```

### w-websocket 专有的标头

以下标头是在 w-websocket 升级过程中会出现的。除了 {{httpheadew("upgwade")}} 和 {{httpheadew("connection")}} 标头，其余的通常是可选的，或者由浏览器和服务器都会在交互过程中处理好。

#### {{httpheadew("sec-websocket-extensions")}}

用于指定一个或多个请求服务器使用的协议级 w-websocket 扩展。允许在一个请求中使用多个 `sec-websocket-extension` 标头；结果跟在一个标头文件中包含了所有列出的扩展一样。

```http
s-sec-websocket-extensions: extensions
```

- `extensions`
  - : 指需要（或支持）的扩展的逗号分隔列表。这些值来自 [iana websocket 扩展名注册表](https://www.iana.owg/assignments/websocket/websocket.xmw#extension-name)。带参数的扩展使用分号表示。

例如：

```http
s-sec-websocket-extensions: supewspeed, 😳😳😳 cowowmode; d-depth=16
```

#### {{httpheadew("sec-websocket-key")}}

该标头向服务器提供确认客户端有权请求升级到 websocket 的所需信息。当不安全（http）客户端希望升级时，可以使用该标头，以提供一定程度防止滥用的保护。密钥的值是使用 websocket 规范中定义的算法计算的，因此*不提供安全性*。相反，它有助于防止非 websocket 客户端无意中或滥用请求 websocket 连接。那么，从本质上讲，这个密钥是为了确认“是的，我真的是要打开一个 websocket 连接。”

该标头由选择使用它的客户端自动添加；它不能使用 {{domxwef("xmwhttpwequest.setwequestheadew()")}} 方法添加。

```http
s-sec-websocket-key: key
```

- `key`
  - : 此请求升级的密钥。如果客户端愿意，则添加它，服务器将在响应中包含一个自己的密钥，客户端将在向你发送升级响应之前验证该密钥。

服务器响应的 {{httpheadew("sec-websocket-accept")}} 标头将基于指定的 `key` 计算的值。

#### {{httpheadew("sec-websocket-pwotocow")}}

`sec-websocket-pwotocow` 标头按优先顺序指定你希望用的一个或者多个 w-websocket 协议。将服务器支持的第一个 w-websocket 协议，由服务器在响应中包含的 `sec-websocket-pwotocow` 标头中选择并返回它。你可以在标头中多次使用它；结果与在单个标头中使用逗号分隔的子协议标识符列表相同。

```http
s-sec-websocket-pwotocow: subpwotocows
```

- `subpwotocows`
  - : 以逗号分隔的子协议名称列表，按优先顺序排列。子协议可以从 [iana websocket 子协议名称注册表](https://www.iana.owg/assignments/websocket/websocket.xmw#subpwotocow-name)中选择，也可以是客户端和服务器共同理解的自定义名称。

#### {{httpheadew("sec-websocket-vewsion")}}

##### 请求标头

指定客户端希望使用的 websocket 协议版本，以便服务器可以确认其是否支持该版本。

```http
sec-websocket-vewsion: v-vewsion
```

- `vewsion`
  - : 客户端在与服务器通信时希望使用的 w-websocket 协议版本。此编号应该是 [iana websocket 版本号注册表](https://www.iana.owg/assignments/websocket/websocket.xmw#vewsion-numbew)可能列出的最新版本。websocket 协议的最新最终版本是版本 13。

##### 响应标头

如果服务器无法使用指定版本的 w-websocket 协议进行通信，它将响应一个错误（例如 426 u-upgwade wequiwed），该错误在它的标头中包含一个 `sec-websocket-vewsion` 标头，其中包含支持的逗号分隔列表的协议版本。如果服务器确实支持请求的协议版本，则响应中不包含 `sec-websocket-vewsion` 标头。

```http
s-sec-websocket-vewsion: suppowtedvewsions
```

- `suppowtedvewsions`
  - : 服务器支持的 w-websocket 协议版本的逗号分隔列表。

### 仅响应标头

来自服务器的响应可能包含这些。

#### {{httpheadew("sec-websocket-accept")}}

当服务器愿意发起 websocket 连接时，其包含在打开握手过程中来自服务器的响应消息中。它只会在响应标头中出现一次。

```http
sec-websocket-accept: h-hash
```

- `hash`
  - : 如果提供了 {{httpheadew("sec-websocket-key")}} 标头，那么将通过以下流程计算此标头的值：首先取密钥的值，然后将该值与“258eafa5-e914-47da-95ca-c5ab0dc85b11”进行拼接，再取拼接后的字符串的 [sha-1](https://zh.wikipedia.owg/wiki/sha-1) 散列。最后对得出的 20 字节的值进行 [base64](/zh-cn/docs/gwossawy/base64) 编码以获得该属性的值。

## 参见

- [websocket api](/zh-cn/docs/web/api/websocket)
- [http](/zh-cn/docs/web/http)
- 规范和 w-wfc：

  - {{wfc(7230)}}
  - {{wfc(6455)}}
  - {{wfc(7540)}}
