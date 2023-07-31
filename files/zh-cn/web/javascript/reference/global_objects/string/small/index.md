---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}} {{deprecated_header}}

**`small()`** 方法的作用是创建一个使字符串显示小号字体的 {{HTMLElement("small")}} 标签。

## 语法

```plain
str.small()
```

### 返回值

带有 {{HTMLElement("small")}} 标签的字符串。

## 描述

`small()` 方法会 将一个字符串嵌入到`<small>` 标签中： `"<small>str</small>"`。

## 示例

### 使用 `small()` 函数

为了改变一个字符串的字体大小，下面的例子使用了字符串中的方法：

```js
var worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

使用{{domxref("HTMLElement.style", "element.style")}}对象，你能更加一般地获得和操作该元素的属性，比如：

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
