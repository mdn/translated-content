---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`small()`** 方法创建一个 {{HTMLElement("small")}} 元素字符串，其中嵌入了调用的字符串（`<small>str</small>`），从而使该字符串以小号字体显示。

> [!NOTE]
> 所有 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)（例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)）代替。

## 语法

```js-nolint
small()
```

### 参数

无。

### 返回值

一个以 `<small>` 开始标签开头的字符串，接着是文本 `str`，最后是 `</small>` 结束标签。

## 示例

### 使用 small()

以下示例使用字符串方法更改字符串的大小：

```js
const worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

使用 {{domxref("HTMLElement/style", "element.style")}} 对象，你可以获取元素的 `style` 属性并以更通用的方式进行操作，例如：

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.small` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
