---
title: Web 安全
slug: Web/Security
---

确保您的 Web 站点或 Web 应用安全是十分重要的，即使是代码中很小的 bug 也可能导致隐私信息被泄露，黑客会尝试偷窃数据。这些文档提供信息帮助您使代码更安全。此处列出的面向 Web 安全的文章提供的信息可以帮助您保护站点及其代码免受攻击和数据窃取。

- [CSP (内容安全策略)](/zh-CN/docs/Web/Security/CSP)
  - : **内容安全策略**（CSP）是一个附加的安全层，有助于探测和减轻某些类型的攻击，包括[跨站脚本攻击（XSS）](/zh-CN/docs/Glossary/Cross-site_scripting)和数据注入攻击。这些攻击被广泛使用，从数据窃取到网站污损亦或是恶意软件的分发。
- [信息安全基本原理](/zh-CN/docs/Web/Security/Information_Security_Basics)
  - : 了解安全基本原理会帮助你理解在 web 开发生命周期中安全的角色和重要性。它将帮助你避免使用不必要的、允许攻击者利用缺陷获得经济收益或其他恶意目的非完全软件。以下文章提供了一些基本的 web 安全理论和定义。
- [不安全的密码](/zh-CN/docs/Web/Security/Insecure_passwords)
  - : [HTTPS](https://en.wikipedia.org/wiki/HTTP_Secure) 协议旨在保护用户数据在网络上不被窃听（机密性）和不被篡改（完整性）。处理用户数据的网站应该使用 HTTPS 协议保护他们的用户不受黑客的侵害。如果网站使用 HTTP 协议而不是 HTTPS 协议，窃取用户信息（比如他们的登录凭证）将会轻而易举。这曾经被 [Firesheep](https://codebutler.github.io/firesheep/) 很好地演示过。
- [混合内容](/zh-CN/docs/Web/Security/Mixed_content)
  - : 当用户访问通过 [HTTPS](/zh-CN/docs/Glossary/HTTPS) 协议传输的页面时，他们与 web 服务器的连接被 [TLS](/zh-CN/docs/Glossary/TLS) 加密保护，因而免受嗅探器和中间人攻击。如果这个通过 HTTPS 访问的页面包含通过定期的明文 HTTP 获取的内容，那么该连接就只是部分加密；没有加密的内容可以被嗅探器获取、被中间人攻击篡改，因此该连接不受安全保证。当网页表现出这样的行为，就称为混合内容页面。
- [公钥固定](/zh-CN/docs/Web/Security/Public_Key_Pinning)
  - : **HTTP 公钥固定扩展** (HPKP) 是一种安全功能，用来告诉 web 客户端与一些 web 服务器关联特定的加密公钥来阻止 [MITM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) 伪造证书攻击。
- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
  - : 同源策略限制了一个源（origin）中加载的文档或脚本与其他源（origin）中的资源交互的方式。这是一种用来隔离潜在恶意文档的关键安全机制。
- [安全环境](/zh-CN/docs/Web/Security/Secure_Contexts)
  - : 当浏览器满足安全的最低要求时将进入一种安全环境。安全环境允许浏览器暴露那些只有在被安全地传输给用户时才被允许的 APIs。
- [保护你的网站](/zh-CN/docs/Web/Security/Securing_your_site)
  - : 有很多你可以做的事情能够保护你的网站安全。本文提出了各种各样的建议，还有其他提供了更多有用信息文章的链接。
- [网站身份按钮](/zh-CN/docs/Web/Security/Site_Identity_Button)
  - : 编辑审核完成。
- [子资源完整性](/zh-CN/docs/Web/Security/Subresource_Integrity)
  - : 子资源完整性 (SRI) 是一种安全功能，允许浏览器验证所获取的文件 (比如，从一个 [CDN](/zh-CN/docs/Glossary/CDN) 内容分发网络) 是无意外操作而交付的。它的工作原理是允许你提供一个获取文件必须匹配的加密哈希。
- [传输层安全协议](/zh-CN/docs/Web/Security/Transport_Layer_Security)
  - : 在传输层安全协议中选择合适的密码套件和参数是必要且重要的。它有助于维护客户端和服务器之间通信的机密性和完整性。Mozilla 操作安全团队（OpSec）参考传输层安全协议配置维护着 [一条 wiki 条目](/Security/Server_Side_TLS)。
- [弱签名算法](/zh-CN/docs/Web/Security/Weak_Signature_Algorithm)
  - : 编辑审核完成。

{{LandingPageListSubpages}}

{{QuickLinksWithSubpages}}
