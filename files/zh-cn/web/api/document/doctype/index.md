---
title: Document：doctype 属性
slug: Web/API/Document/doctype
l10n:
  sourceCommit: cf4cccd4696555c12318d0bd8ea9f34992b4b098
---

{{ApiRef("DOM")}}

{{domxref("Document")}} 接口的 **`doctype`** 只读属性表示与当前文档关联的{{glossary("Doctype", "文档类型声明（DTD）")}}的 {{domxref("DocumentType")}} 对象。

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
