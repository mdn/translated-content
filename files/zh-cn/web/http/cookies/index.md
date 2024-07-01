---
title: HTTP Cookie
slug: Web/HTTP/Cookies
---

{{HTTPSidebar}}

HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器——如保持用户的登录状态。Cookie 使基于[无状态](/zh-CN/docs/Web/HTTP/Overview#http_是无状态，有会话的)的 HTTP 协议记录稳定的状态信息成为了可能。

Cookie 主要用于以下三个方面：

- 会话状态管理
  - : 如用户登录状态、购物车、游戏分数或其他需要记录的信息
- 个性化设置
  - : 如用户自定义设置、主题和其他设置
- 浏览器行为跟踪
  - : 如跟踪分析用户行为等

Cookie 曾一度用于客户端数据的存储，因当时并没有其他合适的存储办法而作为唯一的存储手段，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 [Web storage API](/zh-CN/docs/Web/API/Web_Storage_API)（`localStorage` 和 `sessionStorage`）或 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 。

> **备注：** 要查看 Cookie 存储（或网页上能够使用其他的存储方式），你可以在开发者工具中启用存储查看器（[Storage Inspector](/zh-CN/docs/Tools/Storage_Inspector)）功能，并在存储树上选中 Cookie。

## 创建 Cookie

服务器收到 HTTP 请求后，服务器可以在响应标头里面添加一个或多个 {{HTTPHeader("Set-Cookie")}} 选项。浏览器收到响应后通常会保存下 Cookie，并将其放在 HTTP {{HTTPHeader("Cookie")}} 标头内，向同一服务器发出请求时一起发送。你可以指定一个过期日期或者时间段之后，不能发送 cookie。你也可以对指定的域和路径设置额外的限制，以限制 cookie 发送的位置。关于下面提到的头部属性的详细信息，请参考 {{HTTPHeader("Set-Cookie")}} 文章。

### `Set-Cookie` 和 `Cookie` 标头

服务器使用 {{HTTPHeader("Set-Cookie")}} 响应头部向用户代理（一般是浏览器）发送 Cookie 信息。一个简单的 Cookie 可能像这样：

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

这指示服务器发送标头告知客户端存储一对 cookie：

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[页面内容]
```

现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 {{HTTPHeader("Cookie")}} 请求头部再发送给服务器。

```http
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

> **备注：** 如何在以下几种服务端程序中设置 `Set-Cookie` 响应头信息：
>
> - [PHP](https://secure.php.net/manual/en/function.setcookie.php)
> - [Node.JS](https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_response_setheader_name_value)
> - [Python](https://docs.python.org/3/library/http.cookies.html)
> - [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html)

### 定义 Cookie 的生命周期

Cookie 的生命周期可以通过两种方式定义：

- _会话期_ Cookie 会在当前的会话结束之后删除。浏览器定义了“当前会话”结束的时间，一些浏览器重启时会使用*会话恢复*。这可能导致会话 cookie 无限延长。
- _持久性_ Cookie 在过期时间（`Expires`）指定的日期或有效期（`Max-Age`）指定的一段时间后被删除。

例如：

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

> **备注：** 当 Cookie 的过期时间（ `Expires`）被设定时，设定的日期和时间只与客户端相关，而不是服务端。

如果你的站点对用户进行身份验证，则每当用户进行身份验证时，它都应重新生成并重新发送会话 Cookie，甚至是已经存在的会话 Cookie。此技术有助于防止[会话固定攻击（session fixation attacks）](/zh-CN/docs/Web/Security/Types_of_attacks#Session_fixation)，在该攻击中第三方可以重用用户的会话。

### 限制访问 Cookie

有两种方法可以确保 `Cookie` 被安全发送，并且不会被意外的参与者或脚本访问：`Secure` 属性和 `HttpOnly` 属性。

标记为 `Secure` 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端。它永远不会使用不安全的 HTTP 发送（本地主机除外），这意味着{{Glossary("MitM", "中间人")}}攻击者无法轻松访问它。不安全的站点（在 URL 中带有 `http:`）无法使用 `Secure` 属性设置 cookie。但是，`Secure` 不会阻止对 cookie 中敏感信息的访问。例如，有权访问客户端硬盘（或，如果未设置 `HttpOnly` 属性，则为 JavaScript）的人可以读取和修改它。

JavaScript {{domxref("Document.cookie")}} API 无法访问带有 `HttpOnly` 属性的 cookie；此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 `HttpOnly` 属性。此预防措施有助于缓解[跨站点脚本（XSS）](/zh-CN/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)攻击。

示例：

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### 定义 Cookie 发送的位置

`Domain` 和 `Path` 标识定义了 Cookie 的*作用域*：即允许 Cookie 应该发送给哪些 URL。

#### Domain 属性

`Domain` 指定了哪些主机可以接受 Cookie。如果不指定，该属性默认为同一 {{Glossary("host")}} 设置 cookie，_不包含子域名_。如果指定了 `Domain`，则一般包含子域名。因此，指定 `Domain` 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。

例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如 `developer.mozilla.org`）。

#### Path 属性

`Path` 属性指定了一个 URL 路径，该 URL 路径必须存在于请求的 URL 中，以便发送 `Cookie` 标头。以字符 `%x2F` (“/”) 作为路径分隔符，并且子路径也会被匹配。

例如，设置 `Path=/docs`，则以下地址都会匹配：

- `/docs`
- `/docs/`
- `/docs/Web/`
- `/docs/Web/HTTP`

但是这些请求路径不会匹配以下地址：

- `/`
- `/docsets`
- `/fr/docs`

#### SameSite 属性

[`SameSite`](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) 属性允许服务器指定是否/何时通过跨站点请求发送（其中{{Glossary("Site","站点")}}由注册的域和*方案*定义：http 或 https）。这提供了一些针对跨站点请求伪造攻击（{{Glossary("CSRF")}}）的保护。它采用三个可能的值：`Strict`、`Lax` 和 `None`。

使用 `Strict`，cookie 仅发送到它来源的站点。`Lax` 与 Strict 相似，只是在用户*导航*到 cookie 的源站点时发送 cookie。例如，通过跟踪来自外部站点的链接。`None` 指定浏览器会在同站请求和跨站请求下继续发送 cookie，但*仅在安全的上下文中*（即，如果 `SameSite=None`，且还必须设置 `Secure` 属性）。如果没有设置 `SameSite` 属性，则将 cookie 视为 `Lax`。

下面是例子：

```http
Set-Cookie: mykey=myvalue; SameSite=Strict
```

> **备注：** 与 `SameSite` 相关的标准最近发生了变化（MDN 记录了上面的新行为）。有关在特定浏览器版本中如何处理属性的信息，请参阅 cookie [浏览器兼容性](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#浏览器兼容性)表：
>
> - 如果 `SameSite` 未指定，则 `SameSite=Lax` 时新的默认值。以前，默认情况下会为有请求发送 cookie。
> - `SameSite=None` 的 cookie 还必须指定 `Secure` 属性（它们需要安全上下文）。
> - cookie 使用不同的方案（`http:` 或 `https:`）发送来自同一域的 cookie，则不再视为来自同一站点。

#### Cookie 前缀

cookie 的机制使得服务器无法确认 cookie 是在安全来源上设置的，甚至无法确定 cookie 最初是在哪里设置的。

子域上的易受攻击的应用程序可以使用 `Domain` 属性设置 cookie，从而可以访问所有其他子域上的该 cookie。*会话劫持*攻击中可能会滥用此机制。有关主要缓解方法，请参阅[会话劫持（session fixation）](/zh-CN/docs/Web/Security/Types_of_attacks#Session_fixation)。

但是，作为[深度防御措施](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>)，可以使用 *cookie 前缀*来断言有关 cookie 的特定事实。有两个前缀可用：

- `__Host-`
  - : 如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记、从安全来源发送、不包括 `Domain` 属性，并将 `Path` 属性设置为 `/` 时，它才在 {{HTTPHeader("Set-Cookie")}} 标头中接受。这样，这些 cookie 可以被视为“domain-locked”。
- `__Secure-`
  - : 如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记，是从安全来源发送的，它才在 {{HTTPHeader("Set-Cookie")}} 标头中接受。该前缀限制要弱于 `__Host-` 前缀。

带有这些前缀的 Cookie，如果不符合其限制的会被浏览器拒绝。请注意，这确保了如果子域要创建带有前缀的 cookie，那么它将要么局限于该子域，要么被完全忽略。由于应用服务器仅在确定用户是否已通过身份验证或 CSRF 令牌正确时才检查特定的 cookie 名称，因此，这有效地充当了针对会话劫持的防御措施。

> **备注：** 在应用程序服务器上，Web 应用程序**必须**检查完整的 cookie 名称。用户代理程序在将其发送到请求的 {{HTTPHeader("Cookie")}} 标头之前，**不会**从 cookie 中剥离前缀。

有关 cookie 前缀和浏览器支持的当前状态的更多信息，请参阅[Set-Cookie 参考文章的前缀部分](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#Cookie_前缀)。

#### JavaScript 通过 Document.cookie 访问 Cookie

通过 {{domxref("Document.cookie")}} 属性可创建新的 Cookie。如果未设置 `HttpOnly` 标记，你也可以从 JavaScript 访问现有的 Cookie。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

通过 JavaScript 创建的 Cookie 不能包含 `HttpOnly` 标志。

请留意在[安全](#安全)章节提到的安全隐患问题，JavaScript 可以通过跨站脚本攻击（XSS）的方式来窃取 Cookie。

## 安全

> **备注：** 当你存储信息到 Cookie 中时，需要明白 cookie 的值是可以被访问，且可以被终端用户所修改的。根据应用程序的不同，可能需要使用服务器查找的不透明标识符，或者研究诸如 JSON Web Tokens 之类的替代身份验证/机密机制。当机器处于不安全环境时，切记*不能*通过 HTTP Cookie 存储、传输敏感信息。

缓解涉及 Cookie 的攻击的方法：

- 使用 `HttpOnly` 属性可防止通过 JavaScript 访问 cookie 值。
- 用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 `SameSite` 属性设置为 `Strict` 或 `Lax`。（请参见上方的 [SameSite 属性](#samesite_属性)。）在[支持 SameSite 的浏览器](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#Browser_compatibility)中，这样做的作用是确保不与跨站点请求一起发送身份验证 cookie。因此，这种请求实际上不会向应用服务器进行身份验证。

## 跟踪和隐私

### 第三方 Cookie

Cookie 与特定域和方案（例如，`http` 或 `https`）相关联，如果设置了 {{HTTPHeader("Set-Cookie")}} `Domain` 属性，也可能与子域相关联。如果该 cookie 域和方案匹配当前的页面，则认为该 cookie 和该页面来自同一站点，则称为*第一方 cookie（first-party cookie）*。

如果域和方案不同，则它不认为来自同一个站点，被称为*第三方 cookie（third-party cookie）*。虽然托管网页的服务器设置第一方 Cookie 时，但该页面可能包含存储在其他域中的服务器上的图像或其他组件（例如，广告横幅），这些图像或其他组件可能会设置第三方 Cookie。这些主要用于在网络上进行广告和跟踪。例如，[谷歌使用的 cookie 类型](https://policies.google.com/technologies/types)。

第三方服务器可以基于同一浏览器在访问多个站点时发送给它的 cookie 来建立用户浏览历史和习惯的配置文件。Firefox 默认情况下会阻止已知包含跟踪器的第三方 cookie。第三方 cookie（或仅跟踪 cookie）也可能被其他浏览器设置或扩展程序阻止。阻止 Cookie 会导致某些第三方组件（例如社交媒体窗口小部件）无法正常运行。

> **备注：** 服务器可以（并且应该）设置 cookie [SameSite 属性](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)以指定是否可以将 cookie 发送到第三方站点。

### Cookie 相关规定

涉及使用 Cookie 的法律或法规包括：

- 欧盟通用数据隐私法规（GDPR）
- 欧盟的电子隐私权指令
- 加州消费者隐私法

这些规定具有全球影响力。它们适用于这些司法管辖区的用户访问的万维网上的任何站点（欧盟和加利福尼亚，但请注意，加利福尼亚州的法律仅适用于总收入超过 2500 万美元的实体）。

这些法规包括以下要求：

- 向用户表明你的站点使用 cookie。
- 允许用户选择不接收某些或所有 cookie。
- 允许用户在不接收 Cookie 的情况下使用大部分服务。

可能还存在其他法规来管理你当地的 Cookie。你有责任了解并遵守这些规定。有些公司提供“cookie banner”代码，可帮助你遵守这些法规。

## 在浏览器中存储信息的其他方式

在浏览器中存储数据的另一种方法是 [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)。[window.sessionStorage](/zh-CN/docs/Web/API/Window/sessionStorage) 和 [window.localStorage](/zh-CN/docs/Web/API/Window/localStorage) 属性与持续时间中的会话和永久 cookie 相对应，但是存储限制比 cookie 大，并且永远不会发送到服务器。可以使用 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 或基于它构建的库来存储更多结构化的数据。

有一些技术旨在在 cookie 被删除后重新创建它们。这些被称为“僵尸”cookie。这些技术违反了用户的隐私和用户控制原则，可能违反数据隐私法规，并可能使使用它们的网站承担法律责任。

## 参见

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [SameSite cookie](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)
- [使用 Storage Inspector 检查 cookie](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html)
- [Cookie 规范：RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
- [Cookies, the GDPR, and the ePrivacy Directive](https://gdpr.eu/cookies/)
