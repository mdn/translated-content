---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
---

{{JSRef}}

**`fill()`** 方法會將陣列中索引的第一個到最後一個的每個位置全部填入一個靜態的值。

{{InteractiveExample("JavaScript Demo: Array.fill()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
```

## 語法

```plain
arr.fill(value[, start[, end]])
```

### 參數

- `value`
  - : 欲填入陣列的值。
- `start` {{optional_inline}}
  - : 起始的索引值，預設為 0。
- `end` {{optional_inline}}
  - : 結束的索引值，預設為 `this.length`（即陣列的長度）。

### 回傳值

修改後的陣列。

## 說明

要填入的元素區間為 \[`start`, `end`)，意即包含 `start` 但不包含 `end`。

**`fill`** 方法採用了三個傳入引數（arguments），分別為`value`、`start` 及 `end`。`start` 和 `end` 為可選引數，其預設值分別為 `0` 和 `this` 物件（該陣列）的 `length`。

若 `start` 為負數，則此方法會將其換算成 `length+start`，`length` 即該陣列的長度。同理，若 `end` 為負數，其會被換算成 `length+end`。

**`fill`** 函式刻意地被設計成通用的函式，它不需要 `this` 物件一定是一個陣列物件。此外，它是可變動的（mutable）方法，意即會修改 `this` 物件本身並回傳，而非只是回傳拷貝。

當 **`fill`** 方法獲得一個傳入的物件，會將傳入的物件位置進行複製，並把其參考值（reference）之拷貝填入陣列中。

## 範例

```js
[1, 2, 3].fill(4); // [4, 4, 4]
[1, 2, 3].fill(4, 1); // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

## Polyfill

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, "fill", {
    value: function (value) {
      // 步驟 1 - 2。
      if (this == null) {
        throw new TypeError("this is null or not defined");
      }

      var O = Object(this);

      // 步驟 3 - 5。
      var len = O.length >>> 0;

      // 步驟 6 - 7。
      var start = arguments[1];
      var relativeStart = start >> 0;

      // 步驟 8。
      var k =
        relativeStart < 0
          ? Math.max(len + relativeStart, 0)
          : Math.min(relativeStart, len);

      // 步驟 9 - 10。
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      // 步驟 11。
      var final =
        relativeEnd < 0
          ? Math.max(len + relativeEnd, 0)
          : Math.min(relativeEnd, len);

      // 步驟 12。
      while (k < final) {
        O[k] = value;
        k++;
      }

      // 步驟 13。
      return O;
    },
  });
}
```

如果你需要支援實際上棄用的 JavaScript 引擎且其不支援 [`Object.defineProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的話，最好不要採用上述的工具來填充方法至 `Array.prototype`，因為你不能將這個方法設定為不可列舉（non-enumerable）的屬性。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
