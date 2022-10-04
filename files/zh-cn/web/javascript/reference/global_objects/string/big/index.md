---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef}} {{deprecated_header}}

**`big()`**方法的作用是创建一个使字符串显示大号字体的{{HTMLElement("big")}}标签。

> **备注：** \<big> 元素在[HTML5](/zh-CN/docs/Web/Guide/HTML/HTML5)中已经被移除了，不应该再使用它。取而代之的是 Web 开发人员应该使用[CSS](/zh-CN/docs/Web/CSS) 属性。

## 语法

```plain
str.big()
```

### 返回值

带有 {{HTMLElement("big")}}标签的字符串。

## 描述

`big()` 方法会将一个字符串嵌入到 `<big>` 标签中：`"<big>str</big>"`。

## 示例

### 使用 `big()` 函数

下面的例子使用了字符串方法来改变一个字符串的字体大小：

```js
var worldString = 'Hello, world';

console.log(worldString.small());     // <small>Hello, world</small>
console.log(worldString.big());       // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Hello, world</fontsize>
```

使用 {{domxref("HTMLElement.style", "element.style")}} 对象，你能更加一般地获得和操作该元素的 style 属性，比如：

```js
document.getElementById('yourElemId').style.fontSize = '2em';
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
