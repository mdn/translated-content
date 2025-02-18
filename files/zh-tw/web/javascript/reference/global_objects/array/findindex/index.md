---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
---

{{JSRef}}

**`findIndex()`** 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 **index**（索引）。如果沒有符合的對象，將返回 -1 。

{{InteractiveExample("JavaScript Demo: Array.findIndex()")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

另請參見 {{jsxref("Array.find", "find()")}} 方法，它返回陣列中找到的元素的**值**，而不是其索引。

## 語法

```plain
arr.findIndex(callback[, thisArg])
```

### 參數

- `callback`

  - : 針對陣列中的每個元素，都會執行該回呼函式，執行時會自動傳入下面三個參數：

    - `element`
      - : 當前元素。
    - `index`{{optional_inline}}
      - : 當前元素的索引。
    - `array`{{optional_inline}}
      - : 呼叫 `findIndex` 的陣列。

- `thisArg`{{optional_inline}}
  - : 可選的。執行 **callback** 時作為 this 對象的值。

### 回傳值

An index in the array if an element passes the test; otherwise, **-1**.

## 描述

`findIndex` 方法對陣列中的每一個索引：`0..length-1`（含）的元素執行一次 `callback` 直到有一個 `callback` 返回 truthy 值（一個可強制轉型（coerces）為 `true` 的值）。如果找到了一個這樣的元素，則 `findIndex` 將會立刻返回此次迭代的索引。若回呼函式從未回傳一個 truthy 值，或陣列的 `length` 為 0，則 `findIndex` 將會返回 -1。不像其他的陣列方法如 `some` 那樣，於稀疏（sparse）陣列上 `callback` **仍會**被呼叫，即使該索引的項目在陣列中並不存在。

`callback` 被呼叫時會傳入三個參數：元素的值、元素的索引，以及被迭代的陣列物件。

如果一個 `thisArg` 參數被提供給 `findIndex`，它將會被當作 `this` 使用在每次回呼函式被調用的時候。如果沒有被提供，將會使用 {{jsxref("undefined")}}。

`findIndex` 不會修改呼叫此方法的陣列。

在第一次呼叫 `callback` 函式時會確定元素的索引範圍，因此在 `findIndex` 方法開始執行之後添加到陣列的新元素將不會被 `callback` 函式訪問到。如果陣列中一個尚未被 `callback` 函式訪問到的元素的值被 `callback` 函式所改變，那麼當 `callback` 函式訪問到它時，它的值是將是根據它在陣列中的索引所訪問到的當前值；被刪除的元素仍然會被訪問到。

## 範例

### 尋找陣列中首個質數元素的索引

以下的範例演示了如何查找一個陣列中首個質數元素的索引，找不到則返回 -1。

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

### 使用箭頭函式尋找索引

以下範例為使用箭頭函式尋找水果的索引。

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## Polyfill

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
  });
}
```

如果你需要相容過時的不支援 [`Object.defineProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的 JavaScript 引擎，最好不要使用 polyfill 來填充 `Array.prototype` 方法，因為無法使它們成為不可枚舉的（non-enumerable）屬性。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
