---
title: 使用 dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
---

**`DNS-prefetch`** 尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。

## 为什么要使用 dns-prefetch？

当浏览器从（第三方）服务器请求资源时，必须先将该[跨源](/zh-CN/docs/Web/HTTP/Guides/CORS)域名解析为 IP 地址，然后浏览器才能发出请求。此过程称为 DNS 解析。虽然 DNS 缓存可以帮助减少此延迟，但 DNS 解析可能会给请求增加明显的延迟。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能。

`dns-prefetch` 可帮助开发人员掩盖 DNS 解析延迟。[HTML `<link>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/link)通过设置 [`rel` 属性](/zh-CN/docs/Web/HTML/Reference/Attributes/rel)值为 `dns-prefetch` 提供此功能。然后在 [href 属性](/zh-CN/docs/Web/HTML/Reference/Attributes)中指明要[跨源](/zh-CN/docs/Web/HTTP/Guides/CORS)的域名：

## 语法

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## 示例

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- 其他 head 元素 -->
  </head>
  <body>
    <!-- 你的页面内容 -->
  </body>
</html>
```

每当站点引用跨源资源时，都应在 [`<head>` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/head)中放置 `dns-prefetch` 提示，但是要记住一些注意事项。

## 最佳实践

请记住以下三点：

**首先**，`dns-prefetch` 仅对[跨源](/zh-CN/docs/Web/HTTP/Guides/CORS)域上的 DNS 查找有效，因此请避免使用它来指向你的站点或域。这是因为，到浏览器看到提示时，你的站点背后的 IP 已经被解析了。

**其次**，还可以通过使用 [HTTP Link 字段](/zh-CN/docs/Web/HTTP/Reference/Headers/Link)将 `dns-prefetch`（以及其他资源提示）指定为 [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)之一：

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**再其次**，考虑将 `dns-prefetch` 与 `preconnect` 提示配对。`dns-prefetch` 只执行 DNS 查询，而 `preconnect` 则是建立与服务器的连接。这个过程包括 DNS 解析，以及建立 TCP 连接，如果是 HTTPS 网站，就进一步执行 [TLS](/zh-CN/docs/Glossary/TLS) 握手。将这两者结合起来，可以进一步减少[跨源请求](/zh-CN/docs/Web/HTTP/Guides/CORS)的感知延迟。你可以像这样安全地将它们结合起来使用：

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

> [!NOTE]
> 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。`preconnect` 提示最好仅用于最关键的连接。对于其他的连接，只需使用 `<link rel="dns-prefetch">` 即可节省第一步——DNS 查询——的时间。

配对这些提示的逻辑是因为对 dns-prefetch 的支持比对预连接的支持要好。不支持预连接的浏览器仍然可以通过回退到 dns-prefetch 来获得更多好处。由于这是 HTML 特性，因此容错性很强。如果不支持的浏览器遇到 dns-prefetch 提示（或任何其他资源提示），则网站不会中断，只是不会获得它提供的好处。

一些资源（如字体）以匿名模式加载。在这种情况下，应使用预连接提示设置 [crossorigin](/zh-CN/docs/Web/HTTP/Guides/CORS) 属性。如果省略了它，则浏览器将仅执行 DNS 查找。

## 参见

- [\<link>](/zh-CN/docs/Web/HTML/Reference/Elements/link)
- [HTML 属性：rel](/zh-CN/docs/Web/HTML/Reference/Attributes/rel)
- [crossorigin](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP 标头](/zh-CN/docs/Web/HTTP/Reference/Headers)
- [HTTP 标头 Link](/zh-CN/docs/Web/HTTP/Reference/Headers/Link)
