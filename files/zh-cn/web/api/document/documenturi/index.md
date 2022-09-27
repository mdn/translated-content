---
title: document.documentURI
slug: Web/API/Document/documentURI
---

{{ApiRef("DOM")}}{{domxref("Document")}} 接口的属性 **`documentURI`** 以字符串的形式返回文档的位置（location）。在最初的 DOM3 定义中，这个属性是可读/写的。在现代的 DOM 标准（DOM4）中，它是只读的。

## 语法

```plain
var string = document.documentURI;
```

## 备注

HTML 文档有一个 {{domxref("document.URL")}} 属性返回同样的值。但是不像 `URL`，`documentURI` 适用于所有类型的文档。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
