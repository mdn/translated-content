---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
---

{{JSRef}} {{deprecated_header}}

**`fontcolor()`**方法创建一个{{HTMLElement("font")}}的 HTML 元素让字符串被显示成指定的字体颜色。

> **备注：** \<font> 元素已经在在[HTML5 中](/zh-CN/docs/Web/Guide/HTML/HTML5)被移除并且不应该在使用。替代的是，Web 开发者应该使用[CSS](/zh-CN/docs/Web/CSS)属性。

## 语法

```plain
str.fontcolor(color)
```

### 参数

- `color`
  - : 代表颜色的一个字符串，可以是三个一组的十六进制的 RGB 值，也可以是一个颜色名称的字符串字面量，颜色名称的字符串字面量被列在了这里 [CSS 颜色参考](/zh-CN/docs/Web/CSS/color_value)。

### 返回值

一个包含一个{{HTMLElement("font")}} HTML 元素的字符串。

## 描述

如果你表示的颜色为十六进制 RGB 三原色，则必须使用的格式`rrggbb`。例如，对于橙红色的十六进制 RGB 值是红色=FA，绿色=80，和蓝=72，所以橙红色的 RGB 三原色`"FA8072"`。

## 示例

### 使用 `fontcolor()`

下面的示例使用`fontcolor()`方法来改变字符串的颜色，通过产生一个被 HTML \<font> 标签包裹的字符串。

```js
var worldString = "Hello, world"
console.log(worldString.fontcolor('red') + ' is red in this line');
// <font color="red">Hello, world </font> is red in this line"
console.log（worldString.fontcolor('FF00') + ' is red in hexadecimal'
// <font color="FF00">Hello，world </font> is red in hexadecimal
```

和{{domxref("HTMLElement.style","element.style")}}对象一起，你可以访问元素的`style`属性，并且更随意的去操纵它，例如：

```js
document.getElementById("yourElemId").style.color = "red";
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.fontsize()")}}
