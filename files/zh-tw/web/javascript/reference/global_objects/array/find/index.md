---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
---

{{JSRef}}

**`find()`** 方法會回傳第一個滿足所提供之測試函式的元素**值**。否則回傳 {{jsxref("undefined")}}。

{{InteractiveExample("JavaScript Demo: Array.find()")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12
```

也可以參考 {{jsxref("Array.findIndex", "findIndex()")}} 方法，它回傳被找到的元素在陣列中的**索引**，而不是它的值。

If you need to find the position of an element or whether an element exists in an array, use {{jsxref("Array.prototype.indexOf()")}} or {{jsxref("Array.prototype.includes()")}}.

## 語法

```plain
arr.find(callback[, thisArg])
```

### 參數

- `callback`

  - : 會處理陣列中每個元素的函數，它使用三個參數：

    - `element`
      - : 在陣列中正被處理的元素。
    - `index`{{optional_inline}}
      - : 在陣列中正被處理的元素的索引。
    - `array`{{optional_inline}}
      - : 呼叫 `find` 的陣列。

- `thisArg` `{{Optional_inline}}`
  - : 執行 `callback` 函式時被當作 `this` 的物件。

### 回傳值

若元素通過測試則為其值；否則為 {{jsxref("undefined")}}。

## 描述

`find` 方法會對每個元素執行一次 `callback` 函式，直到找到一個讓 `callback` 函式回傳 true 的元素。當元素被找到的時候，`find` 會立刻回傳該元素，否則 `find` 會回傳 {{jsxref("undefined")}}。`callback` 會被使用於陣列索引自 `0` 至 `length - 1`，並會被用於每一個的陣列索引，而不僅是那些有賦值的索引。這代表此方法在稀疏陣列（sparse arrays）上的效能可能較其他只存取已賦值索引的方法來的差。

`callback` 函式被呼叫時會傳入三個參數：元素的值、元素索引，以及正被迭代的陣列物件。

如果提供 `thisArg` 參數予 `find`，其將會被當作 `callback` 每次被呼叫的 `this`。若是沒提供，則會使用 {{jsxref("undefined")}}。

`find` 並不會改變呼叫該方法的陣列。

The range of elements processed by `find` is set before the first invocation of `callback`. Elements that are appended to the array after the call to `find` begins will not be visited by `callback`. If an existing, unvisited element of the array is changed by `callback`, its value passed to the visiting `callback` will be the value at the time that `find` visits that element's index; elements that are deleted are still visited.

## 範例

### Find an object in an array by one of its properties

```js
var inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

### 在陣列中找質數

以下範例在陣列中找出一個屬於質數的元素，如果裡面不含質數則回傳 {{jsxref("undefined")}}。

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

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

The following examples show that non-existent and deleted elements are visited and that the value passed to the callback is their value when visited.

```js
// Declare array with no element at index 2, 3 and 4
var a = [0, 1, , , , 5, 6];

// Shows all indexes, not just those that have been assigned values
a.find(function (value, index) {
  console.log("Visited index " + index + " with value " + value);
});

// Shows all indexes, including deleted
a.find(function (value, index) {
  // Delete element 5 on first iteration
  if (index == 0) {
    console.log("Deleting a[5] with value " + a[5]);
    delete a[5];
  }
  // Element 5 is still visited even though deleted
  console.log("Visited index " + index + " with value " + value);
});
```

## Polyfill

這個方法在 ECMAScript 2015 中首次被規範，可能尚未在所有 JavaScript 應用中被實作。你可以使用以下程式片段來 polyfill `Array.prototype.find`：

```js
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
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
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
  });
}
```

If you need to support truly obsolete JavaScript engines that don't support [`Object.defineProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty), it's best not to polyfill `Array.prototype` methods at all, as you can't make them non-enumerable.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.findIndex()")}} – find and return an index
- {{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
- {{jsxref("Array.prototype.filter()")}} – find all matching elements
- {{jsxref("Array.prototype.every()")}} – test all elements together
