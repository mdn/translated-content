---
title: Element.className
slug: Web/API/Element/className
---

{{APIRef("DOM")}}

## 概述

**className** 获取或设置指定元素的 class 属性的值。

## 语法

```
let cName = elementNodeReference.className;

elementNodeReference.className = cName;
```

- *cName*是一个字符串变量，表示当前元素的`class`属性的值，可以是由空格分隔的多个`class`属性值。

## 示例

```js
let elm = document.getElementById("div1");

if (elm.className == "fixed") {
  // 跳过 class 属性为特定值的元素
  goNextElement();
}
```

## 注释

> **备注：** 使用名称`className`而不是`class`作为属性名，是因为"class" 在 JavaScript 中是个保留字。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("element.classList")}}
