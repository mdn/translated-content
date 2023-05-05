---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

The **`fontsize()`** method creates a {{HTMLElement("font")}} HTML element that causes a string to be displayed in the specified font size.

> **备注：** The \<font> element has been removed in [HTML5](/zh-CN/docs/Web/Guide/HTML/HTML5) and shouldn't be used anymore. Instead web developers should use [CSS](/zh-CN/docs/Web/CSS) properties.

## 语法

```plain
str.fontsize(size)
```

### 参数

- `size`
  - : An integer between 1 and 7, a string representing a signed integer between 1 and 7.

### 返回值

A string containing a {{HTMLElement("font")}} HTML element.

## 描述

When you specify size as an integer, you set the font size of `str` to one of the 7 defined sizes. When you specify `size` as a string such as "-2", you adjust the font size of `str` relative to the size set in the {{HTMLElement("basefont")}} tag.

## 示例

### 使用 `fontsize()` 方法

The following example uses string methods to change the size of a string:

```js
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

With the {{domxref("HTMLElement.style", "element.style")}} object you can get the element's `style` attribute and manipulate it more generically, for example:

```js
document.getElementById('yourElemId').style.fontSize = '0.7em';
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
