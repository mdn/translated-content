---
title: Array.prototype.shift()
slug: Web/JavaScript/Reference/Global_Objects/Array/shift
---

**`shift()`** 方法會移除並回傳陣列的**第一個**元素。此方法會改變陣列的長度。

{{InteractiveExample("JavaScript Demo: Array.shift()")}}

```js interactive-example
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1
```

## 語法

```js-nolint
arr.shift()
```

### 回傳值

自陣列中移除的元素；若陣列為空，則為 {{jsxref("undefined")}}。

## 描述

`shift` 方法會移除並回傳陣列中索引值為零之元素（即第一個元素），並將隨後的其他索引值減一。假如 {{jsxref("Array.length", "length")}} 屬性值為 0，則會回傳 {{jsxref("undefined")}}。

`shift` 方法被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "called", "", 1)}} 或 {{jsxref("Function.apply", "applied", "", 1)}} 應用於類似陣列的物件上。若欲應用此方法的物件不包含代表一系列啟始為零之數字屬性序列長度的 `length` 屬性，可能是不具任何意義的行為。

## 範例

### 自陣列中移除一個元素

以下的程式碼會印出 `myFish` 陣列在移除第一個元素之前跟之後的內容，也印出了被移除的元素：

```js
var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel
```

### 於 while 迴圈中使用 shift() 方法

`shift()` 方法常被用在 while 迴圈中的條件判斷。在下面的例子，每一次迭代都將會自陣列中移除下一個元素，直到陣列空了為止：

```js
var names = ["Andrew", "Edward", "Paul", "Chris", "John"];

while ((i = names.shift()) !== undefined) {
  console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
