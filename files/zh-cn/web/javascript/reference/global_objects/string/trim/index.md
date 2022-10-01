---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
---

{{JSRef}}

**`trim()`** 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR 等）。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 语法

```plain
str.trim()
```

### 返回值

一个代表调用字符串两端去掉空白的新字符串。

## 描述

`trim()` 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。

## 例子

### 使用 `trim()`

下面的例子中将显示小写的字符串 'foo':

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个 .trim() 例子，只从一边删除

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

## 兼容旧环境

如果 `trim()` 不存在，可以在所有代码前执行下面代码

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
