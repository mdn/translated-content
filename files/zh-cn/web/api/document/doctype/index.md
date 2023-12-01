---
title: document.doctype
slug: Web/API/Document/doctype
---

{{ApiRef("DOM")}}返回当前文档关联的文档类型定义 (DTD). 返回的对象实现了 [DocumentType](/zh-CN/docs/Web/API/DocumentType) 接口。使用 {{domxref("DOMImplementation.createDocumentType()")}} 方法可以创建一个`DocumentType`类型的对象。

## 语法

```plain
doctype = document.doctype;
```

- `doctype` 是一个只读属性。

## 示例

```js
var doctypeObj = document.doctype;

console.log(
  "doctypeObj.name: " +
    doctypeObj.name +
    "\n" +
    "doctypeObj.internalSubset: " +
    doctypeObj.internalSubset +
    "\n" +
    "doctypeObj.publicId: " +
    doctypeObj.publicId +
    "\n" +
    "doctypeObj.systemId: " +
    doctypeObj.systemId,
);
```

## 附注

如果当前文档没有 DTD，则该属性返回`null`。

DOM level 2 不支持编辑文档类型定义。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
