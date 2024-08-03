---
title: 点击劫持
slug: Glossary/Clickjacking
l10n:
  sourceCommit: ede0057ebf9c1dc646242d019803a567acbb2995
---

{{GlossarySidebar}}

点击劫持是一种基于界面的攻击，诱使网站用户在不知情的情况下点击恶意链接。在点击劫持中，攻击者将其恶意链接嵌入到网站的按钮或合法页面中。在被感染的{{glossary("Site", "网站")}}中，每当用户点击一个合法链接时，攻击者就会获取该用户的机密信息，从而最终危害用户在互联网上的隐私。

可以通过实施[内容安全策略（frame-ancestors）](/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)和实施 [Set-Cookie 属性](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#属性)来预防点击劫持行为。

## 参见

- [网络安全：点击劫持保护](/zh-CN/docs/Web/Security#点击劫持保护)
- [维基百科上的点击劫持](https://zh.wikipedia.org/wiki/点击劫持)
- [OWASP 上的点击劫持](https://owasp.org/www-community/attacks/Clickjacking)
