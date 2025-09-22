---
title: Document：rootElement 属性
short-title: rootElement
slug: Web/API/Document/rootElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Deprecated_header}}

**`Document.rootElement`** 返回 {{domxref("document")}} 的根元素，如果它是 {{SVGElement("svg")}} 元素，则返回该元素；否则返回 `null`。它已被弃用，建议采用适用于获取所有文档的根元素的 {{domxref("Document.documentElement")}} 属性。

## 值

对于 SVG 元素，返回 {{domxref("document")}} 的根元素；否则返回 `null`。

如果文档是一个非空的 SVG 文档，那么 `rootElement` 将是与 `documentElement` 相同的 {{domxref("SVGSVGElement")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
