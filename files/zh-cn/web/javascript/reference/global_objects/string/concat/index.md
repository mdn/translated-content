---
title: String.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/String/concat
---

{{JSRef}}

**`concat()`** 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

## 语法

```plain
str.concat(str2, [, ...strN])
```

### 参数

- `str2 [, ...strN]`
  - : 需要连接到 `str` 的字符串。

### 返回值

一个新的字符串，包含参数所提供的连接字符串。

## 描述

`concat` 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 `concat` 方法并不影响原字符串。

如果参数不是字符串类型，它们在连接之前将会被转换成字符串。

## 性能

强烈建议使用[赋值操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)（`+`, `+=`）代替 `concat` 方法。

## 示例

### 使用 `concat`

下面的例子演示如何将多个字符串与原字符串合并为一个新字符串

```js
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Operators/Assignment_Operators", "Assignment operators", "", 1)}}
