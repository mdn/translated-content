---
title: String.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/@@iterator
---

{{JSRef}}

{{jsxref("String")}} 类型的 **`[@@iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)，并允许字符串与大多数期望传入可迭代对象的语法一起使用，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回一个[字符串迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它按 Unicode 码位迭代字符串值并以字符串的形式返回。

{{EmbedInteractiveExample("pages/js/string-iterator.html")}}

## 语法

```js-nolint
string[Symbol.iterator]()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它以字符串值中的 Unicode 码位生成单独的字符串。

## 描述

按 Unicode 码位迭代字符串。这意味着会将字素簇拆分，但代理对将被保留。

```js
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ
```

## 示例

### 使用 for...of 循环进行迭代

请注意，你很少需要直接调用该方法。`@@iterator` 方法的存在使得字符串[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，而像 `for...of` 循环这样的迭代语法会自动调用该方法以获取迭代器进行循环。

```js
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### 手动迭代

你仍然可以手动调用返回的迭代器对象的 `next()` 方法，以实现对迭代过程最大程度的控制。

```js
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype[@@iterator]` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
