---
title: String.prototype.fixed()
slug: Web/JavaScript/Reference/Global_Objects/String/fixed
---

{{deprecated_header}}

{{jsxref("String")}} 值的 **`fixed()`** 方法创建一个 {{HTMLElement("tt")}} 元素字符串，其中嵌入了调用的字符串（`<tt>str</tt>`），这会导致该字符串以等宽字体显示。

> [!NOTE]
> 所有 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。请使用 [DOM API](/zh-CN/docs/Web/API/Document_Object_Model)（例如 [`document.createElement()`](/zh-CN/docs/Web/API/Document/createElement)）代替。

## 语法

```js-nolint
fixed()
```

### 参数

无。

### 返回值

一个以 `<tt>` 开始标签开头的字符串，接着是文本 `str`，然后是 `</tt>` 结束标签。

## 示例

### 使用 fixed()

以下示例使用 `fixed` 方法来更改字符串的格式：

```js
const worldString = "Hello, world";
console.log(worldString.fixed()); // "<tt>Hello, world</tt>"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.fixed` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
