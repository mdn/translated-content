---
title: RegExp.prototype.global
slug: Web/JavaScript/Reference/Global_Objects/RegExp/global
---

{{JSRef("Global_Objects", "RegExp")}}

## 概述

**`global`** 属性表明正则表达式是否使用了 "`g`" 标志。`global` 是一个正则表达式实例的只读属性。

{{js_property_attributes(0,0,0)}}

## 描述

`global` 的值是布尔对象，如果使用了 "`g`" 标志，则返回 `true`；否则返回 `false`。 "`g`" 标志意味着正则表达式应该测试字符串中所有可能的匹配。

你无法直接更改此属性。

## 示例

### 示例：使用 `global`

```js
var regex = new RegExp("foo", "g");

console.log(regex.global); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.lastIndex")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
