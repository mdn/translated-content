---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef}}

## 概述

返回当前文档中的 {{ HTMLElement("head") }} 元素。如果有多个 `<head>` 元素，则返回第一个。

## 语法

```plain
var objRef = document.head;
```

## 示例

```js
// HTML 部分源码为：<head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert(document.head === document.querySelector("head")); // true
```

## 附注

`document.head` 是个只读属性，为该属性赋值只会静默失败，如果在严格模式中，则会抛出`TypeError`异常。

## 浏览器兼容性

{{Compat}}

## 规范

- [HTML5: DOM Tree Accessors](http://www.w3.org/TR/html5/dom.html#dom-tree-accessors)
