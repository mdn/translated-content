---
title: HTMLLinkElement：referrerPolicy 属性
slug: Web/API/HTMLLinkElement/referrerPolicy
l10n:
  sourceCommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`referrerPolicy`** 属性反映 {{HTMLElement("link")}} 元素的 HTML [`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/link#referrerpolicy) 属性，该属性定义获取资源时发送哪个来源地址。

详情请参考 HTTP 标头 {{HTTPHeader("Referrer-Policy")}}。

## 值

一个字符串；以下值之一：

- `no-referrer`
  - : {{HTTPHeader("Referer")}} 标头将被完全省略。请求中不会发送任何来源地址。
- `no-referrer-when-downgrade`
  - : 当协议安全级别保持不变时（例如，HTTP → HTTP、HTTPS → HTTPS），该 URL 会作为来源地址发送，但不会发送到安全级别较低的目的地（例如，HTTPS → HTTP）。
- `origin`
  - : 在所有情况下，仅将文档的源作为来源地址发送。`https://example.com/page.html` 文档将发送来源地址 `https://example.com/`。
- `origin-when-cross-origin`
  - : 在执行同源请求时发送完整的 URL，但在其他情况下仅发送文档的源。
- `same-origin`
  - : 对于[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)，将会发送来源地址，但跨源请求将不包含任何来源地址信息。
- `strict-origin`
  - : 当协议安全级别保持不变（HTTPS → HTTPS）时仅发送文档的源作为来源地址，但不发送到安全性较低的目的地（HTTPS → HTTP）。
- `strict-origin-when-cross-origin`（默认值）
  - : 这是用户代理未指定策略时的默认行为。执行同源请求时发送完整的 URL，仅当协议安全级别保持不变（HTTPS → HTTPS）时发送源，并且不向安全性较低的目的地（HTTPS → HTTP）发送任何标头。
- `unsafe-url`
  - : 在执行同源或跨源请求时发送完整的 URL。此策略会将 TLS 保护的资源的源和路径泄露给不安全的源。请仔细考虑此设置的影响。

## 示例

```js
const links = document.getElementsByTagName("link");
links[0].referrerPolicy; // "no-referrer"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTTP 标头 {{HTTPHeader("Referrer-Policy")}}
- {{domxref("HTMLAnchorElement.referrerPolicy")}}
- {{domxref("HTMLAreaElement.referrerPolicy")}}
- {{domxref("HTMLIFrameElement.referrerPolicy")}}
- {{domxref("HTMLImageElement.referrerPolicy")}}
