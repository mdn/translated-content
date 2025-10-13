---
title: DocumentType：publicId 属性
short-title: publicId
slug: Web/API/DocumentType/publicId
l10n:
  sourceCommit: 692043ddc974d75e7b5249369b98151a446c8797
---

{{APIRef("DOM")}}

{{domxref("DocumentType")}} 的 **`publicId`** 只读属性返回文档的形式化标识符。

对于合成的 `DocumentType`，此属性将反映 {{domxref("DOMImplementation.createDocumentType()")}} 参数中给出的值。

## 值

字符串。

## 示例

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/2000/svg",
);

console.log(docType.publicId); // 显示“-//W3C//DTD SVG 1.1//EN”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
