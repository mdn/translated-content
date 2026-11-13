---
title: 跨源资源策略（CORP）实现
short-title: 跨源资源策略（CORP）
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: bd5271a96d814ed6876e974186c465f1b3959e07
---

**跨源资源策略**（Cross-Origin Resource Policy）是通过 {{httpheader("Cross-Origin-Resource-Policy")}} 响应标头设定的，它允许网站和应用程序选择性地启用保护机制，以防范来自其他来源的资源请求（例如由 `<img>` 或 `<script>` 标签触发的请求）。CORP 是对浏览器默认的{{Glossary("same-origin policy", "同源策略")}}的补充。

## 问题

默认情况下，{{Glossary("same-origin policy", "同源策略")}}会阻止脚本直接读取跨源响应，从而防止资源站点上的用户数据泄露。然而，某些侧信道硬件漏洞（尤其是[幽灵漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)）会利用现代处理器的预测执行功能（一种性能特性）来泄露敏感数据，只要响应字节进入嵌入方的内存即可。此外，跨站脚本包含（XSSI）攻击允许通过传统的 `<script>` 元素获取跨源数据。因此，即使是传统上被认为对跨源嵌入是安全的通道——这些通道因此不需要资源提供者的配合——也可能存在安全隐患。

## 解决方案

在资源上使用 `Cross-Origin-Resource-Policy` 来阻止 [`no-cors`](/zh-CN/docs/Web/API/RequestInit#mode) 跨源请求——这些请求默认会针对某些 API 和元素（尤其是 `<script>` 和 `<img>` 元素）发出。由于该策略是通过响应标头来表达的，因此并不会阻止实际的请求。相反，浏览器会将响应转换为网络错误，从而防止结果泄露。

可能的值如下：

- `same-origin`
  - : 将资源访问权限限制为仅来自同[_源_](/zh-CN/docs/Glossary/Origin)的请求。建议对返回敏感用户信息或私有 API 的 URL 采用此设置。
- `same-site`
  - : 将资源访问权限限制为来自同一[_站点_](/zh-CN/docs/Glossary/Site)的请求。建议将此设置用于来自那些其功能在多个同一站点源之间共享的源的响应。例如，提供静态资源的公司 CDN，以及处理身份验证的单点登录（SSO）应用。

    > [!WARNING]
    > 这比 `same-origin` 更宽松。HTML 标准中定义了[用于检查两个源是否属于同一网站的算法](https://html.spec.whatwg.org/multipage/origin.html#same-site)，该算法涉及对*可注册域名*的检查。

- `cross-origin`
  - : 允许通过跨源请求访问资源。仅建议对来自广泛使用的源（例如公共 CDN 或微件）的响应启用此功能。如果未设置该标头，则此为默认行为，但若要让使用严格 {{httpheader("Cross-Origin-Embedder-Policy")}} 的跨源嵌入者嵌入该资源，则必须显式设置该标头。

请为你的网站设置尽可能严格的值。

CORP 由资源提供方提供。如果你是此类跨源资源的嵌入方，可以在文档中添加 {{httpheader("Cross-Origin-Embedder-Policy")}} 标头，并将值设置为 `require-corp`。如果跨源资源未显式发送允许嵌入者的 `Cross-Origin-Resource-Policy` 头，浏览器将阻止文档加载该资源。这是使网站实现[跨源隔离](/zh-CN/docs/Web/API/Window/crossOriginIsolated)的一部分。

## 示例

### 确保资源提供者的安全性

如果某项资源在 `no-cors` 模式下不得进行跨源加载，则该资源的响应应包含：

```http
Cross-Origin-Resource-Policy: same-origin
```

### 使嵌入器处于跨源隔离状态

要启用 {{jsxref("SharedArrayBuffer")}} 和高精度 {{domxref("Performance.now()")}}，文档必须处于跨源隔离状态。请在文档中包含以下标头：

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

使用 `Cross-Origin-Embedder-Policy: require-corp` 的页面只能加载那些明确选择允许被嵌入的跨源资源。资源可通过使用显式的 CORP 来选择允许被嵌入：

```http
Cross-Origin-Resource-Policy: cross-origin
```

对于使用[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)发起的请求，请改用 `Access-Control-Allow-Origin`：

```http
Access-Control-Allow-Origin: https://example.com
```

## 参见

- [考虑部署跨源资源策略](https://resourcepolicy.fyi/)
- [XS-Leaks 维基](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/zh-CN/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
- [跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
