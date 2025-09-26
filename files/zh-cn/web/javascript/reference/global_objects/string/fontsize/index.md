---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`fontsize()`** 方法会创建一个 {{HTMLElement("font")}} 元素字符串，其中嵌入了调用字符串（`<font size="...">str</font>`），从而导致该字符串以指定的字体大小显示。

> [!NOTE]
> 所有的 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已经被弃用，并且仅为了兼容性而标准化。对于 `fontsize()` 方法来说，`<font>` 元素本身在 [HTML5](/zh-CN/docs/Glossary/HTML5) 中已被移除，不应再使用。Web 开发者应该使用 [CSS](/zh-CN/docs/Web/CSS) 属性来代替。

## 语法

```js-nolint
fontsize(size)
```

### 参数

- `size`
  - : 一个介于 1 和 7 之间的整数，或表示介于 1 和 7 之间的有符号整数的字符串。

### 返回值

一个以 `<font size="size">` 开始标签开头的字符串（`size` 中的双引号被替换为 `&quot;`），然后是文本 `str`，最后是 `</font>` 结束标签。

## 描述

`fontsize()` 方法本身只是简单地将字符串部分连接在一起，没有进行任何验证或规范化。然而，为了创建有效的 {{HTMLElement("font")}} 元素，当你将大小指定为整数时，你将 `str` 的字体大小设置为 7 个定义的大小之一。你还可以将 `size` 指定为字符串，例如 `"-2"` 或 `"+3"`，以相对于默认值 3 调整 `str` 的字体大小。

## 示例

### 使用 fontsize()

以下示例使用字符串方法来改变字符串的大小：

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
```

使用 {{domxref("HTMLElement/style", "element.style")}} 对象，你可以获取元素的 `style` 属性并进行更通用的操作，例如：

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.fontsize` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
