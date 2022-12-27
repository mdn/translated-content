---
title: dns-prefetch
slug: Web/Performance/dns-prefetch
---

**`DNS-prefetch`** (**DNS 预获取**) 是尝试在请求资源之前解析域名。这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。

## 为什么要使用 dns-prefetch?

当浏览器从（第三方）服务器请求资源时，必须先将该[跨域](/zh-CN/docs/Web/HTTP/CORS)域名解析为 IP 地址，然后浏览器才能发出请求。此过程称为 DNS 解析。DNS 缓存可以帮助减少此延迟，而 DNS 解析可以导致请求增加明显的延迟。对于打开了与许多第三方的连接的网站，此延迟可能会大大降低加载性能。

`dns-prefetch` 可帮助开发人员掩盖 DNS 解析延迟。 [HTML `<link>`元素](/zh-CN/docs/Web/HTML/Element/link) 通过 dns-prefetch 的 [rel 属性](/zh-CN/docs/Web/HTML/Attributes/rel)值提供此功能。然后在 [href 属性](/zh-CN/docs/Web/HTML/Attributes)中指要[跨域](/zh-CN/docs/Web/HTTP/CORS)的域名：

## 句法

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/">
```

## 例子

```plain
<html>
  <head>
    <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
    <!-- and all other head elements -->
  </head>
  <body>
    <!-- your page content -->
  </body>
</html>
```

每当站点引用跨域域上的资源时，都应在[\<head>元素](/zh-CN/docs/Web/HTML/Element/head)中放置 dns-prefetch 提示，但是要记住一些注意事项。

## 最佳实践

请记住以下三点：

首先，`dns-prefetch` 仅对[跨域](/zh-CN/docs/Web/HTTP/CORS)域上的 DNS 查找有效，因此请避免使用它来指向您的站点或域。这是因为，到浏览器看到提示时，您站点域背后的 IP 已经被解析。

其次，还可以通过使用 [HTTP 链接字段](/zh-CN/docs/Web/HTTP/Headers/Link)将 `dns-prefetch`（以及其他资源提示）指定为 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)：

```plain
Link: <https://fonts.gstatic.com/>; rel=dns-prefetch
```

第三，考虑将 `dns-prefetch` 与 `preconnect(`预连接`)`提示配对。尽管 `dns-prefetch` 仅执行 DNS 查找，但`preconnect` 会建立与服务器的连接。如果站点是通过 HTTPS 服务的，则此过程包括 DNS 解析，建立 TCP 连接以及执行 TLS 握手。将两者结合起来可提供进一步减少[跨域请求](/zh-CN/docs/Web/HTTP/CORS)的感知延迟的机会。您可以安全地将它们一起使用，如下所示：

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<link rel="dns-prefetch" href="https://fonts.gstatic.com/">
```

> **备注：** 如果页面需要建立与许多第三方域的连接，则将它们预先连接会适得其反。 `preconnect` 提示最好仅用于最关键的连接。对于其他的，只需使用 `<link rel="dns-prefetch">` 即可节省第一步的时间-DNS 查找。

配对这些提示的逻辑是因为对 dns-prefetch 的支持比对预连接的支持要好。不支持预连接的浏览器仍然可以通过回退到 dns-prefetch 来获得更多好处。由于这是 HTML 功能，因此非常容错。如果不支持的浏览器遇到 dns-prefetch 提示（或任何其他资源提示），则您的网站不会中断。您只是不会获得它提供的好处。

一些资源（如字体）以匿名模式加载。在这种情况下，应使用预连接提示设置 [crossorigin](/zh-CN/docs/Web/HTTP/CORS) 属性。如果您省略它，则浏览器将仅执行 DNS 查找。

## 查看更多

- [\<link>](/zh-CN/docs/Web/HTML/Element/link)
- [HTML attribute: rel](/zh-CN/docs/Web/HTML/Attributes/rel)
- [crossorigin](/zh-CN/docs/Web/HTML/CORS_settings_attributes)
- [Cross-Origin Resource Sharing (CORS)](/zh-CN/docs/Web/HTTP/CORS)
- [HTTP headers](/zh-CN/docs/Web/HTTP/Headers)
- [HTTP header Link](/zh-CN/docs/Web/HTTP/Headers/Link)
