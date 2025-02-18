---
title: Symbol.match
slug: Web/JavaScript/Reference/Global_Objects/Symbol/match
---

{{JSRef}}

**`Symbol.match`** 指定了匹配的是正则表达式而不是字符串。{{jsxref("String.prototype.match()")}} 方法会调用此函数。

{{InteractiveExample("JavaScript Demo: Symbol.match")}}

```js interactive-example
const regexp1 = /foo/;
// console.log('/foo/'.startsWith(regexp1));
// Expected output (Chrome): Error: First argument to String.prototype.startsWith must not be a regular expression
// Expected output (Firefox): Error: Invalid type: first can't be a Regular Expression
// Expected output (Safari): Error: Argument to String.prototype.startsWith cannot be a RegExp

regexp1[Symbol.match] = false;

console.log("/foo/".startsWith(regexp1));
// Expected output: true

console.log("/baz/".endsWith(regexp1));
// Expected output: false
```

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

## 参见

- [`core-js` 中 `Symbol.match` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Symbol.matchAll")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("String.prototype.match()")}}
- [`RegExp.prototype[Symbol.match]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.match)
