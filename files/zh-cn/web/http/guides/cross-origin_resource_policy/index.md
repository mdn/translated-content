---
title: 跨源资源策略（CORP）
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
l10n:
  sourceCommit: d5c3db4df1e063769b8113567f4558ad4298b00b
---

**跨源资源策略**（Cross-Origin Resource Policy）是通过 [HTTP 标头 `Cross-Origin-Resource-Policy`](/zh-CN/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy) 设定的，它允许网站和应用程序选择性地启用保护机制，以防范来自其他来源的资源请求（例如由 `<img>` 或 `<script>` 标签触发的请求），缓解诸如[幽灵漏洞](https://zh.wikipedia.org/wiki/幽灵漏洞)之类的推测执行侧信道攻击，以及跨站脚本包含攻击。CORP 是对浏览器默认的{{Glossary("Same-origin_policy", "同源策略")}}的补充。

> [!NOTE]
> 该策略仅对 [`no-cors`](https://fetch.spec.whatwg.org/#concept-request-mode) 请求生效，对于列入 CORS 安全名单的方法/标头默认触发。

由于该策略是通过[_响应标头_](/zh-CN/docs/Glossary/Response_header)来实施的，所以其并不会拦截实际的请求——是浏览器在接收到该响应标头后，通过移除响应主体来防止结果泄露的。

## 用法

> [!NOTE]
> 由于 [Chrome 的一个漏洞](https://crbug.com/1074261)，设置 Cross-Origin-Resource-Policy 可能会导致 PDF 渲染异常，使访问者无法阅读某些 PDF 文件的第一页之后的内容。在生产环境中使用此标头时请务必谨慎。

Web 应用程序通过 {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 响应标头设置跨源资源策略，其接受以下三个值之一：

- `same-site`
  - : 只有来自同{{Glossary("Site", "站点")}}的请求才能读取资源。

    > [!WARNING]
    > 其安全性要低于{{Glossary("origin", "来源")}}。[用于检查两个来源是否属于同一站点的算法](https://html.spec.whatwg.org/multipage/origin.html#same-site)定义于 HTML 标准中，涉及对*可注册域名*的检查。

- `same-origin`
  - : 只有来自同{{Glossary("Origin", "来源")}}（即，方案 + 主机 + 端口）的请求才能读取资源。

- `cross-origin`
  - : 来自任何{{Glossary("Origin", "来源")}}（包括同站和跨站）的请求都能读取资源。在使用 COEP 时非常有用（见下文）。

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

在进行跨源资源策略检查时，如果设置了该标头，浏览器将拒绝来自不同源/站点的 `no-cors` 请求。

## 与跨源嵌入策略（COEP）的关系

当在文档上使用 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP 响应标头时，可用于要求文档加载的子资源要么与该文档属于同一来源，要么携带 {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 响应标头以表明其允许被嵌入——这就是 `cross-origin` 值的应用场景。

## 历史

这个概念最初于 2012 年被提出（以 `From-Origin` 标头），但在 2018 年第二季度被[重新提上议程](https://github.com/whatwg/fetch/issues/687)，并已在 Safari 和 Chromium 中实现。

2018 年初，两个被称为*熔断*和*幽灵漏洞*的侧信道硬件漏洞被披露。这些漏洞导致敏感数据泄露，其成因源于旨在提升性能的推测执行功能所引发的竞态条件。

跨源资源策略的制定旨在为网站提供一种直接手段，来阻断预期外的 `no-cors` 跨源请求。这是抵御“幽灵漏洞”类攻击的有效防御措施，因为在攻击者访问到响应主体之前，浏览器已经把它移除掉了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 标头
