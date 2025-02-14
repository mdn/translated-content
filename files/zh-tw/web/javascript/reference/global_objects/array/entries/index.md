---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}

**`entries()`** 方法會回傳一個包含陣列中每一個索引之鍵值對（key/value pairs）的新陣列迭代器（**`Array Iterator`**）物件。

{{InteractiveExample("JavaScript Demo: Array.entries()")}}

```js interactive-example
const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);
// Expected output: Array [1, "b"]
```

## 語法

```js-nolint
entries()
```

### 回傳值

一個新的 {{jsxref("Array")}} 迭代器物件。

## 範例

### 使用 for...of 進行迭代

```js
var a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/zh-TW/docs/Web/JavaScript/Reference/Statements/for...of)
- [迭代協議](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)
