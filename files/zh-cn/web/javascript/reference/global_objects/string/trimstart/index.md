---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
---

{{JSRef}}

{{jsxref("String")}} 的 **`trimStart()`** 方法会从字符串的开头移除空白字符，并返回一个新的字符串，而不会修改原始字符串。`trimLeft()` 是该方法的别名。

{{EmbedInteractiveExample("pages/js/string-trimstart.html")}}

## 语法

```js-nolint
trimStart()

trimLeft()
```

### 返回值

一个新的字符串，表示从 `str` 的开头（左侧）去除空白字符后的结果。空白字符定义为[空白符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#空白符)加上[行终止符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#行终止符)。

如果 `str` 的开头没有空白字符，仍然会返回一个新的字符串（实际上是 `str` 的副本）。

### 别名

在 {{jsxref("String/trim", "trim()")}} 标准化后，引擎也实现了非标准的 `trimLeft` 方法。然而，为了与 {{jsxref("String/padStart", "padStart()")}} 保持一致，在该方法标准化时，选择了 `trimStart` 作为其名称。出于 Web 兼容性的考虑，`trimLeft` 仍然作为 `trimStart` 的别名，它们引用的是完全相同的函数对象。在某些引擎中，这意味着：

```js
String.prototype.trimLeft.name === "trimStart";
```

## 示例

### 使用 trimStart()

下面的示例从 `str` 的开头去除空白字符，但不会去除结尾的空白字符。

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.trimStart` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
