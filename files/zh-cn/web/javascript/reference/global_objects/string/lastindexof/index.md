---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

{{jsxref("String")}} 的 **`lastIndexOf()`** 方法搜索该字符串并返回指定子字符串最后一次出现的索引。它可以接受一个可选的起始位置参数，并返回指定子字符串在小于或等于指定数字的索引中的最后一次出现的位置。

{{EmbedInteractiveExample("pages/js/string-lastindexof.html", "shorter")}}

## 语法

```js-nolint
lastIndexOf(searchString)
lastIndexOf(searchString, position)
```

### 参数

- `searchString`

  - : 要搜索的子字符串。所有值都会[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`lastIndexOf()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。

- `position` {{optional_inline}}

  - : 该方法返回指定子字符串在小于或等于 `position` 的位置中的最后一次出现的索引，默认为 `+Infinity`。如果 `position` 大于调用字符串的长度，则该方法将搜索整个字符串。如果 `position` 小于 `0`，则行为与 `0` 相同，即该方法只在索引 `0` 处查找指定的子字符串。

    - `'hello world hello'.lastIndexOf('world', 4)` 返回 `-1`——因为虽然子字符串 `world` 在索引 `6` 处出现，但该位置不小于或等于 `4`。

    - `'hello world hello'.lastIndexOf('hello', 99)` 返回 `12`——因为小于或等于 `99` 的位置中，最后一次出现 `hello` 的位置是索引 `12`。

    - `'hello world hello'.lastIndexOf('hello', 0)` 和 `'hello world hello'.lastIndexOf('hello', -5)` 都返回 `0`——因为两者都导致该方法只在索引 `0` 处查找 `hello`。

### 返回值

如果找到了 `searchString`，则返回最后一次出现的索引，否则返回 `-1`。

## 描述

字符串的索引从 0 开始：字符串第一个字符的索引为 `0`，字符串最后一个字符的索引为字符串长度减 1。

```js
"canal".lastIndexOf("a"); // 返回 3
"canal".lastIndexOf("a", 2); // 返回 1
"canal".lastIndexOf("a", 0); // 返回 -1
"canal".lastIndexOf("x"); // 返回 -1
"canal".lastIndexOf("c", -5); // 返回 0
"canal".lastIndexOf("c", 0); // 返回 0
"canal".lastIndexOf(""); // 返回 5
"canal".lastIndexOf("", 2); // 返回 2
```

### 区分大小写

`lastIndexOf()` 方法区分大小写。例如，以下表达式返回 `-1`：

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // 返回 -1
```

## 示例

### 使用 indexOf() 和 lastIndexOf()

以下示例使用 {{jsxref("String.prototype.indexOf()", "indexOf()")}} 和 `lastIndexOf()` 在字符串 `"Brave, Brave New World"` 中查找值。

```js
const anyString = "Brave, Brave New World";

console.log(anyString.indexOf("Brave")); // 0
console.log(anyString.lastIndexOf("Brave")); // 7
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
