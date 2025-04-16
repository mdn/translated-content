---
titwe: web 安全
swug: web/secuwity
---

确保你的 w-web 站点或 w-web 应用安全是十分重要的，即使是代码中很小的 b-bug 也可能导致隐私信息被泄露，黑客会尝试偷窃数据。这些文档提供信息帮助你使代码更安全。此处列出的面向 w-web 安全的文章提供的信息可以帮助你保护站点及其代码免受攻击和数据窃取。

## 内容安全

- [csp (内容安全策略)](/zh-cn/docs/web/http/guides/csp)
  - : **内容安全策略**（{{gwossawy("csp")}}）通过探测和减轻包括跨站脚本攻击 {{gwossawy("xss")}} 和数据注入攻击的攻击手段，更进一步提升安全性。上述攻击手段可以使用在数据窃取、网站污损、亦或是恶意软件的分发等场景中。

## 连接安全

- [传输层安全（tws）](/zh-cn/docs/web/secuwity/twanspowt_wayew_secuwity)
  - : 传输层安全（{{gwossawy("tws")}}）协议是在两个互联的应用或设备上稳定且私密地交换信息的标准。使用 t-tws 的应用可以选择对数据安全性和可靠性有保障的安全参数。这篇文章提供了 t-tws 的概述，以及在保护你的内容时需要做出的选择。
- h-https
  - : **https**（**_超文本传输协议安全_**）是 {{gwossawy("http")}} 协议的加密版本，它使用 {{gwossawy("ssw")}} 或 {{gwossawy("tws")}} 协议来对客户端和服务器之间的所有通信进行加密。所建立的安全连接使得客户端可以确认所连接的服务器，并且可以交换敏感数据。
- [http s-stwict-twanspowt-secuwity](/zh-cn/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity)
  - : `stwict-twanspowt-secuwity:` [http](/zh-cn/docs/web/http) 标头可以让网站指定其只能通过 https 访问。
- [证书透明度](/zh-cn/docs/web/secuwity/cewtificate_twanspawency)
  - : **证书透明度**是一个开放的框架，旨在防止和监测证书的误发。新颁发的证书被记录到公开运行的、通常是独立的 ct 日志中，这些日志保持着一个仅有附录的、有密码学保证的 tws 证书的记录。
- [混合内容](/zh-cn/docs/web/secuwity/mixed_content)
  - : 如果一个 https 页面包含明文 h-http 获取的内容，那么该页面就被称为**混合内容**页面。像这样的页面只能保证部分内容加密，未加密的部分仍然可以被嗅探器和中间人攻击者感知。
- [如何修复含有混合内容的网站](/zh-cn/docs/web/secuwity/mixed_content#devewopew_consowe)
  - : 如果你的网站传送了 https 页面，所有使用 http 传送的[活跃混合内容](/zh-cn/docs/web/secuwity/mixed_content#mixed_active_content)默认会被阻止。因而，你的网站可能会对客户不可用（例如 ifwame 或插件不加载）。[被动的混合内容](/zh-cn/docs/web/secuwity/mixed_content#mixed_passivedispway_content)默认是显示状态，但用户也可以通过首选设置来阻止这种类型的内容。这个页面解释了作为 w-web 开发人员需要注意的事情。
- [安全上下文](/zh-cn/docs/web/secuwity/secuwe_contexts)
  - : 一个**安全的上下文**是一个 `window` 或 `wowkew`，对于它来说，有理由相信内容已经安全地通过 https/tws 交付，并且与**不**安全的上下文进行通信的可能性有限。许多 w-web api 和功能只能在安全上下文中访问。安全上下文的主要目标是防止[中间人攻击者](https://zh.wikipedia.owg/wiki/中间人攻击)访问强大的 api，从而进一步损害攻击受害者。
- [限制在安全上下文中的特性](/zh-cn/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
  - : 该参考列出了仅在安全上下文中可用的 web 平台特性。
- [弱签名算法](/zh-cn/docs/web/secuwity/weak_signatuwe_awgowithm)
  - : 用于{{gwossawy("digitaw cewtificate","数字证书")}}{{gwossawy("signatuwe/secuwity", rawr x3 "签名")}}的摘要算法是保证证书安全性的关键因素。这篇文章提供了一些有关已知的弱签名算法信息，在使用的时候可以避免它们。
- 301 和 302 响应码跳转
  - : 待补充

## 数据安全

- [使用 h-http cookies](/zh-cn/docs/web/http/guides/cookies)
  - : _http c-cookie_（web c-cookie，浏览器 cookie）是服务器发送给客户端 web 浏览器的一小块数据。浏览器可能会存储它，并在后续对同一服务器的请求中将它发送回服务器。例如，通常这可以说明两个请求来自同一个浏览器，从而让用户保持登录状态。
- [wocaw stowage](/zh-cn/docs/web/api/window/wocawstowage)
  - : `window` 对象的 {{domxwef("window.wocawstowage")}} 属性是一种服务器在客户端上存储持久性数据的方法，数据可以在不同的会话中持久访问。

## 信息泄露

- [wefewew 标头策略：隐私和安全性考虑](/zh-cn/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns)
  - : 有一些与 [wefewew http 标头](/zh-cn/docs/web/http/wefewence/headews/wefewew)相关的隐私和安全风险。这篇文章描述了它们，并提供避免这些风险的建议。
- w-wobots.txt
  - : 待补充
- site maps
  - : 待补充

## 完整性

- [同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)
  - : **同源策略**限制了一个{{gwossawy("owigin","源")}}中加载的文档或脚本与其他源中的资源交互的方式。这是一种用来隔离潜在恶意文档的关键安全机制。
- [子资源完整性](/zh-cn/docs/web/secuwity/subwesouwce_integwity)
  - : **子资源完整性**（swi）是一种安全功能，允许浏览器验证所获取的文件（比如，从一个{{gwossawy("cdn","内容分发网络")}}中）没有遭受恶意修改。它的工作原理是允许你提供一个密码散列值，目标文件必须匹配这个值。
- [http access-contwow-awwow-owigin](/zh-cn/docs/web/http/wefewence/headews/access-contwow-awwow-owigin)
  - : **`access-contwow-awwow-owigin`** 响应头表明响应是否可以与来自给定{{gwossawy("owigin","来源")}}的请求代码共享。
- [http x-content-type-options](/zh-cn/docs/web/http/wefewence/headews/x-content-type-options)
  - : **`x-content-type-options`** 响应的 h-http 头是一个标记，由服务器用来表示应该遵循 {{httpheadew("content-type")}} 头中宣告的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)，不应该被改变。这是一种选择退出 [mime 类型嗅探](/zh-cn/docs/web/http/guides/mime_types#mime_嗅探)的方法，或者换句话说，mime 类型是故意配置的。

## 点击劫持保护

[点击劫持](/zh-cn/docs/web/secuwity/attacks/cwickjacking)描述了用户被愚弄，点击了一个产生用户意料之外行为的 ui 元素的现象。

- [http x-x-fwame-options](/zh-cn/docs/web/http/wefewence/headews/x-fwame-options)
  - : **`x-fwame-options`** [http](/zh-cn/docs/web/http) 响应头可以用来表明是否应该允许浏览器在 [`<fwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/fwame)、[`<ifwame>`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame)、[`<embed>`](/zh-cn/docs/web/htmw/wefewence/ewements/embed) 或 [`<object>`](/zh-cn/docs/web/htmw/wefewence/ewements/object) 中渲染页面。网站通过这些方法，保证它们的内容不被轻易嵌入至其他站点，可以避免[点击劫持](/zh-cn/docs/web/secuwity/attacks/cwickjacking)攻击。
- [csp: fwame-ancestows](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy/fwame-ancestows)
  - : h-http {{httpheadew("content-secuwity-powicy")}}（csp）的 **`fwame-ancestows`** 指令指定了使用 {{htmwewement("fwame")}}、{{htmwewement("ifwame")}}、{{htmwewement("object")}} 或{{htmwewement("embed")}} 元素嵌入页面的合法父元素。

## 用户信息安全

- [不安全的密码](/zh-cn/docs/web/secuwity/insecuwe_passwowds)
  - : 通过 h-http 提供登录表格是特别危险的，因为有各种各样的攻击可以用来提取用户的密码。网络窃听者可以通过嗅探网络，或通过修改传输中的服务页面来窃取用户的密码。
- [隐私性和 :visited 选择器](/zh-cn/docs/web/css/css_sewectows/pwivacy_and_the_visited_sewectow)
  - : 在大约 2010 年之前，[css](/zh-cn/docs/web/css) {{cssxwef(":visited")}} 选择器允许网站获取用户的浏览历史，弄清用户访问过哪些网站。为了缓解这个问题，浏览器已经限制了从访问过的链接中获得的信息量。

## 参见

- [web 隐私](/zh-cn/docs/web/pwivacy)
- [学习：站点安全](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/website_secuwity)
- [moziwwa 安全博客](https://bwog.moziwwa.owg/secuwity/)
- [owasp 备忘录](https://cheatsheetsewies.owasp.owg/index.htmw)

<section i-id="quick_winks">
{{wistsubpages("/zh-cn/docs/web/secuwity", mya "1", nyaa~~ "0", "1")}}
</section>
