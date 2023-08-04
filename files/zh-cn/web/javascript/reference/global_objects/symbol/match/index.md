---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
---

{{JSRef}}

**`Symbol.match`** 指定了匹配的是正则表达式而不是字符串。{{jsxref("String.prototype.match()")}} 方法会调用此函数。

{{EmbedInteractiveExample("pages/js/symbol-match.html")}}

## 描述

此函数还用于标识对象是否具有正则表达式的行为。比如， {{jsxref("String.prototype.startsWith()")}}，{{jsxref("String.prototype.endsWith()")}} 和 {{jsxref("String.prototype.includes()")}} 这些方法会检查其第一个参数是否是正则表达式，是正则表达式就抛出一个{{jsxref("TypeError")}}。现在，如果 `match` symbol 设置为 `false`（或者一个 {{Glossary("Falsy", "假值")}}），就表示该对象不打算用作正则表达式对象。

{{js_property_attributes(0,0,0)}}

## 示例

### 禁止表达式检查

下面代码会抛出一个 {{jsxref("TypeError")}}：

```js
"/bar/".startsWith(/bar/);

// Throws TypeError，因为 /bar/ 是一个正则表达式
// 且 Symbol.match 没有修改。
```

但是，如果你将 `Symbol.match` 置为 `false`，使用 `match` 属性的表达式检查会认为该对象不是正则表达式对象。`startsWith` 和 `endsWith` 方法将不会抛出 `TypeError`。

```js
var re = /foo/;
re[Symbol.match] = false;
"/foo/".startsWith(re); // true
"/baz/".endsWith(re); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@match", "RegExp.prototype[@@match]()")}}
