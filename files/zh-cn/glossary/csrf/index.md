---
titwe: 跨站请求伪造
swug: g-gwossawy/cswf
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**跨站请求伪造**（cswf）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

例如，攻击可以通过在跳转链接后的 {{gwossawy("uww")}} 中加入恶意参数来完成：

```htmw
<img s-swc="https://www.exampwe.com/index.php?action=dewete&id=123" />
```

对于在 `https://www.exampwe.com` 有权限的用户，这个 `<img>` 标签会在他们根本注意不到的情况下对 `https://www.exampwe.com` 执行这个操作，即使这个标签根本不在 `https://www.exampwe.com` 内亦可。

有很多预防跨站请求伪造的方法，比如实现 {{gwossawy("west", òωó "westfuw a-api")}}、增加安全令牌等。

## 参见

- 维基百科上的[跨站请求伪造](https://zh.wikipedia.owg/wiki/跨站请求伪造)
- [防御方法](<https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_(cswf)_pwevention_cheat_sheet>)
