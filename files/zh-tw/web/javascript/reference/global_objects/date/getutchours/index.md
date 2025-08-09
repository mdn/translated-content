---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{jsxref("Date")}} 實例的 **`getUTCHours()`** 方法會根據世界協調時間回傳此日期的的小時數。

{{InteractiveExample("JavaScript Demo: Date.prototype.getUTCHours()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// 預期輸出：12

console.log(date2.getUTCHours());
// 預期輸出：10
```

## 語法

```js-nolint
getUTCHours()
```

### 參數

無。

### 回傳值

一個介於 0 到 23 之間的整數，表示給定日期根據世界標準時間的小時。如果日期為[無效的](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date#紀元時間戳與無效日期)，則回傳 `NaN`。

## 範例

### 使用 getUTCHours()

以下範例將目前時間的小時部分指派給 `hours` 變數。

```js
const today = new Date();
const hours = today.getUTCHours();
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
