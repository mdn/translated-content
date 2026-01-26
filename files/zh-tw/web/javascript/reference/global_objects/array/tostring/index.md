---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
---

**`toString()`** 方法將回傳一個可以表達該陣列及其元素的字串。

{{InteractiveExample("JavaScript Demo: Array.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## 語法

```js-nolint
toString()
```

### 回傳值

一個表達該陣列及該陣列中元素的字串。

## 描述

{{jsxref("Array")}} 覆寫了 {{jsxref("Object")}} 中的 `toString` 方法。
陣列的 `toString` 方法會將陣列中的每個元素用逗號串接起來成為一個字串，並回傳該字串。

當你在會以文字型態表示的地方使用了陣列，或是在字串的串接中使用到了陣列，JavaScript 會自動為該陣列使用`toString` 方法。

### ECMAScript 5 語義

始於 JavaScript 1.8.5 (Firefox 4)，並且和 ECMAScript 5 的語義一致。
`toString()` 方法是通用的，任何的物件都可以使用。 {{jsxref("Object.prototype.toString()")}} 會被呼叫，並回傳結果。

## 範例

### 如何使用 toString

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Object.prototype.toSource()")}}
