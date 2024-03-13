---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

**`values()`** 方法會回傳一個包含陣列中的每一個索引之對應值（value）的新 **`Array Iterator`** 物件。

```js
var a = ["w", "y", "k", "o", "p"];
var iterator = a.values();

console.log(iterator.next().value); // w
console.log(iterator.next().value); // y
console.log(iterator.next().value); // k
console.log(iterator.next().value); // o
console.log(iterator.next().value); // p
```

## 語法

```js-nolint
arr.values()
```

### 回傳值

一個新的 {{jsxref("Array")}} 迭代器（iterator）物件。

## 範例

### 使用 for...of 迴圈進行迭代

```js
var arr = ["w", "y", "k", "o", "p"];
var iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
