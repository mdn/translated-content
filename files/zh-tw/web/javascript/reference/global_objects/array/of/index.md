---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

**`Array.of()`** 方法會由引數（arguments）的數量來建立一個新的 `Array` 實體，而不管引數的數量或類型為何。

**`Array.of()`** 與 **`Array`** 建構式之間的不同在於如何處理整數引數：**`Array.of(7)`** 會建立一個擁有單個元素—`7`—的陣列，而 **`Array(7)`** 會建立一個 `length` 屬性值為 7 的空陣列（**註：**這意味著這個陣列有 7 個空缺欄位（empty slots），而非 7 個值為 `undefined` 的欄位）。

{{InteractiveExample("JavaScript Demo: Array.of()", "shorter")}}

```js interactive-example
console.log(Array.of("foo", 2, "bar", true));
// Expected output: Array ["foo", 2, "bar", true]

console.log(Array.of());
// Expected output: Array []
```

## 語法

```js-nolint
Array.of(element0)
Array.of(element0, element1)
Array.of(element0, element1, /* … ,*/ elementN)
```

### 參數

- `elementN`
  - : 要用來成為新建立之陣列的元素。

### 回傳值

一個新的 {{jsxref("Array")}} 實體。

## 描述

此函式是 ECMAScript 2015 標準的一部分。更多資訊可參考 [`Array.of` and `Array.from` proposal](https://gist.github.com/rwaldron/1074126) 以及 [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576)。

## 範例

### 使用 Array.of()

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### 在非陣列建構中使用 of()

可以在接受表示新陣列長度的單個參數的任何建構式上調用 `of()` 方法。

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

console.log(Array.of.call(NotArray, 1, 2, 3));
// NotArray called with length 3
// NotArray { '0': 1, '1': 2, '2': 3, length: 3 }

console.log(Array.of.call(Object)); // [Number: 0] { length: 0 }
```

When the `this` value is not a constructor, a plain `Array` object is returned.

```js
console.log(Array.of.call({}, 1)); // [ 1 ]
```

## Polyfill

若所有執行環境沒有原生支援，可以在其他程式之前先執行以下程式碼來建立 `Array.of()`。

```js
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Polyfill of `Array.of` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [`Array()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
