---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`blink()`** 方法创建一个字符串，其在 `<blink>str</blink>` 中嵌入字符串，这使得字符串在旧版浏览器中闪烁。

> **备注：** 所有 [HTML 包装方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#html_包装器方法)都已被弃用，并且仅为了兼容性而标准化。对于 `blink()` 方法，`<blink>` 元素本身已在现代浏览器中移除，并且闪烁文本违反了多个无障碍标准。请避免以任何方式使用该元素。

## 语法

```js-nolint
blink()
```

### 返回值

一个以 `<blink>` 开始标签开头的字符串，接着是文本 `str`，然后是 `</blink>` 结束标签。

## 示例

### 使用 blink()

以下示例使用已弃用的字符串方法来更改字符串的格式：

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

- [`core-js` 中 `String.prototype.blink` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
