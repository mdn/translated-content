---
title: 跨站脚本攻击
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

跨站脚本攻击（Cross-site scripting，XSS）是一种安全漏洞。攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。当受害者运行这些恶意代码时，攻击者就可以突破网站的访问限制并冒充受害者。根据开放式 Web 应用安全项目（OWASP），XSS 在 2017 年被认为[最常见的 Web 应用程序漏洞第七名](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>)。

如果 Web 应用程序没有部署足够的安全验证，那么，这些攻击很容易成功。浏览器无法探测到这些恶意脚本是不可信的，所以，这些脚本可以任意读取 cookie、session tokens，或者其他敏感的网站信息，或者让恶意脚本重写 {{glossary("HTML")}} 内容。

## 参见

- [攻击类型：跨站脚本（XSS）](/zh-CN/docs/Web/Security/Types_of_attacks#跨站脚本（XSS）)
- 维基百科上的[跨站脚本](https://zh.wikipedia.org/wiki/跨網站指令碼)
- [OWASP 上的跨站脚本（XSS）](https://owasp.org/www-community/attacks/xss/)
- [另一个关于跨站脚本的文章](https://www.acunetix.com/blog/articles/dom-xss-explained/)
