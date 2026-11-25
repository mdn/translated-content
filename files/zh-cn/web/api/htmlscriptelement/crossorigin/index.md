---
title: HTMLScriptElement：crossOrigin 属性
short-title: crossOrigin
slug: Web/API/HTMLScriptElement/crossOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`crossOrigin`** 属性反映了脚本元素的{{Glossary("CORS", "跨源资源共享")}}设置。对于来自其他[源](/zh-CN/docs/Glossary/Origin)的经典脚本，它控制是否会暴露完整的错误信息。对于模块脚本，它控制脚本本身以及它导入的任何脚本。详情请参阅 [CORS 设置属性](/zh-CN/docs/Web/HTML/Reference/Attributes/crossorigin)。

## 值

一个指定在获取资源时要使用的 CORS 模式的关键词字符串。可能的值包括：

- `anonymous` 或空字符串（`""`）
  - : 由 {{domxref("HTMLScriptElement")}} 发出的请求将使用 `cors` 的 {{domxref("Request.mode", "mode", "", "nocode")}} 模式，以及 `same-origin` 的 {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式。这意味着 CORS 已启用，并且当资源是从加载该文档的同源地址获取时，会发送凭据（credentials）。
- `use-credentials`
  - : 由 {{domxref("HTMLScriptElement")}} 发送的请求将使用 `cors` {{domxref("Request.mode", "mode", "", "nocode")}} 模式和 `include` {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式。该元素请求的所有资源都将使用 CORS，无论获取来自哪个域。

如果为 `crossOrigin` 属性指定了任何其他值，则它与指定为 `anonymous` 的效果相同。

如果未指定 `crossOrigin` 属性，则资源将在没有 CORS 的情况下被获取（即使用 `no-cors` {{domxref("Request.mode", "mode", "", "nocode")}} 模式和 `same-origin` {{domxref("Request.credentials", "credentials", "", "nocode")}} 模式）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLImageElement.crossOrigin")}}
- {{domxref("HTMLLinkElement.crossOrigin")}}
- {{domxref("HTMLMediaElement.crossOrigin")}}
