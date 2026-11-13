---
title: Date.prototype.valueOf()
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`valueOf()`** 方法會回傳此日期自[紀元](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（定義為 UTC 時間 1970 年 1 月 1 日午夜）以來的毫秒數。

{{InteractiveExample("JavaScript Demo: Date.prototype.valueOf()")}}

```js interactive-example
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// 預期輸出：823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// 預期輸出：823230245000
```

## 語法

```js-nolint
valueOf()
```

### 參數

無。

### 回傳值

一個數字，表示此日期的[時間戳](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)（以毫秒為單位）。如果日期[無效](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 描述

`valueOf()` 方法是[型別強制轉換協定](/zh-TW/docs/Web/JavaScript/Guide/Data_structures#型別強制轉換)的一部分。因為 `Date` 有一個 [`[Symbol.toPrimitive]()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) 方法，所以當 `Date` 物件被隱含地[強制轉換為數字](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)時，該方法總是優先於 `valueOf()`。然而，`Date.prototype[Symbol.toPrimitive]()` 內部仍然會呼叫 `this.valueOf()`。

{{jsxref("Date")}} 物件覆寫了 {{jsxref("Object")}} 的 {{jsxref("Object/valueOf", "valueOf()")}} 方法。`Date.prototype.valueOf()` 會回傳日期的時間戳，這在功能上等同於 {{jsxref("Date.prototype.getTime()")}} 方法。

## 範例

### 使用 valueOf()

```js
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
