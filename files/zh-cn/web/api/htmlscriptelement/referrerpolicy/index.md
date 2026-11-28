---
title: HTMLScriptElement：referrerPolicy 属性
short-title: referrerPolicy
slug: Web/API/HTMLScriptElement/referrerPolicy
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`referrerPolicy`** 属性反映 {{HTMLElement("script")}} 元素的 HTML
[`referrerpolicy`](/zh-CN/docs/Web/HTML/Reference/Elements/script#referrerpolicy) 属性，
该属性定义了在获取该脚本及其导入的任何脚本时如何设置来源地址。

## 值

一个字符串；以下值之一：

- `no-referrer`
  - : {{HTTPHeader("Referer")}} 标头将被完全省略。请求中不会
    发送任何来源地址信息。
- `no-referrer-when-downgrade`
  - : 当协议安全级别保持不变时（例如，HTTP → HTTP、HTTPS → HTTPS），
    URL 会作为来源地址发送，但不会发送到安全性较低的目的地（例如，
    HTTPS → HTTP）。
- `origin`
  - : 在所有情况下，仅将文档的源作为来源地址发送。
    例如，`https://example.com/page.html` 文档将发送来源地址
    `https://example.com/`。
- `origin-when-cross-origin`
  - : 在执行同源请求时发送完整的 URL，但在其他情况下
    仅发送文档的源。
- `same-origin`
  - : 对于[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)，
    将会发送来源地址，但跨源请求将不包含任何来源地址信息。
- `strict-origin`
  - : 当协议安全级别保持不变时（例如，HTTPS → HTTPS），仅发送文档的
    源作为来源地址，但不发送到安全性较低的目的地（例如，HTTPS →
    HTTP）。
- `strict-origin-when-cross-origin`（默认值）
  - : 如果未指定策略，这是用户代理的默认行为。执行同源请求时发送完整
    的 URL；仅当协议安全级别保持不变（例如，HTTPS → HTTPS）时发送源，
    并且不向安全性较低的目的地（例如，HTTPS → HTTP）发送任何标头。
- `unsafe-url`
  - : 在执行同源或跨源请求时发送完整的 URL。此策略会将受 TLS 保护的资源
    的源和路径泄露给不安全的源。请仔细考虑此设置的
    影响。

> [!NOTE]
> 空字符串值（`""`）既是默认值，也是
> 在不支持 `referrerpolicy` 时的回退值。如果未在
> `<script>` 元素上显式指定
> `referrerpolicy`，则会采用更高层级的来源地址策略，
> 即在整个文档或域上设置的策略。如果没有可用的
> 更高层级策略，则空字符串被视为等同于
> `no-referrer-when-downgrade`。

## 示例

```js
const scriptElem = document.createElement("script");
scriptElem.src = "/";
scriptElem.referrerPolicy = "unsafe-url";
document.body.appendChild(scriptElem);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLIFrameElement.referrerPolicy")}}
