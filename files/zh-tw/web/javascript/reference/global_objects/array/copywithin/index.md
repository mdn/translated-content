---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

**`copyWithin()`** 方法會對陣列的一部分進行淺拷貝至同一陣列的另一位置並回傳此陣列，而不修改其大小。

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## 語法

```plain
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
```

### 參數

- `target`
  - : 要複製序列（sequence）至該位置的索引（起始為 0）。若為負數，`target` 將會自陣列末項開始計算。假如 `target` 大於等於 `arr.length`，則沒有項目會被複製。如果 `target` 的索引在 `start` 之後，則拷貝的序列將會被修剪以符合 `arr.length`。
- `start` {{optional_inline}}
  - : 開始拷貝的起始元素索引（起始為 0）。若為負數，`start` 將會自陣列末項開始計算。如果省略 `start`，`copyWithin` 將會自陣列首項開始複製（預設為 0）。
- `end` {{optional_inline}}
  - : 結束拷貝的結尾元素索引（起始為 0）。`copyWithin` 會拷貝至此索引，但不包含 `end`。若為負數，`end` 將會自陣列末項開始計算。如果省略 `end`，`copyWithin` 將會一路拷貝至陣列末項（預設至 `arr.length`）。

### 回傳值

被修改後的陣列。

## 描述

The `copyWithin` works like C and C++'s `memmove`, and is a high-performance method to shift the data of an {{jsxref("Array")}}. This especially applies to the {{jsxref("TypedArray/copyWithin", "TypedArray")}} method of the same name. The sequence is copied and pasted as one operation; pasted sequence will have the copied values even when the copy and paste region overlap.

The `copyWithin` function is intentionally _generic_, it does not require that its this value be an {{jsxref("Array")}} object.

The `copyWithin` method is a mutable method. It does not alter the length of `this`, but will change its content and create new properties if necessary.

## 範例

```js
[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3);
// {0: 1, 3: 1, length: 5}

// ES2015 Typed Arrays are subclasses of Array
var i32a = new Int32Array([1, 2, 3, 4, 5]);

i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// On platforms that are not yet ES2015 compliant:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

## Polyfill

```js
if (!Array.prototype.copyWithin) {
  Array.prototype.copyWithin =
    // Array: Number[, Number[, Number]]
    function copyWithin(target, start, stop) {
      var positiveT = target >= 0,
        positiveS = (start = start | 0) >= 0,
        length = this.length,
        zero = 0,
        r = function () {
          return (+new Date() * Math.random()).toString(36);
        },
        delimiter = "\b" + r() + "-" + r() + "-" + r() + "\b",
        hold;

      stop = stop || this.length;
      hold = this.slice
        .apply(
          this,
          positiveT ? [start, stop] : positiveS ? [start, -target] : [start],
        )
        .join(delimiter);

      return (
        this.splice.apply(
          this,
          positiveT
            ? [target, stop - start, hold]
            : positiveS
            ? [target, stop, hold]
            : [target, start, hold],
        ),
        this.join(delimiter).split(delimiter).slice(zero, length)
      );
    };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array")}}
