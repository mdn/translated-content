---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實例的 **`filter()`** 方法會建立一個給定陣列部分的[淺複製](/zh-TW/docs/Glossary/Shallow_copy)，過濾掉未通過所提供函式所實作測試的給定陣列元素。

{{InteractiveExample("JavaScript Demo: Array.prototype.filter()", "shorter")}}

```js interactive-example
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// 預期輸出：Array ["exuberant", "destruction", "present"]
```

## 語法

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

### 參數

- `callbackFn`
  - : 針對陣列中每個元素執行的函式。它應回傳一個[真值](/zh-TW/docs/Glossary/Truthy)以保留該元素於結果陣列中，否則回傳[偽值](/zh-TW/docs/Glossary/Falsy)。該函式會接收以下引數：
    - `element`
      - : 陣列中當前處理的元素。
    - `index`
      - : 陣列中當前處理元素的索引。
    - `array`
      - : 调用 `filter()` 的陣列。
- `thisArg` {{optional_inline}}
  - : 執行 `callbackFn` 時用作 `this` 的值。請參閱[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 回傳值

一個包含通過測試元素的給定陣列[淺複製](/zh-TW/docs/Glossary/Shallow_copy)。若無元素通過測試，則回傳空陣列。

## 描述

`filter()` 方法是一個[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它會對陣列中的每個元素调用一次提供的 `callbackFn` 函式，並根據 `callbackFn` 回傳的[真值](/zh-TW/docs/Glossary/Truthy)來構建一個新陣列。不通過 `callbackFn` 測試的陣列元素不會包含在新陣列中。如需更多關於這些方法運作方式的資訊，請閱讀[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)章節。

`callbackFn` 只會針對陣列中已賦值的索引调用，不會對[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)中的空槽调用。

`filter()` 方法是[通用的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)。它僅期望 `this` 值具有 `length` 屬性及整數鍵屬性。

## 範例

### 過濾掉所有較小的值

以下範例使用 `filter()` 建立一個過濾後的陣列，去除所有小於 10 的元素。

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// 過濾後為 [12, 130, 44]
```

### 找出陣列中的所有質數

以下範例回傳陣列中的所有質數：

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### 從 JSON 中過濾無效條目

以下範例使用 `filter()` 建立一個過濾後的 JSON，僅包含非零且為數值的 `id` 元素。

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log("過濾後的陣列\n", arrByID);
// 過濾後的陣列
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log("無效條目數量 =", invalidEntries);
// 無效條目數量 = 5
```

### 在陣列中搜尋

以下範例使用 `filter()` 根據搜尋條件過濾陣列內容。

```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * 根據搜尋條件（查詢）過濾陣列項目
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
```

### 使用 callbackFn 的第三個引數

`array` 引數在你想存取陣列中其他元素時特別有用，尤其是當你沒有現有的變數指向該陣列時。以下範例首先使用 `map()` 從每個名稱中提取數字 ID，然後使用 `filter()` 選出比其鄰居大的 ID。

```js
const names = ["JC63", "Bob132", "Ursula89", "Ben96"];
const greatIDs = names
  .map((name) => parseInt(name.match(/\d+/)[0], 10))
  .filter((id, idx, arr) => {
    // 若沒有 arr 引數，無法輕鬆存取中間陣列，除非將其儲存到變數中。
    if (idx > 0 && id <= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false;
    return true;
  });
console.log(greatIDs); // [132, 96]
```

`array` 引數*不是*正在構建的陣列——在回呼函式中無法存取正在構建的陣列。

### 在稀疏陣列上使用 filter()

`filter()` 會跳過空槽。

```js
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]
```

### 在非陣列物件上调用 filter()

`filter()` 方法會讀取 `this` 的 `length` 屬性，然後存取每個鍵為小於 `length` 的非負整數的屬性。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // filter() 忽略此項，因為 length 為 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b"));
// [ 'a', 'b' ]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Array.prototype.filter` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.filter` 的 es-shims polyfill](https://www.npmjs.com/package/array.prototype.filter)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
