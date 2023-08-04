---
title: RegExp.prototype.source
slug: Web/JavaScript/Reference/Global_Objects/RegExp/source
---

{{JSRef("Global_Objects", "RegExp")}}

## 概述

**`source`** 属性返回一个值为当前正则表达式对象的模式文本的字符串，该字符串不会包含正则字面量两边的斜杠以及任何的标志字符。

## 示例

```js
var regex = /fooBar/gi;

console.log(regex.source); // "fooBar"，不包含 /.../ 和 "ig"。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("RegExp.prototype.flags")}}
