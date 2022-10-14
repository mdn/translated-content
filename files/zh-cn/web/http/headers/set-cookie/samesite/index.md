---
title: SameSite cookies
slug: Web/HTTP/Headers/Set-Cookie/SameSite
---

**`SameSite`** 是 HTTP 响应头 {{HTTPHeader("Set-Cookie")}} 的属性之一。它允许您声明该 Cookie 是否仅限于第一方或者同一站点上下文。

## 值

`SameSite` 接受下面三个值：

### `Lax`

Cookies 允许与顶级导航一起发送，并将与第三方网站发起的 GET 请求一起发送。这是浏览器中的默认值。

### `Strict`

Cookies 只会在第一方上下文中发送，不会与第三方网站发起的请求一起发送。

### `None`

Cookie 将在所有上下文中发送，即允许跨站发送。

以前 `None` 是默认值，但最近的浏览器版本将 `Lax` 作为默认值，以便对某些类型的跨站请求伪造（{{Glossary("CSRF")}}）攻击具有相当强的防御能力。

使用 `None` 时，需在最新的浏览器版本中使用 [`Secure`](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) 属性。更多信息见下文。

## 针对常见警告信息的解决办法

### `SameSite=None` 需要 `Secure`

如果没有设置 `Secure` 属性，控制台中可能会出现以下警告：

> Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “_myCookie_” rejected because it has the “sameSite=none” attribute but is missing the “secure” attribute.

出现此警告是因为需要 `SameSite=None` 但未标记 `Secure` 的任何 cookie 都将被拒绝。

```plain example-bad
Set-Cookie: flavor=choco; SameSite=None
```

要解决此问题，必须将 `Secure` 属性添加到 `SameSite=None` cookies 中。

```plain example-good
Set-Cookie: flavor=choco; SameSite=None; Secure
```

[`Secure`](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie) cookie 仅通过 HTTPS 协议加密发送到服务器。请注意，不安全站点（`http:`）无法使用 `Secure` 指令设置 cookies。

### 没有 `SameSite` 属性的 Cookies 默认为 `SameSite=Lax`

最新版本的现代浏览器为 cookies 的 `SameSite` 提供了更安全的默认值，因此控制台中可能会显示以下消息：

> Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “_myCookie_” has “sameSite” policy set to “lax” because it is missing a “sameSite” attribute, and “sameSite=lax” is the default value for this attribute.

出现警告是因为未显式指定 cookie 的 `SameSite` 属性：

```plain example-bad
Set-Cookie: flavor=choco
```

虽然您可以依赖现代浏览器自动应用 `SameSite=Lax`，但您应该显式地指定它，以便清楚地传达您的意图，即要如何将 `SameSite` 属性应用到您的 cookie。这也将改善跨浏览器的体验，因为并不是所有浏览器都默认为 `Lax`。

```plain example-good
Set-Cookie: flavor=choco; SameSite=Lax
```

## **示例**

```plain
RewriteEngine on
RewriteBase "/"
RewriteCond "%{HTTP_HOST}"       "^example\.org$" [NC]
RewriteRule "^(.*)"              "https://www.example.org/index.html" [R=301,L,QSA]
RewriteRule "^(.*)\.ht$"         "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;01;https://www.example.org;30/;SameSite=None;Secure]
RewriteRule "^(.*)\.htm$"        "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;02;https://www.example.org;30/;SameSite=None;Secure]
RewriteRule "^(.*)\.html$"       "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;03;https://www.example.org;30/;SameSite=None;Secure]
[...]
RewriteRule "^admin/(.*)\.html$" "admin/index.php?nav=$1 [NC,L,QSA,CO=RewriteRule;09;https://www.example.org:30/;SameSite=Strict;Secure]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- [HTTP cookies](/zh-CN/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
