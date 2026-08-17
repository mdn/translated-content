---
title: 跨源资源策略（CORP）
slug: Web/HTTP/Guides/Cross-Origin_Resource_Policy
---

**CORP（跨源资源策略）** 是通过 HTTP 标头 {{HTTPHeader("Cross-Origin-Resource-Policy")}} 设定的，它允许 Web 应用程序选择性地启用保护机制，以防范来自其他源的资源请求（例如由 `<img>` 或 `<script>` 标签触发的请求），缓解诸如 [Spectre](<https://zh.wikipedia.org/wiki/%E5%B9%BD%E7%81%B5%E6%BC%8F%E6%B4%9E>) 之类的推测执行侧信道攻击，以及跨站脚本包含攻击。CORP 是对浏览器默认的{{Glossary("Same-origin_policy", "同源策略")}}的补充。

> [!NOTE]
> 该策略仅对 [no-cors](https://fetch.spec.whatwg.org/#concept-request-mode) 请求生效，对于列入 CORS 安全名单的方法/标头，系统默认会发出这类请求。

由于该策略是通过响应标头来实施的，所以其并不会拦截实际的请求 —— 是浏览器在接收到该响应标头后，通过移除响应正文来防止结果泄露的。

## 用法

> [!NOTE]
> 由于 [Chrome 中的一个漏洞](https://crbug.com/1074261)，设置 `Cross-Origin-Resource-Policy` 可能会导致 PDF 渲染异常，使访问者无法阅读某些 PDF 文件的第一页之后的内容。在生产环境中使用此标头时请务必谨慎。

Web 应用程序通过 `Cross-Origin-Resource-Policy` HTTP 响应标头设置跨源资源策略，该响应标头的取值范围包括以下三个值：

- `same-site`：只有来自同{{Glossary("Site", "站点")}}的请求才能获取到这个资源。

  > [!WARNING]
  > `same-site` 的安全性要低于 `same-origin`，因为前者允许所有子域通过 no‑cors 嵌入你的资源，哪怕子域 hack.example.com 被攻击者攻陷，它仍然属于 same‑site，可以加载你的其他受 CORP same‑site 保护的图片等静态资源，存在被侧信道攻击 或 XSSI 攻击而泄露数据的风险。

- `same-origin`：只有来自同{{Glossary("Origin", "源")}}（即，方案 + 主机 + 端口都相同）的请求才能获取到这个资源。

- `cross-origin`：来自任何{{Glossary("Origin", "源")}}（包括同站点和跨站带你）的请求都能获取到这个资源。在使用 COEP 时，这个值非常有用（见下文）。

```HTTP
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

在进行跨源资源策略检查时，如果设置了该标头，浏览器将拒绝来自不同源/站点的 `no-cors` 请求。

## 与跨源嵌入策略（COEP）的关系

当在文档上使用 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP 响应标头时，可用于要求文档加载的子资源要么与该文档属于同一源，要么携带 `Cross-Origin-Resource-Policy` HTTP 响应标头以表明其允许被跨源嵌入—— 这就是 `cross-origin` 值的应用场景。

## 发展历史

CORP 这个概念最初于 2012 年被提出（当时是提出作为“From-Origin”标头），但在 2018 年 Q2 被[重新提上议程](https://github.com/whatwg/fetch/issues/687)，并已在 Safari 和 Chromium 中实现。

2018 年初，两项被称为“Meltdown”和“Spectre”的侧信道硬件漏洞被披露。这类漏洞利用了 CPU 做性能优化时产生的硬件痕迹，间接推算出原始数据，从而导致敏感数据泄露。
这其中，浏览器就是一个高危攻击面：恶意网页的 JS/WASM 可以尝试做 Spectre 攻击，偷同进程内其他页面的内存信息（Cookie、DOM、密码、跨站数据）。这就是为什么浏览器要做站点隔离，把不同站点放到不同的渲染进程的原因，设计初衷就是防御这类推测侧信道攻击 —— 进程之间 CPU 缓存是隔离的。

而跨源资源策略（CORS）的制定，旨在为网站提供一种直接手段，来阻断预期外的 `no-cors` 跨源请求。这是抵御“Spectre”类攻击的有效防御措施，因为在攻击者访问到响应内容之前，浏览器已经把响应正文移除掉了。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Cross-Origin-Resource-Policy")}} HTTP 标头
