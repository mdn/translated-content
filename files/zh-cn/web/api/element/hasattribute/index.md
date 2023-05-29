---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
---

{{APIRef}}

## 概述

`hasAttribute` 返回一个布尔值，指示该元素是否包含有指定的属性（attribute）。

## 语法

```plain
var result = element.hasAttribute(attName);
```

- `result` 为返回的布尔值：`true` 或 `false`。
- `attName` 是一个字符串，表示属性的名称。

## 例子

```js
// 在为属性设置新值前检测该属性是否存在
var d = document.getElementById("div1");

if (d.hasAttribute("align")) {
  d.setAttribute("align", "center");
}
```

## 备注

{{DOMAttributeMethods}}

## 规范

- [DOM Level 2 Core: hasAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttr)
- [DOM Level 3 Core: hasAttribute](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-ElHasAttr)
