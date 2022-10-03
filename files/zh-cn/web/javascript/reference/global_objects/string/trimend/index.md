---
title: String.prototype.trimRight()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
original_slug: Web/JavaScript/Reference/Global_Objects/String/TrimRight
---

{{JSRef}}

`trimEnd()` 方法从一个字符串的末端移除空白字符。trimRight() 是这个方法的别名。

{{EmbedInteractiveExample("pages/js/string-trimend.html")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## 语法

```plain
str.trimEnd();
str.trimRight();
```

### 返回值

一个新字符串，表示从调用字串的末（右）端除去空白。

## 描述

`trimEnd()` / `trimRight()`方法移除原字符串右端的连续空白符并返回，`trimEnd()` / `trimRight()`方法并不会直接修改原字符串本身。

### 别名

为了与 {{jsxref("String.prototype.padEnd")}} 等函数保持一致，标准方法名称为`trimEnd`。但是，出于 Web 兼容性原因，`trimRight`仍然是`trimEnd`的别名。在某些引擎中，这意味着：

```js
String.prototype.trimRight.name === "trimEnd";
```

## 示例

### 使用`trimEnd()`

下面的例子输出了小写的字符串" foo":

```js
var str = "   foo  ";

alert(str.length); // 8

str = str.trimRight();  // 或写成 str = str.trimEnd();
console.log(str.length); // 6
console.log(str);       // '   foo'
```

## Specifications

| Specification                                                                                                                                               | Status  | Comment                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------- |
| [`String.prototype.{trimStart,trimEnd}`](https://github.com/tc39/proposal-string-left-right-trim/#stringprototypetrimstart--stringprototypetrimend)proposal | Stage 4 | Expected to be part of ES2019 |

## Browser compatibility

The compatibility table in this page is generated from structured data. If you'd like to contribute to the data, please check out <https://github.com/mdn/browser-compat-data> and send us a pull request.

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
