---
title: 站点（Site）
slug: Glossary/Site
---

{{GlossarySidebar}}

并非正式地，*站点*是一个网站，它是一个网页的集合，由同一域提供服务，并且由单一的组织提供维护。

浏览器有时需要去精确地区分不同的站点。例如，浏览器必须仅发送[同站（SameSite）](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookie 给同一站点，然后才能设置它们。

对于这个更精确的定义，站点由域名的*可注册域*部分确定。可注册域由[公共后缀列表](https://publicsuffix.org/list/)中的一个条目加上它之前的域名部分组成。这意味着，例如 `theguardian.co.uk`、`sussex.ac.uk` 和 `bookshop.org` 都是可注册的域。

根据这个定义，`support.mozilla.org` 和 `developer.mozilla.org` 是同一站点的一部分，因为 `mozilla.org` 是一个可注册域。

在某些情况下，在区分不同的站点时，也会考虑站点的协议（scheme）。这将使 `http://vpl.ca` 和 `https://vpl.ca` 成为不同的站点。包含协议（scheme）的情况可以防止不安全的（HTTP）站点被视为与安全（HTTPS）站点为相同的站点。考虑协议（scheme）的定义有时被称为 _schemeful same-site_。这个更严格的定义适用于处理 [SameSite](/zh-CN/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookie。

## 示例

这些是同一个站点，因为 `mozilla.org` 的可注册域是相同的：

- `https://developer.mozilla.org/zh-CN/docs/`
- `https://support.mozilla.org/zh-CN/`

这些是同一个站点，因为端口不相关：

- `https://example.com:8080`
- `https://example.com`

这些不是同一个站点，因为两个 URL 的可注册域不同：

- `https://developer.mozilla.org/zh-CN/docs/`
- `https://example.com`

如果考虑协议（scheme），这些可能是相同的站点或不同的站点：

- `http://example.com`
- `https://example.com`

## 参见

- [URL 是什么](/zh-CN/docs/Learn/Common_questions/What_is_a_URL)
- {{Glossary("Origin")}}
- [同源策略](/zh-CN/docs/Web/Security/Same-origin_policy)
