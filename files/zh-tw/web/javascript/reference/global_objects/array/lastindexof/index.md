---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** 方法會回傳給定元素於陣列中最後一個被找到之索引，若不存在於陣列中則回傳 -1。搜尋的方向為由陣列尾部向後（即向前）尋找，啟始於 `fromIndex`。

{{InteractiveExample("JavaScript Demo: Array.lastIndexOf()")}}

```js interactive-example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
```

## 語法

```plain
arr.lastIndexOf(searchElement)
arr.lastIndexOf(searchElement, fromIndex)
```

### 參數

- `searchElement`
  - : 欲在陣列中搜尋的元素。
- `fromIndex` {{optional_inline}}
  - : 要由陣列尾部向後（即向前）搜尋的啟始索引。預設為陣列長度減一（`arr.length - 1`），即會搜尋整個陣列。假如索引大於等於陣列長度，會搜尋整個陣列。如果索引值為負數，會從陣列的最後一個往回算，最後一個的索引值為 -1，以此類推。注意：儘管往回算，但依然會從右往左全部搜尋。如果負數索引值在回頭計算之後仍然小於 0，將會回傳 -1，即不會搜尋陣列。

### 回傳值

在陣列中找到的最後一個元素索引值；沒找到則為 **-1**。

## 描述

`lastIndexOf` compares `searchElement` to elements of the Array using [strict equality](/zh-TW/docs/Web/JavaScript/Reference/Operators#using_the_equality_operators) (the same method used by the ===, or triple-equals, operator).

## 範例

### 使用 `lastIndexOf`

The following example uses `lastIndexOf` to locate values in an array.

```js
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

### 尋找該元素所有出現在陣列中的位置

The following example uses `lastIndexOf` to find all the indices of an element in a given array, using {{jsxref("Array.prototype.push", "push")}} to add them to another array as they are found.

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Note that we have to handle the case `idx == 0` separately here because the element will always be found regardless of the `fromIndex` parameter if it is the first element of the array. This is different from the {{jsxref("Array.prototype.indexOf", "indexOf")}} method.

## Polyfill

`lastIndexOf` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `lastIndexOf` in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}}, {{jsxref("TypeError")}}, {{jsxref("Number")}}, {{jsxref("Math.floor")}}, {{jsxref("Math.abs")}}, and {{jsxref("Math.min")}} have their original values.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.15
// Reference: http://es5.github.io/#x15.4.4.15
if (!Array.prototype.lastIndexOf) {
  Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
    "use strict";

    if (this === void 0 || this === null) {
      throw new TypeError();
    }

    var n,
      k,
      t = Object(this),
      len = t.length >>> 0;
    if (len === 0) {
      return -1;
    }

    n = len - 1;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) {
        n = 0;
      } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }

    for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n); k >= 0; k--) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  };
}
```

Again, note that this implementation aims for absolute compatibility with `lastIndexOf` in Firefox and the SpiderMonkey JavaScript engine, including in several cases which are arguably edge cases. If you intend to use this in real-world applications, you may be able to calculate `from` with less complicated code if you ignore those cases.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相容性備註

- Starting with Firefox 47, this method will no longer return `-0`. For example, `[0].lastIndexOf(0, -0)` will now always return `+0` ([Firefox bug 1242043](https://bugzil.la/1242043)).

## 參見

- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
