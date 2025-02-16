---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
---

{{JSRef}}

**`toLowerCase()`** 函式会回传将字符串转换为英文小写字母后的结果。

{{InteractiveExample("JavaScript Demo: String.toLowerCase()")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## 语法

```js-nolint
str.toLowerCase()
```

### 回传值

回传一组将原字串英文内容转换成英文小写字母后的结果。

## 描述

The `toLowerCase()` 函式会回传一组将原字符串英文内容转换成英文小写字母后的结果。 `toLowerCase()` 并不会影响到原字符串 `str` 的内容值。

## 范例

### 使用 `toLowerCase()`

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## 规范

{{Specifications}}

## 浏览器相容性

{{Compat}}

## 參見

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
