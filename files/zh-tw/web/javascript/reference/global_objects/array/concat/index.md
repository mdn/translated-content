---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
---

{{JSRef}}

**`concat()`** 方法被用來合併兩個或多個陣列。此方法不會改變現有的陣列，回傳一個包含呼叫者陣列本身的值，作為代替的是回傳一個新陣列。

{{InteractiveExample("JavaScript Demo: Array.concat()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]
```

## 語法

```plain
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

### 參數

- `valueN`
  - : 陣列以及／或者值，用來合併成一個新的陣列。請參閱下方詳細資訊描述。

### 回傳值

一個新的{{jsxref("Array","陣列")}}實體。

## 描述

`concat` 產生一個由呼叫者陣列自己的元素，以及對每一個參數按照順序，合併參數的元素（如果參數是個陣列）或者是參數自己本身（如果參數不是一個陣列）成為一個新的陣列。`concat` 方法不會遞迴巢狀陣列參數。

`concat` 方法不會改變 `this` 自己本身或是任何被提供當做參數的陣列，取而代之則是回傳一個淺層複製（shallow copy）包含了與原始的陣列中一樣的元素的副本。原始陣列的元素被複製到新的陣列的規則如下所示：

- 物件參考（並非為實際的物件）：`concat` 複製物件的參考至新的陣列。不管是原始的還是新的陣列都參考到相同的物件。也就是說，如果一個被參照的物件被修改了，變動會同時反映到新的以及原始的陣列中。
- 資料型態為字串、數值或是布林（非 {{jsxref("Global_Objects/String", "String")}}、{{jsxref("Global_Objects/Number", "Number")}} 及 {{jsxref("Global_Objects/Boolean", "Boolean")}} 物件）：`concat` 複製字串及數值的值到新的陣列。

> [!NOTE]
> 合併（多個）陣列／（多個）值將讓原始的陣列不會被受到影響。此外，任何對新陣列（只有在元素不是物件參考的情況下）的操作都不會影響原始的陣列，反之亦然。

## 範例

### 合併兩個陣列

下面的程式碼為合併兩個陣列：

```js
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// 結果: ['a', 'b', 'c', 1, 2, 3]
```

### 合併三個陣列

下面的程式碼為合併三個陣列：

```js
var num1 = [1, 2, 3],
  num2 = [4, 5, 6],
  num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// 結果：[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 合併值到一個陣列

下面的程式碼為合併三個值到一個陣列中：

```js
var alpha = ["a", "b", "c"];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// 結果：['a', 'b', 'c', 1, 2, 3]
```

### 合併巢狀陣列

下面的程式碼為合併巢狀陣列，並證明保留了原本的參考（references）：

```js
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} — 從陣列的尾端加入/移除元素
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} — 從陣列的前端加入/移除元素
- {{jsxref("Array.splice", "splice")}} — 從陣列特定的位置加入/移除元素
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} – 控制扁平化
