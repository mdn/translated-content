---
title: Document.body
slug: Web/API/Document/body
---

{{ApiRef}}

## 概述

**`Document.body`** 表示当前文档中的 {{HTMLElement("body")}} 元素或者 {{HTMLElement("frameset")}} 元素，或 `null` 如果不存在此类元素。

## 值

以下之一：

- {{HTMLElement("body")}}
- {{HTMLElement("frameset")}}
- `null`

## 示例

```js
// 如果 HTML 结构为<body id="oldBodyElement"></body>,则：
alert(document.body.id); // "oldBodyElement"

var aNewBodyElement = document.createElement("body");

aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

## 介绍

`document.body` 是包含当前页面内容的元素，对于拥有 `<body>` 元素的文档来说，返回的是 `<body>` 元素，对于一个拥有 `<frameset>` 元素的文档来说，返回的是最外层的 `<frameset>` 元素 .

`该属性是可写的`,且为该属性赋的值必须是一个 `<body>` 元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.head")}}
