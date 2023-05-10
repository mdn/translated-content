---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

**`includes()`** 方法执行区分大小写的搜索，以确定是否可以在另一个字符串中找到一个字符串，并根据情况返回 `true` 或 `false`。

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

### 返回值

如果当前字符串包含被搜寻的字符串，就返回 **`true`**，否则返回 **`false`**。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `searchString` 是一个[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes)。

## 描述

此方法可以帮你判断一个字符串是否包含另外一个字符串。

### 区分大小写

`includes()` 方法是区分大小写的。例如，下面的表达式会返回 `false`：

```js
"Blue Whale".includes("blue"); // returns false
```

你可以通过将原字符串和搜索字符串全部转换为小写来解决这个约束：

```js
"Blue Whale".toLowerCase().includes("blue"); // returns true
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

- [Polyfill of `String.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
