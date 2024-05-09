---
title: Document：doctype 属性
slug: Web/API/Document/doctype
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

返回与当前文档关联的文档类型声明（DTD）。返回的对象实现了 {{domxref("DocumentType")}} 接口。使用 {{domxref("DOMImplementation.createDocumentType()")}} 来创建 `DocumentType`。

- `doctype` 是只读属性。

## 值

{{domxref("DocumentType")}} 对象。

## 示例

```js
const doctypeObj = document.doctype;

console.log(`doctypeObj.name: ${doctypeObj.name}`);
console.log(`doctypeObj.internalSubset: ${doctypeObj.internalSubset}`);
console.log(`doctypeObj.publicId: ${doctypeObj.publicId}`);
console.log(`doctypeObj.systemId: ${doctypeObj.systemId}`);
```

## 备注

如果当前文档没有关联 DTD，该属性将返回 `null`。

DOM 第 2 级规范不支持编辑文档类型声明。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
