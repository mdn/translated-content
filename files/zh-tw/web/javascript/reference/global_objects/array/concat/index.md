---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實例的 **`concat()`** 方法用於合併兩個或更多的陣列。此方法不會改變原有的陣列，而是返回一個新的陣列。

{{InteractiveExample("JavaScript Demo: Array.prototype.concat()", "shorter")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// 預期輸出：Array ["a", "b", "c", "d", "e", "f"]
```

## 語法

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### 參數

- `value1`, …, `valueN` {{optional_inline}}
  - : 要合併到新陣列的陣列和／或數值。如果省略了所有 `valueN` 參數，則 `concat` 會返回一個原陣列的[淺複製](/zh-TW/docs/Glossary/Shallow_copy)。更多詳情請參見下方描述。

### 回傳值

一個新的 {{jsxref("Array")}} 實例。

## 描述

`concat` 方法會創建一個新的陣列。該陣列首先會被初始化為呼叫此方法的物件中的元素。接著，對於每個引數，將其值合併到陣列中——對於普通物件或原始值，引數本身會成為最終陣列的一個元素；對於具有 [`Symbol.isConcatSpreadable`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) 屬性設為真值的陣列或類陣列物件，每個元素會被獨立地加入最終的陣列中。`concat` 方法不會遞迴處理巢狀陣列引數。

`concat()` 方法是[複製方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#複製方法與變異方法)。它不會改變 `this` 或任何作為引數傳入的陣列，而是返回一個[淺複製](/zh-TW/docs/Glossary/Shallow_copy)，該複製包含與原始陣列相同的元素。

如果任一個來源陣列是[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)，`concat()` 方法會保留空槽。

`concat()` 方法是[通用方法](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)。`this` 值的處理方式與其他引數相同（除了它會先被轉換為物件），意味著普通物件會被直接加到結果陣列的最前端，而具有 `[Symbol.isConcatSpreadable]` 為真值的類陣列物件則會被展開並加入結果陣列。

## 範例

### 合併兩個陣列

以下程式碼將兩個陣列合併：

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// 結果為 ['a', 'b', 'c', 1, 2, 3]
```

### 合併三個陣列

以下程式碼將三個陣列合併：

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// 結果為 [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 合併值到陣列中

以下程式碼將三個值合併到陣列中：

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// 結果為 ['a', 'b', 'c', 1, 2, 3]
```

### 合併巢狀陣列

以下程式碼將巢狀陣列合併，並示範引用的保留：

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// 結果為 [[1], 2, [3]]

// 修改 num1 的第一個元素
num1[0].push(4);

console.log(numbers);
// 結果為 [[1, 4], 2, [3]]
```

### 合併類陣列物件並使用 Symbol.isConcatSpreadable

`concat` 預設不會將所有類陣列物件當作陣列來處理——只有當 `Symbol.isConcatSpreadable` 被設定為真值（例如 `true`）時，才會如此處理。

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### 在稀疏陣列上使用 concat()

如果源陣列中有任何空位，則結果陣列也會是稀疏的：

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### 在非陣列物件上調用 concat()

如果 `this` 值不是陣列，則會將其轉換為物件並像處理 `concat()` 的其他引數一樣進行處理。在這種情況下，回傳值始終是新的陣列。

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // 被 concat() 忽略，因為 length 是 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Array.prototype.concat` 的 polyfill，包含修正和現代行為的實作，如 `Symbol.isConcatSpreadable` 的支援](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.concat` 的 es-shims polyfill](https://www.npmjs.com/package/array.prototype.concat)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
