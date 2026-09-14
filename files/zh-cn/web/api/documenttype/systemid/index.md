---
title: DocumentType：systemId 属性
short-title: systemId
slug: Web/API/DocumentType/systemId
l10n:
  sourceCommit: 692043ddc974d75e7b5249369b98151a446c8797
---

{{APIRef("DOM")}}

{{domxref("DocumentType")}} 接口的 **`systemId`** 只读属性返回关联 DTD 的 URL。

对于合成的 `DocumentType`，此属性将反映 {{domxref("DOMImplementation.createDocumentType()")}} 参数中给出的值。

## 值

字符串。

## 示例

```js
const docType = document.implementation.createDocumentType(
  "svg",
  "",
  "http://www.w3.org/2000/svg",
);

console.log(docType.systemId); // “http://www.w3.org/2000/svg”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
