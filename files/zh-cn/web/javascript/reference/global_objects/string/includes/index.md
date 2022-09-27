---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

**`includes()`** 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。

## 语法

```plain
str.includes(searchString[, position])
```

### 参数

- `searchString`
  - : 要在此字符串中搜索的字符串。
- `position` {{optional_inline}}
  - : 从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 `0`。

### 返回值

如果当前字符串包含被搜寻的字符串，就返回 **`true`**；否则返回 **`false`**。

## 描述

这个方法可以帮你判断一个字符串是否包含另外一个字符串。

### 区分大小写

`includes()` 方法是区分大小写的。例如，下面的表达式会返回 **`false`** ：

```plain
'Blue Whale'.includes('blue'); // returns false
```

## 兼容补丁

这个方法已经被加入到 ECMAScript 6 标准中，但未必在所有的 JavaScript 实现中都可以使用。然而，你可以轻松地 polyfill 这个方法：

```plain
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

## 示例

### 使用 includes()

```plain
var str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## String.prototype.contains()

在 Firefox 18 - 39 中，这个方法的名称叫 `contains()`。由于下面的理由，在{{bug(1102219)}}中，它被重命名为 `includes()` ：

据报道，在 Firefox 17 上，一些使用 [MooTools](http://mootools.net/) 1.2 的网站会崩溃掉。这个版本的 MooTools 会检查函数 `String.prototype.contains()` 是否存在，如果不存在的话，MooTools 就添加它自己的函数。通过在 Firefox 17 中引入这个函数，检查更改的行为在一定程度上导致了基于 MooTools 的 `String.prototype.contains()` 函数的代码实现中断。结果是，当 [MooTools 的拓展](https://bugzilla.mozilla.org/show_bug.cgi?id=789036#c32) 导致 [MooTools 1.2.6](http://mootools.net/blog/2013/02/19/mootools-1-2-6-released) 版本的发布，此实现在 Firefox 17 中不可用和 `String.prototype.contains()` 在随后一个版本 Firefox 18 上是可用的。

MooTools 1.3 会强制使用它自己版本的函数 `String.prototype.contains()`，因此，依赖它的网站不会崩溃掉。然而，你应该注意此方法在 [MooTools 1.3](http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains) 签名和 ECMAScript 6 签名中的不同（在第二个参数）。后来，[为了与 ES6 标准一致在 MooTools 1.5 版本及以上更改了签名](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)。

## 相关链接

- {{jsxref("Array.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
