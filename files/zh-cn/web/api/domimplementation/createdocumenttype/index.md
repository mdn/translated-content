---
title: DOMImplementation.createDocumentType()
slug: Web/API/DOMImplementation/createDocumentType
---

{{ ApiRef("DOM")}}

**`DOMImplementation.createDocumentType()`** 方法返回一个 {{domxref("DocumentType")}} 对象，它可以在文档创建时用在 {{domxref("DOMImplementation.createDocument")}} ，或者通过{{domxref("Node.insertBefore()")}} 或 {{domxref("Node.replaceChild()")}} 等方法放在文档中。

## 语法

```plain
var doctype = document.implementation.createDocumentType(qualifiedNameStr, publicId, systemId);
```

### 参数

- `qualifiedNameStr`
  - : {{domxref("DOMString")}} 类型的值，包含一个合规的名称，如 `svg:svg`。
- `publicId`
  - : {{domxref("DOMString")}} 类型的值，包含 `PUBLIC` 标识符。
- `systemId`
  - : {{domxref("DOMString")}} 类型的值，包含 `SYSTEM` 标识符。

## 示例

```js
var dt = document.implementation.createDocumentType(
  "svg:svg",
  "-//W3C//DTD SVG 1.1//EN",
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd",
);
var d = document.implementation.createDocument(
  "http://www.w3.org/2000/svg",
  "svg:svg",
  dt,
);
alert(d.doctype.publicId); // -//W3C//DTD SVG 1.1//EN
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 该方法所属的接口 {{domxref("DOMImplementation")}}
