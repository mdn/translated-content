---
title: HTMLIFrameElement：referrerPolicy 属性
slug: Web/API/HTMLIFrameElement/referrerPolicy
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`HTMLIFrameElement.referrerPolicy`** 属性表示了 {{HTMLElement("iframe")}} 元素的 [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy) 属性，该属性定义了在获取资源时发送哪个引用者。

## 值

- `no-referrer`
  - : {{HTTPHeader("Referer")}} 标头将被完全省略。请求时不会发送任何引用者信息。
- `no-referrer-when-downgrade`
  - : 当协议安全级别保持不变（HTTP → HTTP、HTTPS → HTTPS）时，URL 作为引用者发送，但不会发送到安全性较低的目的地（HTTPS → HTTP）。
- `origin`
  - : 在所有情况下仅发送文档的源作为引用者。`https://example.com/page.html` 文档将发送引用者 `https://example.com/` 。
- `origin-when-cross-origin`
  - : 执行同源请求时发送完整的 URL，但在其他情况下仅发送文档的源。
- `same-origin`
  - : 将[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)发送给引用者，但跨源请求将不包含引用者信息。
- `strict-origin`
  - : 当协议安全级别保持不变（HTTPS → HTTPS）时仅发送文档的源作为引用者，但不发送到安全性较低的目的地（HTTPS → HTTP）。
- `strict-origin-when-cross-origin`（默认值）
  - : 这是用户代理未指定策略时的默认行为。执行同源请求时发送完整的 URL，仅当协议安全级别保持不变（HTTPS → HTTPS）时发送源，并且不向安全性较低的目的地（HTTPS → HTTP）发送任何标头。
- `unsafe-url`
  - : 当执行同源或跨源请求时发送完整的 URL。

    > [!NOTE]
    > 此策略将把受 TLS 保护的资源的源和路径泄露给不安全的源。仔细考虑此设置的影响。

## 示例

```js
const iframe = document.createElement("iframe");
iframe.src = "/";
iframe.referrerPolicy = "unsafe-url";
const body = document.querySelector("body");
body.appendChild(iframe); // 使用完整的 URL 作为引用源来获取图像
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLAnchorElement.referrerPolicy")}}、{{domxref("HTMLAreaElement.referrerPolicy")}} 和 {{domxref("HTMLAreaElement.referrerPolicy")}}。
