---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Array")}} 實例的 **`entries()`** 方法會回傳一個新的[_陣列迭代器_](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Iterator)物件，其中包含陣列中每個索引的鍵／值對。

{{InteractiveExample("JavaScript Demo: Array.prototype.entries()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// 預期輸出：Array [0, "a"]

console.log(iterator1.next().value);
// 預期輸出：Array [1, "b"]
```

## 語法

```js-nolint
entries()
```

### 參數

無。

### 回傳值

一個新的[可迭代迭代器物件](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Iterator)。

## 描述

當 `entries()` 方法用於[稀疏陣列](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#稀疏陣列)時，它會將空槽視為 `undefined` 來進行迭代。

`entries()` 方法是[通用的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array#通用陣列方法)，它僅要求 `this` 物件具有 `length` 屬性及整數索引鍵屬性。

## 範例

### 使用索引與元素進行迭代

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### 使用 for...of 迴圈

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### 迭代稀疏陣列

`entries()` 方法會將空槽視為 `undefined` 來進行迭代。

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### 在非陣列物件上調用 entries()

`entries()` 方法會讀取 `this` 的 `length` 屬性，並存取所有鍵為非負整數且小於 `length` 的屬性。

```js
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // entries() 會忽略此屬性，因為 length 為 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [`core-js` 中 `Array.prototype.entries` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array.prototype.entries` 的 es-shims polyfill](https://www.npmjs.com/package/array.prototype.entries)
- [索引集合](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections)指南
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.entries()")}}
- [迭代協議](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)
