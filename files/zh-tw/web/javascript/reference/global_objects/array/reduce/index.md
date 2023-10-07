---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

**`reduce()`** 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值。

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

## 語法

```js-nolint
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
```

### 參數

- `callback`

  - : 用於處理陣列中每個元素的函式，可傳入四個參數：

    - `accumulator`
      - : 用來累積回呼函式回傳值的累加器（accumulator）或 `initialValue`（若有提供的話，詳如下敘）。累加器是上一次呼叫後，所回傳的累加數值。
    - `currentValue`
      - : 原陣列目前所迭代處理中的元素。
    - `currentIndex` {{optional_inline}}
      - : 原陣列目前所迭代處理中的元素之索引。若有傳入 `initialValue`，則由索引 0 之元素開始，若無則自索引 1 之元素開始。
    - `array` {{optional_inline}}
      - : 呼叫 `reduce()` 方法的陣列。

  - `initialValue` {{optional_inline}}
    - : 於第一次呼叫 `callback` 時要傳入的累加器初始值。若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 `reduce()` 方法且沒有提供累加器初始值，將會發生錯誤。

### 回傳值

簡化後的結果值。

## 描述

`reduce()` 會對每一個目前迭代到的陣列元素（除了空值以外）執行 `callback` 函式，回呼函式會接收四個參數：

- `accumulator`
- `currentValue`
- `currentIndex`
- `array`

當回呼函式第一次被呼叫時，`accumulator` 與 `currentValue` 的值可能為兩種不同的狀況：若在呼叫 `reduce()` 時有提供 `initialValue`，則 `accumulator` 將會等於 `initialValue`，且 `currentValue` 會等於陣列中的第一個元素值；若沒有提供 `initialValue`，則 `accumulator` 會等於陣列的第一個元素值，且 `currentValue` 將會等於陣列的第二個元素值。

> **備註：** 假如 `initialValue` 未被提供，`reduce()` 將會跳過第一個陣列索引，從陣列索引 1 開始執行回呼函式。若有提供 `initialValue`，則會由陣列索引 0 開始執行。

若陣列為空且沒有提供 `initialValue`，將會拋出 {{jsxref("TypeError")}}。假如陣列只有一個元素（無論其索引位置為何）並且沒有提供 `initialValue`，或如果提供了 `initialValue` 但陣列為空，則此唯一的值將會被直接回傳*而不會呼叫 `callback` 函式*。

提供累加器初始值通常較為安全，因為在沒有傳入 `initialValue` 的情況下會有三種可能的輸出結果，如下列範例：

```js
var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() without initialValue
[{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
[{ x: 22 }].reduce(maxCallback); // { x: 22 }
[].reduce(maxCallback); // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[{ x: 22 }, { x: 42 }].map((el) => el.x).reduce(maxCallback2, -Infinity);
```

### reduce() 如何運作

假設 `reduce()` 以下例方式使用：

```js
[0, 1, 2, 3, 4].reduce(
  function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  },
);
```

所傳入的回呼函式將被呼叫四次，所傳入的參數與回傳值如下所示：

| `callback`  | `accumulator` | `currentValue` | `currentIndex` | `array`           | return value |
| ----------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| first call  | `0`           | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `1`          |
| second call | `1`           | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `3`          |
| third call  | `3`           | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `6`          |
| fourth call | `6`           | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `10`         |

`reduce()` 的最終回傳值將會是最後一次呼叫回呼函式的回傳值 (`10`)。

你也可以傳入一個{{jsxref("Functions/Arrow_functions", "箭頭函式","",1)}}來替代一個完整的函式。下方的程式碼執行的結果將與前述例子相同。

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
```

如果你有提供第二個參數值給 `reduce()`，執行的結果如下：

```js
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
}, 10);
```

| `callback`  | `accumulator` | `currentValue` | `currentIndex` | `array`           | return value |
| ----------- | ------------- | -------------- | -------------- | ----------------- | ------------ |
| first call  | `10`          | `0`            | `0`            | `[0, 1, 2, 3, 4]` | `10`         |
| second call | `10`          | `1`            | `1`            | `[0, 1, 2, 3, 4]` | `11`         |
| third call  | `11`          | `2`            | `2`            | `[0, 1, 2, 3, 4]` | `13`         |
| fourth call | `13`          | `3`            | `3`            | `[0, 1, 2, 3, 4]` | `16`         |
| fifth call  | `16`          | `4`            | `4`            | `[0, 1, 2, 3, 4]` | `20`         |

`reduce()` 執行的結果將會是 `20`。

## 範例

### 加總所有陣例之元素值

```js
var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
// sum is 6
```

另外，也可以寫成箭頭函式：

```js
var total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0);
```

### 攤平一個多維陣列

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

另外，也可以寫成箭頭函式：

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, cur) => acc.concat(cur), []);
```

### 計算相同元素數量並以物件鍵值顯示

```js
var names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### 使用 spread 運算子與給定初始值，結合物件中的陣列元素

```js
// friends - an array of objects
// where object field "books" - list of favorite books
var friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(
  function (prev, curr) {
    return [...prev, ...curr.books];
  },
  ["Alphabet"],
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### 移除陣列中的重複項目

```js
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result); //[1,2,3,4,5]
```

### 序列執行 Promise

```js
/**
 * Runs promises from promise array in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequense(arr) {
  return arr.reduce((promiseChain, currentPromise) => {
    return promiseChain.then((chainedResult) => {
      return currentPromise(chainedResult).then((res) => res);
    });
  }, Promise.resolve());
}

// promise function 1
function p1() {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// promise function 3
function p3(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 3);
  });
}

const promiseArr = [p1, p2, p3];
runPromiseInSequense(promiseArr).then((res) => {
  console.log(res); // 30
});
```

## Polyfill

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.21
// Reference: http://es5.github.io/#x15.4.4.21
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, "reduce", {
    value: function (callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError(
          "Array.prototype.reduce " + "called on null or undefined",
        );
      }
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError(
            "Reduce of empty array " + "with no initial value",
          );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    },
  });
}
```

如果還需要支援老舊到不支援 [`Object.defineProperty`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 的 JavaScript 引擎，最好不要 polyfill `Array.prototype` 方法，因為你無法令其不可枚舉（non-enumerable）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.reduceRight()")}}
