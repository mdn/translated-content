---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
---

**`push()`** 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

{{InteractiveExample("JavaScript Demo: Array.push()")}}

```js interactive-example
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

## 語法

```js-nolint
arr.push(element1[, ...[, elementN]])
```

### 參數

- `elementN`
  - : 欲添加至陣列末端的元素。

### 回傳值

呼叫此方法之物件的新 {{jsxref("Array.length", "length")}} 屬性值。

## 描述

`push` 方法會將一或多個值加入至一個陣列中。

`push` 方法被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "call()")}} 或 {{jsxref("Function.apply", "apply()")}} 應用於類似陣列的物件上。`push` 方法憑借著物件的 `length` 屬性來判斷從何處開始插入給定的值。如果 `length` 屬性無法被轉為數字，則索引值會使用 0。這包括了 `length` 可能不存在的狀況，在這個情況下 `length` 屬性也將被建立於物件中。

唯一的原生類陣列（array-like）物件為{{jsxref("Global_Objects/String", "字串", "", 1)}}，但他們不適合用於此方法，因為字串是不可變的（immutable）。

## 範例

### 將複數個元素添加至陣列

以下的程式碼會建立含有兩個元素的陣列 `sports`，接著再增加兩個元素至陣列中。新的長度以變數 `total` 表示。

```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total); // 4
```

### 合併兩個陣列

這個範例使用 {{jsxref("Function.apply", "apply()")}} 自第二個陣列中增加所有的元素至第一個陣列。

如果第二個陣列（範例中的 `moreVegs`）非常大，就不要使用這個方法。因為一個函式能取得的參數之最大數量是受到實作限制的。詳細請參閱 {{jsxref("Function.apply", "apply()")}}。

```js
var vegetables = ["parsnip", "potato"];
var moreVegs = ["celery", "beetroot"];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

### 以類陣列（array-like）的方式操作物件

正如上面所提到的，`push` 被刻意設計為具通用性，我們可以善用這個優勢來處理物件。`Array.prototype.push` 可以在物件上運作良好，如本範例所示。請注意，我們不會建立一個陣列來儲存收集到的物件。相反地，我們將物件集合（collection）儲存於物件自己身上，並使用 `call` 來呼叫`Array.prototype.push` 使其認為我們正在處理一個陣列，讓方法可以繼續運作。感謝 JavaScript 允許我們使用這個方式去執行上下文。

```js
var obj = {
  length: 0,

  addElem: function addElem(elem) {
    // obj.length is automatically incremented
    // every time an element is added.
    [].push.call(this, elem);
  },
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

請注意雖然 `obj` 不是一個陣列，但 `push` 方法成功增加了 `obj` 的 `length` 屬性，就像我們在處理一個真正的陣列一樣。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
