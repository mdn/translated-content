---
title: String.prototype.search()
slug: Web/JavaScript/Reference/Global_Objects/String/search
---

{{JSRef}}

**`search()`** 方法用于在 {{jsxref("String")}} 对象中执行正则表达式的搜索，寻找匹配项。

{{EmbedInteractiveExample("pages/js/string-search.html")}}

## 语法

```js-nolint
search(regexp)
```

### 参数

- `regexp`

  - : 一个正则表达式对象，或者具有 [`Symbol.search`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search) 方法的任意对象。

    如果 `regexp` 不是 `RegExp` 对象，并且不具有 `Symbol.search` 方法，则会使用 `new RegExp(regexp)` 将其隐式转换为 {{jsxref("RegExp")}}。

### 返回值

如果匹配成功，则返回正则表达式在字符串中首次匹配的索引；否则，返回 `-1`。

## 描述

`String.prototype.search()` 方法的实现非常简单——它只是将该字符串作为调用实参拥有的 `Symbol.search` 方法的第一个参数。实际的实现来自于 [`RegExp.prototype[@@search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)。

`regexp` 的 `g` 标志对 `search()` 方法的结果没有影响，搜索总是以正则表达式的 `lastIndex` 为 0 进行。有关 `search()` 方法行为的更多信息，请参阅 [`RegExp.prototype[@@search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)。

当你想知道字符串中是否存在某个模式，并且*还*想知道它在字符串中的索引时，可以使用 `search()` 方法。

- 如果你只想知道某个模式是否存在，请使用 {{jsxref("RegExp.prototype.test()")}} 方法，它返回一个布尔值。
- 如果你需要获取匹配文本的内容，请使用 {{jsxref("String.prototype.match()", "match()")}} 或 {{jsxref("RegExp.prototype.exec()")}}。

## 示例

### 使用 search()

下面的示例中用两个不同的正则表达式对同一个字符串执行搜索匹配，得到一个成功匹配（正数返回值）和一个失败匹配（`-1`）。

```js
const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re)); // 返回 4，这是第一个大写字母“J”的索引
console.log(str.search(reDot)); // 返回 -1，找不到点符号“.”
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.search` 的 polyfill，修复并实现了 `Symbol.search` 支持等现代行为](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [在 JavaScript 中使用正则表达式](/zh-CN/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- [`RegExp.prototype[@@search]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@search)
