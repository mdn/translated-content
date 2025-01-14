---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

{{JSRef}}

**`Array.from()`** 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 `Array` 實體。

{{EmbedInteractiveExample("pages/js/array-from.html")}}

### 參數

- `arrayLike`
  - : 將類陣列或可迭代物件轉換成陣列
- `mapFn {{Optional_inline}}`
  - : Map 函式走訪陣列中的每一個元素。
- `thisArg {{Optional_inline}}`
  - : `mapFn` 函式執行時的 `this` 對象。

### 回傳值

一個新的 {{jsxref("Array")}} 實體。

## 描述

`Array.from()` 讓你從這些物件建立陣列：

- 類陣列（array-like）物件（物件具有 `length` 屬性以及索引化（indexed）的元素）或
- [可迭代物件](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)（物件具有可以讓你利用迭代的方式取得它自己本身的元素，像是 {{jsxref("Map")}} 和 {{jsxref("Set")}}）。

`Array.from()` 有個可選用的參數 `mapFn`，它允許你在建立出新的陣列實體之後，可以接著對陣列（或是其子類別物件）中的每一個元素執行 {{jsxref("Array.prototype.map", "map")}} 函式。更清楚地說，`Array.from(obj, mapFn, thisArg)` 跟 `Array.from(obj).map(mapFn, thisArg)` 的結果是一樣的，除非所建立的不是一個可用的中介陣列（intermediate array）。這對於某些陣列的子類別來說就很重要，例如[型別陣列](/zh-TW/docs/Web/JavaScript/Guide/Typed_arrays)，因為中介陣列必須要把內容值做一番截頭去尾的操作來讓它們變成適合的物件型態。

`from()` 方法的 `length` 屬性值為 1。

在 ES2015，類別語法允許原生內建的物件以及使用者自定義的物件可以被子類別化（sub-classing）；因此，靜態方法像是 `Array.from`，是「繼承」了 `Array` 的子類別後，然後建立新的子類別的實體，而不是建立 `Array` 本身。

## 範例

### 從字串產生陣列

```js
Array.from("foo");
// ["f", "o", "o"]
```

### 從集合產生陣列

```js
var s = new Set(["foo", window]);
Array.from(s);
// ["foo", window]
```

### 從映射產生陣列

```js
var m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]
```

### 從類陣列物件（arguments）產生陣列

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [1, 2, 3]
```

### 使用箭頭函式及 `Array.from`

```js
// 使用箭頭函式作為 map 函式來
// 操作元素
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 產生數值序列
// 因為陣列中的每個位置都會被初始化為 `undefined`，
// 下方 `v` 會是 `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

## Polyfill

`Array.from` 在 ECMA-262 標準第六版（ES2015）被加入；在某些實作可能尚未被支援。你可以將下面的程式碼插入到妳的 script 的最前面，如果你使用的工作環境不具有原生支援 `Array.from` 的能力。這個演算法根據 ECMA-262 第六版中的規範實現，假定 `Object` 及 `TypeError` 它們本身已具有值且 `callback.call` 對應到原本 {{jsxref("Function.prototype.call")}} 的值。除此之外，因為 Polyfill 無法實現真正的迭代，這個實作不支援 ECMA-262 第六版中所定義的泛型迭代。

```js
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined",
        );
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function",
          );
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
