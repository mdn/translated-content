---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

**`entries()`** 方法回傳一個 `Iterator` 物件，其包含著一個由插入順序排序，`Set` 物件中每個元素的 **`[value, value]`** 陣列。儘管對 `Set` 物件來說沒有像 `Map` 一樣的 `key` 概念，為了確保這個 API 運作的與 `Map` 相似，每個 _entry_ 都有同樣的值同時作為其 _key_ 和 _value_ ，因此回傳的是一個 **`[value, value]`** 的陣列。

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

## 語法

```js-nolint
mySet.entries()
```

### 回傳值

一個新的 `Iterator` 物件，包含著一個由插入順序排序，`Set` 物件中每個元素的 **`[value, value]`** 陣列。

## 範例

### 使用 `entries()`

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
