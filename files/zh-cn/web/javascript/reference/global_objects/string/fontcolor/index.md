---
title: String.prototype.fontcolor()
slug: Web/JavaScript/Reference/Global_Objects/String/fontcolor
---

{{deprecated_header}}

{{jsxref("String")}} 值的 **`fontcolor()`** 方法会创建一个 {{HTMLElement("font")}} 元素字符串，其中嵌入了调用字符串（`<font color="...">str</font>`），从而导致该字符串以指定的字体颜色显示。

> [!NOTE]
> 所有的 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已经被弃用，并且仅为了兼容性而标准化。对于 `fontcolor()` 方法来说，`<font>` 元素本身在 [HTML5](/zh-CN/docs/Glossary/HTML5) 中已被移除，不应再使用。Web 开发者应该使用 [CSS](/zh-CN/docs/Web/CSS) 属性来代替。

## 语法

```js-nolint
fontcolor(color)
```

### 参数

- `color`
  - : 该参数可以接受十六进制 RGB 三元组或字符串字面量来表示颜色。颜色名称的字符串字面量可以参考 [CSS 颜色参考](/zh-CN/docs/Web/CSS/Reference/Values/color_value)。

### 返回值

一个以 `<font color="color">` 开头的字符串（`color` 中的双引号被替换为 `&quot;`），然后是文本 `str`，最后以 `</font>` 结束标记。

## 描述

`fontcolor()` 方法本身只是简单地将字符串部分连接在一起，没有进行任何验证或规范化。然而，为了创建有效的 {{HTMLElement("font")}} 元素，如果你将颜色表示为十六进制 RGB 三元组，你必须使用格式 `rrggbb`。例如，salmon（鲑鱼色）的十六进制 RGB 值为红色 = FA，绿色=80，蓝色=72，因此 salmon 的 RGB 三元组为 `"FA8072"`。

## 示例

### 使用 fontcolor()

下面的示例使用 `fontcolor()` 方法通过生成一个带有 HTML `<font>` 元素的字符串来改变字符串的颜色。

```js
const worldString = "Hello, world";

console.log(`${worldString.fontcolor("red")} is red in this line`);
// '<font color="red">Hello, world</font> is red in this line'

console.log(
  `${worldString.fontcolor("FF00")} is red in hexadecimal in this line`,
);
// '<font color="FF00">Hello, world</font> is red in hexadecimal in this line'
```

使用 {{domxref("HTMLElement/style", "element.style")}} 对象，你可以获取元素的 `style` 属性并进行更通用的操作，例如：

```js
document.getElementById("yourElemId").style.color = "red";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 的 `String.prototype.fontcolor` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
