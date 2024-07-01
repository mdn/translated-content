---
title: 跨站请求伪造
slug: Glossary/CSRF
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**跨站请求伪造**（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

例如，攻击可以通过在跳转链接后的 {{glossary("URL")}} 中加入恶意参数来完成：

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

对于在 `https://www.example.com` 有权限的用户，这个 `<img>` 标签会在他们根本注意不到的情况下对 `https://www.example.com` 执行这个操作，即使这个标签根本不在 `https://www.example.com` 内亦可。

有很多预防跨站请求伪造的方法，比如实现 {{glossary("REST", "RESTful API")}}、增加安全令牌等。

## 参见

- 维基百科上的[跨站请求伪造](https://zh.wikipedia.org/wiki/跨站请求伪造)
- [防御方法](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
