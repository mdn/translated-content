---
title: Web 安全
slug: Web/Security
---

确保你的 Web 站点或 Web 应用安全是十分重要的，即使是代码中很小的 bug 也可能导致隐私信息被泄露，黑客会尝试偷窃数据。这些文档提供信息帮助您使代码更安全。此处列出的面向 Web 安全的文章提供的信息可以帮助你保护站点及其代码免受攻击和数据窃取。

## 内容安全

- [CSP (内容安全策略)](/zh-CN/docs/Web/Security/CSP)
  - : **内容安全策略**（{{Glossary("CSP")}}）通过探测和减轻包括跨站脚本攻击 {{Glossary("XSS")}} 和数据注入攻击的攻击手段，更进一步提升安全性。上述攻击手段可以使用在数据窃取、网站污损、亦或是恶意软件的分发等场景中。

## 连接安全

- [传输层安全（TLS）](/zh-CN/docs/Web/Security/Transport_Layer_Security)
  - : 传输层安全（{{Glossary("TLS")}}）协议是在两个互联的应用或设备上稳定且私密地交换信息的标准。使用 TLS 的应用可以选择对数据安全性和可靠性有保障的安全参数。这篇文章提供了 TLS 的概述，以及在保护你的内容时需要做出的选择。
- HTTPS
  - : **HTTPS**（**_超文本传输协议安全_**）是 {{Glossary("HTTP")}} 协议的加密版本，它使用 {{Glossary("SSL")}} 或 {{Glossary("TLS")}} 协议来对客户端和服务器之间的所有通信进行加密。所建立的安全连接使得客户端可以确认所连接的服务器，并且可以交换敏感数据。
- [HTTP Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security:` [HTTP](/zh-CN/docs/Web/HTTP) 标头可以让网站指定其只能通过 HTTPS 访问。
- [证书透明度](/zh-CN/docs/Web/Security/Certificate_Transparency)
  - : **证书透明度**是一个开放的框架，旨在防止和监测证书的误发。新颁发的证书被记录到公开运行的、通常是独立的 CT 日志中，这些日志保持着一个仅有附录的、有密码学保证的 TLS 证书的记录。
- [混合内容](/zh-CN/docs/Web/Security/Mixed_content)
  - : 如果一个 HTTPS 页面包含明文 HTTP 获取的内容，那么该页面就被称为**混合内容**页面。像这样的页面只能保证部分内容加密，未加密的部分仍然可以被嗅探器和中间人攻击者感知。
- [如何修复含有混合内容的网站](/zh-CN/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : 如果你的网站传送了 HTTPS 页面，所有使用 HTTP 传送的[活跃混合内容](/zh-CN/docs/Web/Security/Mixed_content#mixed_active_content)默认会被阻止。因而，你的网站可能会对客户不可用（例如 iframe 或插件不加载）。[被动的混合内容](/zh-CN/docs/Web/Security/Mixed_content#mixed_passivedisplay_content)默认是显示状态，但用户也可以通过首选设置来阻止这种类型的内容。这个页面解释了作为 web 开发人员需要注意的事情。
- [安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)
  - : 一个**安全的上下文**是一个 `Window` 或 `Worker`，对于它来说，有理由相信内容已经安全地通过 HTTPS/TLS 交付，并且与**不**安全的上下文进行通信的可能性有限。许多 Web API 和功能只能在安全上下文中访问。安全上下文的主要目标是防止[中间人攻击者](https://zh.wikipedia.org/wiki/中间人攻击)访问强大的 API，从而进一步损害攻击受害者。
- [限制在安全上下文中的特性](/zh-CN/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
  - : 该参考列出了仅在安全上下文中可用的 web 平台特性。
- [弱签名算法](/zh-CN/docs/Web/Security/Weak_Signature_Algorithm)
  - : 用于{{Glossary("digital certificate","数字证书")}}{{Glossary("Signature/Security", "签名")}}的摘要算法是保证证书安全性的关键因素。这篇文章提供了一些有关已知的弱签名算法信息，在使用的时候可以避免它们。
- 301 和 302 响应码跳转
  - : 待补充

## 数据安全

- [使用 HTTP Cookies](/zh-CN/docs/Web/HTTP/Cookies)
  - : _HTTP cookie_（web cookie，浏览器 cookie）是服务器发送给客户端 web 浏览器的一小块数据。浏览器可能会存储它，并在后续对同一服务器的请求中将它发送回服务器。例如，通常这可以说明两个请求来自同一个浏览器，从而让用户保持登录状态。
- [Local storage](/zh-CN/docs/Web/API/Window/localStorage)
  - : `Window` 对象的 {{domxref("Window.localStorage")}} 属性是一种服务器在客户端上存储持久性数据的方法，数据可以在不同的会话中持久访问。

## 信息泄露

- [Referer 标头策略：隐私和安全性考虑](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
  - : 有一些与 [Referer HTTP 标头](/zh-CN/docs/Web/HTTP/Headers/Referer)相关的隐私和安全风险。这篇文章描述了它们，并提供避免这些风险的建议。
- Robots.txt
  - : 待补充
- Site maps
  - : 待补充

## 完整性

- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
  - : **同源策略**限制了一个{{Glossary("origin","源")}}中加载的文档或脚本与其他源中的资源交互的方式。这是一种用来隔离潜在恶意文档的关键安全机制。
- [子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)
  - : **子资源完整性**（SRI）是一种安全功能，允许浏览器验证所获取的文件（比如，从一个{{Glossary("CDN","内容分发网络")}}中）没有遭受恶意修改。它的工作原理是允许你提供一个加密哈希值，目标文件必须匹配这个值。
- [HTTP Access-Control-Allow-Origin](/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : **`Access-Control-Allow-Origin`** 响应头表明响应是否可以与来自给定{{glossary("origin","来源")}}的请求代码共享。
- [HTTP X-Content-Type-Options](/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : **`X-Content-Type-Options`** 响应的 HTTP 头是一个标记，由服务器用来表示应该遵循 {{HTTPHeader("Content-Type")}} 头中宣告的 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)，不应该被改变。这是一种选择退出 [MIME 类型嗅探](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)的方法，或者换句话说，MIME 类型是故意配置的。

## 点击劫持保护

[点击劫持](/zh-CN/docs/Glossary/Clickjacking)描述了用户被愚弄，点击了一个产生用户意料之外行为的 UI 元素的现象。

- [HTTP X-Frame-Options](/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options)
  - : **`X-Frame-Options`** [HTTP](/zh-CN/docs/Web/HTTP) 响应头可以用来表明是否应该允许浏览器在 [`<frame>`](/zh-CN/docs/Web/HTML/Element/frame)、[`<iframe>`](/zh-CN/docs/Web/HTML/Element/iframe)、[`<embed>`](/zh-CN/docs/Web/HTML/Element/embed) 或 [`<object>`](/zh-CN/docs/Web/HTML/Element/object) 中渲染页面。网站通过这些方法，保证它们的内容不被轻易嵌入至其他站点，可以避免[点击劫持](/zh-CN/docs/Glossary/Clickjacking)攻击。
- [CSP: frame-ancestors](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP）的 **`frame-ancestors`** 指令指定了使用 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或{{HTMLElement("embed")}} 元素嵌入页面的合法父元素。

## 用户信息安全

- [不安全的密码](/zh-CN/docs/Web/Security/Insecure_passwords)
  - : 通过 HTTP 提供登录表格是特别危险的，因为有各种各样的攻击可以用来提取用户的密码。网络窃听者可以通过嗅探网络，或通过修改传输中的服务页面来窃取用户的密码。
- [隐私性和 :visited 选择器](/zh-CN/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : 在大约 2010 年之前，[CSS](/zh-CN/docs/Web/CSS) {{cssxref(":visited")}} 选择器允许网站获取用户的浏览历史，弄清用户访问过哪些网站。为了缓解这个问题，浏览器已经限制了从访问过的链接中获得的信息量。

## 与安全相关的术语

- {{Glossary("Block cipher mode of operation")}}
- {{Glossary("Certificate authority","认证机构")}}
- {{Glossary("challenge", "挑战—响应认证")}}
- {{Glossary("Cipher","密码")}}
- {{Glossary("Cipher suite","密码套件")}}
- {{Glossary("Ciphertext","密文")}}
- {{Glossary("Clickjacking")}}
- {{Glossary("CORS","跨源资源共享")}}
- {{Glossary("CORS-safelisted request header")}}
- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Cross-site scripting","跨站脚本攻击")}}
- {{Glossary("Cryptanalysis","密码分析学")}}
- {{Glossary("Cryptographic hash function")}}
- {{Glossary("Cryptography","密码学")}}
- {{Glossary("CSP","内容安全策略")}}
- {{Glossary("CSRF","跨站请求伪造")}}
- {{Glossary("Decryption","解密")}}
- {{Glossary("Digital certificate","数字证书")}}
- {{Glossary("DTLS")}}
- {{Glossary("Encryption","加密")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Forbidden response header name")}}
- {{Glossary("Hash")}}
- {{Glossary("HMAC")}}
- {{Glossary("HPKP")}}
- {{Glossary("HSTS")}}
- {{Glossary("HTTPS")}}
- {{Glossary("Key","密钥")}}
- {{Glossary("MitM","中间人攻击")}}
- {{Glossary("OWASP")}}
- {{Glossary("Preflight request","预检请求")}}
- {{Glossary("Public-key cryptography","非对称密钥算法")}}
- {{Glossary("Reporting directive")}}
- {{Glossary("Robots.txt")}}
- {{Glossary("Same-origin policy","同源策略")}}
- {{Glossary("Session hijacking","会话劫持")}}
- {{Glossary("SQL injection","SQL 注入")}}
- {{Glossary("Symmetric-key cryptography","对称密钥算法")}}
- {{Glossary("TOFU")}}
- {{Glossary("TLS")}}

## 参见

- [Mozilla 安全博客](https://blog.mozilla.org/security/)
- [Twitter 上的 @mozsec 账号](https://twitter.com/mozsec)

{{QuickLinksWithSubpages}}
