---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實例的 **`fill()`** 方法會將陣列中某個範圍內的所有元素更改為靜態值，並回傳修改後的陣列。

{{InteractiveExample("JavaScript Demo: Array.prototype.fill()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// 從索引 2 到索引 4 位置填入 0
console.log(array1.fill(0, 2, 4));
// 預期輸出：Array [1, 2, 0, 0]

// 從索引 1 開始填入 5
console.log(array1.fill(5, 1));
// 預期輸出：Array [1, 5, 5, 5]

console.log(array1.fill(6));
// 預期輸出：Array [6, 6, 6, 6]
```

## 語法

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 參數

- `value`
  - : 要填入陣列的值。請注意，陣列中的所有元素都會是這個確切的值。如果 `value` 是物件，則陣列中的每個槽位都會參考該物件。
- `start` {{optional_inline}}
  - : 從零開始的索引，指定填充的起始位置，會[轉換為整數](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#整數轉換)。
    - 負數索引表示從陣列末尾開始計算——如果 `-array.length <= start < 0`，則會使用 `start + array.length`。
    - 若 `start < -array.length` 或省略 `start`，則會使用 `0`。
    - 若 `start >= array.length`，則不會填充任何索引。
- `end` {{optional_inline}}
  - : 從零開始的索引，指定填充的結束位置，會[轉換為整數](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#整數轉換)。`fill()` 會填充到 `end` 之前的位置（不包含 `end`）。
    - 負數索引表示從陣列末尾開始計算——如果 `-array.length <= end < 0`，則會使用 `end + array.length`。
    - 若 `end < -array.length`，則會使用 `0`。
    - 若 `end >= array.length`、`end` 省略或為 `undefined`，則會使用 `array.length`，使所有元素都被填充。
    - 若 `end` 指定的位置早於或等於 `start` 指定的位置，則不會填充任何元素。

### 回傳值

修改後的陣列，填充了 `value`。

## 描述

`fill()` 方法屬於[變異方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#複製方法和變異方法)，它不會改變 `this` 的長度，但會更改 `this` 的內容。

`fill()` 方法也會填充[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)中的空槽，使其值變為 `value`。

`fill()` 方法是[通用的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)，它只要求 `this` 物件具有 `length` 屬性。雖然字串具有類似陣列的特性，但因為字串是不可變的，無法對其使用此方法。

> [!NOTE]
> 如果對長度為 0 的空陣列（`length = 0`）使用 `Array.prototype.fill()`，則不會產生任何變化，因為陣列內沒有任何元素可供修改。若要在宣告陣列時使用 `Array.prototype.fill()`，請確保陣列的 `length` 為非零值。[參見範例](#使用_fill_來填充空陣列)。

## 範例

### 使用 fill()

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// 單一物件的參考，陣列中的每個槽位都指向相同的物件：
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### 使用 fill() 建立全為 1 的矩陣

此範例展示如何建立一個全為 1 的矩陣，類似於 Octave 或 MATLAB 的 `ones()` 函式。

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 建立長度為 4，且全部填入 1 的陣列
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### 使用 fill() 來填充空陣列

此範例展示如何填充一個陣列，使所有元素都設為特定值。`end` 參數不是必須的。

```js
const tempGirls = Array(5).fill("girl", 0);
```

請注意，該陣列最初是一個[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)，但 `fill()` 仍然能夠填充此陣列。

### 在非陣列物件上調用 fill()

`fill()` 方法會讀取 `this` 的 `length` 屬性，並將 `start` 到 `end` 之間的所有整數鍵屬性設定為 `value`。

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Array.prototype.fill` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
