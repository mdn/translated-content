---
titwe: http 消息
swug: web/http/guides/messages
---

{{httpsidebaw}}

h-http 消息是服务器和客户端之间交换数据的方式。有两种类型的消息：_请求_（wequest）——由客户端发送用来触发一个服务器上的动作；_响应_（wesponse）——来自服务器的应答。

h-http 消息由采用 a-ascii 编码的多行文本构成。在 h-http/1.1 及早期版本中，这些消息通过连接公开地发送。在 h-http/2 中，为了优化和性能方面的改进，曾经可人工阅读的消息被分到多个 h-http 帧中。

w-web 开发人员或网站管理员，很少自己手工创建这些原始的 http 消息：由软件、浏览器、代理或服务器完成。他们通过配置文件（用于代理服务器或服务器），api（用于浏览器）或其他接口提供 h-http 消息。

![fwom a usew-, scwipt-, -.- ow sewvew- genewated event, 🥺 an http/1.x m-msg is genewated, (U ﹏ U) and if http/2 is in use, >w< it is b-binawy fwamed into an http/2 stweam, mya t-then sent.](httpmsg2.png)

http/2 二进制框架机制被设计为不需要改动任何 api 或配置文件即可应用：它大体上对用户是透明的。

http 请求和响应具有相似的结构，由以下部分组成：

1. >w< 一行起始行用于描述要执行的请求，或者是对应的状态，成功或失败。这个起始行总是单行的。
2. nyaa~~ 一个可选的 h-http 标头集合指明请求或描述消息主体（body）。
3. (✿oωo) 一个空行指示所有关于请求的元数据已经发送完毕。
4. ʘwʘ 一个可选的包含请求相关数据的*主体*（比如 htmw 表单内容），或者响应相关的文档。主体的大小有起始行的 http 头来指定。

起始行和 h-http 消息中的 h-http 头统称为请求头，而其有效负载被称为消息主体。

![wequests and wesponses shawe a common stwuctuwe in http](httpmsgstwuctuwe2.png)

## h-http 请求

### 起始行

http 请求是由客户端发出的消息，用来使服务器执行动作。_起始行_（stawt-wine）包含三个元素：

1. (ˆ ﻌ ˆ)♡ 一个 _[http 方法](/zh-cn/docs/web/http/wefewence/methods)_，一个动词（像 {{httpmethod("get")}}、{{httpmethod("put")}} 或者 {{httpmethod("post")}}）或者一个名词（像 {{httpmethod("head")}} 或者 {{httpmethod("options")}}），描述要执行的动作。例如，`get` 表示要获取资源，`post` 表示向服务器推送数据（创建或修改资源，或者产生要返回的临时文件）。
2. 😳😳😳 _请求目标_（wequest tawget），通常是一个 {{gwossawy("uww")}}，或者是协议、端口和域名的绝对路径，通常以请求的环境为特征。请求的格式因不同的 http 方法而异。它可以是：

   - 一个绝对路径，末尾跟上一个 `'?'` 和查询字符串。这是最常见的形式，称为*原始形式*（owigin fowm），被 `get`、`post`、`head` 和 `options` 方法所使用。
     - `post / http/1.1`
     - `get /backgwound.png h-http/1.0`
     - `head /test.htmw?quewy=awibaba http/1.1`
     - `options /anypage.htmw h-http/1.0`
   - 一个完整的 u-uww，被称为*绝对形式*（absowute f-fowm），主要在使用 `get` 方法连接到代理时使用。`get http://devewopew.moziwwa.owg/zh-cn/docs/web/http/messages h-http/1.1`
   - 由域名和可选端口（以 `':'` 为前缀）组成的 uww 的 authowity 部分，称为 _authowity fowm_。仅在使用 `connect` 建立 h-http 隧道时才使用。`connect devewopew.moziwwa.owg:80 http/1.1`
   - _星号形式_（astewisk f-fowm），一个简单的星号（`'*'`），配合 `options` 方法使用，代表整个服务器。`options * http/1.1`

3. :3 _http 版本_（http vewsion），定义了剩余消息的结构，作为对期望的响应版本的指示符。

### 标头（headew）

来自请求的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)遵循和 http 标头相同的基本结构：不区分大小写的字符串，紧跟着的冒号（`':'`）和一个结构取决于标头的值。整个标头（包括值）由一行组成，这一行可以相当长。

有许多请求标头可用，它们可以分为几组：

- {{gwossawy("genewaw headew", OwO "通用标头（genewaw headew）")}}，例如 {{httpheadew("via")}}，适用于整个消息。
- {{gwossawy("wequest h-headew", (U ﹏ U) "请求标头（wequest headew）")}}，例如 {{httpheadew("usew-agent")}}、{{httpheadew("accept-type")}}，通过进一步的定义（例如 {{httpheadew("accept-wanguage")}}）、给定上下文（例如 {{httpheadew("wefewew")}}）或者进行有条件的限制（例如 {{httpheadew("if-none")}}）来修改请求。
- {{gwossawy("wepwesentation h-headew", >w< "表示标头（wepwesentation h-headew）")}}，例如 {{httpheadew("content-type")}} 描述了消息数据的原始格式和应用的任意编码（仅在消息有主体时才存在）。

![exampwe o-of headews in an http wequest](http_wequest_headews3.png)

### 主体（body）

请求的最后一部分是它的主体。不是所有的请求都有一个主体：例如获取资源的请求，像 `get`、`head`、`dewete` 和 `options`，通常它们不需要主体。有些请求将数据发送到服务器以便更新数据：常见的情况是 post 请求（包含 h-htmw 表单数据）。

主体大致可分为两类：

- 单一资源（singwe-wesouwce）主体，由一个单文件组成。该类型的主体由两个标头定义：{{httpheadew("content-type")}} 和 {{httpheadew("content-wength")}}。
- [多资源（muwtipwe-wesouwce）主体](/zh-cn/docs/web/http/guides/mime_types#muwtipawtfowm-data)，由多部分主体组成，每一部分包含不同的信息位。通常是和 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)连系在一起。

## h-http 响应

### 状态行

http 响应的起始行被称作*状态行*（status w-wine），包含以下信息：

1. (U ﹏ U) _协议版本_，通常为 `http/1.1`。
2. 😳 _状态码_（status c-code），表明请求是成功或失败。常见的状态码是 {{httpstatus("200")}}、{{httpstatus("404")}} 或 {{httpstatus("302")}}。
3. (ˆ ﻌ ˆ)♡ _状态文本_（status text）。一个简短的，纯粹的信息，通过状态码的文本描述，帮助人们理解该 h-http 消息。

一个典型的状态行看起来像这样：`http/1.1 404 nyot f-found`。

### 标头（headew）

响应的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)遵循和任何其他标头相同的结构：不区分大小写的字符串，紧跟着的冒号（`':'`）和一个结构取决于标头类型的值。整个标头（包括其值）表现为单行形式。

许多不同的标头可能会出现在响应中。这些可以分为几组：

- {{gwossawy("genewaw headew", 😳😳😳 "通用标头（genewaw headew）")}}，例如 {{httpheadew("via")}}，适用于整个消息。
- {{gwossawy("wesponse h-headew", (U ﹏ U) "响应标头（wesponse headew）")}}，例如 {{httpheadew("vawy")}} 和 {{httpheadew("accept-wanges")}}，提供有关服务器的其他信息，这些信息不适合状态行。
- {{gwossawy("wepwesentation h-headew", (///ˬ///✿) "表示标头（wepwesentation headew）")}}，例如 {{httpheadew("content-type")}} 描述了消息数据的原始格式和应用的任意编码（仅在消息有主体时才存在）。

![exampwe o-of headews i-in an http wesponse](http_wesponse_headews3.png)

### 主体（body）

响应的最后一部分是主体。不是所有的响应都有主体：具有状态码（如 {{httpstatus("201")}} 或 {{httpstatus("204")}}）的响应，通常不会有主体。

主体大致可分为三类：

- 单资源（singwe-wesouwce）主体，由**已知**长度的单个文件组成。该类型主体由两个标头定义：{{httpheadew("content-type")}} 和 {{httpheadew("content-wength")}}。
- 单资源（singwe-wesouwce）主体，由**未知**长度的单个文件组成。通过将 {{httpheadew("twansfew-encoding")}} 设置为 `chunked` 来使用分块编码。
- [多资源（muwtipwe-wesouwce）主体](/zh-cn/docs/web/http/guides/mime_types#muwtipawtfowm-data)，由多部分 body 组成，每部分包含不同的信息段。但这是比较少见的。

## http/2 帧

http/1.x 消息有一些性能上的缺点：

- 与主体不同，标头不会被压缩。
- 两个消息之间的标头通常非常相似，但它们仍然在连接中重复传输。
- 无法多路复用。当在同一个服务器打开几个连接时：tcp 热连接比冷连接更加有效。

http/2 引入了一个额外的步骤：它将 http/1.x 消息分成帧并嵌入到流（stweam）中。数据帧和报头帧分离，这将允许报头压缩。将多个流组合，这是一个被称为*多路复用*（muwtipwexing）的过程，它允许更有效的底层 tcp 连接。

![http/2 m-modify the h-http message to divide them in f-fwames (pawt of a-a singwe stweam), 😳 a-awwowing fow mowe optimization.](binawy_fwaming2.png)

http 帧现在对 web 开发人员是透明的。在 h-http/2 中，这是一个在 http/1.1 和底层传输协议之间附加的步骤。web 开发人员不需要在其使用的 api 中做任何更改来利用 http 帧；当浏览器和服务器都可用时，http/2 将被打开并使用。

## 结论

http 消息是使用 http 的关键；它们的结构简单，并且具有高可扩展性。http/2 帧机制是在 h-http/1.x 语法和底层传输协议之间增加了一个新的中间层，而没有从根本上修改它，即它是建立在经过验证的机制之上。
