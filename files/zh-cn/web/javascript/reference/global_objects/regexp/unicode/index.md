---
title: RegExp.prototype.unicode
slug: Web/JavaScript/Reference/Global_Objects/RegExp/unicode
---

{{JSRef}}

**`unicode`** 属性表明正则表达式带有"`u`" 标志。 `unicode` 是正则表达式独立实例的只读属性。

{{js_property_attributes(0, 0, 1)}}

## 描述

`unicode` 的值是 {{jsxref("Boolean")}}，并且如果使用了 "`u`" 标志则为 `true`；否则为 `false`。"`u`" 标志开启了多种 Unicode 相关的特性。使用 "u" 标志，任何 Unicode 代码点的转义都会被解释。

你不能直接修改这个属性，它是只读的。

## 示例

### 使用 `unicode` 属性

```js
var regex = new RegExp("\u{61}", "u");

console.log(regex.unicode); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("RegExp.lastIndex")}}
- {{jsxref("RegExp.prototype.global")}}
- {{jsxref("RegExp.prototype.ignoreCase")}}
- {{jsxref("RegExp.prototype.multiline")}}
- {{jsxref("RegExp.prototype.source")}}
- {{jsxref("RegExp.prototype.sticky")}}
