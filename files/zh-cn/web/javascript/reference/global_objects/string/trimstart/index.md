---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef}}

**`trimStart()`** 方法会删除字符串开头的空白字符。`trimLeft()` 是此方法的别名。

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 语法

```js-nolint
trimStart()

trimLeft()
```

### 返回值

一个表示 `str` 去掉了开头（左侧）的空白字符后的新字符串。

如果 `str` 的开头没有空白字符，仍然会返回一个新字符串（本质上是 `str` 的副本），不会抛出异常。

### 别名

为了与 {{jsxref("String.prototype.padStart")}} 等函数保持一致，标准方法名称为 `trimStart`。但是，出于 Web 兼容性原因，`trimLeft` 仍然是 `trimStart` 的别名。在某些引擎中，这意味着：

```js
String.prototype.trimLeft.name === "trimStart";
```

## 示例

### 使用 trimStart()

下面的例子显示小写字符串 `'foo'`：

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `String.prototype.trimStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
