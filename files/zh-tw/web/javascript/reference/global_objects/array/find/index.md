---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實例的 **`find()`** 方法會回傳在提供的陣列中第一個通過所提供測試函式的元素。如果沒有任何值通過測試函式，則回傳 {{jsxref("undefined")}}。

- 如果你需要取得該元素在陣列中的**索引**，請使用 {{jsxref("Array/findIndex", "findIndex()")}}。
- 如果你需要找出某個**特定值的索引**，請使用 {{jsxref("Array/indexOf", "indexOf()")}}。（這與 {{jsxref("Array/findIndex", "findIndex()")}} 類似，但它是透過值的相等性來檢查每個元素，而非使用測試函式。）
- 如果你想知道某個值是否**存在**於陣列中，請使用 {{jsxref("Array/includes", "includes()")}}。它同樣是透過值的相等性來檢查每個元素，而非使用測試函式。
- 如果你想知道陣列中是否有任一元素通過所提供的測試函式，請使用 {{jsxref("Array/some", "some()")}}。
- 如果你想取得所有通過測試函式的元素，請使用 {{jsxref("Array/filter", "filter()")}}。

{{InteractiveExample("JavaScript Demo: Array.prototype.find()", "shorter")}}

```js interactive-example
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// 預期輸出：12
```

## 語法

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### 參數

- `callbackFn`
  - : 會對陣列中的每個元素執行的函式。此函式應回傳[真](/zh-TW/docs/Glossary/Truthy)值以指出找到符合條件的元素，否則應回傳[假](/zh-TW/docs/Glossary/Falsy)值。此函式被呼叫時可以傳入以下引數：
    - `element`
      - : 陣列中目前正在處理的元素。
    - `index`
      - : 陣列中目前正在處理的元素的索引。
    - `array`
      - : 呼叫 `find()` 的陣列。
- `thisArg` {{optional_inline}}
  - : 執行 `callbackFn` 時用作 `this` 的值。請參見[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。

### 回傳值

回傳第一個通過測試函式的陣列元素。否則回傳 {{jsxref("undefined")}}。

## 描述

`find()` 方法是一個[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)。它會以索引遞增順序對陣列中的每個元素執行一次所提供的 `callbackFn` 函式，直到 `callbackFn` 回傳一個[真](/zh-TW/docs/Glossary/Truthy)值。此時，`find()` 會回傳該元素並停止迭代陣列。若 `callbackFn` 未曾回傳真值，則 `find()` 會回傳 {{jsxref("undefined")}}。請參閱[迭代方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#迭代方法)部分以深入了解這些方法的運作方式。

`callbackFn` 會針對陣列中*每個*索引執行一次，不僅限於已被賦值的索引。[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)中的空槽會視為 `undefined`，行為將會相同。

`find()` 方法是[通用的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)。它只要求 `this` 具有 `length` 屬性以及整數鍵屬性即可。

## 範例

### 依物件屬性找出陣列中的某個物件

```js
const inventory = [
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

#### 使用箭頭函式與解構語法

```js
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
```

### 找出陣列中的第一個質數

下例會回傳陣列中第一個質數元素，若找不到質數則回傳 {{jsxref("undefined")}}。

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined，未找到
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

### 使用 callbackFn 的第三個引數

`array` 引數在你沒有另外的變數參照陣列時特別有用，能讓你存取陣列中其他的元素。以下例子中，我們先用 `filter()` 取出所有正數，再用 `find()` 找出第一個比其相鄰數值都小的數字。

```js
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const firstTrough = numbers
  .filter((num) => num > 0)
  .find((num, idx, arr) => {
    // 若沒有 arr 引數，就無法存取這個中介陣列，除非先儲存成變數。
    if (idx > 0 && num >= arr[idx - 1]) return false;
    if (idx < arr.length - 1 && num >= arr[idx + 1]) return false;
    return true;
  });
console.log(firstTrough); // 1
```

### 在稀疏陣列中使用 find()

稀疏陣列中的空槽*仍會*被訪問，並被視為與 `undefined` 相同。

```js
// 宣告在索引 2、3、4 處無元素的陣列
const array = [0, 1, , , , 5, 6];

// 顯示所有索引，包括未賦值的
array.find((value, index) => {
  console.log("訪問索引", index, "，值為", value);
  return false;
});
// 訪問索引 0 ，值為 0
// 訪問索引 1 ，值為 1
// 訪問索引 2 ，值為 undefined
// 訪問索引 3 ，值為 undefined
// 訪問索引 4 ，值為 undefined
// 訪問索引 5 ，值為 5
// 訪問索引 6 ，值為 6

// 顯示所有索引，包括被刪除的元素
array.find((value, index) => {
  // 在第一次迭代時刪除元素 5
  if (index === 0) {
    console.log("刪除 array[5]，值為", array[5]);
    delete array[5];
  }
  // 即使已刪除，索引 5 仍會被訪問
  console.log("訪問索引", index, "，值為", value);
  return false;
});
// 刪除 array[5]，值為 5
// 訪問索引 0 ，值為 0
// 訪問索引 1 ，值為 1
// 訪問索引 2 ，值為 undefined
// 訪問索引 3 ，值為 undefined
// 訪問索引 4 ，值為 undefined
// 訪問索引 5 ，值為 undefined
// 訪問索引 6 ，值為 6
```

### 對非陣列物件呼叫 find()

`find()` 方法會讀取 `this` 的 `length` 屬性，然後依據非負整數索引存取對應屬性。

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // 因為 -1 < 0，find() 會忽略
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// 7.3
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [在 `core-js` 中 `Array.prototype.find` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.find` 的 es-shims polyfill](https://www.npmjs.com/package/array.prototype.find)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("TypedArray.prototype.find()")}}
