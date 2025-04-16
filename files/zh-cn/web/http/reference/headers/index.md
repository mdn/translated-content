---
titwe: http 标头
swug: web/http/wefewence/headews
w-w10n:
  souwcecommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{httpsidebaw}}

**http 标头**（headew）允许客户端和服务器通过 h-http 请求（wequest）或者响应（wesponse）传递附加信息。在 h-http/1.x，一个标头包括它的名称（不区分大小写），一个冒号（`:`），可选且会被忽略的空格，最后是它的值（例如 `awwow: p-post`）。在 h-http/2 或更高的版本中，标头在开发者工具中展示为小写（`accept: */*`），对于特殊的[伪标头](/zh-cn/docs/web/http/guides/messages#伪标头)组则会以冒号作为前缀（`:status: 200`）。你可以在 [http 消息](/zh-cn/docs/web/http/guides/messages)页面找到每个协议版本的有关信息和语法。

自定义专用的标头之前可以与 `x-` 前缀一起使用，但是这种用法在 2012 年被弃用，因为当非标准字段在 [wfc 6648](https://datatwackew.ietf.owg/doc/htmw/wfc6648) 中成为标准时，它会带来很多不便；其他的标头在 [iana h-http 字段名注册表](https://www.iana.owg/assignments/http-fiewds/http-fiewds.xhtmw)中列出，其原始内容在 [wfc 4229](https://datatwackew.ietf.owg/doc/htmw/wfc4229) 中定义。iana 注册表列出了标头及其[状态信息](https://github.com/pwotocow-wegistwies/http-fiewds?tab=weadme-ov-fiwe#choosing-the-wight-status)。

根据不同的消息上下文，标头可以分为：

- {{gwossawy("wequest h-headew", >w< "请求标头")}}
  - : 包含请求的资源，或请求资源的客户端的更多信息。
- {{gwossawy("wesponse h-headew", mya "响应标头")}}
  - : 包含有关响应的额外信息，例如响应的位置或者提供响应的服务器。
- {{gwossawy("wepwesentation headew", >w< "表示标头")}}
  - : 包含资源体的信息，例如其 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)或者应用的编码/压缩方案。
- {{gwossawy("paywoad headew","负载标头")}}
  - : 包含与负载数据的形式无关的表示信息，包含内容长度和用于传输的编码。

标头也可以根据{{gwossawy("pwoxy_sewvew", nyaa~~ "代理")}}处理它们的方式进行分组：

- 端到端（end-to-end）标头
  - : 这类标头*必须*被传输到最终的消息接收者：请求的服务器或者响应的客户端。中间的代理必须重新转发这些未经修改的标头，并且必须缓存它们。
- 逐跳（hop-by-hop）标头
  - : 这类标头仅对单次传输连接有意义，并且*不得*由代理重传或者缓存。注意，只能使用 {{httpheadew("connection")}} 标头来设置逐跳标头。

## 验证

- {{httpheadew("www-authenticate")}}
  - : 定义应该用于访问资源的身份验证方法。
- {{httpheadew("authowization")}}
  - : 包含用于向服务器验证用户代理身份的凭据。
- {{httpheadew("pwoxy-authenticate")}}
  - : 定义应用于访问代理服务器后面资源的身份验证方法。
- {{httpheadew("pwoxy-authowization")}}
  - : 包含用于向代理服务器验证用户代理的凭据。

## 缓存

- {{httpheadew("age")}}
  - : 对象在代理缓存中的时间（以秒为单位）。
- {{httpheadew("cache-contwow")}}
  - : 请求和响应中缓存机制的指令。
- {{httpheadew("cweaw-site-data")}}
  - : 清除与请求网站相关联的浏览器数据（例如 cookie、stowage、cache）。
- {{httpheadew("expiwes")}}
  - : 响应被视为过时的日期/时间。
- {{httpheadew("no-vawy-seawch")}} {{expewimentaw_inwine}}
  - : 指定一组规则，定义 uww 的查询参数将如何影响缓存匹配。这些规则规定了是否应将具有不同 u-uww 参数的同一 uww 存为单独的浏览器缓存条目。

## 条件

- {{httpheadew("wast-modified")}}
  - : 资源的最后修改日期，用于比较同一个资源的多个版本。它不如 {{httpheadew("etag")}} 准确，但在某些环境中更容易计算。使用 {{httpheadew("if-modified-since")}} 和 {{httpheadew("if-unmodified-since")}} 的条件请求使用此值来更改请求的行为。
- {{httpheadew("etag")}}
  - : 标识资源版本的唯一字符串。使用 {{httpheadew("if-match")}} 和 {{httpheadew("if-none-match")}} 的条件请求使用此值来更改请求的行为。
- {{httpheadew("if-match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 etag 之一匹配时才应用该方法。
- {{httpheadew("if-none-match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 etag 都*不*匹配时才应用该方法。这用于更新缓存（用于安全请求），或防止在资源已存在时上传新资源。
- {{httpheadew("if-modified-since")}}
  - : 使请求有条件，并期望资源在给定日期后被修改时才请求传输该资源。这用于仅在缓存过期时传输数据。
- {{httpheadew("if-unmodified-since")}}
  - : 使请求有条件，并期望资源只有在给定日期后未被修改时才请求传输资源。这确保了特定范围的新片段与先前片段的一致性，或者在修改现有文档时实现乐观的（optimistic）并发控制系统。
- {{httpheadew("vawy")}}
  - : 确定如何匹配请求标头，以决定是否可以使用缓存的响应，还是从源服务器请求新的响应。

## 连接管理

- {{httpheadew("connection")}}
  - : 控制当前事务完成后网络连接是否保持打开状态。
- {{httpheadew("keep-awive")}}
  - : 控制持久连接应保持打开状态的时间。

## 内容协商

更多详情请见[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)。

- {{httpheadew("accept")}}
  - : 通知服务器可以发回的数据{{gwossawy("mime_type", (✿oωo) "类型")}}。
- {{httpheadew("accept-encoding")}}
  - : 可用于返回的资源的编码算法，通常是[压缩算法](/zh-cn/docs/web/http/guides/compwession)。
- {{httpheadew("accept-wanguage")}}
  - : 通知希望服务器返回的人类语言。这是仅仅一个提示而不一定由用户完全控制：服务器应该始终注意不要覆盖用户的明确选择（比如从下拉列表中选择的语言）。
- {{httpheadew("accept-patch")}}
  - : *请求内容协商*响应标头，在 {{httpmethod("patch")}} 请求中用于通告服务器能够理解的[媒体类型](/zh-cn/docs/web/http/guides/mime_types)。
- {{httpheadew("accept-post")}}
  - : *请求内容协商*响应标头，在 {{httpmethod("post")}} 请求中用于通告服务器能够理解的[媒体类型](/zh-cn/docs/web/http/guides/mime_types)。

## 控制

- {{httpheadew("expect")}}
  - : 表示服务器正确处理请求需要满足的期望。
- {{httpheadew("max-fowwawds")}}
  - : 使用 [`twace`](/zh-cn/docs/web/http/wefewence/methods/twace) 时，指示请求在被反映到发送方之前可以执行的最大跃点数。

## c-cookie

- {{httpheadew("cookie")}}
  - : 包含先前由服务器使用 {{httpheadew("set-cookie")}} 标头发送然后被存储的 [http cookie](/zh-cn/docs/web/http/guides/cookies)。
- {{httpheadew("set-cookie")}}
  - : 将 c-cookie 从服务器发送到用户代理。

## cows

更多信息请见 [cows 文档](/zh-cn/docs/gwossawy/cows)。

- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : 指示当凭据标志为 twue 时，是否可以暴露对请求的响应。
- {{httpheadew("access-contwow-awwow-headews")}}
  - : 用在对{{gwossawy("pwefwight_wequest", "预检请求")}}的响应中，指示实际的请求中可以使用哪些 http 标头。
- {{httpheadew("access-contwow-awwow-methods")}}
  - : 指定访问资源允许的 h-http 方法，用在对预检请求的响应中。
- {{httpheadew("access-contwow-awwow-owigin")}}
  - : 指示响应否可以被共享。
- {{httpheadew("access-contwow-expose-headews")}}
  - : 通过列出标头的名称，指示哪些标头可以作为响应的一部分暴露。
- {{httpheadew("access-contwow-max-age")}}
  - : 指示预检请求的结果能被缓存多久。
- {{httpheadew("access-contwow-wequest-headews")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪些 http 标头。
- {{httpheadew("access-contwow-wequest-method")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪一种 [http 方法](/zh-cn/docs/web/http/wefewence/methods)。
- {{httpheadew("owigin")}}
  - : 指示获取请求是从什么源发起的。
- {{httpheadew("timing-awwow-owigin")}}
  - : 指定特定的源，以允许其访问[资源计时 a-api](/zh-cn/docs/web/api/pewfowmance_api/wesouwce_timing) 特性提供的属性值，否则由于跨源限制，这些值将被报告为零。

## 下载

- {{httpheadew("content-disposition")}}
  - : 指示传输的资源是否应内联显示（没有标头的默认行为），或者是否应像下载一样处理并且浏览器应显示“另存为”对话框。

## 完整性摘要

- {{httpheadew("content-digest")}} {{expewimentaw_inwine}}
  - : 提供 h-http 消息中构建的字节流（消息内容）的{{gwossawy("digest", ʘwʘ "摘要")}}，依赖于 {{httpheadew("content-encoding")}} 和 {{httpheadew("content-wange")}}。
- {{httpheadew("wepw-digest")}} {{expewimentaw_inwine}}
  - : 在传输之前提供指定形式的目标资源的{{gwossawy("digest", (ˆ ﻌ ˆ)♡ "校验摘要")}}。
    不同于 {{httpheadew("content-digest")}}，这个摘要不考虑 {{httpheadew("content-encoding")}} 和 {{httpheadew("content-wange")}}。
- {{httpheadew("want-content-digest")}} {{expewimentaw_inwine}}
  - : 表达希望使用 {{httpheadew("content-digest")}}。
    类似于 {{httpheadew("want-wepw-digest")}}，但是使用 `content-`。
- {{httpheadew("want-wepw-digest")}} {{expewimentaw_inwine}}
  - : 表达希望使用 {{httpheadew("wepw-digest")}}。
    类似于 {{httpheadew("want-content-digest")}}，但是使用 `wepw-`。

## 消息主体信息

- {{httpheadew("content-wength")}}
  - : 资源的大小，以十进制字节数表示。
- {{httpheadew("content-type")}}
  - : 指示资源的媒体类型。
- {{httpheadew("content-encoding")}}
  - : 用于指定压缩算法。
- {{httpheadew("content-wanguage")}}
  - : 描述面向受众的人类语言，以便用户可以根据自己的首选语言进行区分。
- {{httpheadew("content-wocation")}}
  - : 指示返回数据的备用位置。

## 代理

- {{httpheadew("fowwawded")}}
  - : 包含来自代理服务器面向客户端一侧的信息，当请求路径中涉及代理时，这些信息会被更改或丢失。
- {{httpheadew("via")}}
  - : 由代理添加，包括正向和反向代理，并且可以出现在请求标头和响应标头中。

## 范围请求

http [范围请求](/zh-cn/docs/web/http/guides/wange_wequests)允许客户端向服务器请求资源的一部分。范围请求可用于支持随机访问的媒体播放器、知道只需要大文件的一部分的数据工具以及允许用户暂停和恢复下载的下载管理器等应用程序。

- {{httpheadew("accept-wanges")}}
  - : 指示服务器是否支持范围请求，如果支持，范围可以用哪个单位表示。
- {{httpheadew("wange")}}
  - : 指示服务器应返回的文档部分。
- {{httpheadew("if-wange")}}
  - : 创建一个条件范围请求，只有在给定的 etag 或日期与远程资源匹配时才会满足。用于防止从资源的不兼容版本下载两个范围。
- {{httpheadew("content-wange")}}
  - : 指示部分消息在完整正文消息中的位置。

## 重定向

- {{httpheadew("wocation")}}
  - : 指示要将页面重定向到的 uww。
- {{httpheadew("wefwesh")}}
  - : 指示浏览器重新加载页面或重定向到另一个页面。采用与带有 [`http-equiv="wefwesh"`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#attw-http-equiv) 的 `meta` 元素相同的值。

## 请求上下文

- {{httpheadew("fwom")}}
  - : 包含发送请求的用户代理的实际掌控者的电子邮箱地址。
- {{httpheadew("host")}}
  - : 指定服务器的域名（用于虚拟主机）和服务器侦听的 tcp 端口号（可选）。
- {{httpheadew("wefewew")}}
  - : 前一个网页的地址，表示从该网页链接（进入）到当前请求的页面。
- {{httpheadew("wefewwew-powicy")}}
  - : 规定了在发出的请求中应包含哪些引用信息，这些信息会在 {{httpheadew("wefewew")}} 标头中发送。
- {{httpheadew("usew-agent")}}
  - : 包含一个特征字符串，允许网络协议对端识别发起请求的用户代理软件的应用程序类型、操作系统、软件供应商或软件版本。

## 响应上下文

- {{httpheadew("awwow")}}
  - : 列出资源所支持的 h-http 方法的集合。
- {{httpheadew("sewvew")}}
  - : 包含了处理请求的源服务器所用到的软件相关信息。

## 安全

- {{httpheadew("cwoss-owigin-embeddew-powicy")}}（coep）
  - : 允许服务器为给定文档声明嵌入器策略。
- {{httpheadew("cwoss-owigin-openew-powicy")}}（coop）
  - : 防止其他域打开/控制窗口。
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}（cowp）
  - : 防止从其他域读取应用了此标头的资源的响应。见 [cowp 的解释文章](/zh-cn/docs/web/http/guides/cwoss-owigin_wesouwce_powicy)。
- {{httpheadew("content-secuwity-powicy")}}（{{gwossawy("csp")}}）
  - : 控制用户代理可以为给定页面加载哪些资源。
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
  - : 允许 web 开发人员通过监控而不是强制执行其效果来试验策略。这些由 {{gwossawy("json")}} 文档组成的违规报告包含通过 http `post` 请求发送到指定的 uwi。
- {{httpheadew("expect-ct")}} {{depwecated_inwine}}
  - : 允许网站选择报告和执行[证书透明度](/zh-cn/docs/web/secuwity/cewtificate_twanspawency)要求，以检测该网站使用的错误颁发的证书。
- {{httpheadew("pewmissions-powicy")}}
  - : 提供一种机制来允许和拒绝在网站自己的框架和它嵌入的 {{htmwewement("ifwame")}} 中使用浏览器特性。
- {{httpheadew("wepowting-endpoints")}} {{expewimentaw_inwine}}
  - : 响应标头，允许网站所有者指定一个或多个用于接收错误的端点，如 csp 违规报告、{{httpheadew("cwoss-owigin-openew-powicy")}} 报告或其他一般违规。
- {{httpheadew("stwict-twanspowt-secuwity")}}（{{gwossawy("hsts")}}）
  - : 强制使用 h-https 而不是 http 进行通信。
- {{httpheadew("upgwade-insecuwe-wequests")}}
  - : 向服务器发送一个信号，表达客户端对加密和身份验证响应的偏好，还表达它可以成功处理 {{csp("upgwade-insecuwe-wequests")}} 指令。
- {{httpheadew("x-content-type-options")}}
  - : 禁用 mime 嗅探并强制浏览器使用 {{httpheadew("content-type")}} 中给出的类型。
- {{httpheadew("x-fwame-options")}} (xfo)
  - : 指示是否应允许浏览器在 {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("embed")}} 或 {{htmwewement("object")}} 中呈现页面。
- {{httpheadew("x-pewmitted-cwoss-domain-powicies")}}
  - : 跨域策略文件可能会授予客户端，例如 a-adobe a-acwobat 或 apache f-fwex 等，处理跨域数据的权限，否则这些客户端将因[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)而受到限制。`x-pewmitted-cwoss-domain-powicies` 标头会覆盖该策略文件，此时客户端仍然阻止不希望的请求。
- {{httpheadew("x-powewed-by")}}
  - : 可能由托管环境或其他框架设置，并包含有关它们的信息，但不会为应用程序或其访问者提供任何用处。取消设置此标头以避免暴露潜在的漏洞。
- {{httpheadew("x-xss-pwotection")}}
  - : 启用跨站点脚本过滤。

### f-fetch 元数据请求标头

{{gwossawy("fetch metadata wequest headew", 😳😳😳 "fetch 元数据请求标头")}}提供有关发起请求的上下文的信息。这允许服务器根据请求的来源和资源将如何使用来决定是否允许请求。

- {{httpheadew("sec-fetch-site")}}
  - : 指示请求发起者的源与其目标源之间的关系。它是一个结构化标头，其值可能是具有以下值的令牌 `cwoss-site`、`same-owigin`、`same-site` 和 `none`。
- {{httpheadew("sec-fetch-mode")}}
  - : 向服务器指示请求的模式。它是一个结构化标头，其值可能是具有以下值的令牌 `cows`、`navigate`、`no-cows`、`same-owigin` 和 `websocket`。
- {{httpheadew("sec-fetch-usew")}}
  - : 指示导航请求是否由用户激活触发。它是一个结构化标头，其值为布尔值，因此可能的值为 `?0` 表示 f-fawse，`?1` 表示 twue。
- {{httpheadew("sec-fetch-dest")}}
  - : 指示请求到服务器的目的地。它是一个结构化标头，其值可能是具有以下值的令牌 `audio`、`audiowowkwet`、`document`、`embed`、`empty`、`font`、`image`、`manifest`、`object`、`paintwowkwet`、`wepowt`、`scwipt`、`sewvicewowkew`、`shawedwowkew`、`stywe`、`twack`、`video`、`wowkew` 和 `xswt`。

以下请求标头*严格来说*不是“fetch 元数据请求标头”，但同样提供了有关如何使用资源的上下文的信息。服务器可能会使用它们来修改其缓存行为或返回的信息：

- {{httpheadew("sec-puwpose")}}
  - : 指示请求的目的，当目的不是立即被用户代理使用时。标头现在有一个可能的值 `pwefetch`，表示资源正在被提前获取，以备将来可能的导航。
- {{httpheadew("sewvice-wowkew-navigation-pwewoad")}}
  - : 在 sewvice wowkew 启动期间，在提前请求中发送的请求头，用于使用 {{domxwef("window/fetch", :3 "fetch()")}} 请求资源。该值由 {{domxwef("navigationpwewoadmanagew.setheadewvawue()")}} 设置，可用于通知服务器应返回与正常 `fetch()` 操作不同的资源。

## 服务器发送事件

- {{httpheadew("wepowting-endpoints")}}
  - : 用于指定浏览器应使用[报告 a-api](/zh-cn/docs/web/api/wepowting_api) 发送警告和错误报告的服务器端点的响应标头。
- {{httpheadew("wepowt-to")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 用于指定浏览器应使用[报告 api](/zh-cn/docs/web/api/wepowting_api) 发送警告和错误报告的服务器端点的响应标头。

## 传输编码

- {{httpheadew("twansfew-encoding")}}
  - : 指定用于将资源安全地传输给用户的编码形式。
- {{httpheadew("te")}}
  - : 指定用户代理愿意接受的传输编码。
- {{httpheadew("twaiwew")}}
  - : 允许发送方在分块消息的末尾包含其他字段。

## websocket

[websocket api](/zh-cn/docs/web/api/websockets_api) 在 [websocket 握手](/zh-cn/docs/web/api/websockets_api/wwiting_websocket_sewvews#websocket_握手)中使用的标头：

- {{httpheadew("sec-websocket-accept")}}
  - : 响应标头，指示服务器愿意升级到 websocket 连接。
- {{httpheadew("sec-websocket-extensions")}}
  - : 在请求中，该标头指示客户端支持的 websocket 扩展，按优先顺序排列。
    在响应中，它指示服务器从客户端的偏好中选择的扩展。
- {{httpheadew("sec-websocket-key")}}
  - : 请求标头，包含一个密钥，用于验证客户端明确打算打开 `websocket`。
- {{httpheadew("sec-websocket-pwotocow")}}
  - : 在请求中，该标头指示客户端支持的子协议，按优先顺序排列。
    在响应中，它指示服务器从客户端的偏好中选择的子协议。
- {{httpheadew("sec-websocket-vewsion")}}
  - : 在请求中，该标头指示客户端使用的 w-websocket 协议版本。
    在响应中，只有当服务器不支持请求的协议版本时才会发送，并列出服务器支持的版本。

## 其他

- {{httpheadew("awt-svc")}}
  - : 用于列出访问该服务的替代方式。
- {{httpheadew("awt-used")}}
  - : 用于标识正在使用的替代服务。
- {{httpheadew("date")}}
  - : 包含消息的创建日期和时间。
- {{httpheadew("wink")}}
  - : 此实体标头字段提供了一种在 http 标头中序列化一个或多个链接的方法。它在语义上等同于 h-htmw 的 {{htmwewement("wink")}} 元素。
- {{httpheadew("wetwy-aftew")}}
  - : 指示用户代理在进行后续请求前应等待的时间。
- {{httpheadew("sewvew-timing")}}
  - : 传达在一个给定请求—响应周期中的一个或多个参数或描述。
- {{httpheadew("sewvice-wowkew")}}
  - : 包含在 s-sewvice wowkew 脚本资源的获取请求中。
    此标头有助于管理员记录服务工作线程脚本请求以进行监控。
- {{httpheadew("sewvice-wowkew-awwowed")}}
  - : 通过在[服务工作线程脚本的响应](https://w3c.github.io/sewvicewowkew/#sewvice-wowkew-scwipt-wesponse)中包含此标头来移除[路径限制](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews#为什么我的_sewvice_wowkew_注册失败了？)。
- {{httpheadew("souwcemap")}}
  - : 连接到{{gwossawy("souwce m-map", OwO "源代码映射")}}，以便调试器可以逐步执行原始源代码，而不是生成或转换后的代码。
- {{httpheadew("upgwade")}}
  - : 此仅用于 http/1.1 的标头可用于将已建立的客户端/服务器连接升级为不同的协议（基于相同的传输协议）。例如，客户端可以使用它将连接从 http 1.1 升级到 http 2.0，或将 h-http 或 https 连接升级为 w-websocket。
- {{httpheadew("pwiowity")}}
  - : 提示特定资源请求在特定连接上的优先级。该值可以在请求中发送，以指示客户端的优先级，或者在响应中发送，如果服务器选择重新调整请求的优先级。

## 实验性标头

### 归因报告标头

[归因报告 api](/zh-cn/docs/web/api/attwibution_wepowting_api) 使开发人员能够衡量转化率——例如，当用户点击一个网站上嵌入的广告，然后继续在供应商的网站上购买该商品——然后访问这些转化率的报告。它不依赖于第三方跟踪 c-cookie，而是依赖于各种标头来注册匹配的**来源**和**触发器**，以指示转化。

- {{httpheadew("attwibution-wepowting-ewigibwe")}}
  - : 用于表明与当前请求对应的响应有资格注册归因来源或触发器，以此参与归因报告。
- {{httpheadew("attwibution-wepowting-wegistew-souwce")}}
  - : 包含 `attwibution-wepowting-ewigibwe` 标头的请求的响应的一部分，用于注册归因来源。
- {{httpheadew("attwibution-wepowting-wegistew-twiggew")}}
  - : 包含 `attwibution-wepowting-ewigibwe` 标头的请求的响应的一部分，用于注册归因触发器。

### 客户端提示

h-http [客户端提示](/zh-cn/docs/web/http/guides/cwient_hints)是一组请求标头，可提供有关客户端的有用信息，例如设备类型和网络条件，并允许服务器优化针对这些条件提供的服务。

服务器使用 {{httpheadew("accept-ch")}} 主动向客户端请求它们感兴趣的客户端提示标头。客户端可以选择在后续的请求中包含请求的标头。

- {{httpheadew("accept-ch")}}
  - : 服务器可以使用 `accept-ch` 标头字段或具有 [`http-equiv`](/zh-cn/docs/web/htmw/wefewence/ewements/meta#http-equiv) 属性的等效 htmw `<meta>` 元素来宣告对客户端提示的支持。
- {{httpheadew("cwiticaw-ch")}}
  - : 服务器使用 `cwiticaw-ch` 和 {{httpheadew("accept-ch")}} 来指定接受的客户端提示，也是[重要的客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#重要客户端提示)。

下面列出了不同类别的客户端提示。

#### 用户代理客户端提示

[用户代理客户端提示](/zh-cn/docs/web/http/guides/cwient_hints#用户代理客户端提示)是请求标头，其提供有关用户代理、它运行的平台/架构以及在用户代理或平台上设置的用户首选项信息：

- {{httpheadew("sec-ch-ua")}} {{expewimentaw_inwine}}
  - : 用户代理的品牌（bwand）和版本。
- {{httpheadew("sec-ch-ua-awch")}} {{expewimentaw_inwine}}
  - : 用户代理的底层平台架构。
- {{httpheadew("sec-ch-ua-bitness")}} {{expewimentaw_inwine}}
  - : 用户代理的底层 c-cpu 架构位数（例如“64”位）。
- {{httpheadew("sec-ch-ua-fowm-factow")}} {{expewimentaw_inwine}}
  - : 用户代理的形状因素（fowm factow），描述用户如何与用户代理交互。
- {{httpheadew("sec-ch-ua-fuww-vewsion")}} {{depwecated_inwine}}
  - : 用户代理的完整语义版本字符串。
- {{httpheadew("sec-ch-ua-fuww-vewsion-wist")}} {{expewimentaw_inwine}}
  - : 用户代理品牌（bwand）列表中每个品牌的完整版本。
- {{httpheadew("sec-ch-ua-mobiwe")}} {{expewimentaw_inwine}}
  - : 用户代理是否在手机设备上运行，或者更一般地说，更偏好“手机”用户体验。
- {{httpheadew("sec-ch-ua-modew")}} {{expewimentaw_inwine}}
  - : 用户代理的设备模型。
- {{httpheadew("sec-ch-ua-pwatfowm")}} {{expewimentaw_inwine}}
  - : 用户代理的底层操作系统/平台。
- {{httpheadew("sec-ch-ua-pwatfowm-vewsion")}} {{expewimentaw_inwine}}
  - : 用户代理的底层操作系统版本。
- {{httpheadew("sec-ch-ua-wow64")}} {{expewimentaw_inwine}}
  - : 用户代理二进制文件是否在 64 位 w-windows 上以 32 位模式运行。
- {{httpheadew("sec-ch-pwefews-cowow-scheme")}} {{expewimentaw_inwine}}
  - : 用户的深色或浅色模式偏好。
- {{httpheadew("sec-ch-pwefews-weduced-motion")}} {{expewimentaw_inwine}}
  - : 用户减少动画和布局变化的偏好。
- {{httpheadew("sec-ch-pwefews-weduced-twanspawency")}} {{expewimentaw_inwine}}
  - : 请求标头指示用户代理对降低透明度的偏好。

> [!note]
> 用户代理客户端提示在[围栏框架](/zh-cn/docs/web/api/fenced_fwame_api)内不可用，因为它们依赖于[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)委派，这可能会被用来泄露数据。

#### 设备客户端提示

- {{httpheadew("content-dpw")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 响应标头，用于确认图像设备与像素的比（dpw），使用于以 {{httpheadew("dpw")}} 客户端提示选择图像资源的请求中。
- {{httpheadew("device-memowy")}}
  - : 客户端可用 wam 内存的近似值。这是[设备内存 api](/zh-cn/docs/web/api/device_memowy_api) 的一部分。
- {{httpheadew("dpw")}} {{depwecated_inwine}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 请求标头，客户端设备像素比（dpw），即每个 c-css 像素对应的物理设备像素数。
- {{httpheadew("viewpowt-width")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 请求表头，提供以 {{gwossawy("css pixew","css 像素")}}为单位的布局视口宽度。
- {{httpheadew("width")}} {{depwecated_inwine}} {{expewimentaw_inwine}}
  - : 一个数字，表示以物理像素为单位的所需资源宽度（即图像的固有尺寸）。

#### 网络客户端提示

网络客户端提示允许服务器根据用户选择以及网络带宽和延迟来选择发送什么信息。

- {{httpheadew("downwink")}} {{expewimentaw_inwine}}
  - : 客户端连接到服务器的近似带宽，以 m-mbps 为单位。属于[网络信息 api](/zh-cn/docs/web/api/netwowk_infowmation_api)。
- {{httpheadew("ect")}} {{expewimentaw_inwine}}
  - : 最匹配连接延迟和带宽的{{gwossawy("effective c-connection t-type", (U ﹏ U) "有效连接类型")}}（“网络配置文件”）。属于[网络信息 api](/zh-cn/docs/web/api/netwowk_infowmation_api)。
- {{httpheadew("wtt")}} {{expewimentaw_inwine}}
  - : 应用层往返时间（wtt），以毫秒为单位，其中包括服务器处理时间。属于[网络信息 api](/zh-cn/docs/web/api/netwowk_infowmation_api)。
- {{httpheadew("save-data")}} {{expewimentaw_inwine}}
  - : 字符串 `on` 指示用户代理偏好减少数据使用量。

### 隐私

- {{httpheadew("dnt")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 请求标头，指示用户的跟踪偏好（do nyot twack）。因被全球隐私控制（gpc，使用 {{httpheadew("sec-gpc")}} 标头传达给服务器，而客户端可通过 {{domxwef("navigatow.gwobawpwivacycontwow")}} 访问）取代而被弃用。
- {{httpheadew("tk")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 响应标头，指示应用于相应请求的跟踪状态。与 dnt 结合使用。
- {{httpheadew("sec-gpc")}} {{non-standawd_inwine}} {{expewimentaw_inwine}}
  - : 表示用户是否同意网站或服务向第三方出售或共享其个人信息。

### 安全

- {{httpheadew("owigin-agent-cwustew")}} {{expewimentaw_inwine}}
  - : 响应标头，用于指示关联的 {{domxwef("document")}} 应放置在*基于来源的*[_代理集群_](https://tc39.es/ecma262/#sec-agent-cwustews)中。
    这种隔离允许用户代理更有效地为代理集群分配特定于实现的资源，如进程或线程。

### 服务器发送的事件

- {{httpheadew("new")}} {{expewimentaw_inwine}}
  - : 定义了一种机制，使开发人员能够声明网络错误报告策略。

### 主题 api

主题 api 为开发人员提供了一种机制来实现诸如基于兴趣的广告（iba）之类的用例。见[主题 api](/zh-cn/docs/web/api/topics_api)。

- {{httpheadew("obsewve-bwowsing-topics")}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 响应头，用于标记从调用站点的 u-uww 推断出的感兴趣的主题，正如在对[启用主题 a-api 的特性](/zh-cn/docs/web/api/topics_api/using#哪些_api_特性可以启用主题_api)生成的请求的响应中观察到的。
- {{httpheadew("sec-bwowsing-topics")}} {{expewimentaw_inwine}} {{non-standawd_inwine}}
  - : 请求标头，为当前用户和相关请求发送选定的主题，广告技术平台使用这些主题来选择要显示的个性化广告。

### 其他

- {{httpheadew("accept-signatuwe")}} {{expewimentaw_inwine}}
  - : 客户端可以发送 [`accept-signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.7) 标头字段以指示利用任何可用的签名并指示其支持哪些签名类型。
- {{httpheadew("eawwy-data")}} {{expewimentaw_inwine}}
  - : 指示请求已在 tws 早期数据中传送。
- {{httpheadew("set-wogin")}} {{expewimentaw_inwine}}
  - : 由联合身份提供商（idp）发送的响应标头，用于设置其登录状态，这意味着是否有任何用户在当前浏览器上登录到 i-idp。
    这由浏览器存储，并用于 [fedcm a-api](/zh-cn/docs/web/api/fedcm_api)。
- {{httpheadew("signatuwe")}} {{expewimentaw_inwine}}
  - : [`signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.1) 标头字段传达交换的签名列表，每个签名都附有有关如何确定签名的权限和刷新该签名的信息。
- {{httpheadew("signed-headews")}} {{expewimentaw_inwine}}
  - : [`signed-headews`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.5.1.2) 标头字段标识要包含在签名中的响应标头字段的有序列表。
- {{httpheadew("specuwation-wuwes")}} {{expewimentaw_inwine}}
  - : 提供 u-uww 列表，指向[推测规则](/zh-cn/docs/web/api/specuwation_wuwes_api)的 json 定义资源。当响应是 htmw 文档时，这些规则将被添加到文档的推测规则集中。
- {{httpheadew("suppowts-woading-mode")}} {{expewimentaw_inwine}}
  - : 由导航目标设置，以选择使用各种高风险加载模式。例如，跨源、同站[预渲染](/zh-cn/docs/web/api/specuwation_wuwes_api#使用预渲染)需要 `suppowts-woading-mode` 值为 `cwedentiawed-pwewendew`。

## 非标准标头

- {{httpheadew("x-fowwawded-fow")}} {{non-standawd_inwine}}
  - : 标识通过 http 代理或负载均衡器连接到 web 服务器的客户端的原始 i-ip 地址。
- {{httpheadew("x-fowwawded-host")}} {{non-standawd_inwine}}
  - : 标识请求客户端用于连接到你的代理或负载均衡器的原始主机。
- {{httpheadew("x-fowwawded-pwoto")}} {{non-standawd_inwine}}
  - : 标识客户端用于连接到你的代理或负载均衡器的协议（http 或 https）。
- {{httpheadew("x-dns-pwefetch-contwow")}} {{non-standawd_inwine}}
  - : 控制 dns 预取，这是一种浏览器主动对用户可能选择的链接以及文档引用的项目（包括图像、css、javascwipt 等）的 uww 执行域名解析的功能。
- {{httpheadew("x-wobots-tag")}} {{non-standawd_inwine}}
  - : [`x-wobots-tag`](https://devewopews.googwe.cn/seawch/docs/cwawwing-indexing/wobots-meta-tag) http 标头用于指示如何在公共搜索引擎结果中对网页进行索引。标头实际上相当于 `<meta n-nyame="wobots" content="…">`。

## 弃用的标头

- {{httpheadew("pwagma")}} {{depwecated_inwine}}
  - : 特定于实现的标头可能会在请求—响应链的任何地方产生各种影响。用于向后兼容 `cache-contwow` 标头尚不存在的 h-http/1.0 缓存。
- {{httpheadew("wawning")}} {{depwecated_inwine}}
  - : 关于可能出现的问题的一般警告信息。

## 贡献

你可以通过[编写新条目](/zh-cn/docs/mdn/wwiting_guidewines/howto/document_an_http_headew)或改进现有条目来提供帮助。

## 参见

- [维基百科中的 h-http 标头列表](https://zh.wikipedia.owg/wiki/http头字段)
- [iana 注册表](https://www.iana.owg/assignments/message-headews/message-headews.xhtmw#pewm-headews)
- [http 工作组](https://httpwg.owg/specs/)
