---
title: document.body
slug: Web/API/Document/body
---

{{ApiRef}}

## 概述

返回当前文档中的`<body>元素`或者`<frameset>元素`.

## 语法

```plain
var objRef = document.body;
document.body = objRef;
```

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

- [DOM Level 2 HTML: HTMLDocument.body](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-56360201)
