---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 的 **`big()`** 方法创建一个字符串，将该字符串嵌入到一个 `<big>` 元素中（`<big>str</big>`），从而使该字符串以大字体显示。

> **备注：** 所有的 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。对于 `big()` 方法来说，在 [HTML5](/zh-CN/docs/Glossary/HTML5) 中已经移除了 `<big>` 元素，不应再使用它。Web 开发者应该使用 [CSS](/zh-CN/docs/Web/CSS) 属性来实现相应的效果。

## 语法

```js-nolint
big()
```

### 返回值

一个以 `<big>` 开始标签开头的字符串，然后是文本 `str`，最后是 `</big>` 结束标签。

## 示例

### 使用 big()

下面的例子使用了字符串方法来改变一个字符串的字体大小：

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</font>
```

使用 {{domxref("HTMLElement.style", "element.style")}} 对象，你能更通用地获得和操作该元素的 `style` 属性，例如：

```js
document.getElementById("yourElemId").style.fontSize = "2em";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.big` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
