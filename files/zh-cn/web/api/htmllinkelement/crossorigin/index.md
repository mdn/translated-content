---
title: HTMLLinkElement：crossOrigin 属性
slug: Web/API/HTMLLinkElement/crossOrigin
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLLinkElement")}} 接口的 **`crossOrigin`** 属性指定了在检索资源时要使用的{{Glossary("CORS", "跨源资源共享")}}设置。

## 值

一个指定在获取资源时要使用的 CORS 模式的关键词字符串。可能的值包括：

- `anonymous` 或空字符串（`""`）
  - : 由 {{domxref("HTMLLinkElement")}} 发送的请求将使用 `cors` {{domxref("Request.mode", "mode", "", "nocode")}} 模式和 `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式。这意味着如果资源是从加载文档的相同源获取的，则将启用 CORS 并发送凭据。
- `use-credentials`
  - : 由 {{domxref("HTMLLinkElement")}} 发送的请求将使用 `cors` {{domxref("Request.mode", "mode", "", "nocode")}} 模式和 `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式。该元素请求的所有资源都将使用 CORS，无论获取来自哪个域。

如果为 `crossOrigin` 属性指定了任何其他值，则它与指定为 `anonymous` 的效果相同。

如果未指定 `crossOrigin` 属性，则资源将在没有 CORS 的情况下被获取（即使用 `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} 模式和 `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
- {{domxref("HTMLScriptElement.crossOrigin")}}
