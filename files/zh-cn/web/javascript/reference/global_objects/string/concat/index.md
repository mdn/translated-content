---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
l10n:
  sourceCommit: c7ee557d776d91998eeec005b6c794f03d6079ad
---

{{JSRef}}

{{jsxref("String")}} 值的 **`concat()`** 方法将字符串参数连接到调用的字符串上，并返回一个新的字符串。

{{InteractiveExample("JavaScript Demo: String.concat()")}}

```js interactive-example
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"
```

## 语法

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### 参数

- `str1`、……、`strN`
  - : 要连接到 `str` 的一个或多个字符串。尽管技术上允许，但不带参数地调用 `String.prototype.concat()` 毫无意义，因为它不会（像 {{jsxref("Array.prototype.concat()")}}）返回可观察的拷贝——字符串是不可变的。仅当你将一个字符串数组作为参数[展开](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)，并且该数组恰好为空时，才应该发生这种情况。

### 返回值

一个包含所提供的多个字符串文本组合的新字符串。

## 描述

`concat()` 函数将字符串参数连接到调用的字符串并返回一个新字符串。

如果参数不是字符串类型，它们在连接之前将会被转换成字符串。

`concat()` 方法与[加号/字符串连接运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)（`+`、`+=`）非常相似，不同之处在于 `concat()` 直接将其参数强制转换为字符串进行连接，而加号运算符首先将其操作数强制转换为原始值，然后再进行连接。有关更多信息，请参阅 [`+` 运算符的参考页面](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)。

## 示例

### 使用 concat()

下面的示例将多个字符串组合为一个新字符串。

```js
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.concat()")}}
- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
