---
title: Document.scripts
slug: Web/API/Document/scripts
---

{{ ApiRef() }}

### 概述

返回一个{{ domxref("HTMLCollection") }}对象，包含了当前文档中所有{{ HTMLElement("script") }}元素的集合。

### 语法

```plain
var scriptList = document.scripts;
```

`scriptList` 是一个 {{ domxref("HTMLCollection") }} 对象。你可以像使用数组一样通过索引来获取其中包含的 {{ HTMLElement("script") }} 元素。

### 例子

下例演示了如何查看当前页面是否包含有{{ HTMLElement("script") }}元素。

```js
var scripts = document.scripts;

if (scripts.length) {
  alert("该页面存在 script 标签！");
}
```

### 浏览器兼容性

{{Compat}}
