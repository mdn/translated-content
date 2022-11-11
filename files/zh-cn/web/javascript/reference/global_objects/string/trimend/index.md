---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
---

{{JSRef}}

**`trimEnd()`** 方法会删除字符串末尾的空格。`trimRight()`是这个方法的别名。

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

## 语法

```js-nolint
trimEnd()

trimRight()
```

### 返回值

一个表示 `str` 的新字符串，去掉了其末尾（右侧）的空格。

如果 `str` 的结尾没有空格，仍然会返回一个新的字符串（本质上是 `str` 的副本），不会抛出异常。

### 别名

为了与 {{jsxref("String.prototype.padEnd")}} 等函数保持一致，标准方法名称为 `trimEnd`。但是，出于 Web 兼容性原因，`trimRight` 仍然是 `trimEnd` 的别名。在某些引擎中，这意味着：

```js
String.prototype.trimRight.name === "trimEnd";
```

## 示例

### 使用 trimEnd()

下面的例子显示小写字符串 `'foo'`：

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
