---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
---

**`Number`** JavaScript 物件是允許你操作數值的包覆物件。`Number` 物件是以 `Number()` 建構子來建立的。

## 語法

```js-nolint
new Number(value)
```

### 參數

- `value`
  - : 用來建立物件的數值。

## 說明

`Number` 物件主要的用途：

- 如果參數沒辦法被轉換成數字，則它會回傳 {{jsxref("NaN")}} 。
- 在不是使用建構式的情境中(即不用 {{jsxref("Operators/new", "new")}} 運算子), `Number` 可以被用來轉換型別.

## 屬性

- {{jsxref("Number.EPSILON")}}
  - : 介於 1 和大於 1 的最小值之可表示的差。
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
  - : JavaScript 中 IEEE-754 雙精度範圍間的最大整數 (`2^53 - 1`) 。
- {{jsxref("Number.MAX_VALUE")}}
  - : 可表示的最大正整數。
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
  - : JavaScript 中 IEEE-754 雙精度範圍間的最小整數 (`-(2^53 - 1)`) 。
- {{jsxref("Number.MIN_VALUE")}}
  - : 可表示的最小值，即最靠近 0 的正整數?(`5.00×103245.00\times10^{324}`)。
- {{jsxref("Number.NaN")}}
  - : 特別用來表示**非數值**的物件。
- {{jsxref("Number.NEGATIVE_INFINITY")}}
  - : 特別用來表示**負無窮**的數值。
- {{jsxref("Number.POSITIVE_INFINITY")}}
  - : 特別用來表示**正無窮**的數值。
- {{jsxref("Number.prototype")}}
  - : 允許被添加到 `Number` 物件的屬性。

## 方法

- {{jsxref("Number.isNaN()")}}
  - : 判斷傳入的值是不是 NaN.
- {{jsxref("Number.isFinite()")}}
  - : 判斷傳入的值是不是一個有限的數值。
- {{jsxref("Number.isInteger()")}}
  - : 判斷傳入的值是不是一個整數。
- {{jsxref("Number.isSafeInteger()")}}
  - : 判斷傳入的值是不是在 IEEE-754 雙精度範圍間 (即介於 `-(2^53 - 1)` 和 `2^53 - 1`之前)。
- {{jsxref("Number.parseFloat()")}}
  - : 這個方法和全域物件的 {{jsxref("parseFloat", "parseFloat()")}} 相同。
- {{jsxref("Number.parseInt()")}}
  - : 這個方法和全域物件的 {{jsxref("parseInt", "parseInt()")}} 相同。

## `Number` 實體

所有 `Number` 實體都會繼承其建構式的 {{jsxref("Number.prototype")}}。`Number` 的原型物件可以被修改並作用在所有 `Number` 實體。

### 方法

- {{jsxref("Number.isNaN()")}}
  - : 判斷傳入的值是不是 NaN.
- {{jsxref("Number.isFinite()")}}
  - : 判斷傳入的值是不是一個有限的數值。
- {{jsxref("Number.isInteger()")}}
  - : 判斷傳入的值是不是一個整數。
- {{jsxref("Number.isSafeInteger()")}}
  - : 判斷傳入的值是不是在 IEEE-754 雙精度範圍間 (即介於 `-(2^53 - 1)` 和 `2^53 - 1`之前)。
- {{jsxref("Number.parseFloat()")}}
  - : 這個方法和全域物件的 {{jsxref("parseFloat", "parseFloat()")}} 相同。
- {{jsxref("Number.parseInt()")}}
  - : 這個方法和全域物件的 {{jsxref("parseInt", "parseInt()")}} 相同。

## 範例

### 使用 `Number` 物件去指派值給數值變數

下列的範例使用 `Number` 物件的屬性去指派值給數個數值變數：

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

### `Number` 的整數範圍

下面的範例展示了最小和最大的整數，其可以被表示成 `Number` 物件(細節請參考 ECMAScript standard, chapter _8.5 The Number Type_)：

```js
var biggestInt = 9007199254740992;
var smallestInt = -9007199254740992;
```

當在解析已經被序列化的 JSON 的資料時，填入這個範圍之外的整數並且 JSON 剖析器強制將其轉成 `Number` 型別造成損壞是可預期的。將範圍之外的正數換成以 {{jsxref("String")}} 表示反倒是一個可行的替代方案。

### 使用 `Number` 轉換 `Date` 物件為 Unix 時間戳記

下面的範例將 `Number` 視為函式，並且使用它將 {{jsxref("Date")}} 轉換成時間戳記：

```js
var d = new Date("December 17, 1995 03:24:00");
console.log(Number(d)); // 819199440000
```

### 轉換數值字串成數值

```js
Number("123"); // 123
Number("12.3"); // 12.3
Number(""); // 0
Number("0x11"); // 17
Number("0b11"); // 3
Number("0o11"); // 9
Number("foo"); // NaN
Number("100a"); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("NaN")}}
- The {{jsxref("Math")}} global object
