---
title: CSRF
slug: Glossary/CSRF
---

{{GlossarySidebar}}

跨站请求伪造（CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。例如，这些非预期请求可能是通过在跳转链接后的 {{glossary("URL")}} 中加入恶意参数来完成：

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

对于在 `https://www.example.com` 有权限的用户，这个 `<img>` 标签会在他们根本注意不到的情况下对 `https://www.example.com` 执行这个操作，即使这个标签根本不在 `https://www.example.com` 内亦可。

有很多预防 CSRF 的方法，比如实现 {{glossary("REST", "RESTful API")}}，增加 secure token 等等。

## 参见

- [跨站请求伪造](https://zh.wikipedia.org/wiki/跨站请求伪造) on Wikipedia
- [防御方法](<https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet>)
