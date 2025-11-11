---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
---

{{deprecated_header}}

{{jsxref("String")}} 值的 **`italics()`** 方法会创建一个 {{HTMLElement("i")}} 元素字符串，其中嵌入了调用的字符串（`<i>str</i>`），从而使该字符串以斜体显示。

> [!NOTE]
> 所有 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)（例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)）代替。

## 语法

```js-nolint
italics()
```

### 参数

无。

### 返回值

一个以 `<i>` 开始标签，然后是文本 `str`，最后是 `</i>` 结束标签的字符串。

## 示例

### 使用 italics()

下面的示例使用已弃用的字符串方法来更改字符串的格式：

```js
const worldString = "Hello, world";
console.log(worldString.blink()); // <blink>Hello, world</blink>
console.log(worldString.bold()); // <b>Hello, world</b>
console.log(worldString.italics()); // <i>Hello, world</i>
console.log(worldString.strike()); // <strike>Hello, world</strike>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js 中 `String.prototype.italics` 的 polyfill`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.strike()")}}
