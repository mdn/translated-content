---
title: HTMLTemplateElement.content
slug: Web/API/HTMLTemplateElement/content
---

{{APIRef("Web Components")}}

**`HTMLTemplateElement.content`** 属性返回 `<template>` 元素的模板内容（一个 {{domxref("DocumentFragment")}}）。

## 语法

```plain
var documentFragment = templateElement.content
```

## 示例

```js
var templateElement = document.querySelector("#foo");
var documentFragment = templateElement.content.cloneNode(true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("HTMLTemplateElement")}}
