---
title: RegExp.prototype.multiline
slug: Web/JavaScript/Reference/Global_Objects/RegExp/multiline
---

{{JSRef("Global_Objects", "RegExp")}}

## 概述

**`multiline`** 属性表明正则表达式是否使用了 "`m`" 标志。`multiline` 是正则表达式实例的一个只读属性。

{{js_property_attributes(0,0,0)}}

## 描述

`multiline` 是一个布尔对象，如果使用了 "`m`" 标志，则返回 `true`；否则，返回 `false`。"`m`" 标志意味着一个多行输入字符串被看作多行。例如，使用 "`m`"，"`^`" 和 "`$`" 将会从只匹配正则字符串的开头或结尾，变为匹配字符串中任一行的开头或结尾。

你无法直接更改此属性。

## 示例

### 示例：使用 `multiline`

```js
var regex = new RegExp("foo", "m");

console.log(regex.multiline); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
