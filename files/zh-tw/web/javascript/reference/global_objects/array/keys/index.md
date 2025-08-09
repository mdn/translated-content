---
title: Array.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
---

**`keys()`** 方法會回傳一個包含陣列中的每一個索引之鍵（keys）的新 **`Array Iterator`** 物件。

{{InteractiveExample("JavaScript Demo: Array.keys()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## 語法

```plain
arr.keys()
```

### 回傳值

一個新的 {{jsxref("Array")}} 迭代器（iterator）物件。

## 範例

### 鍵迭代器不會乎略陣列中的空元素

```js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.entries()")}}
- [迭代協議](/zh-TW/docs/Web/JavaScript/Reference/Iteration_protocols)
