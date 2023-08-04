---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

**`concat()`** 方法将字符串参数连接到调用的字符串，并返回一个新的字符串。

{{EmbedInteractiveExample("pages/js/string-concat.html")}}

## 语法

```js-nolint
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …, */ strN)
```

### 参数

- `strN`
  - : 要连接到 `str` 的一个或多个字符串。

### 返回值

一个包含所提供的多个字符串文本组合的新字符串。

## 描述

`concat()` 函数将字符串参数连接到调用的字符串并返回一个新字符串。对原字符串或返回的字符串所做的更改不会影响另一个字符串。

如果参数不是字符串类型，它们在连接之前将会被转换成字符串。

`concat()` 方法与[加号/字符串连接运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)（`+`，`+=`）非常相似，不同之处在于 `concat()` 直接将其参数强制转换为字符串进行连接，而加号运算符首先将其操作数强制转换为原始值，然后再进行连接。有关更多信息，请参阅 [`+` 运算符的参考页面](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)。

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
