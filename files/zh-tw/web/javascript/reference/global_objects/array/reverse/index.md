---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef}}

**`reverse()`** 方法會[_原地_（in place）](https://zh.wikipedia.org/wiki/原地算法)反轉（reverse）一個陣列。陣列中的第一個元素變為最後一個，而最後一個元素則變成第一個。

{{InteractiveExample("JavaScript Demo: Array.reverse()")}}

```js interactive-example
const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]
```

## 語法

```js-nolint
a.reverse()
```

### 回傳值

反轉後的陣列。

## 描述

`reverse` 方法將原地（in place）變換（transposes）呼叫此方法的陣列物件之元素至其顛倒的位置，改變原陣列後，並回傳此陣列之參考位址（reference）。

## 範例

### 反轉陣列中之元素

下列範例建立了一個包含三個元素的陣列 `a`，接著反轉此陣列。呼叫 `reverse()` 會回傳一個反轉後的原陣列 `a` 之參考。

```js
var a = ["one", "two", "three"];
var reversed = a.reverse();

console.log(a); // ['three', 'two', 'one']
console.log(reversed); // ['three', 'two', 'one']
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
