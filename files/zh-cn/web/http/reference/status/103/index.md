---
title: 103 Early Hints
slug: Web/HTTP/Reference/Status/103
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

HTTP **`103 Early Hints`** [信息响应](/zh-CN/docs/Web/HTTP/Reference/Status#信息响应)可能会在服务器仍在准备响应数据的时候发送，提供有关服务器预期的最终响应将连接到的站点和资源的提示。这允许浏览器在服务器准备并发送最终响应之前[预连接](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect)到站点或开始[预加载](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)资源。一旦接收到早期提示，客户端就会立即获取这些提示所指的预加载资源。

早期提示响应主要用于 {{HTTPHeader("Link")}} 标头，指示要加载的资源。它还可以包含在处理早期提示时强制执行的 `Content-Security-Policy` 标头。

服务器可能会发送多个 `103` 响应，例如在重定向后，浏览器只会处理第一个早期提示响应，如果请求导致跨源重定向，则会丢弃此响应。

> [!NOTE]
> 出于兼容性和安全性原因，建议[只在 HTTP/2 或更高版本上发送 HTTP `103 Early Hints` 响应](https://www.rfc-editor.org/rfc/rfc8297#section-3)，除非已知用户正确处理信息响应。
>
> 由于这个原因，大多数浏览器都限制在 HTTP/2 或更高版本中提供支持。请参阅下面的[浏览器兼容性](#浏览器兼容性)。尽管如此，以下示例仍按照惯例使用了 HTTP/1.1 风格的表示法。

## 语法

```http
103 Early Hints
```

## 示例

### 预连接示例

下面的 `103` 早期提示响应显示了一个早期提示响应，其中服务器指示客户端可能希望对特定来源（`https://cdn.example.com`）进行预连接。与 HTML [`rel=preconnect`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect) 属性一样，这个提示表明页面可能需要目标资源站的资源，并且浏览器可能预先与该来源发起连接来改善用户体验。

```http
103 Early Hint
Link: <https://cdn.example.com>; rel=preconnect, <https://cdn.example.com>; rel=preconnect; crossorigin
```

这个例子预连接到 `https://cdn.example.com` 两次：

- 第一次连接将用于加载无需 CORS 的资源，例如图片。
- 第二次连接包括 [`crossorigin`](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin) 属性，将用于加载受 [CORS](/zh-CN/docs/Web/HTTP/Guides/CORS) 保护的资源，如字体。

受 CORS 保护的资源必须通过完全独立的连接进行获取，如果你只需要从来源获取一直资源，则只需进行一次预连接。

随后服务器发送最终响应。包括一个跨源字体预加载和一个从附加源加载的 `<img>`。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="preload" href="https://cdn.example.com/fonts/my-font.woff2" as="font" type="font/woff2" crossorigin>
...
<img src="https://cdn.example.com/images/image.jpg" alt="">
...
```

### 预加载示例

下面的 `103` 早期提示响应表示最终响应可能需要样式表 `style.css` 。

```http
103 Early Hint
Link: </style.css>; rel=preload; as=style
```

随后服务器发送最终响应。包括指向样式表的连接，该连接可能已经从早期提示中被预加载。

```http
200 OK
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

### 包含 CSP 的早期提示响应

以下示例展示了相同的早期提示响应，但包含 `Content-Security-Policy` 标头。

```http
103 Early Hint
Content-Security-Policy: style-src: self;
Link: </style.css>; rel=preload; as=style
```

早期响应将预加载限制在与请求相同的来源上，如果来源匹配，则样式表将被预加载。

最终响应可能将 CSP 设置为 `none`，如下所示，样式表已被预加载，但在渲染页面将不会使用。

```http
200 OK
Content-Security-Policy: style-src: none;
Content-Type: text/html

<!doctype html>
...
<link rel="stylesheet" rel="preload" href="style.css" />
...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Link")}}
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)
- [`rel="preconnect"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preconnect)（{{htmlelement("link")}} 属性）
- [`rel="preload"`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel/preload)（{{htmlelement("link")}} 属性）
- [`fetchpriority`](/zh-CN/docs/Web/HTML/Reference/Elements/link#fetchpriority)（{{htmlelement("link")}} 属性）
- [早期提示更新：Cloudflare、Google 和 Shopify 如何共同努力为每个人构建更快的互联网](https://blog.cloudflare.com/early-hints-performance/) 来自 Cloudflare 博客
