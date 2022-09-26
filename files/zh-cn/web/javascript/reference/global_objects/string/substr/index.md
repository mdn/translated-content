---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}}

> **警告：** 尽管 `String.prototype.substr(…)` 没有严格被废弃 (as in "removed from the Web standards"), 但它被认作是遗留的函数并且可以的话应该避免使用。它并非 JavaScript 核心语言的一部分，未来将可能会被移除掉。如果可以的话，使用 [`substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 替代它。

**`substr()`** 方法返回一个字符串中从指定位置开始到指定字符数的字符。

## 语法

```plain
str.substr(start[, length])
```

### 参数

- `start`
  - : 开始提取字符的位置。如果为负值，则被看作 `strLength + start`，其中 `strLength` 为字符串的长度（例如，如果 `start` 为 `-3`，则被看作 `strLength + (-3)`）。
- `length`
  - : 可选。提取的字符数。

## 描述

`start` 是一个字符的索引。首字符的索引为 0，最后一个字符的索引为 字符串的长度减去 1。`substr` 从 `start` 位置开始提取字符，提取 `length` 个字符（或直到字符串的末尾）。

如果 `start` 为正值，且大于或等于字符串的长度，则 `substr` 返回一个空字符串。

如果 `start` 为负值，则 `substr` 把它作为从字符串末尾开始的一个字符索引。如果 `start` 为负值且 `abs(start)` 大于字符串的长度，则 `substr` 使用 0 作为开始提取的索引。注意负的 `start` 参数不被 Microsoft JScript 所支持。

如果 `length` 为 0 或负值，则 `substr` 返回一个空字符串。如果忽略 `length`，则 `substr` 提取字符，直到字符串末尾。

## 示例

### 例子：使用 `substr`

```js
var str = "abcdefghij";

console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
console.log("(-3): "     + str.substr(-3));    // (-3): hij
console.log("(1): "      + str.substr(1));     // (1): bcdefghij
console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):
```

## 兼容旧环境（Polyfill）

Microsoft's JScript 不支持负的 start 索引。如果你想充分利用该方法的功能，则需要使用下面的兼容性代码修复此 bug：

```js
// only run when the substr function is broken
if ('ab'.substr(-1) != 'b')
{
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // did we get a negative start, calculate how much it is
      // from the beginning of the string
      if (start < 0) start = this.length + start;

      // call the original function
      return substr.call(this, start, length);
    }
  }(String.prototype.substr);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
