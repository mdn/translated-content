---
title: DOMImplementation.createDocument()
slug: Web/API/DOMImplementation/createDocument
---

{{ApiRef("DOM")}}

**`DOMImplementation.createDocument()`方法创建并返回一个** {{domxref("XMLDocument")}}对象。

## 语法

```plain
doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);
```

### 参数

- _namespaceURI_
  - : 被创建的{{domxref("DOMString")}} 文档的 namespace URI 是 namespace URI ,如果文档不属于任何 namespace URI 就为`null`.
- _qualifiedNameStr_
  - : {{domxref("DOMString")}} 是否包含要创建文档的限定名称，即可选的前缀和冒号，以及本地的根元素。
- _documentType_ {{optional_inline}}
  - : 文档的 `DocumentType` 默认为 null.

## 例子

```js
var doc = document.implementation.createDocument(
  "http://www.w3.org/1999/xhtml",
  "html",
  null,
);
var body = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
body.setAttribute("id", "abc");
doc.documentElement.appendChild(body);
alert(doc.getElementById("abc")); // [object HTMLBodyElement]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 归属它的 {{domxref("DOMImplementation")}} 接口。
