---
title: Array.prototype.pop()
slug: Web/JavaScript/Reference/Global_Objects/Array/pop
---

{{JSRef}}

**`pop()`** 方法會移除並回傳陣列的**最後一個**元素。此方法會改變陣列的長度。

{{InteractiveExample("JavaScript Demo: Array.pop()")}}

```js interactive-example
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## 語法

```plain
arr.pop()
```

### 回傳值

自陣列中移除的元素；若陣列為空，則為 {{jsxref("undefined")}}。

## 描述

`pop` 方法會移除陣列中的最後一個元素，並將該值回傳給呼叫者。

`pop` 方法被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "called", "", 1)}} 或 {{jsxref("Function.apply", "applied", "", 1)}} 應用於類似陣列的物件上。若欲應用此方法的物件不包含代表一系列啟始為零之數字屬性序列長度的 `length` 屬性，可能是不具任何意義的行為。

如果於空陣列呼叫 `pop()`，將會回傳 {{jsxref("undefined")}}。

## 範例

### 移除陣列的最後一個元素

下面的程式碼為一個包含四個元素的 `myFish` 陣列，接著移除此陣列的最後一個元素。

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.splice()")}}
