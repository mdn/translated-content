---
title: Web 安全
short-title: 安全
slug: Web/Security
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

网站包含多种不同类型的信息。有些是非敏感信息，例如公共页面上显示的副本。有些是敏感信息，如客户用户名、密码和银行信息，或内部算法和私人产品信息。

敏感信息需要保护，这也是 Web 安全的重点。如果这些信息落入不法分子之手，就可能被用来：

- 与竞争对手共享信息，使公司在竞争中处于不利地位。
- 禁用或劫持公司服务，再次给公司运营带来严重问题。
- 将客户的[隐私](/zh-CN/docs/Web/Privacy)置于风险之中，使他们容易受到特征描述、目标锁定、数据丢失、身份盗窃甚至经济损失的影响。

现代浏览器已具备多种特性来保护用户的 Web 安全，但开发人员也需要使用最佳实践并谨慎编写代码，以确保网站安全。即使代码中存在简单的错误，也可能导致漏洞被坏人利用，从而窃取数据并在未经授权的情况下控制服务。

本文介绍了 Web 安全，包括帮助你了解网站漏洞的概念信息和如何确保网站安全的实用指南。

## 安全和隐私的关系

安全和隐私是两个截然不同但又密切相关的主题。值得了解的是两者之间的区别以及它们之间的关系。

- **安全**是保护私人数据和系统免遭未经授权访问的行为。这既包括公司（内部）数据，也包括用户和合作伙伴（外部）数据。

- **隐私**是指让用户控制其数据的收集、存储和使用方式，同时确保数据不会被不负责任地使用。例如，你应该让用户知道你要从他们那里收集哪些数据，将与哪些方面共享这些数据，以及将如何使用这些数据。用户必须有机会同意你的隐私政策，可以访问你存储的数据，如果他们选择删除，也可以删除。

良好的隐私保护离不开良好的安全性。你可以遵循我们的 [Web 隐私](/zh-CN/docs/Web/Privacy)指南中列出的所有建议，但如果你的网站不安全，攻击者无论如何都能窃取数据，那么诚信行事和制定健全的隐私政策都是徒劳的。

## 浏览器提供的安全特性

Web 浏览器遵循严格的安全模式，对内容、浏览器与服务器之间的连接以及数据传输实施严格的安全保护。本节将介绍支撑这一模式的特性。

### 同源策略和 CORS

[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)是 Web 的一种基本安全机制，它限制从一个{{Glossary("origin", "源")}}加载的文档或脚本如何与另一个源的资源交互。它有助于隔离潜在的恶意文档，减少可能的攻击载体。

一般来说，来自一个源的文档不能向其他源发出请求。这样做是有道理的，因为你不希望网站之间相互干扰并访问未经授权的数据。

不过，在某些情况下，你可能希望放宽这一限制；例如，如果你有多个相互交互的网站，可以允许它们使用 [`fetch()`](/zh-CN/docs/Web/API/Window/fetch) 相互请求资源。可以使用[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)来允许这样做，这是一种基于 HTTP 标头信息的机制，允许服务器指出浏览器应允许从其加载资源的任何其他源（域、方案或端口）。

### HTTP 通信模型

Web 浏览器和服务器使用 [HTTP](/zh-CN/docs/Web/HTTP) 协议相互通信、请求资源、提供响应（例如，提供请求的资源或详细说明请求失败的原因），并为通信提供安全特性。

传输层安全（TLS）通过在网络传输过程中对数据进行加密来提供安全和隐私保护，是 [HTTPS](/zh-CN/docs/Glossary/HTTPS) 协议背后的技术。TLS 有助于保护隐私，因为它能阻止第三方截获传输数据并恶意使用。

所有浏览器都在逐步要求默认使用 HTTPS；实际上已经是这样了，因为没有这个协议，你就无法在网上做很多事情。

相关主题：

- [传输层安全](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security)（TLS）
  - : TLS 协议是使两个联网应用程序或设备能够私密、稳健地交换信息的标准。使用 TLS 的应用程序可以选择自己的安全参数，这些参数会对数据的安全性和可靠性产生重大影响。
- [HTTP Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security` [HTTP](/zh-CN/docs/Web/HTTP) 标头可以让网站指定其只能通过 HTTPS 访问。
- [证书透明度](/zh-CN/docs/Web/Security/Defenses/Certificate_Transparency)
  - : 证书透明度（CT）是一个开放的框架，旨在防止和监测证书的误发。新颁发的证书被记录到公开运行的、通常是独立的 CT 日志中，这些日志保持着一个仅有附录的、有密码学保证的 TLS 证书的记录。
- [混合内容](/zh-CN/docs/Web/Security/Defenses/Mixed_content)
  - : 如果一个 HTTPS 页面包含明文 HTTP 获取的内容，那么该页面就被称为**混合内容**页面。像这样的页面只能保证部分内容加密，未加密的部分仍然可以被嗅探器和中间人攻击者感知。

### 安全上下文和权限特性

浏览器以不同方式控制“强大特性”的使用。这些“强大特性”包括在网站上生成系统通知、使用用户的网络摄像头访问媒体流、操纵系统 GPU 以及使用网络支付。如果网站可以不受限制地使用控制这些功能的 API，那么恶意开发者就可以尝试做以下事情：

- 用不需要的通知和其他用户界面功能烦扰用户。
- 在没有警告的情况下打开网络摄像头，监视用户。
- 堵塞浏览器/系统，制造{{glossary("denial of service", "拒绝服务")}}（DoS）攻击。
- 窃取数据或金钱。

这些“强大特性”通过以下方法控制：

- 仅允许在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中使用此类特性。安全上下文是 {{domxref("Window", "window")}} 或 {{domxref("WorkerGlobalScope", "worker")}}，有理由相信其内容已通过 HTTPS/TLS 安全交付。在安全上下文中，与**不**安全的上下文进行通信的可能性是有限的。安全上下文还有助于防止[中间人攻击者](https://zh.wikipedia.org/wiki/中间人攻击)访问强大的功能。

  要查看仅在安全上下文中可用的 Web 平台特性列表，请参阅[限制在安全上下文中使用的特性](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)。

- 这些功能的使用受到用户权限系统的限制：用户必须明确选择提供对这些功能的访问权限，这意味着它们不能自动使用。用户权限请求是自动进行的，可以使用[权限 API](/zh-CN/docs/Web/API/Permissions_API) 来查询 API 权限的状态。

- 其他一些浏览器功能只能在响应用户操作（如点击按钮）时使用，这意味着需要在适当的事件处理程序中调用这些功能。这被称为**瞬态激活**。更多信息请参阅[用户激活特性](/zh-CN/docs/Web/Security/Defenses/User_activation)。

## 更高层次的安全考虑

网络安全需要考虑服务器端和客户端的许多方面。本节主要介绍客户端的安全注意事项。你可以在[网站安全](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)（我们的[服务器端网站编程](/zh-CN/docs/Learn_web_development/Extensions/Server-side)学习模块的一部分）中找到从服务器端角度出发的安全概要，其中还包括需要注意的常见攻击的说明。

### 负责地存储客户端数据

负责任地处理数据主要涉及减少[第三方 cookie](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies) 的使用，并谨慎对待你存储和与他们共享的数据。传统上，Web 开发人员使用 cookie 来存储各种数据，攻击者很容易利用这种倾向。因此，浏览器已经开始限制跨站 cookie 的使用，目的是在将来完全取消对它们的访问。

你应该通过限制你所依赖的跟踪活动的数量和/或通过以其他方式实现所需信息的持久性，为移除跨站 Cookie 做好准备。更多信息，请参阅[从第三方 cookie 过渡](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies#transitioning_from_third-party_cookies)和[替换第三方 cookie](/zh-CN/docs/Web/Privacy/Guides/Third-party_cookies#replacing_third-party_cookies)。

### 保护用户身份和管理登录

在实施涉及数据收集的安全解决方案时，尤其是在数据敏感（如登录凭证）的情况下，使用信誉良好的解决方案是有意义的。例如，任何值得信赖的服务器端框架都会有内置功能来防止常见的漏洞。还可以考虑使用专门的产品来实现你的目的，例如身份提供商解决方案或安全在线调查提供商。

如果你想自己开发收集用户数据的解决方案，请确保你了解所有方面和要求。聘请经验丰富的服务器端开发人员和/或安全工程师来实施系统，并确保对系统进行全面测试。使用多因素身份验证（MFA）提供更好的保护。考虑使用专用 API，如 [Web 认证](/zh-CN/docs/Web/API/Web_Authentication_API)或[联合凭证管理](/zh-CN/docs/Web/API/FedCM_API)来简化应用程序的客户端。

以下是提供安全登录的一些其他提示：

- 在收集用户登录信息时，使用强密码，这样用户的账户信息就不会轻易被猜到。密码薄弱是造成安全漏洞的主要原因之一。此外，鼓励用户使用密码管理器，这样他们就可以使用更复杂的密码，不必担心记忆密码的问题，也不会因为写下密码而带来安全风险。参见我们关于[密码身份验证](/zh-CN/docs/Web/Security/Authentication/Passwords)的文章。
- 还应向用户宣传有关**网络钓鱼**的知识。网络钓鱼是指向用户发送信息（例如电子邮件或短信），其中包含一个网站链接，该网站看起来像用户日常使用的网站，但实际上并非如此。链接附带的信息旨在诱骗用户在网站上输入用户名和密码，从而盗取用户名和密码，然后被攻击者用于恶意目的。

  > [!NOTE]
  > 有些钓鱼网站可能非常复杂，很难与真实网站区分开来。因此，应教育用户不要轻信电子邮件和短信中的随机链接。如果用户收到类似“紧急情况，需要立即登录以解决问题”的信息，他们应该直接在新标签页中访问该网站，并尝试直接登录，而不是点击信息中的链接。或者，他们可以给你打电话或发电子邮件，讨论他们收到的信息。

- 利用{{glossary("rate limit", "速率限制")}}、一定次数的不成功尝试后的账户锁定以及 [CAPTCHA 质询](https://zh.wikipedia.org/wiki/验证码)，防范登录页面上的暴力攻击。
- 使用唯一的[会话 ID](https://en.wikipedia.org/wiki/Session_ID)管理用户登录会话，并在用户闲置一段时间后自动注销。

### 不要在 URL 查询字符串中包含敏感数据

一般来说，不应该[在 URL 查询字符串中包含敏感数据](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url)，因为如果第三方拦截了 URL（例如通过 {{httpheader("Referer")}} HTTP 标头），他们就可能窃取这些信息。更严重的是，这些 URL 可能会被公共网络爬虫、HTTP 代理和归档工具（如[互联网档案](https://web.archive.org/)）编入索引，这意味着你的敏感数据可能会持续存在于可公开访问的资源中。

使用 `POST` 请求而非 `GET` 请求可避免这些问题。我们的文章 [Referer 标头策略：隐私和安全考虑](/zh-CN/docs/Web/Security/Referer_header:_privacy_and_security_concerns)更详细地描述了与 `Referer` 标头相关的隐私和安全风险，并提供了降低这些风险的建议。

> [!NOTE]
> 避免通过 `GET` 请求在 URL 中传输敏感数据，也有助于防范{{glossary("CSRF", "跨站伪造")}}和[重放攻击](https://zh.wikipedia.org/wiki/重放攻击)。

### 执行使用策略

考虑使用[内容安全策略](/zh-CN/docs/Web/HTTP/Guides/CSP)（CSP）和[权限策略](/zh-CN/docs/Web/HTTP/Guides/Permissions_Policy)等 Web 平台特性，在网站上强制执行一套功能和资源使用规则，使漏洞更难引入。

CSP 允许你添加一层安全保护，例如，只允许从特定的可信来源加载图片或脚本。这有助于检测和减轻某些类型的攻击，包括跨站脚本攻击（{{Glossary("Cross-site_scripting", "XSS"}}）和数据注入攻击。这些攻击涉及一系列恶意活动，包括数据窃取、网站篡改和恶意软件传播。

权限策略的工作方式与此类似，只是它更关注允许或阻止对特定“强大特性”的访问（[如前所述](#安全上下文和权限特性)）。

> [!NOTE]
> 此类策略对于确保网站安全非常有用，尤其是在网站使用大量第三方代码的情况下。不过，请记住，如果阻止使用第三方脚本赖以运行的特性，最终可能会破坏网站的功能。

### 保持数据完整性

承接上一节的内容，在允许网站使用功能和资源时，应尽量确保资源未被篡改。

相关主题：

- [子资源完整性](/zh-CN/docs/Web/Security/Defenses/Subresource_Integrity)
  - : **子资源完整性**（SRI）是一种安全功能，允许浏览器验证所获取的文件（比如，从一个{{Glossary("CDN","内容分发网络")}}中）没有遭受恶意修改。它的工作原理是允许你提供一个密码散列值，目标文件必须匹配这个值。
- [HTTP Access-Control-Allow-Origin](/zh-CN/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
  - : **`Access-Control-Allow-Origin`** 响应标头表明响应是否可以与来自给定{{glossary("origin","来源")}}的请求代码共享。
- [HTTP X-Content-Type-Options](/zh-CN/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)
  - : **`X-Content-Type-Options`** 响应标头是一个标记，由服务器用来表示应该遵循 {{HTTPHeader("Content-Type")}} 标头中宣告的 [MIME 类型](/zh-CN/docs/Web/HTTP/Guides/MIME_types)，不应该被改变。这是一种选择退出 [MIME 类型嗅探](/zh-CN/docs/Web/HTTP/Guides/MIME_types#mime_嗅探)的方法，或者换句话说，MIME 类型是故意配置的。

### 净化表单输入

一般来说，不要相信用户在表单中输入的任何内容。在线填写表单既复杂又繁琐，用户很容易输入错误的数据或格式错误的数据。此外，恶意用户擅长在表单字段中输入特定的可执行代码字符串（如 SQL 或 JavaScript）。如果你不小心处理这些输入，他们可能会在你的网站上执行有害代码或删除你的数据库。请参阅 [SQL 注入](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security#sql_注入)以了解如何发生这种情况。

为防止出现这种情况，应该对输入表单的数据进行彻底净化：

- 应该实现客户端验证，以便在用户输入格式错误的数据时通知他们。你可以使用内置的 HTML 表单验证功能，也可以编写自己的验证代码。更多信息请参阅[客户端表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)。
- 在应用程序用户界面中显示用户输入时，应使用输出编码，以便安全地显示与用户输入完全相同的数据，避免将其作为代码执行。更多信息请参阅[输出编码](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#output-encoding)。

不能仅仅依靠客户端验证来保证安全，它应该与服务器端验证相结合。客户端验证可提供即时的验证反馈，无需等待服务器的往返验证，从而增强了用户体验。不过，客户端验证很容易被恶意方绕过（例如，通过关闭浏览器中的 JavaScript 来绕过基于 JavaScript 的验证）。

任何有信誉的服务器端框架都会提供验证表单提交的功能。此外，常见的最佳做法是转义构成可执行语法一部分的任何特殊字符，从而使输入的任何代码不再具有可执行性，而被视为纯文本。

### 防止点击劫持

在[点击劫持](/zh-CN/docs/Web/Security/Attacks/Clickjacking)攻击中，用户受骗点击用户界面元素，执行与用户预期不同的操作，通常会导致用户的机密信息被传递给恶意第三方。这种风险是嵌入式第三方内容所固有的，因此请确保信任嵌入到网站中的内容。此外，请注意点击劫持可能与网络钓鱼技术相结合。可以在上一节[保护用户身份和管理登录](#保护用户身份和管理登录)中阅读有关网络钓鱼的内容。

以下特性可以防护点击劫持：

- [HTTP X-Frame-Options](/zh-CN/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : **`X-Frame-Options`** [HTTP](/zh-CN/docs/Web/HTTP) 响应标头可以用来表明是否应该允许浏览器在 [`<frame>`](/zh-CN/docs/Web/HTML/Reference/Elements/frame)、[`<iframe>`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe)、[`<embed>`](/zh-CN/docs/Web/HTML/Reference/Elements/embed) 或 [`<object>`](/zh-CN/docs/Web/HTML/Reference/Elements/object) 中渲染页面。网站通过这些方法，保证它们的内容不被轻易嵌入至其他站点，可以避免点击劫持攻击。
- [CSP: frame-ancestors](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors)
  - : HTTP {{HTTPHeader("Content-Security-Policy")}}（CSP）标头的 **`frame-ancestors`** 指令指定了使用 {{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("object")}} 或 {{HTMLElement("embed")}} 元素嵌入页面的合法父元素。

## 典型的安全实施指南

要获得在网站上有效实施安全功能的全面指导，并确保遵循最佳实践，请参阅我们的[实用安全实施指南](/zh-CN/docs/Web/Security/Practical_implementation_guides)。

其中一些指南与 [HTTP Observatory](/en-US/observatory) 工具直接相关。Observatory 对网站进行安全审计，并提供等级和分数，以及解决发现的安全问题的建议。这些指南解释了如何解决 MDN Observatory 测试发现的问题：该工具会链接到每个问题的相关指南，帮助指导你有效解决问题。有趣的是，Mozilla 的内部开发团队在实施网站时也会使用这些指南，以确保采用安全最佳实践。

## 参见

- [Web 隐私](/zh-CN/docs/Web/Privacy)
- [学习：站点安全](/zh-CN/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [Mozilla 安全博客](https://blog.mozilla.org/security/)
- [OWASP 备忘录](https://cheatsheetseries.owasp.org/index.html)
