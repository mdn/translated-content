---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

**`unshift()`** 方法會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。

{{InteractiveExample("JavaScript Demo: Array.unshift()")}}

```js interactive-example
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

## 語法

```plain
arr.unshift(element1[, ...[, elementN]])
```

### 參數

- `elementN`
  - : 欲添加至陣列開頭的元素。

### 回傳值

呼叫此方法之物件的新 {{jsxref("Array.length", "length")}} 屬性值。

## 描述

`unshift` 方法會將一或多個給定值插入至一個類陣列（array-like）物件的開頭。

`unshift` 被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "called", "", 1)}} 或 {{jsxref("Function.apply", "applied", "", 1)}} 應用於類似陣列的物件上。若欲應用此方法的物件不包含代表一系列啟始為零之數字屬性序列長度的 `length` 屬性，可能是不具任何意義的行為。

## 範例

```js
var arr = [1, 2];

arr.unshift(0); // 執行後的結果是3，其代表處理後的陣列長度
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.concat()")}}
