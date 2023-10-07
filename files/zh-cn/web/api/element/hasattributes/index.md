---
title: Node.hasAttributes
slug: Web/API/Element/hasAttributes
---

{{ApiRef}}

## 概述

`hasAttributes`属性返回一个布尔值`true`或`false`,来表明当前元素节点是否有至少一个的属性 (attribute).

## 语法

```
result = targetNode.hasAttributes();
```

## 示例

```js
var t1 = document.getElementById("table-data");

if (t1.hasAttributes()) {
  // 可以用 t1.attributes 来读取该元素的所有属性
}
```

## 规范

- [hasAttributes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeHasAttrs)
