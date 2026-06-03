---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
---

**`splice()`** 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。

{{InteractiveExample("JavaScript Demo: Array.splice()")}}

```js interactive-example
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## 語法

```js-nolint
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

### 參數

- `start`
  - : 陣列中要開始改動的元素索引（起始為 0）。若索引大於陣列長度，則實際開始的索引值會被設為陣列長度。若索引為負，則會從陣列中最後一個元素開始往前改動（起始為 -1）且若其絕對值大於陣列的長度，則會被設為 0。
- `deleteCount` {{optional_inline}}
  - : 一個表示欲刪除的原陣列元素數量的整數。若省略了 `deleteCount`，或假如其值大於 `array.length - start`（也就是 `deleteCount` 大於 `start` 算起的剩餘元素數量），則所有從 `start` 開始到陣列中最後一個元素都會被刪除。若 `deleteCount` 為 0 或是負數，則不會有元素被刪除。 因此，你應該給定至少一個欲加入的新元素（見下方說明）。
- `item1, item2, ...` {{optional_inline}}
  - : 從 `start` 開始，要加入到陣列的元素。 如果你沒有指定任何元素，則 `splice()` 只會依照 `start` 和 `deleteCount` 刪除陣列的元素。

### 回傳值

一個包含被刪除的元素陣列。如果只有一個元素被刪除，依舊是回傳包含一個元素的陣列。 倘若沒有元素被刪除，則會回傳空陣列。

## 說明

如果你插入的元素數量和刪除的數量不同，則回傳的陣列長度也會和原先的不同。

## 範例

### 從索引 2 的位置開始，刪除 0 個元素並插入「drum」

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// myFish 為 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 為 [], 沒有元素被刪除
```

### 從索引 3 的位置開始，刪除 1 個元素

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed 為 ["mandarin"]
// myFish 為 ["angel", "clown", "drum", "sturgeon"]
```

### 從索引 2 的位置開始，刪除 1 個元素並插入「trumpet」

```js
var myFish = ["angel", "clown", "drum", "sturgeon"];
var removed = myFish.splice(2, 1, "trumpet");

// myFish 為 ["angel", "clown", "trumpet", "sturgeon"]
// removed 為 ["drum"]
```

### 從索引 0 的位置開始，刪除 2 個元素並插入「parrot」、「anemone」和「blue」

```js
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish 為 ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed 為 ["angel", "clown"]
```

### 從索引 2 的位置開始，刪除 2 個元素

```js
var myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish 為 ["parrot", "anemone", "sturgeon"]
// removed 為 ["blue", "trumpet"]
```

### 從索引 -2 的位置開始，刪除 1 個元素

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(-2, 1);

// myFish 為 ["angel", "clown", "sturgeon"]
// removed 為 ["mandarin"]
```

### 從索引 2 的位置開始，刪除所有元素（含索引 2）

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2);

// myFish 為 ["angel", "clown"]
// removed 為 ["mandarin", "sturgeon"]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.push()", "push()")}} / {{jsxref("Array.prototype.pop()", "pop()")}} — add/remove elements from the end of the array
- {{jsxref("Array.prototype.unshift()", "unshift()")}} / {{jsxref("Array.prototype.shift()", "shift()")}} — add/remove elements from the beginning of the array
- {{jsxref("Array.prototype.concat()", "concat()")}} — returns a new array comprised of this array joined with other array(s) and/or value(s)
