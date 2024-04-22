---
title: RangeError
slug: Web/JavaScript/Reference/Global_Objects/RangeError
---

{{JSRef}}

**`RangeError`**物件在一個給定的值不在允許的集合或範圍內時被作為一個錯誤拋出

## 語法

```js-nolint
new RangeError([message[, fileName[, lineNumber]]])
```

### 參數

- `message`
  - : 可選。具人類可讀性的錯誤說明
- `fileName` {{non-standard_inline}}
  - : 可選。包含造成錯誤發生的程式碼的檔案名稱
- `lineNumber` {{non-standard_inline}}
  - : 可選。造成錯誤發生的程式碼行號

## 說明

當試著往一個 function 傳入一個不被其允許的值作為參數時，一個`RangeError`被拋出。這可在多種情況遭遇到，例如傳入一個不被允許的字串值到 {{jsxref("String.prototype.normalize()")}}，或試著透過 {{jsxref("Array")}} constructor 用一個不合法的長度來創建一個陣列，或往數值方法像是{{jsxref("Number.toExponential()")}}、{{jsxref("Number.toFixed()")}}、{{jsxref("Number.toPrecision()")}} 傳進糟糕的值。

## 屬性

- {{jsxref("RangeError.prototype")}}
  - : 允許對一個 `RangeError` 物件增加其屬性。

## 方法

普遍的 `RangeError` 自身沒有包含方法，儘管他的確從原型鍊中繼承了一些。

## `RangeError` 物件實體

### 屬性

- {{jsxref("Error.prototype.message", "RangeError.prototype.message")}}
  - : Error message. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "RangeError.prototype.name")}}
  - : Error name. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "RangeError.prototype.cause")}}
  - : Error cause. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "RangeError.prototype.fileName")}} {{non-standard_inline}}
  - : Path to file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "RangeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Line number in file that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "RangeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Column number in line that raised this error. Inherited from {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "RangeError.prototype.stack")}} {{non-standard_inline}}
  - : Stack trace. Inherited from {{jsxref("Error")}}.

## 範例

### 使用 `RangeError`（數值）

```js
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error.
  }
}
```

### 使用 `RangeError`（非數值）

```js
function check(value) {
  if (["apple", "banana", "carrot"].includes(value) === false) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error.
  }
}
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Error")}}
- {{jsxref("RangeError.prototype")}}
- {{jsxref("Array")}}
- {{jsxref("Number.toExponential()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("Number.toPrecision()")}}
- {{jsxref("String.prototype.normalize()")}}
