---
title: HTMLEmbedElement：getSVGDocument() 方法
slug: Web/API/HTMLEmbedElement/getSVGDocument
l10n:
  sourceCommit: 64088e3a95e2cc9c8cf44d1338d0be21f1fadfed
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLEmbedElement")}} 接口的 **`getSVGDocument()`** 方法返回嵌入的 SVG 的 {{domxref("Document")}} 对象。

## 值

{{domxref("Document")}}。

## 示例

```js
const svg = document.getElementById("el").getSVGDocument();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLIFrameElement.getSVGDocument")}}
- {{domxref("HTMLObjectElement.getSVGDocument")}}
