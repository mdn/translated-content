---
title: HTTP 标头
slug: Web/HTTP/Reference/Headers
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

**HTTP 标头**（header）允许客户端和服务器通过 HTTP 请求（request）或者响应（response）传递附加信息。在 HTTP/1.X，一个标头包括它的名称（不区分大小写），一个冒号（`:`），可选且会被忽略的空格，最后是它的值（例如 `Allow: POST`）。在 HTTP/2 或更高的版本中，标头在开发者工具中展示为小写（`accept: */*`），对于特殊的[伪标头](/zh-CN/docs/Web/HTTP/Guides/Messages#伪标头)组则会以冒号作为前缀（`:status: 200`）。你可以在 [HTTP 消息](/zh-CN/docs/Web/HTTP/Guides/Messages)页面找到每个协议版本的有关信息和语法。

自定义专用的标头之前可以与 `X-` 前缀一起使用，但是这种用法在 2012 年被弃用，因为当非标准字段在 [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) 中成为标准时，它会带来很多不便；其他的标头在 [IANA HTTP 字段名注册表](https://www.iana.org/assignments/http-fields/http-fields.xhtml)中列出，其原始内容在 [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) 中定义。IANA 注册表列出了标头及其[状态信息](https://github.com/protocol-registries/http-fields?tab=readme-ov-file#choosing-the-right-status)。

根据不同的消息上下文，标头可以分为：

- {{Glossary("Request header", "请求标头")}}
  - : 包含请求的资源，或请求资源的客户端的更多信息。
- {{Glossary("Response header", "响应标头")}}
  - : 包含有关响应的额外信息，例如响应的位置或者提供响应的服务器。
- {{Glossary("Representation header", "表示标头")}}
  - : 包含资源体的信息，例如其 [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)或者应用的编码/压缩方案。
- {{Glossary("Payload header","负载标头")}}
  - : 包含与负载数据的形式无关的表示信息，包含内容长度和用于传输的编码。

标头也可以根据{{Glossary("Proxy_server", "代理")}}处理它们的方式进行分组：

- 端到端（end-to-end）标头
  - : 这类标头*必须*被传输到最终的消息接收者：请求的服务器或者响应的客户端。中间的代理必须重新转发这些未经修改的标头，并且必须缓存它们。
- 逐跳（hop-by-hop）标头
  - : 这类标头仅对单次传输连接有意义，并且*不得*由代理重传或者缓存。注意，只能使用 {{httpheader("Connection")}} 标头来设置逐跳标头。

## 验证

- {{HTTPHeader("WWW-Authenticate")}}
  - : 定义应该用于访问资源的身份验证方法。
- {{HTTPHeader("Authorization")}}
  - : 包含用于向服务器验证用户代理身份的凭据。
- {{HTTPHeader("Proxy-Authenticate")}}
  - : 定义应用于访问代理服务器后面资源的身份验证方法。
- {{HTTPHeader("Proxy-Authorization")}}
  - : 包含用于向代理服务器验证用户代理的凭据。

## 缓存

- {{HTTPHeader("Age")}}
  - : 对象在代理缓存中的时间（以秒为单位）。
- {{HTTPHeader("Cache-Control")}}
  - : 请求和响应中缓存机制的指令。
- {{HTTPHeader("Clear-Site-Data")}}
  - : 清除与请求网站相关联的浏览器数据（例如 cookie、storage、cache）。
- {{HTTPHeader("Expires")}}
  - : 响应被视为过时的日期/时间。
- {{HTTPHeader("No-Vary-Search")}} {{experimental_inline}}
  - : 指定一组规则，定义 URL 的查询参数将如何影响缓存匹配。这些规则规定了是否应将具有不同 URL 参数的同一 URL 存为单独的浏览器缓存条目。

## 条件

- {{HTTPHeader("Last-Modified")}}
  - : 资源的最后修改日期，用于比较同一个资源的多个版本。它不如 {{HTTPHeader("ETag")}} 准确，但在某些环境中更容易计算。使用 {{HTTPHeader("If-Modified-Since")}} 和 {{HTTPHeader("If-Unmodified-Since")}} 的条件请求使用此值来更改请求的行为。
- {{HTTPHeader("ETag")}}
  - : 标识资源版本的唯一字符串。使用 {{HTTPHeader("If-Match")}} 和 {{HTTPHeader("If-None-Match")}} 的条件请求使用此值来更改请求的行为。
- {{HTTPHeader("If-Match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 ETag 之一匹配时才应用该方法。
- {{HTTPHeader("If-None-Match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 ETag 都*不*匹配时才应用该方法。这用于更新缓存（用于安全请求），或防止在资源已存在时上传新资源。
- {{HTTPHeader("If-Modified-Since")}}
  - : 使请求有条件，并期望资源在给定日期后被修改时才请求传输该资源。这用于仅在缓存过期时传输数据。
- {{HTTPHeader("If-Unmodified-Since")}}
  - : 使请求有条件，并期望资源只有在给定日期后未被修改时才请求传输资源。这确保了特定范围的新片段与先前片段的一致性，或者在修改现有文档时实现乐观的（optimistic）并发控制系统。
- {{HTTPHeader("Vary")}}
  - : 确定如何匹配请求标头，以决定是否可以使用缓存的响应，还是从源服务器请求新的响应。

## 连接管理

- {{HTTPHeader("Connection")}}
  - : 控制当前事务完成后网络连接是否保持打开状态。
- {{HTTPHeader("Keep-Alive")}}
  - : 控制持久连接应保持打开状态的时间。

## 内容协商

更多详情请见[内容协商](/zh-CN/docs/Web/HTTP/Guides/Content_negotiation)。

- {{HTTPHeader("Accept")}}
  - : 通知服务器可以发回的数据{{Glossary("MIME_type", "类型")}}。
- {{HTTPHeader("Accept-Encoding")}}
  - : 可用于返回的资源的编码算法，通常是[压缩算法](/zh-CN/docs/Web/HTTP/Guides/Compression)。
- {{HTTPHeader("Accept-Language")}}
  - : 通知希望服务器返回的人类语言。这是仅仅一个提示而不一定由用户完全控制：服务器应该始终注意不要覆盖用户的明确选择（比如从下拉列表中选择的语言）。
- {{HTTPHeader("Accept-Patch")}}
  - : *请求内容协商*响应标头，在 {{HTTPMethod("PATCH")}} 请求中用于通告服务器能够理解的[媒体类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)。
- {{HTTPHeader("Accept-Post")}}
  - : *请求内容协商*响应标头，在 {{HTTPMethod("POST")}} 请求中用于通告服务器能够理解的[媒体类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)。

## 控制

- {{HTTPHeader("Expect")}}
  - : 表示服务器正确处理请求需要满足的期望。
- {{HTTPHeader("Max-Forwards")}}
  - : 使用 [`TRACE`](/zh-CN/docs/Web/HTTP/Reference/Methods/TRACE) 时，指示请求在被反映到发送方之前可以执行的最大跃点数。

## Cookie

- {{HTTPHeader("Cookie")}}
  - : 包含先前由服务器使用 {{HTTPHeader("Set-Cookie")}} 标头发送然后被存储的 [HTTP cookie](/zh-CN/docs/Web/HTTP/Guides/Cookies)。
- {{HTTPHeader("Set-Cookie")}}
  - : 将 cookie 从服务器发送到用户代理。

## CORS

更多信息请见 [CORS 文档](/zh-CN/docs/Glossary/CORS)。

- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 指示当凭据标志为 true 时，是否可以暴露对请求的响应。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 用在对{{Glossary("Preflight_request", "预检请求")}}的响应中，指示实际的请求中可以使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 指定访问资源允许的 HTTP 方法，用在对预检请求的响应中。
- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 指示响应否可以被共享。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 通过列出标头的名称，指示哪些标头可以作为响应的一部分暴露。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 指示预检请求的结果能被缓存多久。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪一种 [HTTP 方法](/zh-CN/docs/Web/HTTP/Reference/Methods)。
- {{HTTPHeader("Origin")}}
  - : 指示获取请求是从什么源发起的。
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : 指定特定的源，以允许其访问[资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing) 特性提供的属性值，否则由于跨源限制，这些值将被报告为零。

## 下载

- {{HTTPHeader("Content-Disposition")}}
  - : 指示传输的资源是否应内联显示（没有标头的默认行为），或者是否应像下载一样处理并且浏览器应显示“另存为”对话框。

## 完整性摘要

- {{HTTPHeader("Content-Digest")}} {{experimental_inline}}
  - : 提供 HTTP 消息中构建的字节流（消息内容）的{{Glossary("digest", "摘要")}}，依赖于 {{HTTPHeader("Content-Encoding")}} 和 {{HTTPHeader("Content-Range")}}。
- {{HTTPHeader("Repr-Digest")}} {{experimental_inline}}
  - : 在传输之前提供指定形式的目标资源的{{Glossary("digest", "校验摘要")}}。
    不同于 {{HTTPHeader("Content-Digest")}}，这个摘要不考虑 {{HTTPHeader("Content-Encoding")}} 和 {{HTTPHeader("Content-Range")}}。
- {{HTTPHeader("Want-Content-Digest")}} {{experimental_inline}}
  - : 表达希望使用 {{HTTPHeader("Content-Digest")}}。
    类似于 {{HTTPHeader("Want-Repr-Digest")}}，但是使用 `Content-`。
- {{HTTPHeader("Want-Repr-Digest")}} {{experimental_inline}}
  - : 表达希望使用 {{HTTPHeader("Repr-Digest")}}。
    类似于 {{HTTPHeader("Want-Content-Digest")}}，但是使用 `Repr-`。

## 消息主体信息

- {{HTTPHeader("Content-Length")}}
  - : 资源的大小，以十进制字节数表示。
- {{HTTPHeader("Content-Type")}}
  - : 指示资源的媒体类型。
- {{HTTPHeader("Content-Encoding")}}
  - : 用于指定压缩算法。
- {{HTTPHeader("Content-Language")}}
  - : 描述面向受众的人类语言，以便用户可以根据自己的首选语言进行区分。
- {{HTTPHeader("Content-Location")}}
  - : 指示返回数据的备用位置。

## 代理

- {{HTTPHeader("Forwarded")}}
  - : 包含来自代理服务器面向客户端一侧的信息，当请求路径中涉及代理时，这些信息会被更改或丢失。
- {{HTTPHeader("Via")}}
  - : 由代理添加，包括正向和反向代理，并且可以出现在请求标头和响应标头中。

## 范围请求

HTTP [范围请求](/zh-CN/docs/Web/HTTP/Guides/Range_requests)允许客户端向服务器请求资源的一部分。范围请求可用于支持随机访问的媒体播放器、知道只需要大文件的一部分的数据工具以及允许用户暂停和恢复下载的下载管理器等应用程序。

- {{HTTPHeader("Accept-Ranges")}}
  - : 指示服务器是否支持范围请求，如果支持，范围可以用哪个单位表示。
- {{HTTPHeader("Range")}}
  - : 指示服务器应返回的文档部分。
- {{HTTPHeader("If-Range")}}
  - : 创建一个条件范围请求，只有在给定的 etag 或日期与远程资源匹配时才会满足。用于防止从资源的不兼容版本下载两个范围。
- {{HTTPHeader("Content-Range")}}
  - : 指示部分消息在完整正文消息中的位置。

## 重定向

- {{HTTPHeader("Location")}}
  - : 指示要将页面重定向到的 URL。
- {{HTTPHeader("Refresh")}}
  - : 指示浏览器重新加载页面或重定向到另一个页面。采用与带有 [`http-equiv="refresh"`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#attr-http-equiv) 的 `meta` 元素相同的值。

## 请求上下文

- {{HTTPHeader("From")}}
  - : 包含发送请求的用户代理的实际掌控者的电子邮箱地址。
- {{HTTPHeader("Host")}}
  - : 指定服务器的域名（用于虚拟主机）和服务器侦听的 TCP 端口号（可选）。
- {{HTTPHeader("Referer")}}
  - : 前一个网页的地址，表示从该网页链接（进入）到当前请求的页面。
- {{HTTPHeader("Referrer-Policy")}}
  - : 规定了在发出的请求中应包含哪些引用信息，这些信息会在 {{HTTPHeader("Referer")}} 标头中发送。
- {{HTTPHeader("User-Agent")}}
  - : 包含一个特征字符串，允许网络协议对端识别发起请求的用户代理软件的应用程序类型、操作系统、软件供应商或软件版本。

## 响应上下文

- {{HTTPHeader("Allow")}}
  - : 列出资源所支持的 HTTP 方法的集合。
- {{HTTPHeader("Server")}}
  - : 包含了处理请求的源服务器所用到的软件相关信息。

## 安全

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}（COEP）
  - : 允许服务器为给定文档声明嵌入器策略。
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}（COOP）
  - : 防止其他域打开/控制窗口。
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}（CORP）
  - : 防止从其他域读取应用了此标头的资源的响应。见 [CORP 的解释文章](/zh-CN/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)。
- {{HTTPHeader("Content-Security-Policy")}}（{{Glossary("CSP")}}）
  - : 控制用户代理可以为给定页面加载哪些资源。
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : 允许 Web 开发人员通过监控而不是强制执行其效果来试验策略。这些由 {{Glossary("JSON")}} 文档组成的违规报告包含通过 HTTP `POST` 请求发送到指定的 URI。
- {{HTTPHeader("Expect-CT")}} {{deprecated_inline}}
  - : 允许网站选择报告和执行[证书透明度](/zh-CN/docs/Web/Security/Defenses/Certificate_Transparency)要求，以检测该网站使用的错误颁发的证书。
- {{HTTPHeader("Permissions-Policy")}}
  - : 提供一种机制来允许和拒绝在网站自己的框架和它嵌入的 {{htmlelement("iframe")}} 中使用浏览器特性。
- {{HTTPHeader("Reporting-Endpoints")}} {{experimental_inline}}
  - : 响应标头，允许网站所有者指定一个或多个用于接收错误的端点，如 CSP 违规报告、{{HTTPHeader("Cross-Origin-Opener-Policy")}} 报告或其他一般违规。
- {{HTTPHeader("Strict-Transport-Security")}}（{{Glossary("HSTS")}}）
  - : 强制使用 HTTPS 而不是 HTTP 进行通信。
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : 向服务器发送一个信号，表达客户端对加密和身份验证响应的偏好，还表达它可以成功处理 {{CSP("upgrade-insecure-requests")}} 指令。
- {{HTTPHeader("X-Content-Type-Options")}}
  - : 禁用 MIME 嗅探并强制浏览器使用 {{HTTPHeader("Content-Type")}} 中给出的类型。
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : 指示是否应允许浏览器在 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}} 或 {{HTMLElement("object")}} 中呈现页面。
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : 跨域策略文件可能会授予客户端，例如 Adobe Acrobat 或 Apache Flex 等，处理跨域数据的权限，否则这些客户端将因[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)而受到限制。`X-Permitted-Cross-Domain-Policies` 标头会覆盖该策略文件，此时客户端仍然阻止不希望的请求。
- {{HTTPHeader("X-Powered-By")}}
  - : 可能由托管环境或其他框架设置，并包含有关它们的信息，但不会为应用程序或其访问者提供任何用处。取消设置此标头以避免暴露潜在的漏洞。
- {{HTTPHeader("X-XSS-Protection")}}
  - : 启用跨站点脚本过滤。

### fetch 元数据请求标头

{{Glossary("Fetch metadata request header", "fetch 元数据请求标头")}}提供有关发起请求的上下文的信息。这允许服务器根据请求的来源和资源将如何使用来决定是否允许请求。

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : 指示请求发起者的源与其目标源之间的关系。它是一个结构化标头，其值可能是具有以下值的令牌 `cross-site`、`same-origin`、`same-site` 和 `none`。
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : 向服务器指示请求的模式。它是一个结构化标头，其值可能是具有以下值的令牌 `cors`、`navigate`、`no-cors`、`same-origin` 和 `websocket`。
- {{HTTPHeader("Sec-Fetch-User")}}
  - : 指示导航请求是否由用户激活触发。它是一个结构化标头，其值为布尔值，因此可能的值为 `?0` 表示 false，`?1` 表示 true。
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : 指示请求到服务器的目的地。它是一个结构化标头，其值可能是具有以下值的令牌 `audio`、`audioworklet`、`document`、`embed`、`empty`、`font`、`image`、`manifest`、`object`、`paintworklet`、`report`、`script`、`serviceworker`、`sharedworker`、`style`、`track`、`video`、`worker` 和 `xslt`。

以下请求标头*严格来说*不是“fetch 元数据请求标头”，但同样提供了有关如何使用资源的上下文的信息。服务器可能会使用它们来修改其缓存行为或返回的信息：

- {{HTTPHeader("Sec-Purpose")}}
  - : 指示请求的目的，当目的不是立即被用户代理使用时。标头现在有一个可能的值 `prefetch`，表示资源正在被提前获取，以备将来可能的导航。
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : 在 service worker 启动期间，在提前请求中发送的请求头，用于使用 {{domxref("Window/fetch", "fetch()")}} 请求资源。该值由 {{domxref("NavigationPreloadManager.setHeaderValue()")}} 设置，可用于通知服务器应返回与正常 `fetch()` 操作不同的资源。

## 服务器发送事件

- {{HTTPHeader("Reporting-Endpoints")}}
  - : 用于指定浏览器应使用[报告 API](/zh-CN/docs/Web/API/Reporting_API) 发送警告和错误报告的服务器端点的响应标头。
- {{HTTPHeader("Report-To")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 用于指定浏览器应使用[报告 API](/zh-CN/docs/Web/API/Reporting_API) 发送警告和错误报告的服务器端点的响应标头。

## 传输编码

- {{HTTPHeader("Transfer-Encoding")}}
  - : 指定用于将资源安全地传输给用户的编码形式。
- {{HTTPHeader("TE")}}
  - : 指定用户代理愿意接受的传输编码。
- {{HTTPHeader("Trailer")}}
  - : 允许发送方在分块消息的末尾包含其他字段。

## WebSocket

[WebSocket API](/zh-CN/docs/Web/API/WebSockets_API) 在 [WebSocket 握手](/zh-CN/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#websocket_握手)中使用的标头：

- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : 响应标头，指示服务器愿意升级到 WebSocket 连接。
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : 在请求中，该标头指示客户端支持的 WebSocket 扩展，按优先顺序排列。
    在响应中，它指示服务器从客户端的偏好中选择的扩展。
- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : 请求标头，包含一个密钥，用于验证客户端明确打算打开 `WebSocket`。
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : 在请求中，该标头指示客户端支持的子协议，按优先顺序排列。
    在响应中，它指示服务器从客户端的偏好中选择的子协议。
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : 在请求中，该标头指示客户端使用的 WebSocket 协议版本。
    在响应中，只有当服务器不支持请求的协议版本时才会发送，并列出服务器支持的版本。

## 其他

- {{HTTPHeader("Alt-Svc")}}
  - : 用于列出访问该服务的替代方式。
- {{HTTPHeader("Alt-Used")}}
  - : 用于标识正在使用的替代服务。
- {{HTTPHeader("Date")}}
  - : 包含消息的创建日期和时间。
- {{HTTPHeader("Link")}}
  - : 此实体标头字段提供了一种在 HTTP 标头中序列化一个或多个链接的方法。它在语义上等同于 HTML 的 {{HTMLElement("link")}} 元素。
- {{HTTPHeader("Retry-After")}}
  - : 指示用户代理在进行后续请求前应等待的时间。
- {{HTTPHeader("Server-Timing")}}
  - : 传达在一个给定请求—响应周期中的一个或多个参数或描述。
- {{HTTPHeader("Service-Worker")}}
  - : 包含在 Service Worker 脚本资源的获取请求中。
    此标头有助于管理员记录服务工作线程脚本请求以进行监控。
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : 通过在[服务工作线程脚本的响应](https://w3c.github.io/ServiceWorker/#service-worker-script-response)中包含此标头来移除[路径限制](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers#为什么我的_service_worker_注册失败了？)。
- {{HTTPHeader("SourceMap")}}
  - : 连接到{{Glossary("source map", "源代码映射")}}，以便调试器可以逐步执行原始源代码，而不是生成或转换后的代码。
- {{HTTPHeader("Upgrade")}}
  - : 此仅用于 HTTP/1.1 的标头可用于将已建立的客户端/服务器连接升级为不同的协议（基于相同的传输协议）。例如，客户端可以使用它将连接从 HTTP 1.1 升级到 HTTP 2.0，或将 HTTP 或 HTTPS 连接升级为 WebSocket。
- {{HTTPHeader("Priority")}}
  - : 提示特定资源请求在特定连接上的优先级。该值可以在请求中发送，以指示客户端的优先级，或者在响应中发送，如果服务器选择重新调整请求的优先级。

## 实验性标头

### 归因报告标头

[归因报告 API](/zh-CN/docs/Web/API/Attribution_Reporting_API) 使开发人员能够衡量转化率——例如，当用户点击一个网站上嵌入的广告，然后继续在供应商的网站上购买该商品——然后访问这些转化率的报告。它不依赖于第三方跟踪 Cookie，而是依赖于各种标头来注册匹配的**来源**和**触发器**，以指示转化。

- {{httpheader("Attribution-Reporting-Eligible")}}
  - : 用于表明与当前请求对应的响应有资格注册归因来源或触发器，以此参与归因报告。
- {{httpheader("Attribution-Reporting-Register-Source")}}
  - : 包含 `Attribution-Reporting-Eligible` 标头的请求的响应的一部分，用于注册归因来源。
- {{httpheader("Attribution-Reporting-Register-Trigger")}}
  - : 包含 `Attribution-Reporting-Eligible` 标头的请求的响应的一部分，用于注册归因触发器。

### 客户端提示

HTTP [客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints)是一组请求标头，可提供有关客户端的有用信息，例如设备类型和网络条件，并允许服务器优化针对这些条件提供的服务。

服务器使用 {{HTTPHeader("Accept-CH")}} 主动向客户端请求它们感兴趣的客户端提示标头。客户端可以选择在后续的请求中包含请求的标头。

- {{HTTPHeader("Accept-CH")}}
  - : 服务器可以使用 `Accept-CH` 标头字段或具有 [`http-equiv`](/zh-CN/docs/Web/HTML/Reference/Elements/meta#http-equiv) 属性的等效 HTML `<meta>` 元素来宣告对客户端提示的支持。
- {{HTTPHeader("Critical-CH")}}
  - : 服务器使用 `Critical-CH` 和 {{HttpHeader("Accept-CH")}} 来指定接受的客户端提示，也是[重要的客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#重要客户端提示)。

下面列出了不同类别的客户端提示。

#### 用户代理客户端提示

[用户代理客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#用户代理客户端提示)是请求标头，其提供有关用户代理、它运行的平台/架构以及在用户代理或平台上设置的用户首选项信息：

- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : 用户代理的品牌（brand）和版本。
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : 用户代理的底层平台架构。
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : 用户代理的底层 CPU 架构位数（例如“64”位）。
- {{HTTPHeader("Sec-CH-UA-Form-Factor")}} {{experimental_inline}}
  - : 用户代理的形状因素（form factor），描述用户如何与用户代理交互。
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : 用户代理的完整语义版本字符串。
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}
  - : 用户代理品牌（brand）列表中每个品牌的完整版本。
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : 用户代理是否在手机设备上运行，或者更一般地说，更偏好“手机”用户体验。
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : 用户代理的设备模型。
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : 用户代理的底层操作系统/平台。
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : 用户代理的底层操作系统版本。
- {{HTTPHeader("Sec-CH-UA-WoW64")}} {{experimental_inline}}
  - : 用户代理二进制文件是否在 64 位 Windows 上以 32 位模式运行。
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} {{experimental_inline}}
  - : 用户的深色或浅色模式偏好。
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : 用户减少动画和布局变化的偏好。
- {{HTTPHeader("Sec-CH-Prefers-Reduced-Transparency")}} {{experimental_inline}}
  - : 请求标头指示用户代理对降低透明度的偏好。

> [!NOTE]
> 用户代理客户端提示在[围栏框架](/zh-CN/docs/Web/API/Fenced_frame_API)内不可用，因为它们依赖于[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)委派，这可能会被用来泄露数据。

#### 设备客户端提示

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 响应标头，用于确认图像设备与像素的比（DPR），使用于以 {{HTTPHeader("DPR")}} 客户端提示选择图像资源的请求中。
- {{HTTPHeader("Device-Memory")}}
  - : 客户端可用 RAM 内存的近似值。这是[设备内存 API](/zh-CN/docs/Web/API/Device_Memory_API) 的一部分。
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{experimental_inline}} {{non-standard_inline}}
  - : 请求标头，客户端设备像素比（DPR），即每个 CSS 像素对应的物理设备像素数。
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 请求表头，提供以 {{Glossary("CSS pixel","CSS 像素")}}为单位的布局视口宽度。
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{experimental_inline}}
  - : 一个数字，表示以物理像素为单位的所需资源宽度（即图像的固有尺寸）。

#### 网络客户端提示

网络客户端提示允许服务器根据用户选择以及网络带宽和延迟来选择发送什么信息。

- {{HTTPHeader("Downlink")}} {{experimental_inline}}
  - : 客户端连接到服务器的近似带宽，以 Mbps 为单位。属于[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)。
- {{HTTPHeader("ECT")}} {{experimental_inline}}
  - : 最匹配连接延迟和带宽的{{Glossary("effective connection type", "有效连接类型")}}（“网络配置文件”）。属于[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)。
- {{HTTPHeader("RTT")}} {{experimental_inline}}
  - : 应用层往返时间（RTT），以毫秒为单位，其中包括服务器处理时间。属于[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)。
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : 字符串 `on` 指示用户代理偏好减少数据使用量。

### 隐私

- {{HTTPHeader("DNT")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 请求标头，指示用户的跟踪偏好（Do Not Track）。因被全球隐私控制（GPC，使用 {{HTTPHeader("Sec-GPC")}} 标头传达给服务器，而客户端可通过 {{domxref("navigator.globalPrivacyControl")}} 访问）取代而被弃用。
- {{HTTPHeader("Tk")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 响应标头，指示应用于相应请求的跟踪状态。与 DNT 结合使用。
- {{HTTPHeader("Sec-GPC")}} {{non-standard_inline}} {{experimental_inline}}
  - : 表示用户是否同意网站或服务向第三方出售或共享其个人信息。

### 安全

- {{HTTPHeader("Origin-Agent-Cluster")}} {{experimental_inline}}
  - : 响应标头，用于指示关联的 {{domxref("Document")}} 应放置在*基于来源的*[_代理集群_](https://tc39.es/ecma262/#sec-agent-clusters)中。
    这种隔离允许用户代理更有效地为代理集群分配特定于实现的资源，如进程或线程。

### 服务器发送的事件

- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : 定义了一种机制，使开发人员能够声明网络错误报告策略。

### 主题 API

主题 API 为开发人员提供了一种机制来实现诸如基于兴趣的广告（IBA）之类的用例。见[主题 API](/zh-CN/docs/Web/API/Topics_API)。

- {{HTTPHeader("Observe-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : 响应头，用于标记从调用站点的 URL 推断出的感兴趣的主题，正如在对[启用主题 API 的特性](/zh-CN/docs/Web/API/Topics_API/Using#哪些_api_特性可以启用主题_api)生成的请求的响应中观察到的。
- {{HTTPHeader("Sec-Browsing-Topics")}} {{experimental_inline}} {{non-standard_inline}}
  - : 请求标头，为当前用户和相关请求发送选定的主题，广告技术平台使用这些主题来选择要显示的个性化广告。

### 其他

- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : 客户端可以发送 [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) 标头字段以指示利用任何可用的签名并指示其支持哪些签名类型。
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : 指示请求已在 TLS 早期数据中传送。
- {{HTTPHeader("Set-Login")}} {{experimental_inline}}
  - : 由联合身份提供商（IdP）发送的响应标头，用于设置其登录状态，这意味着是否有任何用户在当前浏览器上登录到 IdP。
    这由浏览器存储，并用于 [FedCM API](/zh-CN/docs/Web/API/FedCM_API)。
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) 标头字段传达交换的签名列表，每个签名都附有有关如何确定签名的权限和刷新该签名的信息。
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) 标头字段标识要包含在签名中的响应标头字段的有序列表。
- {{HTTPHeader("Speculation-Rules")}} {{experimental_inline}}
  - : 提供 URL 列表，指向[推测规则](/zh-CN/docs/Web/API/Speculation_Rules_API)的 JSON 定义资源。当响应是 HTML 文档时，这些规则将被添加到文档的推测规则集中。
- {{HTTPHeader("Supports-Loading-Mode")}} {{experimental_inline}}
  - : 由导航目标设置，以选择使用各种高风险加载模式。例如，跨源、同站[预渲染](/zh-CN/docs/Web/API/Speculation_Rules_API#使用预渲染)需要 `Supports-Loading-Mode` 值为 `credentialed-prerender`。

## 非标准标头

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : 标识通过 HTTP 代理或负载均衡器连接到 Web 服务器的客户端的原始 IP 地址。
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : 标识请求客户端用于连接到你的代理或负载均衡器的原始主机。
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : 标识客户端用于连接到你的代理或负载均衡器的协议（HTTP 或 HTTPS）。
- {{HTTPHeader("X-DNS-Prefetch-Control")}} {{non-standard_inline}}
  - : 控制 DNS 预取，这是一种浏览器主动对用户可能选择的链接以及文档引用的项目（包括图像、CSS、JavaScript 等）的 URL 执行域名解析的功能。
- {{HTTPHeader("X-Robots-Tag")}} {{non-standard_inline}}
  - : [`X-Robots-Tag`](https://developers.google.cn/search/docs/crawling-indexing/robots-meta-tag) HTTP 标头用于指示如何在公共搜索引擎结果中对网页进行索引。标头实际上相当于 `<meta name="robots" content="…">`。

## 弃用的标头

- {{HTTPHeader("Pragma")}} {{deprecated_inline}}
  - : 特定于实现的标头可能会在请求—响应链的任何地方产生各种影响。用于向后兼容 `Cache-Control` 标头尚不存在的 HTTP/1.0 缓存。
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : 关于可能出现的问题的一般警告信息。

## 贡献

你可以通过[编写新条目](/zh-CN/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header)或改进现有条目来提供帮助。

## 参见

- [维基百科中的 HTTP 标头列表](https://zh.wikipedia.org/wiki/HTTP头字段)
- [IANA 注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers)
- [HTTP 工作组](https://httpwg.org/specs/)
