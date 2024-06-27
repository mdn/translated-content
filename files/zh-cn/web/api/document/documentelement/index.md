---
title: Document：documentElement 属性
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

**`Document.documentElement`** 返回 {{domxref("document")}} 的根{{domxref("Element", "元素", "", "nocode")}}（例如，HTML 文档的 {{HTMLElement("html")}} 元素）。

## 值

{{domxref("Element")}} 对象。

## 示例

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier 是包含根元素直接子元素的 NodeList
// 例如 <head> 和 <body>

for (const child of firstTier) {
  // 对根元素的每个直接子元素执行某个操作
}
```

## 备注

对于任何非空 HTML 文档，`documentElement` 将始终是 {{HTMLElement("html")}} 元素。对于任何非空 XML 文档，`documentElement` 将始终是文档的根元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
