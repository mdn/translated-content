---
title: 域名分片
slug: Glossary/Domain_sharding
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

由于浏览器限制了每个域（domain）的活动连接数。为了可以同时下载超过该限制数的资源，**域名分片**（domain sharding）会将内容拆分到多个子域中。当使用多个域来处理多个资源时，浏览器能够同时下载更多资源，从而缩短了页面加载时间并改善了用户体验。

就性能而言，域名分片的问题在于每个域的额外 DNS 查找成本以及建立每个 TCP 连接的开销。

HTTP 请求的初始响应通常是一个 HTML 文件，其中列出了需要下载的其他资源，如 JavaScript、CSS、图像和其他媒体文件。由于浏览器限制每个域的活动连接数，从单个域提供所有所需资源可能会很慢，因为资产需要依次下载。通过域名分片，可以从多个域提供所需的下载，使浏览器能够同时下载所需的资源。然而，多个域的 DNS 查找会减慢初始加载时间，这是一种反模式。

HTTP/2 支持无限制的并发请求，使得在启用 HTTP/2 时，域名分片成为不必要的要求。

## 参见

- {{Glossary("TLS", "传输层安全")}}
- [DNS](/zh-CN/docs/Glossary/DNS)
- [HTTP/2](/zh-CN/docs/Glossary/HTTP_2)
