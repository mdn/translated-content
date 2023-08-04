---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
---

{{HTTPSidebar}}

**`X-DNS-Prefetch-Control`** 头控制着浏览器的 DNS 预读取功能。DNS 预读取是一项使浏览器主动去执行域名解析的功能，其范围包括文档的所有链接，无论是图片的，CSS 的，还是 JavaScript 等其他用户能够点击的 URL。

因为预读取会在后台执行，所以 {{glossary("DNS")}} 很可能在链接对应的东西出现之前就已经解析完毕。这能够减少用户点击链接时的延迟。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

```plain
X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
```

### 参数

- on
  - : 启用 DNS 预解析。在浏览器支持 DNS 预解析的特性时即使不使用该标签浏览器依然会进行预解析。
- off
  - : 关闭 DNS 预解析。这个属性在页面上的链接并不是由你控制的或是你根本不想向这些域名引导数据时是非常有用的。

## 介绍

DNS 请求需要的带宽非常小，但是延迟却有点高，这一点在手机网络上特别明显。预读取 DNS 能让延迟明显减少一些，例如在用户点击链接时。在某些情况下，延迟能减少一秒钟。

在某些浏览器中这个预读取的行为将会与页面实际内容并行发生（而不是串行）。正因如此，某些高延迟的域名的解析过程才不会卡住资源的加载。

这样可以极大的加速（尤其是移动网络环境下）页面的加载。在某些图片较多的页面中，在发起图片加载请求之前预先把域名解析好将会有至少 5% 的图片加载速度提升。

### 在浏览器中设置预读取配置

一般来说并不需要去管理预读取，但是可能会有用户希望关闭预读取功能。这时只需要将 `network.dns.disablePrefetch` 选项值设置为 `true` 就可以了。

另外，默认情况下，通过 {{glossary("HTTPS")}} 加载的页面上内嵌链接的域名并不会执行预加载。在 Firefox 浏览器中，可以通过 about:config 设置 `network.dns.disablePrefetchFromHTTPS` 值为 `false` 来改变这一默认行为。

## 示例

### 打开和关闭 DNS 预读取

你可以通过在服务器端发送 `X-DNS-Prefetch-Control` 报头，或是在文档中使用值为 [`http-equiv`](/zh-CN/docs/Web/HTML/Global_attributes#http-equiv) 的 {{ HTMLElement("meta") }} 标签：

```plain
<meta http-equiv="x-dns-prefetch-control" content="off">
```

您可以通过将 `content` 的参数设置为“`on`”来改变设置。

### 强制查询特定主机名

你可以通过使用 [`rel`](/zh-CN/docs/Web/HTML/Element/link#rel) 属性值为 [link type](/zh-CN/docs/Web/HTML/Link_types) 中的 `dns-prefetch` 的 {{ HTMLElement("link") }} 标签来对特定域名进行预读取：

```html
<link rel="dns-prefetch" href="http://www.spreadfirefox.com/" />
```

在这个例子中，Firefox 将预解析域名"[www.spreadfirefox.com](http://www.spreadfirefox.com)"。

而且，{{ HTMLElement("link") }} 元素也可以使用不完整的 URL 的主机名来标记预解析，但这些主机名前必需要有双斜线：

```html
<link rel="dns-prefetch" href="//www.spreadfirefox.com" />
```

强制对域名进行预读取在一些情况下很有用，比如，在网站的主页上，强制在整个网站上频繁引用的域名的预解析，即使它们不在主页本身上使用。即使主页的性能可能不受影响，这将提高整体站点性能。

## 浏览器兼容性

{{Compat}}

## 参考

- [DNS Prefetching for Firefox (blog post)](http://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html)
- [Google Chrome handles DNS prefetching control](http://dev.chromium.org/developers/design-documents/dns-prefetching)
