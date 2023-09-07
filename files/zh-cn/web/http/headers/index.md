---
title: HTTP 标头（header）
slug: Web/HTTP/Headers
---

{{HTTPSidebar}}

**HTTP 标头**（header）允许客户端和服务器通过 HTTP 请求（request）或者响应（response）传递附加信息。一个 HTTP 标头由它的名称（不区分大小写）后跟随一个冒号（`:`），冒号后跟随它具体的值。该值之前的{{Glossary("Whitespace", "空格")}}会被忽略。

自定义专用的标头之前可以与 `X-` 前缀一起使用，但是这种用法被 IETF 在 2012 年 6 月发布的 [RFC 6648](https://datatracker.ietf.org/doc/html/rfc6648) 明确弃用，原因是其会在非标准字段成为标准时造成不便；其他的标头在 [IANA 注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers)中列出，其原始内容在 [RFC 4229](https://datatracker.ietf.org/doc/html/rfc4229) 中定义。此外，IANA 还维护着[被提议的新的 HTTP 标头注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headers)。

根据不同的消息上下文，标头可以分为：

- {{Glossary("Request header", "请求标头")}}包含有关要获取的资源或客户端或请求资源的客户端的更多信息。
- {{Glossary("Response header", "响应标头")}}包含有关响应的额外信息，例如响应的位置或者提供响应的服务器。
- {{Glossary("Representation header", "表示标头")}}包含资源主体的信息，例如主体的 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)或者应用的编码/压缩方案。
- {{Glossary("Payload header","有效负荷标头")}}包含有关有效载荷数据表示的单独信息，包括内容长度和用于传输的编码。

标头也可以根据{{Glossary("Proxy_server", "代理")}}处理它们的方式进行分组：

- {{ httpheader("Connection") }}
- {{ httpheader("Keep-Alive") }}
- {{ httpheader("Proxy-Authenticate") }}
- {{ httpheader("Proxy-Authorization") }}
- {{ httpheader("TE") }}
- {{ httpheader("Trailer") }}
- {{ httpheader("Transfer-Encoding") }}
- {{ httpheader("Upgrade") }}（另见[协议升级机制](/zh-CN/docs/Web/HTTP/Protocol_upgrade_mechanism)）。

<!---->

- 端到端（End-to-end）标头
  - : 这类标头*必须*被传输到最终的消息接收者：请求的服务器或者响应的客户端。中间的代理必须重新转发这些未经修改的标头，并且必须缓存它们。
- 逐跳（Hop-by-hop）标头
  - : 这类标头仅对单次传输连接有意义，并且*不得由*代理重传或者缓存。注意，只能使用 {{httpheader("Connection")}} 标头来设置逐跳标头。

## 验证（Authentication）

- {{HTTPHeader("WWW-Authenticate")}}
  - : 定义应该用于访问资源的身份验证方法。
- {{HTTPHeader("Authorization")}}
  - : 包含用于向服务器验证用户代理身份的凭据。
- {{HTTPHeader("Proxy-Authenticate")}}
  - : 定义应用于访问代理服务器后面资源的身份验证方法。
- {{HTTPHeader("Proxy-Authorization")}}
  - : 包含用于使用代理服务器验证用户代理的凭据。

## 缓存（Cache）

- {{HTTPHeader("Age")}}
  - : 对象在代理缓存中的时间（以秒为单位）。
- {{HTTPHeader("Cache-Control")}}
  - : 请求和响应中缓存机制的指令。
- {{HTTPHeader("Clear-Site-Data")}}
  - : 清除与请求网站相关联的浏览器数据（例如 cookie、storage、cache）。
- {{HTTPHeader("Expires")}}
  - : 响应被视为过时的日期/时间。
- {{HTTPHeader("Pragma")}}
  - : 特定于实现的标头可能会在请求—响应链（request-response chain）的任何地方产生各种影响。用于向后兼容 `Cache-Control` 标头尚不存在的 HTTP/1.0 缓存。
- {{HTTPHeader("Warning")}} {{deprecated_inline}}
  - : 关于可能出现的问题的一般警告信息。

## 客户端提示（Client hint）

HTTP [客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)是一组请求标头，可提供有关客户端的有用信息，例如设备类型和网络条件，并允许服务器优化针对这些条件提供的服务。

服务器使用 {{HTTPHeader("Accept-CH")}} 主动向客户端请求它们感兴趣的客户端提示标头。客户端可以选择在后续的请求中包含请求的标头。

- {{HTTPHeader("Accept-CH")}} {{experimental_inline}}
  - : 服务器可以使用 `Accept-CH` 标头字段或具有 [`http-equiv`](/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv) 属性的等效 HTML `<meta>` 元素来宣告对客户端提示的支持。
- {{HTTPHeader("Accept-CH-Lifetime")}} {{experimental_inline}} {{deprecated_inline}}
  - : 服务器可以要求客户端记住服务器在指定时间段内支持的客户端提示集合，以便在后续请求到服务器源站时能够传送客户端提示。
- {{HTTPHeader("Critical-CH")}} {{experimental_inline}}
  - : 服务器使用 `Critical-CH` 和 {{HttpHeader("Accept-CH")}} 来指定接受的客户端提示，也是[重要的客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#critical_client_hints)。

下面列出了不同类别的客户端提示。

### 用户代理客户端提示

[用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#user-agent_client_hints)是请求标头，其提供有关用户代理、它运行的平台/架构以及在用户代理或平台上设置的用户首选项信息：

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} {{experimental_inline}}
  - : 用户代理的减少动画运动首选项设置。
- {{HTTPHeader("Sec-CH-UA")}} {{experimental_inline}}
  - : 用户代理的品牌（brand）和版本。
- {{HTTPHeader("Sec-CH-UA-Arch")}} {{experimental_inline}}
  - : 用户代理的底层平台架构。
- {{HTTPHeader("Sec-CH-UA-Bitness")}} {{experimental_inline}}
  - : 用户代理的底层 CPU 架构位数（例如“64”位）。
- {{HTTPHeader("Sec-CH-UA-Full-Version")}} {{deprecated_inline}}
  - : 用户代理的完整语义版本字符串。
- {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} {{experimental_inline}}<!-- chrome intent to ship Nov 2021 -->
  - : 用户代理品牌（brand）列表中每个品牌的完整版本。
- {{HTTPHeader("Sec-CH-UA-Mobile")}} {{experimental_inline}}
  - : 用户代理是否在手机设备上运行，或者更一般地说，更偏好“手机”用户体验。
- {{HTTPHeader("Sec-CH-UA-Model")}} {{experimental_inline}}
  - : 用户代理的设备模型。
- {{HTTPHeader("Sec-CH-UA-Platform")}} {{experimental_inline}}
  - : 用户代理的底层操作系统/平台。
- {{HTTPHeader("Sec-CH-UA-Platform-Version")}} {{experimental_inline}}
  - : 用户代理的底层操作系统版本。

### 设备客户端提示

- {{HTTPHeader("Content-DPR")}} {{deprecated_inline}} {{experimental_inline}}
  - : *响应标头*用于在使用 {{HTTPHeader("DPR")}} 客户端提示选择图像资源的请求中，确认图像设备与像素的比率。
- {{HTTPHeader("Device-Memory")}} {{deprecated_inline}} {{experimental_inline}}
  - : 可用客户端 RAM 内存的近似值。这是[设备内存 API](/zh-CN/docs/Web/API/Device_Memory_API) 的一部分。
- {{HTTPHeader("DPR")}} {{deprecated_inline}} {{experimental_inline}}
  - : 客户端设备像素比（DPR），即每个 CSS 像素对应的物理设备像素数。
- {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}} {{experimental_inline}}
  - : 一个数字，表示以 CSS 像素为单位的布局视口宽度。提供的像素值是四舍五入到最小整数（即上限值）的数字。
- {{HTTPHeader("Width")}} {{deprecated_inline}} {{experimental_inline}}
  - : 一个数字，表示以物理像素为单位的所需资源宽度（即图像的固有尺寸）。

### 网络客户端提示

网络客户端提示允许服务器根据用户选择以及网络带宽和延迟来选择发送什么信息。

- {{HTTPHeader("Downlink")}}
  - : 客户端连接到服务器的近似带宽，以 Mbps 为单位。这是[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API) 的一部分。
- {{HTTPHeader("ECT")}}
  - : 最匹配连接延迟和带宽的{{Glossary("effective connection type", "有效连接类型")}}（“网络配置文件”）。这是[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API) 的一部分。
- {{HTTPHeader("RTT")}}
  - : 应用层往返时间（RTT），以毫秒为单位，其中包括服务器处理时间。这是[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API) 的一部分。
- {{HTTPHeader("Save-Data")}} {{experimental_inline}}
  - : 一个布尔值，指示用户代理对减少数据使用量的偏好。

## 条件（Conditional）

- {{HTTPHeader("Last-Modified")}}
  - : 资源的最后修改日期，用于比较同一个资源的多个版本。它不如 {{HTTPHeader("ETag")}} 准确，但在某些环境中更容易计算。使用 {{HTTPHeader("If-Modified-Since")}} 和 {{HTTPHeader("If-Unmodified-Since")}} 的条件请求可以使用此值来更改请求的行为。
- {{HTTPHeader("ETag")}}
  - : 标识资源版本的唯一字符串。使用 {{HTTPHeader("If-Match")}} 和 {{HTTPHeader("If-None-Match")}} 的条件请求使用此值来更改请求的行为。
- {{HTTPHeader("If-Match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 ETag 之一匹配时才应用该方法。
- {{HTTPHeader("If-None-Match")}}
  - : 使请求有条件，并且仅当存储的资源与给定的 ETag 都*不*匹配时才应用该方法。这用于更新缓存（用于安全请求），或防止在资源已存在时上传新资源。
- {{HTTPHeader("If-Modified-Since")}}
  - : 使请求有条件，并期望只有在给定日期后修改资源时才请求传输资源。仅当缓存过期时才用于传输数据。
- {{HTTPHeader("If-Unmodified-Since")}}
  - : 使请求有条件，并期望只有在给定日期后资源未被修改时才请求传输资源。这确保了特定范围的新片段与先前片段的一致性，或者在修改现有文档时实现乐观的（optimistic）并发控制系统。
- {{HTTPHeader("Vary")}}
  - : 确定如何匹配请求标头以决定是否可以使用缓存的响应而不是从源服务器请求新的响应。

## 连接管理（Connection management）

- {{HTTPHeader("Connection")}}
  - : 控制当前事务完成后网络连接是否保持打开状态。
- {{HTTPHeader("Keep-Alive")}}
  - : 控制持久连接应保持打开状态的时间。

## 内容协商（Content negotiation）

[内容协商（Content negotiation）](/zh-CN/docs/Web/HTTP/Content_negotiation)标头。

- {{HTTPHeader("Accept")}}
  - : 通知服务器可以发回的数据{{Glossary("MIME_type", "类型")}}。
- {{HTTPHeader("Accept-Encoding")}}
  - : 编码算法，通常是[压缩算法](/zh-CN/docs/Web/HTTP/Compression)，用于返回的资源。
- {{HTTPHeader("Accept-Language")}}
  - : 通知服务器有关服务器预期返回的人类语言。这是一个提示，不一定在用户的完全控制之下：服务器应该始终注意不要覆盖明确的用户选择（比如从下拉列表中选择一种语言）。

## 控制（Control）

- {{HTTPHeader("Expect")}}
  - : 表示服务器需要满足的期望才能正确处理请求。
- {{HTTPHeader("Max-Forwards")}}
  - : 使用 [`TRACE`](/zh-CN/docs/Web/HTTP/Methods/TRACE) 时，指示请求在被反映到发送方之前可以执行的最大跃点数。

## Cookie

- {{HTTPHeader("Cookie")}}
  - : 包含先前由服务器使用 {{HTTPHeader("Set-Cookie")}} 标头发送存储的 [HTTP cookie](/zh-CN/docs/Web/HTTP/Cookies)。
- {{HTTPHeader("Set-Cookie")}}
  - : 将 cookie 从服务器发送到用户代理。

## CORS

_[在此处](/zh-CN/docs/Glossary/CORS)了解更多关于 CORS。_

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : 指示响应的资源是否可以被给定的来源共享。
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : 指示当请求的凭证标记为 true 时，是否可以公开对该请求响应。
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : 用在对{{Glossary("Preflight_request", "预检请求")}}的响应中，指示实际的请求中可以使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : 指定对预检请求的响应中，哪些 HTTP 方法允许访问请求的资源。
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : 通过列出标头的名称，指示哪些标头可以作为响应的一部分公开。
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 指示预检请求的结果能被缓存多久。
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪些 HTTP 标头。
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : 用于发起一个预检请求，告知服务器正式请求会使用哪一种 [HTTP 请求方法](/zh-CN/docs/Web/HTTP/Methods)。
- {{HTTPHeader("Origin")}}
  - : 指示获取资源的请求是从什么源发起的。
- {{HTTPHeader("Timing-Allow-Origin")}}
  - : 指定特定的源，以允许其访问 [Resource Timing API](/zh-CN/docs/Web/API/Performance_API/Resource_timing) 功能提供的属性值，否则由于跨源限制，这些值将被报告为零。

## 下载

- {{HTTPHeader("Content-Disposition")}}
  - : 指示传输的资源是否应内联显示（没有标题的默认行为），或者是否应像下载一样处理并且浏览器应显示“另存为”对话框。

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
  - : 包含来自代理服务器面向客户端的信息，当请求路径中涉及代理时，这些信息会被更改或丢失。
- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : 标识通过 HTTP 代理或负载均衡器（load balancer）连接到 Web 服务器的客户端的原始 IP 地址。
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : 标识请求客户端用于连接到你的代理或负载均衡器（load balancer）的原始主机。
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : 标识客户端用于连接到你的代理或负载均衡器（load balancer）的协议（HTTP 或 HTTPS）。
- {{HTTPHeader("Via")}}
  - : 由代理添加，包括正向和反向代理，并且可以出现在请求标头和响应标头中。

## 重定向

- {{HTTPHeader("Location")}}
  - : 指示要将页面重定向到的 URL。
- {{HTTPHeader("Refresh")}}
  - : 指示浏览器重新加载页面或重定向到另一个页面。采用与带有 [`http-equiv="refresh"`](/zh-CN/docs/Web/HTML/Element/meta#attr-http-equiv) 的 `meta` 元素相同的值。

## 请求上下文

- {{HTTPHeader("From")}}
  - : 包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。
- {{HTTPHeader("Host")}}
  - : 指定服务器的域名（用于虚拟主机）和（可选）服务器侦听的 TCP 端口号。
- {{HTTPHeader("Referer")}}
  - : 前一个网页的地址，表示从该网页链接（进入）到当前请求的页面。
- {{HTTPHeader("Referrer-Policy")}}
  - : 管理 {{HTTPHeader("Referer")}} 标头中发送的哪些引用信息应包含在发出的请求中。
- {{HTTPHeader("User-Agent")}}
  - : 包含一个特征字符串，允许网络协议对端识别发起请求的用户代理软件的应用程序类型、操作系统、软件供应商或软件版本。另请参阅 [Firefox 用户代理字符串参考](/zh-CN/docs/Web/HTTP/Headers/User-Agent/Firefox)。

## 响应上下文

- {{HTTPHeader("Allow")}}
  - : 列出资源所支持的 HTTP 方法的集合。
- {{HTTPHeader("Server")}}
  - : 包含了处理请求的源头服务器所用到的软件相关信息。

## 范围请求

- {{HTTPHeader("Accept-Ranges")}}
  - : 指示服务器是否支持范围请求，如果支持，范围可以用哪个单位表示。
- {{HTTPHeader("Range")}}
  - : 指示服务器应返回的文档部分。
- {{HTTPHeader("If-Range")}}
  - : 创建一个条件范围请求，只有在给定的 etag 或日期与远程资源匹配时才会满足。用于防止从资源的不兼容版本下载两个范围。
- {{HTTPHeader("Content-Range")}}
  - : 指示部分消息在完整正文消息中的位置。

## 安全

- {{HTTPHeader("Cross-Origin-Embedder-Policy")}}（COEP）
  - : 允许服务器为给定文档声明嵌入器（embedder）策略。
- {{HTTPHeader("Cross-Origin-Opener-Policy")}}（COOP）
  - : 防止其他域打开/控制窗口。
- {{HTTPHeader("Cross-Origin-Resource-Policy")}}（CORP）
  - : 防止从其他域读取应用了此标头的资源的响应。
- {{HTTPHeader("Content-Security-Policy")}}（{{Glossary("CSP")}}）
  - : 控制允许用户代理能够为给定页面加载哪些资源。
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
  - : 允许 Web 开发人员通过监控而不是强制执行其效果来试验策略。这些由 {{Glossary("JSON")}} 文档组成的违规报告包含通过 HTTP `POST` 请求发送到指定的 URI。
- {{HTTPHeader("Expect-CT")}}
  - : 允许网站选择报告和/或执行证书透明度要求，这可以让你注意到该网站使用了欺诈性证书。当站点启用 Expect-CT 标头时，他们将请求 Chrome 检查该站点的任何证书是否出现在公共证书透明度日志中。
- {{HTTPHeader("Origin-Isolation")}} {{experimental_inline}}
  - : 提供一种允许 Web 应用程序隔离其来源的机制。
- {{HTTPHeader("Permissions-Policy")}}
  - : 提供一种机制来允许和拒绝在网站自己的框架和它嵌入的 {{htmlelement("iframe")}} 中使用浏览器特性。
- {{HTTPHeader("Strict-Transport-Security")}}（{{Glossary("HSTS")}}）
  - : 强制使用 HTTPS 而不是 HTTP 进行通信。
- {{HTTPHeader("Upgrade-Insecure-Requests")}}
  - : 向服务器发送一个信号，表达客户端对加密和身份验证响应的偏好，并且它可以成功处理 {{CSP("upgrade-insecure-requests")}} 指令。
- {{HTTPHeader("X-Content-Type-Options")}}
  - : 禁用 MIME 嗅探并强制浏览器使用 {{HTTPHeader("Content-Type")}} 中给出的类型。
- {{HTTPHeader("X-Download-Options")}}
  - : [`X-Download-Options`](<https://docs.microsoft.com/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj542450(v=vs.85)?#the-noopen-directive>) HTTP 标头指示浏览器（Internet Explorer）不应显示“打开”已从应用程序下载的文件的选项，以防止网络钓鱼攻击，否则该文件将获得在应用程序上下文中执行的权限。
- {{HTTPHeader("X-Frame-Options")}} (XFO)
  - : 指示是否应允许浏览器在 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}} 或 {{HTMLElement("object")}} 中呈现页面。
- {{HTTPHeader("X-Permitted-Cross-Domain-Policies")}}
  - : 指定是否允许跨域策略文件（`crossdomain.xml`)。该文件可能会定义一项策略，以授予客户端（例如 Adobe 的 Flash Player（现已过时）、Adobe Acrobat、Microsoft Silverlight（现已过时）或 Apache Flex）处理跨域数据的权限，否则这些客户端将因[同源（Same-Origin）策略](/zh-CN/docs/Web/Security/Same-origin_policy)而受到限制。有关详细信息，请参阅[跨域策略文件规范](https://www.adobe.com/devnet-docs/acrobatetk/tools/AppSec/CrossDomain_PolicyFile_Specification.pdf)。
- {{HTTPHeader("X-Powered-By")}}
  - : 可能由托管环境或其他框架设置，并包含有关它们的信息，但不会为应用程序或其访问者提供任何用处。取消设置此标头以避免暴露潜在的漏洞。
- {{HTTPHeader("X-XSS-Protection")}}
  - : 启用跨站点脚本过滤。

### fetch 元数据请求标头

{{Glossary("Fetch metadata request header", "fetch 元数据请求标头")}}提供有关发起请求的上下文的信息。这允许服务器根据请求的来源和资源将如何使用来决定是否允许请求。

- {{HTTPHeader("Sec-Fetch-Site")}}
  - : 它是一个请求标头，指示请求发起者的源与其目标源之间的关系。它是一个结构化标头（Structured Header），其值是一个标记，可能的值有 `cross-site`、`same-origin`、`same-site` 和 `none`。
- {{HTTPHeader("Sec-Fetch-Mode")}}
  - : 它是一个请求标头，向服务器指示请求的模式。它是一个结构化标头（Structured Header），其值是一个标记，可能的值有 `cors`、`navigate`、`no-cors`、`same-origin` 和 `websocket`。
- {{HTTPHeader("Sec-Fetch-User")}}
  - : 它是一个请求标头，指示导航请求是否由用户激活触发。它是一个结构化标头（Structured Header），其值为布尔值，因此可能的值为 `?0` 表示 false，`?1` 表示 true。
- {{HTTPHeader("Sec-Fetch-Dest")}}
  - : 它是一个请求标头，指示请求到服务器的目的地。它是一个结构化标头（Structured Header），其值为具有可能值的标记 `audio`、`audioworklet`、`document`、`embed`、`empty`、`font`、`image`、`manifest`、`object`、`paintworklet`、`report`、`script`、`serviceworker`、`sharedworker`、`style`、`track`、`video`、`worker` 和 `xslt`。
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}
  - : 在 service worker 启动期间以抢占式请求发送到 {{domxref("fetch()")}} 资源的请求标头。该值由 {{domxref("NavigationPreloadManager.setHeaderValue()")}} 设置，可用于通知服务器应返回与正常 `fetch()` 操作不同的资源。

## 服务器发送的事件

- {{HTTPHeader("Last-Event-ID")}}
  - : 待定
- {{HTTPHeader("NEL")}} {{experimental_inline}}
  - : 定义一种机制，使开发人员能够声明网络错误报告策略。
- {{HTTPHeader("Ping-From")}}
  - : 待定
- {{HTTPHeader("Ping-To")}}
  - : 待定
- {{HTTPHeader("Report-To")}}
  - : 用于指定浏览器向其发送警告和错误报告的服务器端点。

## 传输编码

- {{HTTPHeader("Transfer-Encoding")}}
  - : 指定用于将资源安全地传输给用户的编码形式。
- {{HTTPHeader("TE")}}
  - : 指定用户代理愿意接受的传输编码。
- {{HTTPHeader("Trailer")}}
  - : 允许发送方在分块消息的末尾包含其他字段。

## WebSocket

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : 待定
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : 待定
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : 待定
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : 待定
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : 待定

## 其他

- {{HTTPHeader("Accept-Push-Policy")}} {{experimental_inline}}
  - : 客户端可以通过在请求中发送 [`Accept-Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.1) 标头字段来表达请求的所需推送策略。
- {{HTTPHeader("Accept-Signature")}} {{experimental_inline}}
  - : 客户端可以发送 [`Accept-Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.7) 标头字段以指示利用任何可用的签名并指示其支持哪些签名类型。
- {{HTTPHeader("Alt-Svc")}}
  - : 用于列出到达此服务的替代方法。
- {{HTTPHeader("Date")}}
  - : 包含消息发出的日期和时间。
- {{HTTPHeader("Early-Data")}} {{experimental_inline}}
  - : 指示请求已在 TLS 早期数据中传送。
- {{HTTPHeader("Large-Allocation")}} {{deprecated_inline}}
  - : 告诉浏览器正在加载的页面将要执行大量分配。
- {{HTTPHeader("Link")}}
  - : [`Link`](https://datatracker.ietf.org/doc/html/rfc5988#section-5) 实体标头字段提供了一种在 HTTP 标头中序列化一个或多个链接的方法。它在语义上等同于 HTML 的 {{HTMLElement("link")}} 元素。
- {{HTTPHeader("Push-Policy")}} {{experimental_inline}}
  - : [`Push-Policy`](https://datatracker.ietf.org/doc/html/draft-ruellan-http-accept-push-policy-00#section-3.2) 定义了处理请求时服务器有关推送的行为。
- {{HTTPHeader("Retry-After")}}
  - : 指示用户代理在发出后续请求之前应等待多长时间。
- {{HTTPHeader("Signature")}} {{experimental_inline}}
  - : [`Signature`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.3.1) 标头字段传达交换的签名列表，每个签名都附有有关如何确定签名的权限和刷新该签名的信息。
- {{HTTPHeader("Signed-Headers")}} {{experimental_inline}}
  - : [`Signed-Headers`](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#rfc.section.5.1.2) 标头字段标识要包含在签名中的响应标头字段的有序列表。
- {{HTTPHeader("Server-Timing")}}
  - : 传达给定请求—响应周期的一个或多个指标和描述。
- {{HTTPHeader("Service-Worker-Allowed")}}
  - : 用于通过[在 Service Worker 脚本的响应中](https://w3c.github.io/ServiceWorker/#service-worker-script-response)包含此标头来删除[路径限制](https://w3c.github.io/ServiceWorker/#path-restriction)。
- {{HTTPHeader("SourceMap")}}
  - : 将生成的代码链接到[源映射](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)。
- {{HTTPHeader("Upgrade")}}
  - : Upgrade 标头字段的相关 RFC 文档是 [RFC 9110, section 7.8](https://httpwg.org/specs/rfc9110.html#field.upgrade)。该标准建立了当前客户端、服务器、传输协议连接上升级或更改为不同协议的规则。例如，此标头标准允许客户端从 HTTP 1.1 更改为 [WebSocket](/zh-CN/docs/Glossary/WebSockets)，假设服务器决定确认并实现升级标头字段。任何一方都不需要接受升级标头字段中指定的条款。它可以在客户端和服务器标头中使用。如果指定了 Upgrade 标头字段，那么发送方也必须发送带有指定升级选项的 Connection 标头字段。有关 Connection 标头字段的详细信息，[请参阅上述 RFC 的第 7.6.1 节](https://httpwg.org/specs/rfc9110.html#field.connection)。
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
  - : 控制 DNS 预取，浏览器通过该功能主动对用户可能选择访问的链接以及文档（document）引用的项目（包括图片、CSS、JavaScript 等）的 URL 执行域名解析。
- {{HTTPHeader("X-Firefox-Spdy")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 待定
- {{HTTPHeader("X-Pingback")}} {{non-standard_inline}}
  - : 待定
- {{HTTPHeader("X-Requested-With")}}
  - : 待定
- {{HTTPHeader("X-Robots-Tag")}}{{non-standard_inline}}
  - : [`X-Robots-Tag`](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag) HTTP 标头用于指示网页如何在公共搜索引擎结果中编入索引。标头实际上等同于 `<meta name="robots" content="...">`。
- {{HTTPHeader("X-UA-Compatible")}} {{non-standard_inline}}
  - : 由 Internet Explorer 用来指示要使用的文档模式。

## 贡献

你可以通过[编写新条目](/zh-CN/docs/MDN/Writing_guidelines/Howto/Document_an_HTTP_header)或改进现有条目来提供帮助。

## 参见

- [维基百科中的 HTTP 标头列表](https://zh.wikipedia.org/wiki/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5)
- [IANA 注册表](https://www.iana.org/assignments/message-headers/message-headers.xhtml#perm-headers)
- [HTTP 工作组](https://httpwg.org/specs/)
