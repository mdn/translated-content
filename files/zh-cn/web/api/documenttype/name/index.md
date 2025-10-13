---
title: DocumentType：name 属性
slug: Web/API/DocumentType/name
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{APIRef("DOM")}}

{{domxref("DocumentType")}} 的只读属性 **`name`** 返回文档的类型。

对于合成的 `DocumentType`，此属性将反映 {{domxref("DOMImplementation.createDocumentType()")}} 参数中给出的值。

对于 HTML 文档，无论源代码中的实际 `doctype` 是什么，浏览器始终将其设置为 `html`。

## 值

字符串。

## 示例

```js
const docType = document.implementation.createDocumentType("html", "", "");

console.log(docType.name); // 显示“html”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
