---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

**`includes()`** 方法执行区分大小写的搜索，以确定是否可以在一个字符串中找到另一个字符串，并根据情况返回 `true` 或 `false`。

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## 语法

```js-nolint
includes(searchString)
includes(searchString, position)
```

### 参数

- `searchString`
  - : 要在 `str` 中搜索的字符串。不能是正则表达式。
- `position` {{optional_inline}}

  - : 在字符串中开始搜索 `searchString` 的位置。（默认为 `0`。）

- `searchString`
  - : 一个要在 `str` 中查找的字符串。[不能是正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)。所有非正则表达式的值都会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`includes()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。
- `position` {{optional_inline}}
  - : 在字符串中开始搜索 `searchString` 的位置。默认值为 `0`。

### 返回值

如果在给定的字符串中找到了要搜索的字符串（包括 `searchString` 为空字符串的情况），则返回 **`true`**，否则返回 **`false`**。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `searchString` [是一个正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，则会抛出。

## 描述

此方法可以帮你判断一个字符串是否包含另外一个字符串。

### 区分大小写

`includes()` 方法是区分大小写的。例如，下面的表达式会返回 `false`：

```js
"Blue Whale".includes("blue"); // 返回 false
```

你可以通过将原字符串和搜索字符串全部转换为小写来解决这个约束：

```js
"Blue Whale".toLowerCase().includes("blue"); // 返回 true
```

## 示例

### 使用 includes()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.includes` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
