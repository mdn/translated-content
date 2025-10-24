---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實體的 **`copyWithin()`** 方法會將陣列中的部分元素進行淺複製，並將其放置於陣列內的另一個位置，同時返回該陣列，但不改變其長度。

{{InteractiveExample("JavaScript Demo: Array.prototype.copyWithin()")}}

```js interactive-example
const array1 = ["a", "b", "c", "d", "e"];

// 將索引 3 的元素複製到索引 0
console.log(array1.copyWithin(0, 3, 4));
// 預期輸出：Array ["d", "b", "c", "d", "e"]

// 將索引 3 到結尾的所有元素複製到索引 1
console.log(array1.copyWithin(1, 3));
// 預期輸出：Array ["d", "d", "e", "d", "e"]
```

## 語法

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 參數

- `target`
  - : 要複製序列至的以零為基底的索引，會[轉換為整數](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#整數轉換)。這對應到 `start` 位置的元素將被複製至 `target`，而 `start` 和 `end` 之間的所有元素會依序複製至後續索引。
    - 負數索引會從陣列末尾開始計算 — 若 `-array.length <= target < 0`，則使用 `target + array.length`。
    - 若 `target < -array.length`，則使用 `0`。
    - 若 `target >= array.length`，則不會複製任何內容。
    - 若 `target` 在正規化後位於 `start` 之後，則只會複製至 `array.length` 結尾（換句話說，`copyWithin()` 不會擴展陣列）。
- `start`
  - : 要開始複製元素的以零為基底的索引，會[轉換為整數](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#整數轉換)。
    - 負數索引會從陣列末尾開始計算 — 若 `-array.length <= start < 0`，則使用 `start + array.length`。
    - 若 `start < -array.length`，則使用 `0`。
    - 若 `start >= array.length`，則不會複製任何內容。
- `end` {{optional_inline}}
  - : 要結束複製元素的以零為基底的索引，會[轉換為整數](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#整數轉換)。`copyWithin()` 會複製至 `end` 之前的元素，但不包含 `end`。
    - 負數索引會從陣列末尾開始計算 — 若 `-array.length <= end < 0`，則使用 `end + array.length`。
    - 若 `end < -array.length`，則使用 `0`。
    - 若 `end >= array.length` 或 `end` 未提供或為 `undefined`，則使用 `array.length`，使其複製至結尾。
    - 若 `end` 所對應的位置在 `start` 所對應的位置之前或相同，則不會複製任何內容。

### 回傳值

被修改的陣列。

## 描述

`copyWithin()` 方法類似於 C 和 C++ 的 `memmove`，它是一種高效能的方法，可用來移動 {{jsxref("Array")}} 的資料。這在 {{jsxref("TypedArray/copyWithin", "TypedArray")}} 方法中尤其適用。該方法會將選定的序列一次性複製並貼上，即使複製區域與貼上區域重疊，貼上的序列仍然會保留已複製的值。

由於 `undefined` 轉換為整數時會變為 `0`，因此省略 `start` 參數的效果與傳入 `0` 相同，這會導致整個陣列被複製到目標位置，相當於向右位移，並裁剪右邊界、重複左邊界。此行為可能會讓你的程式碼讀者感到困惑，因此建議顯式傳入 `0` 作為 `start`。

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]；將所有元素向右移動 2 個位置
```

`copyWithin()` 方法是一個[可變異方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#複製方法和變異方法)。它不會改變 `this` 的長度，但會改變 `this` 的內容，並在必要時新增或刪除屬性。

`copyWithin()` 方法會保留空槽。如果被複製的區域是[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)，則空槽對應的新索引會[被刪除](/zh-TW/docs/Web/JavaScript/Reference/Operators/delete)，並仍然為空槽。

`copyWithin()` 方法是[通用的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)。它只要求 `this` 具有 `length` 屬性及整數鍵屬性。雖然字串也類似陣列，但此方法不適用於字串，因為字串是不可變的。

## 範例

### 使用 copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### 在稀疏陣列上使用 copyWithin()

`copyWithin()` 會傳播空槽。

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### 在非陣列物件上調用 copyWithin()

`copyWithin()` 方法會讀取 `this` 的 `length` 屬性，並操作其中的整數索引。

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// 屬性「3」被刪除，因為複製來源是空槽
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Array.prototype.copyWithin` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.copyWithin` 的 `es-shims` Polyfill](https://www.npmjs.com/package/array.prototype.copywithin)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
