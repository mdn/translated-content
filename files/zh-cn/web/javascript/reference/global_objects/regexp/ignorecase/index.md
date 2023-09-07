---
title: RegExp.prototype.ignoreCase
slug: Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
---

{{JSRef("Global_Objects", "RegExp")}}

## 概述

**`ignoreCase`** 属性表明正则表达式是否使用了 "`i`" 标志。`ignoreCase` 是正则表达式实例的只读属性。

{{js_property_attributes(0,0,0)}}

## 描述

`ignoreCase` 的值是布尔对象，如果使用了"`i`" 标志，则返回 `true`；否则，返回 `false`。"`i`" 标志意味着在字符串进行匹配时，应该忽略大小写。

你无法直接更改此属性。

## 示例

### 示例：使用 `ignoreCase`

```js
var regex = new RegExp("foo", "i");

console.log(regex.ignoreCase); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
